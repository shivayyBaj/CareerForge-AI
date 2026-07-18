import React from 'react';
import { BookOpen, LayoutDashboard, Mic, Code2, Rocket, FileSignature, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Documentation() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Resume Builder',
      icon: LayoutDashboard,
      content: 'Craft ATS-friendly resumes using our builder. Fill out your details, education, experience, and skills. Use the AI features to automatically generate professional summaries and bullet points. Choose from different accent colors and export as PDF.',
    },
    {
      title: 'Mock Interview',
      icon: Mic,
      content: 'Upload your resume and enter a target job title. The AI will first score your resume against the role and give you ATS feedback. Then, you can engage in a real-time voice interview with our humanized AI avatar. Make sure your microphone is enabled. You will receive a detailed scorecard at the end.',
    },
    {
      title: 'DSA Practice',
      icon: Code2,
      content: 'Hone your algorithm skills in our in-browser code editor. Select a problem, choose your preferred language (Python, JavaScript, Java, C++), and write your solution. You can run test cases and get AI code reviews or step-by-step optimal solutions.',
    },
    {
      title: 'Cover Letter',
      icon: FileSignature,
      content: 'Generate highly tailored cover letters in seconds. Provide your resume context, the job description, and the target company/role. The AI will output a professional letter that you can then manually edit, refine, or copy to your clipboard.',
    },
    {
      title: 'Startup Builder',
      icon: Rocket,
      content: 'Turn raw ideas into a structured business blueprint. Describe your startup idea, and our multi-agent crew (Visionary, Market Analyst, Business Strategist) will generate market research, a business model canvas, and a slide-by-slide pitch deck for you.',
    }
  ];

  return (
    <div className="flex bg-white text-slate-900 min-h-full w-full">
      <div className="flex-1 p-6 lg:p-12 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="relative mb-12 text-center animate-slide-up">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors group border border-slate-200 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back
          </button>
          <div className="flex justify-center items-center gap-1.5 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" /> Help Center
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-3 tracking-wide text-slate-900">Documentation</h1>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Learn how to make the most out of CareerForge AI and its suite of professional career tools.
          </p>
        </div>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {sections.map((sec, i) => (
            <div key={i} className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  <sec.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-900">{sec.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-13">
                {sec.content}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center">
          <h4 className="text-sm font-bold text-slate-900 mb-2">Still need help?</h4>
          <p className="text-xs text-slate-500">
            If you encounter any issues or have questions, feel free to contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
