from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import placement_coach, startup_builder, cover_letter
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="ResumeForge AI Backend", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(placement_coach.router, prefix="/api/placement-coach", tags=["Placement Coach"])
app.include_router(startup_builder.router, prefix="/api/startup-builder", tags=["Startup Builder"])
app.include_router(cover_letter.router, prefix="/api/cover-letter", tags=["Cover Letter"])

@app.get("/")
def read_root():
    return {"message": "ResumeForge AI Backend v2.0 is running!"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
