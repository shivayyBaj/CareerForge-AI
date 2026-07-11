const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const jsonPost = async (url, body) => {
  const res = await fetch(`${API_BASE}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Backend error (${res.status}): ${error}`);
  }
  return res.json();
};

/**
 * Analyze a resume against a job title.
 * Returns { atsScore, strengths, weaknesses, roadmap }
 */
export const analyzeResume = (resumeText, jobTitle) =>
  jsonPost('/api/placement-coach/analyze', {
    resume_text: resumeText,
    job_title: jobTitle,
  });

/**
 * Send a chat message to the mock interviewer.
 * @param {string} message - The user's message
 * @param {Array} history - Array of {role, content} objects
 * @param {string} resumeText
 * @param {string} jobTitle
 * Returns { reply: string }
 */
export const chatWithCoach = (message, history, resumeText, jobTitle) =>
  jsonPost('/api/placement-coach/chat', {
    message,
    history,
    resume_text: resumeText,
    job_title: jobTitle,
  });

/**
 * Run the multi-agent startup builder.
 * Returns { status, vision, research, businessModel, pitchDeck }
 */
export const buildStartup = (idea) =>
  jsonPost('/api/startup-builder/build', { idea });

/**
 * Execute code in a sandboxed environment.
 * @param {string} language - python | javascript | java | cpp
 * @param {string} code - Full source code to run
 */
export const executeCode = (language, code) =>
  jsonPost('/api/placement-coach/execute-code', { language, code });

/**
 * AI code review for DSA practice.
 * Returns { isCorrect, feedback, errors, explanation, hints, correctedCode }
 */
export const verifyCode = (payload) =>
  jsonPost('/api/placement-coach/verify-code', {
    problem_title: payload.problemTitle,
    problem_description: payload.problemDescription,
    constraints: payload.constraints,
    examples: payload.examples,
    language: payload.language,
    user_code: payload.userCode,
    terminal_output: payload.terminalOutput || '',
    test_results: payload.testResults || null,
    job_title: payload.jobTitle || '',
  });

/**
 * Get a full AI-generated solution for a DSA problem.
 * Returns { approach, timeComplexity, spaceComplexity, solutionCode, walkthrough, keyInsights }
 */
export const getSolution = (payload) =>
  jsonPost('/api/placement-coach/get-solution', {
    problem_title: payload.problemTitle,
    problem_description: payload.problemDescription,
    constraints: payload.constraints,
    examples: payload.examples,
    language: payload.language,
    topic: payload.topic,
    starter_code: payload.starterCode || '',
    function_name: payload.functionName || '',
    user_code: payload.userCode || '',
  });

/**
 * Analyze a completed mock interview and generate a performance scorecard.
 * @param {Array} history - Array of {role, content} chat messages
 * @param {string} resumeText - Candidate's resume text
 * @param {string} jobTitle - Target job title
 * Returns { overallScore, grade, verdict, summary, strengths, improvements, categoryScores }
 */
export const analyzeInterview = (history, resumeText, jobTitle) =>
  jsonPost('/api/placement-coach/analyze-interview', {
    history,
    resume_text: resumeText,
    job_title: jobTitle,
  });

/**
 * Generate a tailored cover letter from resume + job details.
 * Returns { fullLetter, greeting, opening, body, closing, signature, highlights, tips }
 */
export const generateCoverLetter = (payload) =>
  jsonPost('/api/cover-letter/generate', {
    resume_text: payload.resumeText,
    job_title: payload.jobTitle,
    company_name: payload.companyName,
    job_description: payload.jobDescription || '',
    hiring_manager: payload.hiringManager || '',
    tone: payload.tone || 'professional',
    candidate_name: payload.candidateName || '',
  });

/**
 * Improve an existing cover letter with AI.
 * Returns { fullLetter, changesSummary }
 */
export const improveCoverLetter = (payload) =>
  jsonPost('/api/cover-letter/improve', {
    current_letter: payload.currentLetter,
    instruction: payload.instruction,
    resume_text: payload.resumeText || '',
    job_title: payload.jobTitle || '',
    company_name: payload.companyName || '',
  });
