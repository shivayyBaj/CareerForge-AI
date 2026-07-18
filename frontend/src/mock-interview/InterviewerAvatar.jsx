import React from 'react';

const InterviewerAvatar = ({ isSpeaking, isThinking, isListening }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 relative select-none">
      {/* Background soft ambient lighting */}
      <div className={`absolute inset-0 rounded-2xl filter blur-3xl opacity-10 transition-all duration-700 -z-10 ${
        isThinking 
          ? 'bg-blue-600' 
          : isListening 
            ? 'bg-emerald-500' 
            : isSpeaking 
              ? 'bg-amber-400' 
              : 'bg-slate-50'
      }`} />

      {/* Avatar Image */}
      <div 
        className="w-48 h-48 md:w-56 md:h-56 rounded-2xl border border-slate-200 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500"
        style={{
          boxShadow: isSpeaking 
            ? '0 0 35px rgba(245, 158, 11, 0.2)'
            : '0 20px 50px rgba(0,0,0,0.3)'
        }}
      >
        <img 
          src="/avatar.png" 
          alt="AI Interviewer"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* State Badge */}
      <div className="mt-4 flex flex-col items-center gap-1.5 z-10">
        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border transition-all duration-300 ${
          isThinking 
            ? 'bg-blue-100 text-blue-600 border-blue-100' 
            : isListening 
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 animate-pulse' 
              : isSpeaking 
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                : 'bg-slate-50 text-slate-500 border-slate-200'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${
            isThinking 
              ? 'bg-amber-400 animate-bounce' 
              : isListening 
                ? 'bg-emerald-400' 
                : isSpeaking 
                  ? 'bg-blue-400 animate-pulse' 
                  : 'bg-slate-400'
          }`} />
          {isThinking ? 'Analyzing' : isListening ? 'Listening' : isSpeaking ? 'Speaking' : 'Ready'}
        </div>

        {/* Audio Wave Visualizer while Speaking or Listening */}
        <div className="h-6 flex items-center gap-0.5 mt-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <span 
              key={i} 
              className={`w-[3px] bg-gradient-to-t rounded-full transition-all duration-300 ${
                isSpeaking 
                  ? 'from-blue-600 to-amber-300' 
                  : isListening 
                    ? 'from-emerald-500 to-emerald-300' 
                    : 'from-slate-200 to-slate-100'
              }`}
              style={{
                height: isSpeaking || isListening ? undefined : '3px',
                animation: isSpeaking || isListening ? `pulseHeight 0.6s ease-in-out infinite alternate` : 'none',
                animationDelay: `${i * 0.08}s`,
                transformOrigin: 'bottom',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseHeight {
          0% { height: 4px; }
          100% { height: 22px; }
        }
      `}</style>
    </div>
  );
};

export default InterviewerAvatar;
