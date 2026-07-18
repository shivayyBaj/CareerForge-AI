import React, { useState } from 'react'
import Header from '../components/custom/Header'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      q: "What is CareerForge AI?",
      a: "CareerForge AI is a premium, all-in-one platform for job seekers and entrepreneurs. It features an ATS-optimized resume builder, a humanized AI mock interviewer, a DSA practice arena with a real code compiler, an AI cover letter generator, and an AI startup builder."
    },
    {
      q: "How does the AI Mock Interview work?",
      a: "Our Mock Interview module uses a realistic human avatar that lips-syncs to an AI-generated voice. You can speak your answers naturally using your microphone. The AI acts as the interviewer, grading you on technical, communication, and problem-solving skills, generating a comprehensive scorecard at the end."
    },
    {
      q: "Can I actually run code in the browser for DSA Practice?",
      a: "Yes! Our DSA Practice Arena features a real in-browser code editor. You can write and execute code in Python, JavaScript, Java, and C++. It automatically runs against hidden test cases (including complex structures like Trees and Linked Lists) to verify your logic."
    },
    {
      q: "Will my resumes pass Applicant Tracking Systems (ATS)?",
      a: "Absolutely. Our resume templates are specifically designed without complex tables or background images that confuse ATS parsers. We even provide a 'Use Black Font' toggle to ensure maximum readability for automated systems and human recruiters."
    },
    {
      q: "How does the Startup Builder work?",
      a: "The Startup Builder deploys an autonomous AI team consisting of a Chief Visionary Officer and a Strategist. You provide a raw idea, and the agents will sequentially conduct market research, define your business model, and generate a 6-slide investor pitch deck outline."
    },
    {
      q: "Are my resumes and data saved?",
      a: "Yes. Once you sign in with your account, all your created resumes, interview histories, and cover letters are securely persisted. You can leave and come back at any time to continue where you left off."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <Header />
      
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Everything you need to know about CareerForge AI and how it can help you land your dream job or launch your startup.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-lg text-slate-800">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
