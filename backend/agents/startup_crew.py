import os
from crewai import Agent, Task, Crew, Process
from langchain_groq import ChatGroq

def get_startup_crew(idea: str):
    # Initialize Groq LLM
    llm = ChatGroq(
        api_key=os.getenv("GROQ_API_KEY"),
        model="llama-3.3-70b-versatile"
    )

    # Define Agents
    idea_generator = Agent(
        role='Chief Visionary Officer',
        goal='Expand on the initial startup idea and create a compelling vision.',
        backstory='You are a visionary entrepreneur who turns raw ideas into compelling business concepts.',
        verbose=True,
        allow_delegation=False,
        llm=llm
    )

    market_researcher = Agent(
        role='Market Research Analyst',
        goal='Analyze the target market and competitors for the startup idea.',
        backstory='You are an expert at identifying market trends, target audiences, and competitor weaknesses.',
        verbose=True,
        allow_delegation=False,
        llm=llm
    )

    business_model_agent = Agent(
        role='Business Strategist',
        goal='Develop a viable business model and monetization strategy.',
        backstory='You have a track record of creating profitable business models for early-stage startups.',
        verbose=True,
        allow_delegation=False,
        llm=llm
    )

    # Define Tasks
    vision_task = Task(
        description=f'Expand on this startup idea: {idea}. Create a detailed vision statement and core value proposition.',
        agent=idea_generator,
        expected_output="A detailed vision statement and core value proposition."
    )

    market_task = Task(
        description='Conduct market research based on the vision. Identify the target audience and top 3 competitors.',
        agent=market_researcher,
        expected_output="A market research report identifying the target audience and top 3 competitors."
    )

    business_task = Task(
        description='Create a business model canvas and monetization strategy based on the market research.',
        agent=business_model_agent,
        expected_output="A comprehensive business model canvas and monetization strategy."
    )

    # Form the Crew
    startup_crew = Crew(
        agents=[idea_generator, market_researcher, business_model_agent],
        tasks=[vision_task, market_task, business_task],
        process=Process.sequential,
        verbose=True
    )

    return startup_crew

def run_startup_crew(idea: str):
    crew = get_startup_crew(idea)
    result = crew.kickoff()
    return result
