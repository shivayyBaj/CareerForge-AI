import os
from crewai import Agent, Task, Crew, Process
from langchain_groq import ChatGroq

def get_startup_crew(idea: str):
    