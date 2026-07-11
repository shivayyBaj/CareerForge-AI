import React, { useState, useEffect, useRef } from 'react';

const InterviewerAvatar = ({ isSpeaking, isThinking, isListening, currentWord }) => {
  // Eyelid state for blinking
  const [isBlinking, setIsBlinking] = useState(false);
  
  // Real-time interpolated mouth parameters
  const [mouthWidth, setMouthWidth] = useState(22);
  const [mouthHeight, setMouthHeight] = useState(0);
  const [mouthShapeType, setMouthShapeType] = useState('idle'); // idle, A, E, O, U, M

  // Face rotation/tilt and breathing variables
  const [headTilt, setHeadTilt] = useState(0);
  const [headSwayX, setHeadSwayX] = useState(0);
  const [breathY, setBreathY] = useState(0);

  // References for target values (for smooth interpolation)
  const targetMouthWidthRef = useRef(22);
  const targetMouthHeightRef = useRef(0);
  const targetMouthTypeRef = useRef('idle');

  // 1. Animation frame loop to interpolate values smoothly (Lag/Physics effect)
  useEffect(() => {
    let animationFrameId;
    
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;
    
    const updateInterpolation = () => {
      setMouthWidth(prev => lerp(prev, targetMouthWidthRef.current, 0.25));
      setMouthHeight(prev => lerp(prev, targetMouthHeightRef.current, 0.3));
      
      animationFrameId = requestAnimationFrame(updateInterpolation);
    };
    
    animationFrameId = requestAnimationFrame(updateInterpolation);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // 2. Idle motion (Breathing, Head tilt, Sway)
  useEffect(() => {
    let lastTime = 0;
    let animationFrameId;

    const animateIdle = (time) => {
      // Breathing speed: 4s cycle
      const breathPhase = (time / 1000) * (Math.PI / 2);
      const bY = Math.sin(breathPhase) * 0.4;
      
      // Sway speed: 7s cycle
      const swayPhase = (time / 1750) * (Math.PI / 4);
      const sX = Math.cos(swayPhase) * 0.6;
      const tilt = Math.sin(swayPhase) * 0.5;

      setBreathY(bY);
      setHeadSwayX(sX);
      setHeadTilt(tilt);

      animationFrameId = requestAnimationFrame(animateIdle);
    };

    animationFrameId = requestAnimationFrame(animateIdle);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // 3. Random Eyelid Blinking
  useEffect(() => {
    let blinkTimeout;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        const nextBlink = 2000 + Math.random() * 4000;
        blinkTimeout = setTimeout(triggerBlink, nextBlink);
      }, 120);
    };

    blinkTimeout = setTimeout(triggerBlink, 2500);
    return () => clearTimeout(blinkTimeout);
  }, []);

  // 4. Advanced Phonetic-based Lip-Syncing Engine
  useEffect(() => {
    if (!isSpeaking) {
      targetMouthWidthRef.current = 20;
      targetMouthHeightRef.current = 0;
      targetMouthTypeRef.current = 'idle';
      setMouthShapeType('idle');
      return;
    }

    let intervalId;
    // Extract phonetic components
    const letters = currentWord ? currentWord.toLowerCase().replace(/[^a-z]/g, '') : '';
    let phonemeIndex = 0;

    const parsePhonemeShape = () => {
      if (!isSpeaking) return;

      const char = letters[phonemeIndex] || '';
      phonemeIndex = (phonemeIndex + 1) % (letters.length || 1);

      let w = 24;
      let h = 5;
      let type = 'consonant';

      if ('aeiou'.includes(char) || !char) {
        const vowel = char || ['a', 'e', 'i', 'o', 'u'][Math.floor(Math.random() * 5)];
        switch (vowel) {
          case 'a':
          case 'i':
            w = 26;
            h = 10;
            type = 'A';
            break;
          case 'o':
            w = 14;
            h = 14;
            type = 'O';
            break;
          case 'e':
            w = 28;
            h = 6;
            type = 'E';
            break;
          case 'u':
            w = 16;
            h = 9;
            type = 'U';
            break;
        }
      } else if ('bmp'.includes(char)) {
        w = 20;
        h = 0; // lips pressed
        type = 'M';
      } else {
        // General consonants (slightly open, wide)
        w = 22;
        h = 3;
        type = 'consonant';
      }

      // Introduce small dynamic variations (natural speech noise)
      targetMouthWidthRef.current = w + (Math.random() - 0.5) * 1.5;
      targetMouthHeightRef.current = h + (Math.random() - 0.5) * 1.5;
      targetMouthTypeRef.current = type;
      setMouthShapeType(type);
    };

    // Update mouth target properties every 80ms (fast, highly responsive)
    intervalId = setInterval(parsePhonemeShape, 80);
    return () => clearInterval(intervalId);
  }, [isSpeaking, currentWord]);

  // SVG coordinate details
  const mouthCenterY = 62;
  const halfW = mouthWidth / 2;
  const leftX = 50 - halfW;
  const rightX = 50 + halfW;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 relative select-none">
      {/* Background soft ambient lighting */}
      <div className={`absolute inset-0 rounded-2xl filter blur-3xl opacity-10 transition-all duration-700 -z-10 ${
        isThinking 
          ? 'bg-amber-500' 
          : isListening 
            ? 'bg-emerald-500' 
            : isSpeaking 
              ? 'bg-amber-400 animate-pulse' 
              : 'bg-white/10'
      }`} />

      {/* Avatar Wrapper */}
      <div 
        className="w-48 h-48 md:w-56 md:h-56 rounded-2xl border border-white/5 bg-gradient-to-b from-[#0b0c10] to-[#040507] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden transition-all duration-500 relative"
        style={{
          boxShadow: isSpeaking 
            ? '0 0 35px rgba(245, 158, 11, 0.12), inset 0 0 25px rgba(255, 255, 255, 0.01)'
            : 'inset 0 0 25px rgba(255, 255, 255, 0.01)'
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full object-contain transition-transform duration-300"
          style={{
            transform: `translate(${headSwayX}px, ${breathY}px) rotate(${headTilt}deg)`,
          }}
        >
          <defs>
            {/* Skin Shading */}
            <linearGradient id="skinBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffdcc3" />
              <stop offset="60%" stopColor="#f5b893" />
              <stop offset="100%" stopColor="#df9c70" />
            </linearGradient>
            
            <radialGradient id="cheekGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="hairBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b18" />
              <stop offset="50%" stopColor="#2d2621" />
              <stop offset="100%" stopColor="#12100e" />
            </linearGradient>

            {/* Suit & Attire */}
            <linearGradient id="suitJacket" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#171923" />
              <stop offset="50%" stopColor="#2d3748" />
              <stop offset="100%" stopColor="#0f111a" />
            </linearGradient>

            {/* Lips Gradient */}
            <linearGradient id="upperLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d96a71" />
              <stop offset="100%" stopColor="#ad3b42" />
            </linearGradient>
            <linearGradient id="lowerLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eb7d84" />
              <stop offset="100%" stopColor="#bd4850" />
            </linearGradient>
          </defs>

          {/* Shoulders & Jacket (Professional Look) */}
          <path d="M 12 92 Q 28 73 50 73 Q 72 73 88 92 Z" fill="url(#suitJacket)" />
          {/* White Shirt Collar */}
          <path d="M 38 73 L 50 83 L 62 73 L 50 76 Z" fill="#ffffff" />
          <path d="M 44 73 L 50 83 L 50 92 L 44 92 Z" fill="#e2e8f0" opacity="0.3" />
          
          {/* Crimson Necktie */}
          <path d="M 47.5 76 L 52.5 76 L 54 92 L 46 92 Z" fill="#991b1b" />

          {/* Neck with Shadow */}
          <path d="M 42 60 L 42 74 L 58 74 L 58 60 Z" fill="#df9c70" />
          {/* Jawline Shadow on Neck */}
          <path d="M 42 60 Q 50 67 58 60 L 58 64 Q 50 71 42 64 Z" fill="#a76841" opacity="0.5" />

          {/* Ears with Helix structure */}
          <ellipse cx="28.5" cy="48" rx="3.2" ry="5.5" fill="#f5b893" />
          <path d="M 28.5 44.5 Q 26.5 48 28.5 51.5" stroke="#df9c70" strokeWidth="0.8" fill="none" />
          
          <ellipse cx="71.5" cy="48" rx="3.2" ry="5.5" fill="#f5b893" />
          <path d="M 71.5 44.5 Q 73.5 48 71.5 51.5" stroke="#df9c70" strokeWidth="0.8" fill="none" />

          {/* Face Base */}
          <path d="M 31 38 Q 31 24 50 24 Q 69 24 69 38 Q 69 59 50 67 Q 31 59 31 38 Z" fill="url(#skinBase)" />

          {/* Blush/Cheek dimension */}
          <ellipse cx="37" cy="50" rx="6" ry="3.5" fill="url(#cheekGlow)" />
          <ellipse cx="63" cy="50" rx="6" ry="3.5" fill="url(#cheekGlow)" />

          {/* Detailed Nose with Shaded bridge */}
          <path d="M 48.5 42 L 48.5 50 Q 50 54 50 54 Q 50 54 51.5 50 L 51.5 42" fill="none" stroke="#df9c70" strokeWidth="0.8" opacity="0.5" />
          <path d="M 47 50.5 Q 50 52.5 53 50.5" stroke="#c97e52" strokeWidth="1.2" fill="none" strokeLinecap="round" />

          {/* Realistic Eyes */}
          {/* Left Eye */}
          <g>
            {/* Eye socket shadow */}
            <ellipse cx="41.5" cy="42.5" rx="7.5" ry="4.5" fill="#a76841" opacity="0.15" />
            {/* Eyeball */}
            <ellipse cx="41.5" cy="42.5" rx="5" ry="3.2" fill="#ffffff" />
            {/* Iris */}
            <circle cx="41.5" cy="42.5" r="2.3" fill="#2b6cb0" /> {/* Ocean blue iris */}
            <circle cx="41.5" cy="42.5" r="1" fill="#1a202c" /> {/* Pupil */}
            <circle cx="42.3" cy="41.7" r="0.6" fill="#ffffff" /> {/* Light Highlight */}
            
            {/* Upper Lid / Lash Line */}
            <path d="M 36 42 Q 41.5 38.5 47 42" stroke="#2d3748" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            
            {/* Eyelid Blink Overlay */}
            {isBlinking && (
              <path d="M 35.8 41.8 Q 41.5 44 47.2 41.8" stroke="#f5b893" strokeWidth="5.5" fill="#f5b893" strokeLinecap="round" />
            )}
          </g>

          {/* Right Eye */}
          <g>
            {/* Eye socket shadow */}
            <ellipse cx="58.5" cy="42.5" rx="7.5" ry="4.5" fill="#a76841" opacity="0.15" />
            <ellipse cx="58.5" cy="42.5" rx="5" ry="3.2" fill="#ffffff" />
            <circle cx="58.5" cy="42.5" r="2.3" fill="#2b6cb0" />
            <circle cx="58.5" cy="42.5" r="1" fill="#1a202c" />
            <circle cx="59.3" cy="41.7" r="0.6" fill="#ffffff" />
            
            <path d="M 53 42 Q 58.5 38.5 64 42" stroke="#2d3748" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            
            {isBlinking && (
              <path d="M 52.8 41.8 Q 58.5 44 64.2 41.8" stroke="#f5b893" strokeWidth="5.5" fill="#f5b893" strokeLinecap="round" />
            )}
          </g>

          {/* Eyebrows with realistic curvature */}
          <path d="M 34.5 37.5 Q 41 35 46.5 38.2" stroke="#2d2621" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M 65.5 37.5 Q 59 35 53.5 38.2" stroke="#2d2621" strokeWidth="1.6" fill="none" strokeLinecap="round" />

          {/* --- ADVANCED HUMAN MOUTH & LIPS SYSTEM --- */}
          <g>
            {/* 1. Dark Internal Oral Cavity */}
            {mouthHeight > 1 && (
              <ellipse 
                cx="50" 
                cy={mouthCenterY} 
                rx={halfW - 1} 
                ry={mouthHeight / 2} 
                fill="#4a151b" 
              />
            )}

            {/* 2. Realistic Upper Teeth Line */}
            {mouthHeight > 4.5 && (
              <path 
                d={`M ${leftX + 2.5} ${mouthCenterY - mouthHeight * 0.15} 
                    Q 50 ${mouthCenterY - mouthHeight * 0.22} ${rightX - 2.5} ${mouthCenterY - mouthHeight * 0.15}
                    L ${rightX - 3} ${mouthCenterY + 1.2} 
                    Q 50 ${mouthCenterY + 1.8} ${leftX + 3} ${mouthCenterY + 1.2} Z`} 
                fill="#f7fafc" 
              />
            )}

            {/* 3. Soft Pink Tongue */}
            {mouthHeight > 6 && (
              <path 
                d={`M ${leftX + 4} ${mouthCenterY + mouthHeight * 0.1} 
                    Q 50 ${mouthCenterY + mouthHeight * 0.45} ${rightX - 4} ${mouthCenterY + mouthHeight * 0.1}
                    Q 50 ${mouthCenterY + mouthHeight * 0.2} ${leftX + 4} ${mouthCenterY + mouthHeight * 0.1}`} 
                fill="#e53e3e" 
                opacity="0.85"
              />
            )}

            {/* 4. Upper Lip (Cupid's Bow curve) */}
            <path 
              d={`M ${leftX} ${mouthCenterY} 
                  Q ${leftX + halfW * 0.4} ${mouthCenterY - 1.5 - mouthHeight * 0.2} ${leftX + halfW * 0.9} ${mouthCenterY - 0.5 - mouthHeight * 0.3} 
                  Q 50 ${mouthCenterY - 1.2 - mouthHeight * 0.3} ${rightX - halfW * 0.9} ${mouthCenterY - 0.5 - mouthHeight * 0.3} 
                  Q ${rightX - halfW * 0.4} ${mouthCenterY - 1.5 - mouthHeight * 0.2} ${rightX} ${mouthCenterY} 
                  Q 50 ${mouthCenterY - mouthHeight * 0.2} ${leftX} ${mouthCenterY}`} 
              fill="url(#upperLipGrad)" 
            />

            {/* 5. Lower Lip (Fuller, smooth bottom arc) */}
            <path 
              d={`M ${leftX} ${mouthCenterY} 
                  Q 50 ${mouthCenterY + mouthHeight * 0.2} ${rightX} ${mouthCenterY} 
                  Q 50 ${mouthCenterY + 2.5 + mouthHeight * 0.55} ${leftX} ${mouthCenterY}`} 
              fill="url(#lowerLipGrad)" 
            />

            {/* Subtle lip corner shadowing */}
            <circle cx={leftX} cy={mouthCenterY} r="0.75" fill="#881337" opacity="0.6" />
            <circle cx={rightX} cy={mouthCenterY} r="0.75" fill="#881337" opacity="0.6" />
          </g>

          {/* Chin crease under lower lip */}
          <path d={`M 44 ${mouthCenterY + 5.5 + mouthHeight * 0.4} Q 50 ${mouthCenterY + 7 + mouthHeight * 0.4} 56 ${mouthCenterY + 5.5 + mouthHeight * 0.4}`} stroke="#df9c70" strokeWidth="0.9" fill="none" opacity="0.6" />

          {/* Styled Modern Hair Layering */}
          <path d="M 28.5 35 Q 29.5 15 50 13 Q 70.5 15 71.5 35 Q 75.5 25 71 17 Q 50 8 29 17 Q 24.5 25 28.5 35 Z" fill="url(#hairBase)" />
          {/* Hair locks & highlights */}
          <path d="M 31 23 Q 40 18 51 21 Q 61 17 68 22 Q 70 25 71 30 Q 69 19 59 17 Q 49 17 39 19 Q 32 21 31 23 Z" fill="#4a3b32" opacity="0.4" />
          <path d="M 32 28 Q 38 23 44 26 Q 49 20 58 24 Q 63 28 64 32 Q 62 21 54 20 Q 45 20 36 23 Q 32 25 32 28 Z" fill="#5c4d42" opacity="0.25" />
        </svg>
      </div>

      {/* State & Visualizer */}
      <div className="mt-4 flex flex-col items-center gap-1.5 z-10">
        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border transition-all duration-300 ${
          isThinking 
            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
            : isListening 
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 animate-pulse' 
              : isSpeaking 
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                : 'bg-white/5 text-white/40 border-white/5'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${
            isThinking 
              ? 'bg-amber-400 animate-bounce' 
              : isListening 
                ? 'bg-emerald-400' 
                : isSpeaking 
                  ? 'bg-blue-400 animate-pulse' 
                  : 'bg-white/30'
          }`} />
          {isThinking ? 'Analyzing' : isListening ? 'Listening' : isSpeaking ? 'Speaking' : 'Ready'}
        </div>

        {/* Audio Wave Visualizer while Speaking or Listening */}
        <div className="h-6 flex items-center gap-0.5 mt-1">
          {Array.from({ length: 9 }).map((_, i) => {
            let delay = `${i * 0.08}s`;
            return (
              <span 
                key={i} 
                className={`w-[3px] bg-gradient-to-t rounded-full transition-all duration-300 ${
                  isSpeaking 
                    ? 'from-amber-500 to-amber-300' 
                    : isListening 
                      ? 'from-emerald-500 to-emerald-300' 
                      : 'from-white/10 to-white/5'
                }`}
                style={{
                  height: isSpeaking || isListening ? undefined : '3px',
                  animation: isSpeaking || isListening ? `pulseHeight 0.6s ease-in-out infinite alternate` : 'none',
                  animationDelay: delay,
                  transformOrigin: 'bottom',
                }}
              />
            );
          })}
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
