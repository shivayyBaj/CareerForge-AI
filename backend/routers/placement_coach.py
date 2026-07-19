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

    