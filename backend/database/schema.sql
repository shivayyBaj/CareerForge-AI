-- database schema for Supabase

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clerk_id VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI Placement Coach Tables
CREATE TABLE IF NOT EXISTS coach_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE CASCADE,
    resume_text TEXT,
    linkedin_text TEXT,
    github_text TEXT,
    roadmap JSONB,
    weaknesses JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS mock_interviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE CASCADE,
    job_title VARCHAR(255),
    feedback TEXT,
    score INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Multi-Agent Startup Builder Tables
CREATE TABLE IF NOT EXISTS startup_projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE CASCADE,
    idea TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'in_progress',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS startup_artifacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES startup_projects(id) ON DELETE CASCADE,
    artifact_type VARCHAR(50) NOT NULL, -- e.g., 'market_research', 'business_model', 'ui_design', 'code', 'pitch_deck', 'marketing'
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Shared Table for Chat History (LangGraph / Memory)
CREATE TABLE IF NOT EXISTS chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE CASCADE,
    session_id VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL, -- 'user', 'assistant', 'system'
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
