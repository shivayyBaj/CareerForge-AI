import os
import json
import shutil
import tempfile
import subprocess
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Any
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, SystemMessage

router = APIRouter()

def get_llm():
    """Fast LLM for chat/conversational endpoints."""
    return ChatGroq(
        api_key=os.getenv("GROQ_API_KEY"),
        model="llama-3.1-8b-instant",
        temperature=0.7,
    )

def get_json_llm():
    """Larger, more reliable model for structured JSON endpoints."""
    return ChatGroq(
        api_key=os.getenv("GROQ_API_KEY"),
        model="llama-3.3-70b-versatile",
        temperature=0.3,
    )

def parse_llm_json(text: str):
    """
    Robustly extract a JSON object from an LLM response.

    Handles:
    - Plain JSON
    - JSON wrapped in ```json ... ``` or ``` ... ``` fences
    - JSON extracted via regex when surrounded by prose
    """
    import re
    text = text.strip()

    # 1. Strip markdown code fences
    if "```json" in text:
        text = text.split("```json")[1].split("```")[0].strip()
    elif "```" in text:
        # Get content between the first and second ```
        parts = text.split("```")
        if len(parts) >= 3:
            text = parts[1].strip()

    # 2. Try to parse as-is
    try:
        return json.loads(text)
    except (json.JSONDecodeError, ValueError):
        pass

    # 3. Extract the first {...} block via regex (greedy to capture nested braces)
    # This pattern finds the outermost JSON object.
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(0))
        except (json.JSONDecodeError, ValueError):
            pass

    # 4. As a last resort, try to locate a JSON object by balancing braces
    # Simple heuristic: find the first '{' and the last '}' in the text.
    if text.count('{') and text.count('}'):
        start = text.find('{')
        end = text.rfind('}') + 1
        candidate = text[start:end]
        try:
            return json.loads(candidate)
        except (json.JSONDecodeError, ValueError):
            pass

    # 5. Give up — return None so callers can handle
    return None

# ---- Request Models ----

class AnalyzeRequest(BaseModel):
    resume_text: str
    job_title: str

class ChatMessage(BaseModel):
    role: str  # "user" or "ai"
    content: str

class ChatRequest(BaseModel):
    resume_text: str
    job_title: str
    history: List[ChatMessage]
    message: str

class ExecuteCodeRequest(BaseModel):
    language: str
    code: str

class VerifyCodeRequest(BaseModel):
    problem_title: str
    problem_description: str
    constraints: List[str]
    examples: List[Any]
    language: str
    user_code: str
    terminal_output: str = ""
    test_results: Optional[dict] = None
    job_title: str = ""

class GetSolutionRequest(BaseModel):
    problem_title: str
    problem_description: str
    constraints: List[str]
    examples: List[Any]
    language: str
    topic: str = ""
    starter_code: str = ""
    function_name: str = ""
    user_code: str = ""

class AnalyzeInterviewRequest(BaseModel):
    history: List[ChatMessage]
    resume_text: str
    job_title: str

SUPPORTED_LANGUAGES = {"python", "javascript", "java", "cpp"}

# ---- Endpoints ----

@router.post("/analyze")
def analyze_resume(req: AnalyzeRequest):
    """
    Analyze a resume against a target job title.
    Returns ATS score, strengths, weaknesses, and career roadmap.
    """
    if not req.resume_text.strip():
        raise HTTPException(status_code=400, detail="Resume text cannot be empty.")

    llm = get_llm()

    prompt = f"""You are an expert ATS (Applicant Tracking System) analyzer and HR Career Coach.
Analyze the following resume for the target job title: "{req.job_title}".

Resume:
{req.resume_text[:4000]}

Respond ONLY with valid JSON in this exact format:
{{
  "atsScore": <integer 0-100>,
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "roadmap": [
    "Step 1: ...",
    "Step 2: ...",
    "Step 3: ...",
    "Step 4: ..."
  ]
}}

Do not include any text outside the JSON block."""

    response = llm.invoke([HumanMessage(content=prompt)])
    text = response.content.strip()

    # Extract JSON from the response
    try:
        # Handle markdown code blocks
        if "```json" in text:
            text = text.split("```json")[1].split("```")[0].strip()
        elif "```" in text:
            text = text.split("```")[1].split("```")[0].strip()

        result = json.loads(text)
        return result
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail=f"Failed to parse AI response: {text[:200]}")


@router.post("/chat")
def chat_with_coach(req: ChatRequest):
    """
    Conduct a mock interview turn.
    Returns the AI interviewer's response.
    """
    llm = get_llm()

    system_prompt = f"""You are a professional HR and Technical Interviewer conducting a mock job interview for the role of "{req.job_title}".

The candidate's resume summary:
{req.resume_text[:1500]}

Rules:
- Be professional, encouraging, and constructive.
- Ask ONE focused question at a time.
- Give brief feedback on the candidate's last answer before asking the next question.
- Keep responses concise (2-4 sentences max).
- Vary your questions: technical skills, behavioral (STAR method), situational, and culture-fit.
- Do NOT repeat questions you've already asked."""

    messages = [SystemMessage(content=system_prompt)]
    for msg in req.history:
        if msg.role == "user":
            messages.append(HumanMessage(content=msg.content))
        else:
            from langchain_core.messages import AIMessage
            messages.append(AIMessage(content=msg.content))

    messages.append(HumanMessage(content=req.message))

    response = llm.invoke(messages)
    return {"reply": response.content}


@router.post("/execute-code")
async def execute_code(req: ExecuteCodeRequest):
    """Compile and run user code locally using installed language runtimes."""
    if req.language not in SUPPORTED_LANGUAGES:
        raise HTTPException(status_code=400, detail=f"Unsupported language: {req.language}")

    tmp_dir = tempfile.mkdtemp(prefix="cf_")
    env = {**os.environ, "PYTHONUTF8": "1", "PYTHONIOENCODING": "utf-8"}
    try:
        if req.language == "python":
            src = os.path.join(tmp_dir, "solution.py")
            with open(src, "w", encoding="utf-8") as f:
                f.write(req.code)
            result = subprocess.run(
                ["python", "-X", "utf8", src],
                capture_output=True, text=True, encoding="utf-8",
                timeout=10, env=env
            )
            return {
                "run": {
                    "stdout": result.stdout,
                    "stderr": result.stderr,
                    "code": result.returncode,
                }
            }

        elif req.language == "javascript":
            src = os.path.join(tmp_dir, "solution.js")
            with open(src, "w", encoding="utf-8") as f:
                f.write(req.code)
            result = subprocess.run(
                ["node", src],
                capture_output=True, text=True, encoding="utf-8",
                timeout=10, env=env
            )
            return {
                "run": {
                    "stdout": result.stdout,
                    "stderr": result.stderr,
                    "code": result.returncode,
                }
            }

        elif req.language == "java":
            src = os.path.join(tmp_dir, "Main.java")
            with open(src, "w", encoding="utf-8") as f:
                f.write(req.code)
            # Compile phase
            compile_result = subprocess.run(
                ["javac", "-encoding", "UTF-8", src],
                capture_output=True, text=True, encoding="utf-8",
                timeout=15, env=env
            )
            if compile_result.returncode != 0:
                return {
                    "compile": {
                        "stdout": compile_result.stdout,
                        "stderr": compile_result.stderr,
                        "code": compile_result.returncode,
                    },
                    "run": {
                        "stdout": "",
                        "stderr": "",
                        "code": compile_result.returncode,
                    }
                }
            # Run phase — pass file.encoding=UTF-8 to JVM
            run_result = subprocess.run(
                ["java", "-cp", tmp_dir, "-Dfile.encoding=UTF-8", "-Dstdout.encoding=UTF-8", "Main"],
                capture_output=True, text=True, encoding="utf-8",
                timeout=10, env=env
            )
            return {
                "compile": {
                    "stdout": compile_result.stdout,
                    "stderr": compile_result.stderr,
                    "code": 0,
                },
                "run": {
                    "stdout": run_result.stdout,
                    "stderr": run_result.stderr,
                    "code": run_result.returncode,
                }
            }

        elif req.language == "cpp":
            src = os.path.join(tmp_dir, "sol.cpp")
            out = os.path.join(tmp_dir, "sol.exe")
            with open(src, "w", encoding="utf-8") as f:
                f.write(req.code)
            # Compile phase
            compile_result = subprocess.run(
                ["g++", "-o", out, src, "-std=c++17", "-O2"],
                capture_output=True, text=True, encoding="utf-8",
                timeout=20, env=env, cwd=tmp_dir
            )
            if compile_result.returncode != 0:
                return {
                    "compile": {
                        "stdout": compile_result.stdout,
                        "stderr": compile_result.stderr,
                        "code": compile_result.returncode,
                    },
                    "run": {
                        "stdout": "",
                        "stderr": "",
                        "code": compile_result.returncode,
                    }
                }
            # Run phase
            run_result = subprocess.run(
                [out],
                capture_output=True, text=True, encoding="utf-8",
                timeout=10, env=env, cwd=tmp_dir
            )
            return {
                "compile": {
                    "stdout": compile_result.stdout,
                    "stderr": compile_result.stderr,
                    "code": 0,
                },
                "run": {
                    "stdout": run_result.stdout,
                    "stderr": run_result.stderr,
                    "code": run_result.returncode,
                }
            }

    except subprocess.TimeoutExpired:
        return {
            "run": {
                "stdout": "",
                "stderr": "Execution timed out (10s limit).",
                "code": 124,
            }
        }
    except FileNotFoundError as e:
        return {
            "run": {
                "stdout": "",
                "stderr": f"Execution failed: The compiler or runtime for {req.language} is not installed or not in your system PATH.\nPlease install it to run {req.language} code.",
                "code": 1,
            }
        }
    except Exception as e:
        return {
            "run": {
                "stdout": "",
                "stderr": f"Execution failed: {str(e)}",
                "code": 1,
            }
        }
    finally:
        try:
            shutil.rmtree(tmp_dir, ignore_errors=True)
        except Exception:
            pass


@router.post("/verify-code")
def verify_code(req: VerifyCodeRequest):
    """AI-powered code review: verify correctness, find errors, and suggest fixes."""
    llm = get_json_llm()

    test_summary = ""
    if req.test_results:
        test_summary = (
            f"Test results: {req.test_results.get('passed', 0)}/{req.test_results.get('total', 0)} passed. "
            f"All passed: {req.test_results.get('allPassed', False)}"
        )

    job_context = f"\nTarget role: {req.job_title}" if req.job_title else ""

    prompt = f"""You are an expert DSA interviewer and coding mentor reviewing a student's solution.

Problem: {req.problem_title}
Description: {req.problem_description}
Constraints: {', '.join(req.constraints)}
Examples: {json.dumps(req.examples)}
Language: {req.language}{job_context}

Student's code:
```
{req.user_code}
```

Terminal output from test run:
```
{req.terminal_output[:2000]}
```
{test_summary}

Analyze the code thoroughly. Respond ONLY with valid JSON in this exact format:
{{
  "isCorrect": <boolean - true only if the solution is fully correct and efficient>,
  "feedback": "<2-3 sentence overall assessment>",
  "errors": ["<specific bug or logic error 1>", "<error 2>"],
  "explanation": "<step-by-step explanation of the optimal approach>",
  "hints": ["<hint 1 if student should try themselves>", "<hint 2>"],
  "correctedCode": "<complete corrected solution in {req.language}, or null if already correct>"
}}

Rules:
- If code is correct, set correctedCode to null and isCorrect to true.
- If code has bugs, provide the full working correctedCode.
- You MUST preserve the exact function name and class name. However, if the student's code or starter code uses generic varargs signatures (like *args, ...args, or Object... args), you MUST change the signature to use standard, descriptive, and strongly-typed parameters (e.g. def coin_change(coins, amount): or public int coinChange(int[] coins, int amount)) matching the problem description.
- Keep correctedCode in the same language as the submission.
- Include helpful inline comments in correctedCode. There must be at least two spaces before any inline comment to keep it clean and readable.
- Do not include markdown code fences inside correctedCode.
- Output ONLY the JSON object. No prose before or after."""

    response = llm.invoke([HumanMessage(content=prompt)])
    text = response.content.strip()

    result = parse_llm_json(text)
    if result and isinstance(result, dict) and "isCorrect" in result:
        return result

    # Fallback: return raw feedback so the UI shows something useful
    return {
        "isCorrect": False,
        "feedback": text[:600] if text else "AI review failed to parse. Please try again.",
        "errors": [],
        "explanation": "",
        "hints": [],
        "correctedCode": None,
    }


@router.post("/get-solution")
def get_solution(req: GetSolutionRequest):
    """Generate a complete, explained AI solution for a DSA problem."""
    llm = get_json_llm()

    topic_context = f"\nTopic/Category: {req.topic}" if req.topic else ""

    prompt = f"""You are an expert competitive programmer and DSA coach. Generate the BEST, most optimal solution for the following problem.

Problem: {req.problem_title}
Description: {req.problem_description}
Constraints: {', '.join(req.constraints)}{topic_context}
Examples: {json.dumps(req.examples[:2])}
Language requested: {req.language}
Starter Code / Required Interface:
{req.starter_code}
Expected Function/Method Name: {req.function_name}
User's Current Code (may contain errors or be incomplete):
{req.user_code}

Generate a complete, well-commented solution. Respond ONLY with valid JSON in this EXACT format:
{{
  "approach": "<clear 3-5 sentence explanation of the algorithm/data structure used and WHY it's optimal>",
  "timeComplexity": "<Big-O time complexity e.g. O(n), O(n log n), O(n²)>",
  "spaceComplexity": "<Big-O space complexity e.g. O(1), O(n)>",
  "keyInsights": [
    "<insight 1: the key observation or trick that makes this approach work>",
    "<insight 2: common pitfall to avoid>",
    "<insight 3: why naive approach fails>"
  ],
  "solutionCode": "<complete, clean, working solution in {req.language} with inline comments — NO markdown fences>",
  "walkthrough": "<step-by-step trace through Example 1 showing how the algorithm processes the input and produces the output>",
  "codeReview": {{
    "isCorrect": <boolean - true only if the user's code is fully correct and efficient, false otherwise>,
    "feedback": "<2-3 sentence overall assessment of the user's code>",
    "errors": ["<specific bug or logic error in user's code>", "<error 2>"],
    "hints": ["<hint 1 to guide the student>", "<hint 2>"],
    "correctedCode": "<complete corrected version of the user's code, or null if it is already correct>"
  }}
}}

Rules:
- solutionCode must be complete, runnable {req.language} code without markdown code fences (no backticks).
- You MUST use the exact class name and function name provided. If the Starter Code uses generic varargs signatures like *args, ...args, or Object... args, you MUST replace them with standard, descriptive, strongly-typed parameters (e.g. def coin_change(coins, amount): or public int coinChange(int[] coins, int amount)) matching the problem description.
- Ensure the code compiles and runs successfully within the required interface.
- Include helpful inline comments in the code. There must be at least two spaces before any inline comment (e.g. `x = 5  # comment` in Python or `int x = 5;  // comment` in Java/C++/JS) to keep it clean and readable.
- keyInsights should contain exactly 3 items.
- walkthrough should trace through the first example step by step.
- The `codeReview` object is mandatory. Review the User's Current Code (if provided). If the User's Current Code is empty or just the starter code, state that in the feedback and set isCorrect to false.
- Do not include markdown code fences inside `correctedCode`.
- Output ONLY the JSON object. No prose before or after."""

    response = llm.invoke([HumanMessage(content=prompt)])
    text = response.content.strip()

    result = parse_llm_json(text)
    if result and isinstance(result, dict) and "approach" in result:
        return result

    return {
        "approach": f"AI generated a solution but it could not be parsed. Raw output: {text[:300]}",
        "timeComplexity": "N/A",
        "spaceComplexity": "N/A",
        "keyInsights": [],
        "solutionCode": "",
        "walkthrough": "",
    }


@router.post("/analyze-interview")
def analyze_interview(req: AnalyzeInterviewRequest):
    """Analyze a completed mock interview and return a detailed scorecard."""
    llm = get_json_llm()

    # Format the conversation history into a readable transcript
    transcript_lines = []
    for msg in req.history:
        speaker = "Candidate" if msg.role == "user" else "Interviewer"
        transcript_lines.append(f"{speaker}: {msg.content}")
    transcript = "\n".join(transcript_lines)

    prompt = f"""You are a senior hiring manager reviewing a completed mock interview transcript.

Job Title: "{req.job_title}"

Resume Summary:
{req.resume_text[:1500]}

Interview Transcript:
{transcript[:6000]}

Analyze the candidate's performance throughout the interview. Respond ONLY with valid JSON in this exact format:
{{
  "overallScore": <integer 0-100>,
  "grade": "<one of: A, B, C, D, F>",
  "verdict": "<one of: Strong Hire, Hire, No Hire, Strong No Hire>",
  "summary": "<2-3 sentence overall summary of the candidate's performance>",
  "strengths": [
    {{"title": "<strength title>", "detail": "<1-2 sentence explanation with reference to what they said>"}},
    {{"title": "<strength title>", "detail": "<detail>"}},
    {{"title": "<strength title>", "detail": "<detail>"}}
  ],
  "improvements": [
    {{"title": "<area to improve>", "detail": "<specific, actionable advice>"}},
    {{"title": "<area to improve>", "detail": "<detail>"}},
    {{"title": "<area to improve>", "detail": "<detail>"}}
  ],
  "categoryScores": {{
    "communication": <integer 0-100>,
    "technicalKnowledge": <integer 0-100>,
    "problemSolving": <integer 0-100>,
    "cultureFit": <integer 0-100>
  }}
}}

Rules:
- Be objective and evidence-based, referencing specific answers from the transcript.
- Strengths and improvements must contain exactly 3 items each.
- Do not include any text outside the JSON block."""

    response = llm.invoke([HumanMessage(content=prompt)])
    text = response.content.strip()

    result = parse_llm_json(text)
    if result and isinstance(result, dict) and "overallScore" in result:
        return result

    raise HTTPException(status_code=500, detail=f"Failed to parse AI scorecard response: {text[:200]}")
