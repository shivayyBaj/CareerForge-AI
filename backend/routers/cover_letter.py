import os
import json
import re
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage

router = APIRouter()

def get_llm():
    return ChatGroq(
        api_key=os.getenv("GROQ_API_KEY"),
        model="llama-3.3-70b-versatile",
        temperature=0.7,
    )

def parse_llm_json(text: str):
    text = text.strip()
    if "```json" in text:
        text = text.split("```json")[1].split("```")[0].strip()
    elif "```" in text:
        parts = text.split("```")
        if len(parts) >= 3:
            text = parts[1].strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(0))
        except json.JSONDecodeError:
            pass
    raise ValueError("Could not parse JSON from LLM response")

class GenerateCoverLetterRequest(BaseModel):
    resume_text: str
    job_title: str
    company_name: str
    job_description: str = ""
    hiring_manager: str = ""
    tone: str = "professional"
    candidate_name: str = ""

class ImproveCoverLetterRequest(BaseModel):
    current_letter: str
    instruction: str
    resume_text: str = ""
    job_title: str = ""
    company_name: str = ""

TONE_GUIDE = {
    "professional": "Polished, confident, and business-appropriate.",
    "enthusiastic": "Energetic and motivated while staying professional.",
    "formal": "Traditional and highly formal corporate tone.",
    "concise": "Direct and brief — every sentence earns its place.",
}

@router.post("/generate")
def generate_cover_letter(req: GenerateCoverLetterRequest):
    if not req.resume_text.strip():
        raise HTTPException(status_code=400, detail="Resume content is required.")
    if not req.job_title.strip() or not req.company_name.strip():
        raise HTTPException(status_code=400, detail="Job title and company name are required.")

    llm = get_llm()
    tone = TONE_GUIDE.get(req.tone, TONE_GUIDE["professional"])
    greeting = f"Dear {req.hiring_manager}," if req.hiring_manager.strip() else "Dear Hiring Manager,"

    prompt = f"""You are an expert career coach and professional cover letter writer.

Write a tailored cover letter for this job application.

CANDIDATE RESUME:
{req.resume_text[:5000]}

JOB DETAILS:
- Target Role: {req.job_title}
- Company: {req.company_name}
- Hiring Manager: {req.hiring_manager or "Not specified"}
- Job Description: {req.job_description[:3000] or "Not provided — infer from role and company context"}

TONE: {tone}
Preferred greeting: {greeting}

Respond ONLY with valid JSON in this exact format:
{{
  "greeting": "<salutation line>",
  "opening": "<1-2 compelling opening paragraphs>",
  "body": "<1-2 paragraphs connecting experience to role requirements>",
  "closing": "<closing paragraph with call to action>",
  "signature": "<sign-off with candidate name>",
  "fullLetter": "<complete cover letter as one formatted text block with paragraph breaks>",
  "highlights": ["<key strength tied to job 1>", "<key strength 2>", "<key strength 3>"],
  "tips": ["<optional tip for the candidate>"]
}}

Rules:
- Reference specific skills and achievements from the resume — never invent credentials.
- Match language to the job description when provided.
- Keep total length to 3-4 short paragraphs (250-400 words).
- Do not use markdown in fullLetter — plain text with blank lines between paragraphs.
- Use the candidate's name from the resume if available."""

    response = llm.invoke([HumanMessage(content=prompt)])

    try:
        result = parse_llm_json(response.content)
        if not result.get("fullLetter"):
            parts = [
                result.get("greeting", ""),
                result.get("opening", ""),
                result.get("body", ""),
                result.get("closing", ""),
                result.get("signature", ""),
            ]
            result["fullLetter"] = "\n\n".join(p for p in parts if p)
        return result
    except ValueError:
        return {
            "greeting": greeting,
            "opening": "",
            "body": "",
            "closing": "",
            "signature": "",
            "fullLetter": response.content.strip(),
            "highlights": [],
            "tips": [],
        }


@router.post("/improve")
def improve_cover_letter(req: ImproveCoverLetterRequest):
    if not req.current_letter.strip():
        raise HTTPException(status_code=400, detail="Cover letter content is required.")
    if not req.instruction.strip():
        raise HTTPException(status_code=400, detail="Improvement instruction is required.")

    llm = get_llm()

    context = ""
    if req.resume_text:
        context += f"\nResume:\n{req.resume_text[:2000]}"
    if req.job_title:
        context += f"\nRole: {req.job_title} at {req.company_name or 'the company'}"

    prompt = f"""You are a professional cover letter editor.

Current cover letter:
{req.current_letter}

Improvement request: {req.instruction}
{context}

Respond ONLY with valid JSON:
{{
  "fullLetter": "<revised complete cover letter>",
  "changesSummary": "<1-2 sentences describing what you changed>"
}}"""

    response = llm.invoke([HumanMessage(content=prompt)])

    try:
        return parse_llm_json(response.content)
    except ValueError:
        return {
            "fullLetter": response.content.strip(),
            "changesSummary": "Letter updated based on your request.",
        }
