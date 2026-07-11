import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeResume as apiAnalyzeResume, chatWithCoach, analyzeInterview } from '../../service/BackendApi';
import {
  Loader2, Mic, MicOff, Send, FileText, Upload, Volume2, Target,
  ArrowLeft, History, Trash2, ChevronRight, X, MessageSquare, Sparkles,
  Trophy, TrendingUp, TrendingDown, BarChart3, Star, RefreshCw,
  CheckCircle, XCircle, AlertCircle, Settings
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import ConfirmDialog from '../components/custom/ConfirmDialog';
import InterviewerAvatar from './InterviewerAvatar';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const STORAGE_KEY = 'careerforge_coach_history';

const loadHistory = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
};
const saveHistory = (sessions) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
};

function MockInterview() {
  const navigate = useNavigate();
  const [resumeText, setResumeText] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [chatLoading, setChatLoading] = useState(false);

  const [history, setHistory] = useState(loadHistory);
  const [showHistory, setShowHistory] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [backConfirmOpen, setBackConfirmOpen] = useState(false);

  const [scorecard, setScorecard] = useState(null);
  const [scorecardLoading, setScorecardLoading] = useState(false);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [voicesList, setVoicesList] = useState([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState(localStorage.getItem('interviewer_voice') || '');
  const [voicePitch, setVoicePitch] = useState(parseFloat(localStorage.getItem('interviewer_pitch') || '1.05'));
  const [voiceRate, setVoiceRate] = useState(parseFloat(localStorage.getItem('interviewer_rate') || '0.92'));
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);

  const chatEndRef = useRef(null);
  const pendingSendRef = useRef(null);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const updateVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        setVoicesList(voices);
        if (!localStorage.getItem('interviewer_voice') && voices.length > 0) {
          const preferred = [
            v => v.name === 'Google US English',
            v => v.name.includes('Google') && v.lang.startsWith('en'),
            v => v.name.includes('Microsoft') && v.name.includes('Natural') && v.lang.startsWith('en'),
            v => v.name.includes('Microsoft') && v.lang.startsWith('en-US'),
            v => v.name.includes('Samantha'),
            v => v.lang === 'en-US' && !v.name.includes('('),
            v => v.lang.startsWith('en'),
          ];
          for (const test of preferred) {
            const match = voices.find(test);
            if (match) {
              setSelectedVoiceName(match.name);
              localStorage.setItem('interviewer_voice', match.name);
              break;
            }
          }
        }
      };
      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
      return () => {
        window.speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (analysis && messages.length > 1) {
      setHistory(prev => {
        const existing = prev.findIndex(s => s.jobTitle === jobTitle && s.timestamp.startsWith(new Date().toLocaleDateString()));
        const session = {
          id: existing >= 0 ? prev[existing].id : Date.now().toString(),
          timestamp: new Date().toLocaleString(),
          jobTitle,
          atsScore: analysis.atsScore,
          analysis,
          messages,
          resumeTextPreview: resumeText.slice(0, 200),
        };
        const updated = existing >= 0
          ? prev.map((s, i) => i === existing ? session : s)
          : [session, ...prev.slice(0, 19)];
        saveHistory(updated);
        return updated;
      });
    }
  }, [messages, analysis]);

  const clearHistory = () => { setHistory([]); saveHistory([]); };

  const loadSession = (session) => {
    setJobTitle(session.jobTitle);
    setResumeText(session.resumeTextPreview);
    setAnalysis(session.analysis);
    setMessages(session.messages);
    setShowHistory(false);
  };

  const deleteSession = (id, e) => {
    e.stopPropagation();
    setHistory(prev => {
      const updated = prev.filter(s => s.id !== id);
      saveHistory(updated);
      return updated;
    });
  };

  const handleBackClick = () => {
    if (analysis && !scorecard) {
      setBackConfirmOpen(true);
    } else {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      setCurrentWord('');
      navigate(-1);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
      try {
        setLoading(true);
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const loadingTask = pdfjsLib.getDocument({ data: uint8Array });
        const pdf = await loadingTask.promise;
        let extractedText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          extractedText += textContent.items.map(item => item.str).join(' ') + '\n';
        }
        setResumeText(extractedText);
        setLoading(false);
      } catch (err) {
        console.error('Error parsing PDF:', err);
        alert('Failed to parse PDF file.');
        setLoading(false);
      }
    } else {
      const reader = new FileReader();
      reader.onload = (evt) => setResumeText(evt.target.result);
      reader.readAsText(file);
    }
  };

  const analyzeResume = async () => {
    if (!resumeText || !jobTitle) return;
    setLoading(true);
    try {
      const parsed = await apiAnalyzeResume(resumeText, jobTitle);
      setAnalysis(parsed);
      setMessages([{
        role: 'ai',
        content: `Hi! I'm your AI Interviewer. I've reviewed your resume for the ${jobTitle} role. Your ATS score is ${parsed.atsScore} out of 100. Let's start the mock interview. Could you tell me a little bit about yourself and your relevant experience?`
      }]);
    } catch (error) {
      console.error(error);
      alert('Analysis failed. Make sure the backend server is running on port 8000.');
    } finally {
      setLoading(false);
    }
  };

  const startNew = () => {
    setAnalysis(null);
    setMessages([]);
    setResumeText('');
    setJobTitle('');
    setCurrentInput('');
    setScorecard(null);
  };

  const endInterviewAndAnalyze = async () => {
    if (messages.length < 3) {
      alert('Please complete at least a few exchanges before ending the interview.');
      return;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setCurrentWord('');
    
    setScorecardLoading(true);
    setScorecard(null);
    try {
      const result = await analyzeInterview(messages, resumeText, jobTitle);
      setScorecard(result);
    } catch (err) {
      console.error('Interview analysis failed:', err);
      alert('Failed to analyze interview. Please ensure the backend is running.');
    } finally {
      setScorecardLoading(false);
    }
  };

  const getHumanVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    if (selectedVoiceName) {
      const match = voices.find(v => v.name === selectedVoiceName);
      if (match) return match;
    }
    const preferred = [
      v => v.name === 'Google US English',
      v => v.name.includes('Google') && v.lang.startsWith('en'),
      v => v.name.includes('Microsoft') && v.name.includes('Natural') && v.lang.startsWith('en'),
      v => v.name.includes('Microsoft') && v.lang.startsWith('en-US'),
      v => v.name.includes('Samantha'),
      v => v.lang === 'en-US' && !v.name.includes('('),
      v => v.lang.startsWith('en'),
    ];
    for (const test of preferred) {
      const match = voices.find(test);
      if (match) return match;
    }
    return voices[0] || null;
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window) || !text) return;
    window.speechSynthesis.cancel();
    
    // Clean text and split into sentences
    const sentences = text.replace(/([.?!])\s+/g, '$1|').split('|').map(s => s.trim()).filter(Boolean);
    
    const speakQueue = (index) => {
      if (index >= sentences.length) {
        setIsSpeaking(false);
        setCurrentWord('');
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(sentences[index]);
      const voice = getHumanVoice();
      if (voice) utterance.voice = voice;
      
      utterance.lang = 'en-US';
      utterance.rate = voiceRate;
      utterance.pitch = voicePitch;
      utterance.volume = 1.0;
      
      utterance.onstart = () => {
        setIsSpeaking(true);
      };
      
      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          const remainingText = sentences[index].slice(event.charIndex);
          const word = remainingText.split(/[\s,.:;!?]+/)[0];
          setCurrentWord(word);
        }
      };
      
      utterance.onend = () => {
        if (index === sentences.length - 1) {
          setIsSpeaking(false);
          setCurrentWord('');
        } else {
          setTimeout(() => speakQueue(index + 1), 180);
        }
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
        setCurrentWord('');
      };
      
      window.speechSynthesis.speak(utterance);
    };
    
    setIsSpeaking(true);
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', () => speakQueue(0), { once: true });
    } else {
      speakQueue(0);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === 'ai') speakText(lastMsg.content);
    }
  }, [messages]);

  const toggleRecording = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Your browser does not support Speech Recognition. Please use Chrome.');
      return;
    }
    if (isRecording) { setIsRecording(false); return; }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.onstart = () => setIsRecording(true);
    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
      }
      if (finalTranscript) {
        pendingSendRef.current = finalTranscript;
        setCurrentInput(finalTranscript);
      }
    };
    recognition.onerror = (event) => { console.error(event.error); setIsRecording(false); };
    recognition.onend = () => {
      setIsRecording(false);
      if (pendingSendRef.current && pendingSendRef.current.trim()) {
        const spokenText = pendingSendRef.current.trim();
        pendingSendRef.current = null;
        setMessages(prev => {
          const newMessages = [...prev, { role: 'user', content: spokenText }];
          setChatLoading(true);
          chatWithCoach(spokenText, prev, resumeText, jobTitle)
            .then(data => setMessages(m => [...m, { role: 'ai', content: data.reply }]))
            .catch(() => setMessages(m => [...m, { role: 'ai', content: 'Sorry, I could not connect to the backend.' }]))
            .finally(() => setChatLoading(false));
          return newMessages;
        });
        setCurrentInput('');
      }
    };
    recognition.start();
  };

  const sendMessage = async () => {
    if (!currentInput.trim()) return;
    const newMessages = [...messages, { role: 'user', content: currentInput }];
    setMessages(newMessages);
    setCurrentInput('');
    setChatLoading(true);
    try {
      const data = await chatWithCoach(currentInput, messages, resumeText, jobTitle);
      setMessages([...newMessages, { role: 'ai', content: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: 'ai', content: 'Sorry, I could not connect to the backend.' }]);
    } finally {
      setChatLoading(false);
    }
  };

  const scoreColor = (score) => score >= 75 ? 'text-green-400' : score >= 50 ? 'text-yellow-400' : 'text-red-400';

  const verdictConfig = (verdict) => {
    switch (verdict) {
      case 'Strong Hire': return { color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', icon: <CheckCircle className="w-4 h-4" /> };
      case 'Hire': return { color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20', icon: <CheckCircle className="w-4 h-4" /> };
      case 'No Hire': return { color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', icon: <XCircle className="w-4 h-4" /> };
      case 'Strong No Hire': return { color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', icon: <XCircle className="w-4 h-4" /> };
      default: return { color: 'text-white/40', bg: 'bg-white/5 border-white/10', icon: <AlertCircle className="w-4 h-4" /> };
    }
  };

  const gradeColor = (grade) => {
    switch (grade) {
      case 'A': return 'text-emerald-400';
      case 'B': return 'text-sky-400';
      case 'C': return 'text-amber-400';
      case 'D': return 'text-orange-400';
      case 'F': return 'text-rose-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="flex bg-background min-h-full w-full">
      <ConfirmDialog
        open={confirmOpen}
        title="Clear Interview History"
        message="This will permanently delete all saved interview sessions. This action cannot be undone."
        confirmLabel="Clear All"
        onConfirm={() => { clearHistory(); setConfirmOpen(false); }}
        onCancel={() => setConfirmOpen(false)}
      />

      <ConfirmDialog
        open={backConfirmOpen}
        title="Leave Interview?"
        message="Your active interview progress will be lost. Are you sure you want to go back?"
        confirmLabel="Leave"
        onConfirm={() => {
          if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
          }
          setIsSpeaking(false);
          setCurrentWord('');
          setBackConfirmOpen(false);
          navigate(-1);
        }}
        onCancel={() => setBackConfirmOpen(false)}
      />

      {/* History Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-card border-r border-border flex flex-col transform transition-transform duration-300 ${showHistory ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <History className="w-4 h-4 text-gold" /> Interview History
          </div>
          <div className="flex items-center gap-2">
            {history.length > 0 && (
              <button onClick={() => setConfirmOpen(true)} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors">
                <Trash2 className="w-3 h-3" /> Clear All
              </button>
            )}
            <button onClick={() => setShowHistory(false)} className="p-1 hover:bg-secondary rounded-full transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {history.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground text-sm">
              <History className="w-10 h-10 mx-auto mb-3 opacity-30" />
              No interview sessions yet.<br />Complete an analysis to save it here.
            </div>
          ) : (
            history.map(session => (
              <div key={session.id} onClick={() => loadSession(session)} className="p-4 border-b border-border hover:bg-secondary/50 cursor-pointer group transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{session.jobTitle}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{session.timestamp}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs font-bold ${scoreColor(session.atsScore)}`}>ATS {session.atsScore}/100</span>
                      <span className="text-xs text-muted-foreground">· {session.messages.length} messages</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button onClick={(e) => deleteSession(session.id, e)} className="p-1 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showHistory && <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setShowHistory(false)} />}

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="relative mb-12 text-center animate-slide-up">
          <button
            onClick={handleBackClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors group border border-white/5 bg-white/[0.02] px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back
          </button>
          <div className="flex justify-center items-center gap-1.5 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AI Career Tools
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-3 tracking-wide text-white">Mock Interview</h1>
          <p className="text-sm text-white/50 max-w-xl mx-auto leading-relaxed">
            Upload your resume, get an instant ATS score, and practice with a real-time Voice AI interviewer powered by Llama 3.
          </p>
          <button
            onClick={() => setShowHistory(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-xs text-white/60 hover:text-amber-400 border border-white/5 hover:border-amber-500/30 bg-white/[0.02] hover:bg-amber-500/5 px-3 py-1.5 rounded-lg transition-all"
          >
            <History className="w-3.5 h-3.5" />
            History {history.length > 0 && <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full">{history.length}</span>}
          </button>
        </div>

        {!analysis ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-6 flex flex-col gap-6 shadow-xl">
              <h2 className="text-lg font-bold font-serif flex items-center gap-2"><FileText className="text-amber-500 w-4 h-4" /> Profile Information</h2>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2 block">Target Job Title</label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full bg-[#090909] border border-white/5 rounded-xl px-4 py-2.5 text-xs md:text-sm text-white focus:border-amber-500/30 outline-none transition-colors placeholder:text-white/20"
                  placeholder="e.g. Senior Frontend Developer"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2 block">Resume Text Content</label>
                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  className="w-full flex-1 min-h-[220px] bg-[#090909] border border-white/5 rounded-xl p-4 focus:border-amber-500/30 outline-none resize-none font-mono text-xs md:text-sm text-white leading-relaxed placeholder:text-white/20"
                  placeholder="Paste raw text contents of your resume here..."
                />
              </div>
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="relative">
                  <input type="file" accept=".txt,.json,.md,.pdf" onChange={handleFileUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <button className="bg-white/5 text-white border border-white/10 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors pointer-events-none">
                    <Upload className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" /> Upload PDF
                  </button>
                </div>
                <p className="text-[10px] text-white/30 font-semibold">Supported: .pdf, .txt, .md</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <button
                onClick={analyzeResume}
                disabled={loading || !resumeText || !jobTitle}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/10 hover:scale-105 transition-all disabled:opacity-40 disabled:hover:scale-100 flex items-center gap-2.5 text-sm uppercase tracking-wider"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin text-black" /> : <Target className="w-5 h-5 text-black" />}
                {loading ? 'Analyzing profile...' : 'Generate Analysis & Start'}
              </button>

              {history.length > 0 && (
                <div className="w-full max-w-sm">
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-3 text-center">— Recent Sessions —</p>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {history.slice(0, 5).map(session => (
                      <button
                        key={session.id}
                        onClick={() => loadSession(session)}
                        className="w-full rounded-xl border border-white/5 bg-white/[0.01] hover:border-amber-500/20 hover:bg-white/[0.03] p-3 flex items-center justify-between transition-colors text-left group"
                      >
                        <div className="min-w-0 pr-2">
                          <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate">{session.jobTitle}</p>
                          <p className="text-[10px] text-white/30 mt-0.5">{session.timestamp}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`text-[10px] font-bold ${scoreColor(session.atsScore)}`}>{session.atsScore}% ATS</span>
                          <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-amber-400 transition-colors" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* ATS Score Card */}
              <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold tracking-wider text-white/80 uppercase">ATS Evaluation</h3>
                  <button onClick={startNew} className="text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-amber-400 border border-white/5 px-2 py-0.5 rounded bg-white/[0.02] transition-colors">+ Reset</button>
                </div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-white/5 bg-black/50">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-white/5" />
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-amber-500" strokeDasharray={`${analysis.atsScore * 2.26} 226`} />
                    </svg>
                    <span className="text-xl font-bold font-mono">{analysis.atsScore}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Target Position</p>
                    <p className="font-semibold text-amber-400 truncate leading-relaxed">{jobTitle}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wide">Key Strengths</h4>
                  <ul className="text-xs space-y-1.5 text-white/60 list-disc list-inside">
                    {analysis.strengths?.map((s, i) => <li key={i} className="leading-relaxed">{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-rose-400 mb-2 uppercase tracking-wide">Areas to Improve</h4>
                  <ul className="text-xs space-y-1.5 text-white/60 list-disc list-inside">
                    {analysis.weaknesses?.map((w, i) => <li key={i} className="leading-relaxed">{w}</li>)}
                  </ul>
                </div>
              </div>

              {/* Roadmap */}
              <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-6 shadow-xl flex-1">
                <h3 className="text-sm font-bold tracking-wider text-white/80 border-b border-white/5 pb-3 mb-5 uppercase">Action Roadmap</h3>
                <div className="space-y-4">
                  {analysis.roadmap?.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">{i + 1}</div>
                        {i !== analysis.roadmap.length - 1 && <div className="w-px h-full bg-white/5 mt-1.5"></div>}
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed pt-0.5 pb-2">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Panel OR Scorecard */}
            <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col h-[650px] shadow-xl overflow-hidden">
              {scorecard ? (
                <div className="flex flex-col h-full overflow-hidden">
                  <div className="p-4 border-b border-white/5 bg-[#070707] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm tracking-wide">Interview Scorecard</h3>
                        <p className="text-[10px] text-amber-400/60 uppercase tracking-wider font-semibold">{jobTitle}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setScorecard(null)}
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider border border-white/5 text-white/40 hover:text-amber-400 hover:border-amber-500/30 px-3 py-1.5 rounded-xl transition-all bg-white/[0.02]"
                    >
                      <RefreshCw className="w-3 h-3" /> Continue Interview
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-5 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0 w-24 h-24">
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 96 96">
                          <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="5" fill="transparent" className="text-white/5" />
                          <circle
                            cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="5" fill="transparent"
                            className={scorecard.overallScore >= 75 ? 'text-emerald-500' : scorecard.overallScore >= 50 ? 'text-amber-500' : 'text-rose-500'}
                            strokeDasharray={`${(scorecard.overallScore / 100) * 251.2} 251.2`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-2xl font-extrabold font-mono leading-none">{scorecard.overallScore}</span>
                          <span className="text-[9px] text-white/30 uppercase tracking-wider font-bold">Score</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2 pt-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-4xl font-black font-mono ${gradeColor(scorecard.grade)}`}>{scorecard.grade}</span>
                          {(() => { const vc = verdictConfig(scorecard.verdict); return (
                            <span className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border ${vc.bg} ${vc.color}`}>
                              {vc.icon} {scorecard.verdict}
                            </span>
                          ); })()}
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">{scorecard.summary}</p>
                      </div>
                    </div>

                    {scorecard.categoryScores && (
                      <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4 space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/30 flex items-center gap-1.5">
                          <BarChart3 className="w-3 h-3" /> Category Breakdown
                        </p>
                        {[
                          { key: 'communication', label: 'Communication' },
                          { key: 'technicalKnowledge', label: 'Technical Knowledge' },
                          { key: 'problemSolving', label: 'Problem Solving' },
                          { key: 'cultureFit', label: 'Culture Fit' },
                        ].map(({ key, label }) => {
                          const val = scorecard.categoryScores[key] || 0;
                          const barColor = val >= 75 ? 'from-emerald-500 to-emerald-600' : val >= 50 ? 'from-amber-500 to-amber-600' : 'from-rose-500 to-rose-600';
                          return (
                            <div key={key}>
                              <div className="flex justify-between text-[10px] font-semibold mb-1">
                                <span className="text-white/50">{label}</span>
                                <span className={val >= 75 ? 'text-emerald-400' : val >= 50 ? 'text-amber-400' : 'text-rose-400'}>{val}</span>
                              </div>
                              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className={`h-full bg-gradient-to-r ${barColor} rounded-full transition-all duration-700`} style={{ width: `${val}%` }} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {scorecard.strengths?.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" /> Strengths
                        </p>
                        {scorecard.strengths.map((s, i) => (
                          <div key={i} className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03] p-3.5">
                            <p className="text-xs font-bold text-emerald-300 mb-1">{s.title}</p>
                            <p className="text-[11px] text-white/50 leading-relaxed">{s.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {scorecard.improvements?.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                          <TrendingDown className="w-3.5 h-3.5" /> Areas to Improve
                        </p>
                        {scorecard.improvements.map((s, i) => (
                          <div key={i} className="rounded-xl border border-amber-500/10 bg-amber-500/[0.03] p-3.5">
                            <p className="text-xs font-bold text-amber-300 mb-1">{s.title}</p>
                            <p className="text-[11px] text-white/50 leading-relaxed">{s.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={startNew}
                      className="w-full mt-2 flex items-center justify-center gap-2 border border-white/5 text-white/40 hover:text-white hover:border-white/10 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all bg-white/[0.01] hover:bg-white/[0.03]"
                    >
                      <Star className="w-3.5 h-3.5" /> Start New Interview
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row h-full overflow-hidden">
                  {/* Left Column: Virtual Interviewer View */}
                  <div className="w-full md:w-[38%] border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-[#050507]">
                    <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#070707] flex-shrink-0">
                      <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-amber-500">Virtual Interviewer</h3>
                        <p className="text-[10px] text-white/40 mt-0.5">Live Avatar Feed</p>
                      </div>
                      <button
                        onClick={() => setShowVoiceSettings(!showVoiceSettings)}
                        className={`p-2 border border-white/5 hover:border-white/10 rounded-xl transition-all ${
                          showVoiceSettings ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 'text-white/50 hover:text-white bg-white/[0.02]'
                        }`}
                        title="Voice & Avatar Settings"
                      >
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex-1 flex flex-col relative overflow-hidden bg-gradient-to-b from-[#050507] to-black">
                      {showVoiceSettings && (
                        <div className="absolute inset-0 bg-[#050507]/95 backdrop-blur-md p-5 z-20 flex flex-col gap-4 overflow-y-auto animate-fade-in">
                          <div className="flex justify-between items-center pb-2 border-b border-white/5">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white/80">Voice Customization</h4>
                            <button 
                              onClick={() => setShowVoiceSettings(false)} 
                              className="text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-wider bg-white/5 px-2 py-1 rounded"
                            >
                              Close
                            </button>
                          </div>

                          <div className="space-y-4 pt-2">
                            <div>
                              <label className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5 block">Voice Accent / Speaker</label>
                              <select
                                value={selectedVoiceName}
                                onChange={(e) => {
                                  setSelectedVoiceName(e.target.value);
                                  localStorage.setItem('interviewer_voice', e.target.value);
                                }}
                                className="w-full bg-[#0a0a0c] border border-white/5 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500/30 outline-none"
                              >
                                {voicesList.filter(v => v.lang.startsWith('en')).map((v, i) => (
                                  <option key={i} value={v.name}>{v.name} ({v.lang})</option>
                                ))}
                                {voicesList.filter(v => !v.lang.startsWith('en')).map((v, i) => (
                                  <option key={`other-${i}`} value={v.name}>{v.name} ({v.lang})</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
                                <span>Speech Speed ({voiceRate}x)</span>
                              </div>
                              <input
                                type="range"
                                min="0.6"
                                max="1.5"
                                step="0.05"
                                value={voiceRate}
                                onChange={(e) => {
                                  const val = parseFloat(e.target.value);
                                  setVoiceRate(val);
                                  localStorage.setItem('interviewer_rate', val.toString());
                                }}
                                className="w-full accent-amber-500"
                              />
                            </div>

                            <div>
                              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
                                <span>Voice Pitch ({voicePitch})</span>
                              </div>
                              <input
                                type="range"
                                min="0.7"
                                max="1.3"
                                step="0.05"
                                value={voicePitch}
                                onChange={(e) => {
                                  const val = parseFloat(e.target.value);
                                  setVoicePitch(val);
                                  localStorage.setItem('interviewer_pitch', val.toString());
                                }}
                                className="w-full accent-amber-500"
                              />
                            </div>
                          </div>

                          <button
                            onClick={() => speakText("Hello! This is a test of my new voice configuration. Does this sound human-like and natural to you?")}
                            className="w-full mt-4 flex items-center justify-center gap-2 bg-amber-500 text-black hover:bg-amber-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors"
                          >
                            <Volume2 className="w-4 h-4" /> Test Voice Output
                          </button>
                        </div>
                      )}

                      <div className="flex-1 flex items-center justify-center">
                        <InterviewerAvatar
                          isSpeaking={isSpeaking}
                          isThinking={chatLoading}
                          isListening={isRecording}
                          currentWord={currentWord}
                        />
                      </div>

                      {/* Speaking Subtitle Bubble */}
                      {isSpeaking && messages.length > 0 && (
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-white/5 rounded-xl p-3.5 backdrop-blur-md z-10 animate-fade-in shadow-xl max-h-24 overflow-y-auto">
                          <p className="text-[9px] uppercase font-bold text-amber-500 tracking-widest mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> Speaking
                          </p>
                          <p className="text-xs text-white/80 leading-relaxed italic">
                            {(() => {
                              const lastMsg = messages[messages.length - 1];
                              return lastMsg && lastMsg.role === 'ai' ? lastMsg.content : '';
                            })()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Chat transcript & actions */}
                  <div className="flex-1 flex flex-col h-full bg-[#030304] overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#070707] flex-shrink-0">
                      <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-white/70">Interview Transcript</h3>
                        <p className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5 font-semibold uppercase tracking-wider">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block animate-pulse"></span> Audio Feed Active
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {messages.length >= 3 && (
                          <button
                            onClick={endInterviewAndAnalyze}
                            disabled={scorecardLoading}
                            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider border border-rose-500/20 text-rose-400 hover:bg-rose-500/10 px-3 py-1.5 rounded-xl transition-all bg-rose-500/5 disabled:opacity-50"
                          >
                            {scorecardLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Trophy className="w-3 h-3" />}
                            {scorecardLoading ? 'Analyzing...' : 'End & Analyze'}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#040404]/30 select-text">
                      {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`rounded-2xl px-4 py-3 max-w-[80%] text-xs md:text-sm shadow-md leading-relaxed ${
                            msg.role === 'user'
                              ? 'bg-amber-500 text-black font-semibold rounded-tr-sm ml-auto'
                              : 'bg-[#090909] text-white/80 border border-white/5 rounded-tl-sm'
                          }`}>{msg.content}</div>
                        </div>
                      ))}
                      {chatLoading && (
                        <div className="flex justify-start">
                          <div className="bg-[#090909] border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 text-white/50 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                          </div>
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>

                    <div className="p-4 border-t border-white/5 bg-[#070707] flex gap-3 items-end flex-shrink-0">
                      <button
                        onClick={toggleRecording}
                        className={`p-3 rounded-xl flex-shrink-0 transition-all border ${
                          isRecording
                            ? 'bg-rose-500/20 text-rose-500 border-rose-500/30 animate-pulse'
                            : 'bg-white/5 text-white/50 border-white/5 hover:bg-white/10 hover:text-white'
                        }`}
                        title={isRecording ? 'Stop Recording' : 'Start Voice Answer'}
                      >
                        {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>
                      <textarea
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                        placeholder="Type your response or click the microphone to speak..."
                        className="flex-1 bg-[#090909] border border-white/5 rounded-xl p-3.5 max-h-32 min-h-[50px] resize-none focus:border-amber-500/30 outline-none text-xs md:text-sm text-white leading-relaxed placeholder:text-white/20"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!currentInput.trim() || chatLoading}
                        className="p-3 bg-amber-500 text-black rounded-xl flex-shrink-0 hover:scale-105 transition-transform disabled:opacity-40 disabled:hover:scale-100"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MockInterview;
