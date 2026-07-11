import json
import os
import time
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv

load_dotenv()

JS_FILE_PATH = r"d:\ResumeForge\src\placement-coach\dsaQuestions.js"

def main():
    llm = ChatGroq(
        api_key=os.getenv("GROQ_API_KEY"),
        model="llama-3.3-70b-versatile",
        temperature=0.1,
    )

    with open(JS_FILE_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Strip JS export stuff
    prefix = "// AUTO-GENERATED NEETCODE 150 QUESTIONS DATABASE\nexport const DSA_QUESTIONS = "
    if not content.startswith(prefix):
        prefix = "export const DSA_QUESTIONS = "
        
    suffix = "];\n\nexport const LANGUAGES = ["
    if suffix in content:
        json_str, rest = content[len(prefix):].split("];\n\nexport const LANGUAGES = [", 1)
        json_str += "]"
        suffix_content = "\n\nexport const LANGUAGES = [" + rest
    else:
        json_str = content[len(prefix):].strip()
        if json_str.endswith(";"):
            json_str = json_str[:-1]
        suffix_content = ""

    try:
        questions = json.loads(json_str)
    except json.JSONDecodeError as e:
        print("Failed to decode JSON:", e)
        return

    print(f"Loaded {len(questions)} questions.")

    # Process first 5 incomplete questions as a test (or all if we want)
    # To avoid rate limits, we'll process 10 questions in this batch
    processed_count = 0
    for q in questions:
        if processed_count >= 10:
            break
            
        if "Implement the algorithm for" in q.get("description", "") or not q.get("testCases"):
            print(f"Populating data for {q['title']}...")
            
            prompt = f"""
You are generating data for a LeetCode clone.
Provide the description, examples, constraints, function name, starter code (in python, javascript, java, cpp), and 3 accurate testcases for the problem: {q['title']}.
Topic: {q['topic']}

Respond ONLY with valid JSON in exactly this format:
{{
  "description": "<full problem description like on LeetCode>",
  "examples": [
    {{
      "input": "<string representation of input>",
      "output": "<string representation of output>",
      "explanation": "<optional explanation>"
    }}
  ],
  "constraints": [
    "<constraint 1>",
    "<constraint 2>"
  ],
  "functionName": "<snake_case_function_name>",
  "starterCode": {{
    "python": "def function_name(args):\\n    pass",
    "javascript": "function functionName(args) {{\\n}}",
    "java": "class Solution {{\\n    public int functionName(int args) {{\\n        return 0;\\n    }}\\n}}",
    "cpp": "class Solution {{\\npublic:\\n    int functionName(int args) {{\\n        return 0;\\n    }}\\n}};"
  }},
  "testCases": [
    {{
      "args": {{"arg1": <value>, "arg2": <value>}},
      "expected": <value>
    }}
  ]
}}
Do NOT include markdown fences, just pure JSON.
"""
            try:
                res = llm.invoke([HumanMessage(content=prompt)]).content.strip()
                if res.startswith("```json"):
                    res = res[7:-3].strip()
                elif res.startswith("```"):
                    res = res[3:-3].strip()
                    
                data = json.loads(res)
                
                # Update the question object
                q["description"] = data.get("description", q["description"])
                q["examples"] = data.get("examples", q["examples"])
                q["constraints"] = data.get("constraints", q["constraints"])
                q["functionName"] = data.get("functionName", q["functionName"])
                q["starterCode"] = data.get("starterCode", q["starterCode"])
                q["testCases"] = data.get("testCases", q["testCases"])
                
                processed_count += 1
                time.sleep(2) # rate limit pause
            except Exception as e:
                print(f"Error processing {q['title']}: {e}")

    # Write back
    new_content = prefix + json.dumps(questions, indent=2) + suffix_content
    with open(JS_FILE_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print(f"Successfully updated {processed_count} questions.")

if __name__ == "__main__":
    main()
