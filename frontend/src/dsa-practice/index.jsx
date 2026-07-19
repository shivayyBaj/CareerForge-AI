import React from 'react';
import DsaPractice from '../placement-coach/components/DsaPractice';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

function DsaPracticePage() {
  const navigate = useNavigate();
  
  return (
    <div className="flex bg-white text-slate-900 min-h-full w-full">
      <div className="flex-1 p-6 lg:p-12 max-w-7xl mx-auto w-full">
        {}
        <div className="relative mb-12 text-center animate-slide-up">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors group border border-slate-200 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back
          </button>
          <div className="flex justify-center items-center gap-1.5 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AI Career Tools
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-3 tracking-wide text-slate-900">DSA Practice Arena</h1>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Practice Data Structures & Algorithms problems with our in-browser sandboxed compiler and AI Code Reviewer.
          </p>
        </div>

        <div className="animate-slide-up">
          <DsaPractice />
        </div>
      </div>
    </div>
  );
}

export default DsaPracticePage;
