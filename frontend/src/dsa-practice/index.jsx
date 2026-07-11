import React from 'react';
import DsaPractice from '../placement-coach/components/DsaPractice';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

function DsaPracticePage() {
  const navigate = useNavigate();
  
  return (
    <div className="flex bg-background min-h-full w-full">
      <div className="flex-1 p-6 lg:p-12 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="relative mb-12 text-center animate-slide-up">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors group border border-white/5 bg-white/[0.02] px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back
          </button>
          <div className="flex justify-center items-center gap-1.5 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AI Career Tools
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-3 tracking-wide text-white">DSA Practice Arena</h1>
          <p className="text-sm text-white/50 max-w-xl mx-auto leading-relaxed">
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
