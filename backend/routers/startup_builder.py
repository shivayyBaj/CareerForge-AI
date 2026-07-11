import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage

router = APIRouter()

def get_llm():
    return ChatGroq(
        api_key=os.getenv("GROQ_API_KEY"),
        model="llama-3.3-70b-versatile",
        temperature=0.8,
    )

class StartupRequest(BaseModel):
    idea: str

@router.post("/build")
def build_startup(req: StartupRequest):
    """
    Run a multi-step AI workflow to build a startup blueprint.
    Returns vision, market research, business model, and pitch deck.
    """
    if not req.idea.strip():
        raise HTTPException(status_code=400, detail="Startup idea cannot be empty.")

    llm = get_llm()
    idea = req.idea

    # --- Step 1: Vision ---
    vision_prompt = f"""You are a Chief Visionary Officer. Expand on this startup idea: "{idea}".
Write a compelling 2-paragraph vision statement and core value proposition.
Be specific, inspiring, and concise. Format as plain text."""

    vision_response = llm.invoke([HumanMessage(content=vision_prompt)])
    vision = vision_response.content

    # --- Step 2: Market Research ---
    research_prompt = f"""You are a Market Research Analyst. Based on this startup vision:
{vision}

Provide a detailed market research report with:
- **Target Audience**: Who are they? Demographics, psychographics.
- **Market Size**: Estimated TAM/SAM/SOM.
- **Top 3 Competitors**: Name, strengths, and weaknesses of each.
- **Key Trends**: 2-3 relevant market trends.

Format with clear markdown headers."""

    research_response = llm.invoke([HumanMessage(content=research_prompt)])
    research = research_response.content

    # --- Step 3: Business Model ---
    business_prompt = f"""You are a Business Strategist. Based on this vision and market research:

Vision: {vision[:500]}
Market: {research[:500]}

Create a comprehensive business strategy with:
- **Revenue Streams**: How will the startup make money?
- **Cost Structure**: Key expenses.
- **Key Partnerships**: Who to partner with?
- **Competitive Advantage**: What makes this unique?
- **Go-to-Market Strategy**: How to acquire first 100 customers?

Format with clear markdown headers."""

    business_response = llm.invoke([HumanMessage(content=business_prompt)])
    business = business_response.content

    # --- Step 4: Pitch Deck ---
    pitch_prompt = f"""You are the Chief Visionary Officer presenting to investors. Create a 6-slide pitch deck outline:

Slide 1: Problem
Slide 2: Solution (our startup)
Slide 3: Market Opportunity
Slide 4: Business Model
Slide 5: Traction & Roadmap
Slide 6: Ask (What we need from investors)

Base it on: {idea}

Format each slide with a bold title and 3-4 bullet points."""

    pitch_response = llm.invoke([HumanMessage(content=pitch_prompt)])
    pitch = pitch_response.content

    return {
        "status": "success",
        "vision": vision,
        "research": research,
        "businessModel": business,
        "pitchDeck": pitch,
    }
