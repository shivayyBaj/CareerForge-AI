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


export const analyzeResume = (resumeText, jobTitle) =>
  jsonPost('/api/placement-coach/analyze', {
    resume_text: resumeText,
    job_title: jobTitle,
  });


export const chatWithCoach = (message, history, resumeText, jobTitle) =>
  jsonPost('/api/placement-coach/chat', {
    message,
    history,
    resume_text: resumeText,
    job_title: jobTitle,
  });


export const buildStartup = (idea) =>
  jsonPost('/api/startup-builder/build', { idea });


export const executeCode = (language, code) =>
  jsonPost('/api/placement-coach/execute-code', { language, code });


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


export const analyzeInterview = (history, resumeText, jobTitle) =>
  jsonPost('/api/placement-coach/analyze-interview', {
    history,
    resume_text: resumeText,
    job_title: jobTitle,
  });


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


export const improveCoverLetter = (payload) =>
  jsonPost('/api/cover-letter/improve', {
    current_letter: payload.currentLetter,
    instruction: payload.instruction,
    resume_text: payload.resumeText || '',
    job_title: payload.jobTitle || '',
    company_name: payload.companyName || '',
  });
