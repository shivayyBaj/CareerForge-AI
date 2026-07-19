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

    