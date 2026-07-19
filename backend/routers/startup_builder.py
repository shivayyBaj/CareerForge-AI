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

    try:
        # Generate Research
        research_prompt = f"Analyze the market, competitors, and potential audience for this startup idea: '{idea}'. Be structured."
        research_response = llm.invoke([HumanMessage(content=research_prompt)])
        research = research_response.content

        # Generate Business Model
        business_prompt = f"Create a business model canvas (revenue streams, cost structure, key partners, etc.) for this idea: '{idea}'. Be structured."
        business_response = llm.invoke([HumanMessage(content=business_prompt)])
        business_model = business_response.content

        # Generate Pitch Deck
        pitch_prompt = f"Write an outline for a pitch deck (problem, solution, market size, traction, team) for this idea: '{idea}'."
        pitch_response = llm.invoke([HumanMessage(content=pitch_prompt)])
        pitch_deck = pitch_response.content

        return {
            "research": research,
            "businessModel": business_model,
            "pitchDeck": pitch_deck
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate startup build: {str(e)}")