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

    