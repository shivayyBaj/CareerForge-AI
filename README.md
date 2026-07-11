<div align="center">

# CareerForge AI — Career & Startup Suite

**Elevate your future with CareerForge AI. Craft professional ATS-optimized resumes, practice mock interviews with a humanized AI interviewer, sharpen DSA skills with an in-browser code editor, generate cover letters, and build complete startup blueprints — all powered by advanced AI agent workflows.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![LangChain](https://img.shields.io/badge/LangChain-Core-black?style=flat)](https://github.com/langchain-ai/langchain)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=flat)](https://clerk.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker)](https://www.docker.com/)

[⚙️ Setup & Installation](#-getting-started) • [✨ Key Features](#-features) • [📁 Structure](#-project-structure) • [🐳 Docker](#-docker-deployment)

</div>

---

## 📖 Overview

**CareerForge AI** is a premium, full-featured career advancement and entrepreneurial launching pad. Combining a gorgeous dark gold user interface with a robust FastAPI backend orchestration layer, CareerForge AI helps students and job seekers build industry-grade resumes, practice interviews with a humanized AI interviewer avatar (with lip-sync!), sharpen DSA skills with a real in-browser code runner, generate professional cover letters, and turn raw startup ideas into investor-ready pitch decks.

---

## ✨ Features

### 📄 1. ATS Resume Builder
* 🎨 **Theme Customization**: 12 custom accent color presets + a "Use Black Font" toggle for recruiter readability.
* ✍️ **AI Writing Assistant**: Instantly generate professional summaries and work experience bullet points tailored to your role.
* 📄 **A4 Live Preview**: Real-time side-by-side editing pane and A4-sized PDF preview layout.
* 📤 **PDF Export**: Print-to-PDF ready using native CSS `@page` printing standards.
* 💾 **Auto-Save & Persisted State**: Resume data persisted locally using a structured CRUD service layer.

### 🤖 2. AI Mock Interview
* 📊 **ATS Analysis**: Instantly score your resume against any target job title with detailed strengths, weaknesses, and custom roadmap steps.
* 🧑‍💼 **Humanized AI Interviewer Avatar**: A realistic face avatar with animated lip-sync — powered by Web Speech API viseme tracking — gives you the feel of a real interviewer sitting in front of you.
* 🎙️ **Voice-Enabled Interview**: Speak your answers using built-in speech-to-text. The AI interviewer responds using a natural-sounding, human-like voice synthesis with tone variation.
* 📈 **Interview Scorecard**: Receive a detailed AI-powered scorecard after the interview — with overall score, grade, verdict (Hire/No Hire), and category breakdowns (communication, technical, problem-solving, culture fit).

### 💻 3. DSA Practice Arena
* 📚 **Curated Problem Set**: Practice handpicked DSA problems spanning Arrays, Strings, Trees, Graphs, Dynamic Programming, and more.
* 🖥️ **In-Browser Code Editor**: Write and run code in Python, JavaScript, Java, or C++ directly in the browser with syntax highlighting.
* ✅ **Test Case Runner**: Run your solution against provided test cases and see pass/fail results instantly.
* 🌳 **Tree & Linked List Support**: Test cases with `TreeNode` and `ListNode` inputs are now correctly serialized and injected into all four language runtimes — no more runtime errors on tree or linked list problems.
* 🔍 **AI Code Review**: Get AI-powered feedback on correctness, bugs, time/space complexity, and a corrected solution if needed.
* 💡 **AI Solution Generator**: Stuck? Request a complete, fully-explained optimal solution with approach, key insights, and a step-by-step walkthrough.
* ⚠️ **Helpful Runtime Errors**: If a language compiler (Node.js, Java, g++) is not installed on your system, a clear message explains what to install instead of a cryptic error.

### 📝 4. AI Cover Letter Generator
* 📋 **Context-Aware Generation**: Paste your resume and target job description to generate a tailored, professional cover letter in seconds.
* ✏️ **Editable Output**: Fine-tune the generated letter directly in the editor before exporting.
* 📤 **Copy & Export**: Quickly copy to clipboard or export for submission.

### 🚀 5. AI Startup Builder
* 💡 **Blueprint Generation**: Turn any raw startup idea into a comprehensive roadmap.
* 📑 **CVO & Strategist Agents**: Evaluates ideas through sequential LLM steps:
  * **Vision & Core Value Proposition**
  * **Market Research** (Target Audience, TAM/SAM/SOM, Top 3 Competitors, Trends)
  * **Business Model Strategy** (Revenue streams, Go-To-Market strategy, competitive advantages)
  * **Slide-by-Slide Pitch Deck** (6-slide outline for investor meetings)

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 18, Vite 5, React Router Dom v6 |
| **Backend API** | FastAPI (Python 3.11+), Uvicorn |
| **AI Orchestration** | LangChain, LangChain Groq |
| **AI Models** | Meta Llama-3.3-70b-versatile & Llama-3.1-8b-instant (via Groq API) |
| **Authentication** | Clerk Auth |
| **Styling & UI** | Tailwind CSS 3, Radix UI Primitives, Lucide Icons, Framer Motion |
| **Avatar & Lip-Sync** | Custom HTML5 Canvas + Web Speech API SpeechSynthesisUtterance boundary events |
| **PDF Rendering** | pdfjs-dist, react-to-pdf |
| **Code Execution** | Native language runtimes (Python, Node.js, Java, g++) via subprocess |
| **Containerization** | Docker, Docker Compose |

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [Python](https://www.python.org/) (3.11 or higher)
* A [GroqCloud API Key](https://console.groq.com/)
* A [Clerk Account](https://clerk.com/)
* *(Optional)* Java JDK 11+, g++ (for Java and C++ code execution in DSA Arena)
* *(Optional)* [Docker & Docker Compose](https://www.docker.com/) for containerized deployment

> **Note**: Python and JavaScript code execution work out of the box since both runtimes are required to run the app itself. Java and C++ require their respective compilers to be installed and available in your system PATH.

---

### 1. Setup the Backend API

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv .venv
   # On Windows:
   .venv\Scripts\activate
   # On macOS/Linux:
   source .venv/bin/activate
   ```
3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file in the `backend/` directory:
   ```env
   GROQ_API_KEY=your_groq_api_key
   SUPABASE_URL=your_supabase_url (optional)
   SUPABASE_KEY=your_supabase_key (optional)
   TAVILY_API_KEY=your_tavily_api_key (optional)
   ```
5. Start the FastAPI server from inside the `backend/` directory:
   ```bash
   python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
   ```

> ⚠️ **Important**: Make sure you run the uvicorn command from inside the `backend/` directory, not the project root.

---

### 2. Setup the Frontend App

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend/` directory:
   ```env
   # Groq API Key
   VITE_GROK_API_KEY=your_groq_api_key

   # Clerk Auth Publishable Key
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

   # Base URL matching backend location
   VITE_BASE_URL=http://localhost:5173
   VITE_API_URL=http://localhost:8000
   ```
4. Start the React development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🐳 Docker Deployment

Run the entire stack with a single command using Docker Compose:

1. Create a `.env` file in the **root** directory with your secrets:
   ```env
   GROQ_API_KEY=your_groq_api_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   TAVILY_API_KEY=your_tavily_api_key
   ```

2. Build and start all services:
   ```bash
   docker-compose up --build
   ```

3. Access the app:
   - **Frontend**: [http://localhost:5173](http://localhost:5173)
   - **Backend API**: [http://localhost:8000](http://localhost:8000)
   - **API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

4. To stop all services:
   ```bash
   docker-compose down
   ```

---

## 📁 Project Structure

```
CareerForge-AI/
├── backend/                          # FastAPI Backend
│   ├── agents/                       # Multi-Agent workflows
│   ├── routers/                      # API route handlers
│   │   ├── placement_coach.py        # ATS analysis, mock interview, DSA, code execution
│   │   ├── startup_builder.py        # Startup blueprint generation
│   │   └── cover_letter.py           # AI cover letter generation
│   ├── database/                     # Database utilities & DSA problem set
│   ├── main.py                       # FastAPI app entrypoint
│   ├── requirements.txt              # Python dependencies
│   └── Dockerfile.backend            # Backend Docker image
├── frontend/                         # React Frontend
│   ├── public/                       # Static frontend assets
│   ├── service/                      # API client & LocalStorage layers
│   ├── src/                          # React Source Code
│   │   ├── components/               # UI elements & custom layout components
│   │   ├── context/                  # Context Providers (Resume details state)
│   │   ├── dashboard/                # Resume dashboard and step-by-step forms
│   │   ├── home/                     # App landing page
│   │   ├── mock-interview/           # Humanized AI interviewer with avatar & lip-sync
│   │   │   ├── index.jsx             # Full interview session logic & voice control
│   │   │   └── InterviewerAvatar.jsx # Canvas-based animated face with lip-sync
│   │   ├── placement-coach/          # Career coach dashboard and interactive chat
│   │   │   ├── codeRunner.js         # Multi-language test harness generator
│   │   │   ├── dsaQuestions.js       # Full DSA question bank with test cases
│   │   │   └── components/           # DSA Practice Arena UI components
│   │   ├── startup-builder/          # Startup blueprint generator UI
│   │   ├── cover-letter/             # AI Cover Letter generator UI
│   │   └── my-resume/                # Saved resume export layouts
│   ├── .env                          # Local frontend variables
│   ├── package.json                  # NPM dependencies & scripts
│   ├── tailwind.config.js            # Styling system tokens
│   └── Dockerfile.frontend           # Frontend Docker image
├── docker-compose.yml                # Docker Compose orchestration
└── README.md                         # Project documentation
```

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/placement-coach/analyze` | ATS resume scoring |
| `POST` | `/api/placement-coach/chat` | Mock interview chat |
| `POST` | `/api/placement-coach/execute-code` | Run code in-browser |
| `POST` | `/api/placement-coach/verify-code` | AI code review |
| `POST` | `/api/placement-coach/get-solution` | AI DSA solution |
| `POST` | `/api/placement-coach/analyze-interview` | Interview scorecard |
| `POST` | `/api/startup-builder/build` | Generate startup blueprint |
| `POST` | `/api/cover-letter/generate` | Generate cover letter |
| `GET`  | `/health` | Backend health check |

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to open a pull request or submit a ticket.

Built with ❤️ by [shivayyBaj](https://github.com/shivayyBaj).
