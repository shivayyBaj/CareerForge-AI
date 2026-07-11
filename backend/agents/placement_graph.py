import os
from typing import TypedDict, Annotated, List
from langgraph.graph import StateGraph, END
from langchain_core.messages import HumanMessage, AIMessage
from langchain_groq import ChatGroq

class AgentState(TypedDict):
    messages: Annotated[List[str], "The messages in the conversation"]
    resume_text: str
    feedback: str

def analyze_resume(state: AgentState):
    llm = ChatGroq(api_key=os.getenv("GROQ_API_KEY"), model="llama-3.3-70b-versatile")
    resume = state.get("resume_text", "")
    
    prompt = f"Analyze this resume as an ATS Checker and HR Coach. Give strengths, weaknesses, and an interview roadmap:\n{resume}"
    response = llm.invoke(prompt)
    
    return {"feedback": response.content}

def mock_interview(state: AgentState):
    llm = ChatGroq(api_key=os.getenv("GROQ_API_KEY"), model="llama-3.3-70b-versatile")
    msgs = state.get("messages", [])
    
    prompt = "You are an HR and Technical Interviewer. Respond to the user's latest message and ask the next interview question."
    
    # Simple interaction for the prototype
    response = llm.invoke([{"role": "system", "content": prompt}] + msgs)
    
    return {"messages": [response]}

def get_placement_graph():
    workflow = StateGraph(AgentState)
    
    workflow.add_node("analyze_resume", analyze_resume)
    workflow.add_node("mock_interview", mock_interview)
    
    # Conditional logic or simple sequence can be added here
    # For now, it's a simple setup
    workflow.set_entry_point("analyze_resume")
    workflow.add_edge("analyze_resume", END)
    
    app = workflow.compile()
    return app
