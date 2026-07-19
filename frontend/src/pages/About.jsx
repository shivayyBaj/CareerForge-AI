import React from 'react'
import Header from '../components/custom/Header'
import { CheckCircle2, Target, Code2, Rocket, FileSignature, BrainCircuit } from 'lucide-react'

export default function About() {
  const pillars = [
    {
      title: 'ATS Resume Builder',
      desc: 'Craft professional, ATS-optimized resumes with a real-time side-by-side A4 preview. Our AI writing assistant helps you generate perfect summaries and bullet points tailored to your role.',
      icon: <FileSignature className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'AI Mock Interviews',
      desc: 'Experience realistic interviews with a humanized AI avatar that features lip-sync animations. Answer questions using your voice, get real-time feedback, and receive a comprehensive scorecard after your session.',
      icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />
    },
    {
      title: 'DSA Practice Arena',
      desc: 'Sharpen your coding skills with 150+ curated DSA problems. Write and execute code in Python, JavaScript, Java, or C++ directly in your browser. Get instant AI code reviews and optimal solutions when you are stuck.',
      icon: <Code2 className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Startup Builder',
      desc: 'Turn your raw ideas into investor-ready blueprints. Our multi-agent AI system conducts market research, designs your business model, and generates a slide-by-slide pitch deck.',
      icon: <Rocket className="w-6 h-6 text-violet-600" />
    },
    {
      title: 'Cover Letter Generator',
      desc: 'Say goodbye to generic cover letters. Our AI context-aware generator reads your resume and the target job description to create a highly tailored, professional letter in seconds.',
      icon: <Target className="w-6 h-6 text-sky-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <Header />
      
      {}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">CareerForge AI</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          We are building the ultimate career advancement and entrepreneurial launching pad. CareerForge AI leverages cutting-edge artificial intelligence to give you the tools you need to stand out, succeed, and build your future.
        </p>
      </div>

      {}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In today's competitive job market, candidates need more than just a good resume. They need confidence, interview practice, technical sharpness, and sometimes, the tools to launch their own venture. CareerForge AI was built to democratize access to premium career coaching and startup advisory through the power of multi-agent LLM workflows.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            By orchestrating advanced AI models like Llama 3 on lightning-fast infrastructure, we provide an all-in-one unified dashboard where your data works for you across multiple different tools seamlessly.
          </p>
        </div>

        {/* Five Pillars */}
        <h2 className="text-3xl font-bold mb-10 text-center">The Five Pillars of CareerForge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${i === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
