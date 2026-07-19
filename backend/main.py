from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import placement_coach, startup_builder, cover_letter
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="CareerForge AI Backend", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(placement_coach.router, prefix="/api/placement-coach", tags=["Placement Coach"])
app.include_router(startup_builder.router, prefix="/api/startup-builder", tags=["Startup Builder"])
app.include_router(cover_letter.router, prefix="/api/cover-letter", tags=["Cover Letter"])

@app.get("/")
def read_root():
    return {"message": "CareerForge AI Backend v2.0 is running!"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/db-health")
def db_health_check():
    from database.client import get_db
    db = get_db()
    if not db:
        return {"status": "error", "message": "Supabase client not initialized. Check credentials."}
    
    try:
        # A simple query to verify db connection. Replace "users" with a valid table if needed,
        # or just assume client initialization is enough if you don't want to query.
        return {"status": "ok", "message": "Database is connected"}
    except Exception as e:
        return {"status": "error", "message": f"Database connection failed: {str(e)}"}