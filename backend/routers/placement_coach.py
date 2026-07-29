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

class AnalyzeInterviewRequest(BaseModel):
    history: List[ChatMessage]
    resume_text: str
    job_title: str


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
- Do NOT repeat questions you've already asked.
- CRITICAL: If the candidate replies with random gibberish, irrelevant text, or complete nonsense, professionally call them out on it. Remind them this is a mock interview, do NOT provide positive feedback for nonsense, and ask them to answer the previous question seriously."""

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
- CRITICAL: If the candidate gave responses that were mostly random gibberish, nonsense, or completely irrelevant, their `overallScore` and `communication` score should be severely penalized (e.g., F grade, No Hire).
- Do not include any text outside the JSON block."""

    response = llm.invoke([HumanMessage(content=prompt)])
    text = response.content.strip()

    result = parse_llm_json(text)
    if result and isinstance(result, dict) and "overallScore" in result:
        return result

    raise HTTPException(status_code=500, detail=f"Failed to parse AI scorecard response: {text[:200]}")
