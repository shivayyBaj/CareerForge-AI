import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildStartup } from '../../service/BackendApi';
import { Rocket, Terminal, CheckCircle2, Loader2, Play, ArrowLeft, History, Trash2, ChevronRight, X, Sparkles, FileText, BarChart3, Presentation } from 'lucide-react';
import ConfirmDialog from '../components/custom/ConfirmDialog';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'careerforge_startup_history';

const loadHistory = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
};
const saveHistory = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

function StartupBuilder() {
  const navigate = useNavigate();
  const [idea, setIdea] = useState('');
  const [isBuilding, setIsBuilding] = useState(false);
  const [logs, setLogs] = useState([]);
  const [results, setResults] = useState({ research: null, businessModel: null, pitchDeck: null });
  const [activeTab, setActiveTab] = useState('logs');

  
  const [history, setHistory] = useState(loadHistory);
  const [showHistory, setShowHistory] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLog = (msg) => setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), msg }]);

  const clearHistory = () => {
    setHistory([]);
    saveHistory([]);
  };

  const loadSession = (session) => {
    setIdea(session.idea);
    setResults({ research: session.research, businessModel: session.businessModel, pitchDeck: session.pitchDeck });
    setLogs([{ time: session.timestamp, msg: `Loaded saved session: "${session.idea.slice(0, 60)}..."` }]);
    setActiveTab('research');
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

  const startNew = () => {
    setIdea('');
    setResults({ research: null, businessModel: null, pitchDeck: null });
    setLogs([]);
    setActiveTab('logs');
  };

  const startAgents = async () => {
    if (!idea.trim()) return;
    setIsBuilding(true);
    setLogs([]);
    setResults({ research: null, businessModel: null, pitchDeck: null });
    setActiveTab('logs');

    addLog(`Initializing multi-agent crew for idea: "${idea.substring(0, 50)}..."`);
    addLog('Agent CVO (Chief Visionary Officer): Spawning vision parser...');
    addLog('Agent MRA (Market Research Analyst): Waiting for vision...');
    addLog('Agent BS (Business Strategist): Waiting for analysis data...');
    addLog('Connecting to Groq agent backend...');

    try {
      const data = await buildStartup(idea);

      addLog('Agent CVO: Vision parsed successfully ✓');
      addLog('Agent MRA: Competitor analysis & market research completed ✓');
      addLog('Agent BS: Business Model canvas generated ✓');
      addLog('Agent CVO: Pitch Deck outline & script finalized ✓');
      addLog('Orchestrator: All agent scripts completed successfully!');

      const newResults = {
        research: data.research,
        businessModel: data.businessModel,
        pitchDeck: data.pitchDeck,
      };
      setResults(newResults);

      
      const session = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleString(),
        idea: idea.trim(),
        ideaPreview: idea.trim().slice(0, 80),
        ...newResults,
      };
      setHistory(prev => {
        const updated = [session, ...prev.slice(0, 19)];
        saveHistory(updated);
        return updated;
      });

      setActiveTab('research');
    } catch (error) {
      console.error(error);
      addLog(`ERROR: Agent build system failed. Could not connect to the backend server. Make sure it is running and accessible.`);
    } finally {
      setIsBuilding(false);
    }
  };

  
  const renderFormattedText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('###')) {
        return <h4 key={idx} className="text-base font-bold text-blue-600 mt-6 mb-2 tracking-wide font-serif">{trimmed.replace(/###/g, '').trim()}</h4>;
      }
      if (trimmed.startsWith('##')) {
        return <h3 key={idx} className="text-lg font-bold text-slate-900 mt-8 mb-4 border-b border-slate-200 pb-2 font-serif">{trimmed.replace(/##/g, '').trim()}</h3>;
      }
      if (trimmed.startsWith('#')) {
        return <h2 key={idx} className="text-xl font-extrabold text-blue-600 mt-10 mb-6 font-serif">{trimmed.replace(/#/g, '').trim()}</h2>;
      }
      if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
        return (
          <li key={idx} className="text-xs md:text-sm text-slate-500 ml-5 list-disc mb-1.5 leading-relaxed">
            {trimmed.substring(1).trim()}
          </li>
        );
      }
      if (/^\d+\./.test(trimmed)) {
        return (
          <li key={idx} className="text-xs md:text-sm text-slate-500 ml-5 list-decimal mb-1.5 leading-relaxed">
            {trimmed.replace(/^\d+\./, '').trim()}
          </li>
        );
      }
      if (trimmed === '') {
        return <div key={idx} className="h-2" />;
      }
      return <p key={idx} className="text-xs md:text-sm text-slate-500 leading-relaxed mb-3">{trimmed}</p>;
    });
  };

  return (
    <div className="flex bg-white text-slate-900 min-h-screen w-full relative overflow-hidden">
      
      {/* Background blurs */}
      <div className="absolute top-[10%] left-[-10%] w-full max-w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-full max-w-[500px] h-[500px] bg-blue-100 blur-[120px] rounded-full pointer-events-none -z-10" />

      {}
      <ConfirmDialog
        open={confirmOpen}
        title="Clear Startup History"
        message="This will permanently delete all saved startup blueprints. This action cannot be undone."
        confirmLabel="Clear All"
        onConfirm={() => { clearHistory(); setConfirmOpen(false); }}
        onCancel={() => setConfirmOpen(false)}
      />

      {}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white/90 border-r border-slate-200 flex flex-col transform transition-transform duration-300 backdrop-blur-xl ${showHistory ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold tracking-wide font-serif text-sm">
            <History className="w-4 h-4 text-blue-600" /> Startup History
          </div>
          <div className="flex items-center gap-2">
            {history.length > 0 && (
              <button onClick={() => setConfirmOpen(true)} className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors bg-rose-500/10 border border-rose-500/20 px-2 py-1 rounded-lg">
                <Trash2 className="w-3 h-3" /> Clear All
              </button>
            )}
            <button onClick={() => setShowHistory(false)} className="p-1 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors">
              <X className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {history.length === 0 ? (
            <div className="p-6 text-center text-slate-500 text-xs mt-10">
              <History className="w-8 h-8 mx-auto mb-3 opacity-20" />
              No startup builds yet.<br />Describe an idea and deploy your crew.
            </div>
          ) : (
            history.map(session => (
              <div
                key={session.id}
                onClick={() => loadSession(session)}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-100 bg-slate-50 hover:bg-slate-100 hover:bg-slate-50 hover:bg-slate-100 cursor-pointer group transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-relaxed">{session.ideaPreview}{session.idea.length > 80 ? '...' : ''}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{session.timestamp}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">Blueprint ready</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button 
                      onClick={(e) => deleteSession(session.id, e)} 
                      className="p-1 text-slate-500 hover:text-rose-400 rounded-md hover:bg-slate-50 transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showHistory && <div className="fixed inset-0 z-40 bg-white/60 backdrop-blur-sm" onClick={() => setShowHistory(false)} />}

      {}
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
            <Sparkles className="w-3.5 h-3.5" /> Agent Blueprint Workspace
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-3 tracking-wide text-slate-900">Multi-Agent Startup Builder</h1>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">Describe your idea to launch a specialized crew of AI business strategy agents to build your next venture blueprint.</p>
          <button
            onClick={() => setShowHistory(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 border border-slate-200 hover:border-blue-100 bg-slate-50 hover:bg-slate-100 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-all"
          >
            <History className="w-3.5 h-3.5" />
            History {history.length > 0 && <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">{history.length}</span>}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {}
          <div className="lg:col-span-1 flex flex-col gap-6 animate-fade-in">
            <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white/[0.02] to-transparent p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold font-serif flex items-center gap-2 text-slate-900">
                  <Rocket className="text-blue-600 w-4 h-4"/> Business Concept
                </h2>
                {(results.research || idea) && (
                  <button 
                    onClick={startNew} 
                    className="text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 border border-slate-200 hover:border-blue-100 px-2 py-1 rounded bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    + New Concept
                  </button>
                )}
              </div>
              <textarea
                className="w-full bg-white border border-slate-200 rounded-xl p-4 min-h-[220px] resize-none focus:border-blue-100 outline-none text-xs md:text-sm text-slate-900 placeholder:text-slate-500 mb-6 leading-relaxed"
                placeholder="Describe your startup idea. E.g., 'A local neighborhood tool-sharing app with automated calendar and damage insurance, targetting urban professionals.'"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                disabled={isBuilding}
              />
              <button
                onClick={startAgents}
                disabled={isBuilding || !idea.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-100 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-40 disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm"
              >
                {isBuilding ? <Loader2 className="w-4 h-4 animate-spin"/> : <Play className="w-4 h-4"/>}
                {isBuilding ? "Deploying Agents..." : "Deploy Agent Team"}
              </button>
            </div>

            {}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white/[0.01] to-transparent p-6 shadow-xl flex-1">
              <h3 className="text-sm font-bold tracking-wider text-slate-500 border-b border-slate-200 pb-3 mb-4 font-serif">Crew Deployment Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${isBuilding ? 'bg-blue-600 animate-pulse' : (results.pitchDeck ? 'bg-emerald-400' : 'bg-slate-50')}`}></div>
                    <span className="text-xs font-semibold text-slate-500">Chief Visionary Officer</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">CVO-Agent</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${isBuilding && results.research === null ? 'bg-blue-600 animate-pulse' : (results.research ? 'bg-emerald-400' : 'bg-slate-50')}`}></div>
                    <span className="text-xs font-semibold text-slate-500">Market Research Analyst</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">MRA-Agent</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${isBuilding && results.research !== null && results.businessModel === null ? 'bg-blue-600 animate-pulse' : (results.businessModel ? 'bg-emerald-400' : 'bg-slate-50')}`}></div>
                    <span className="text-xs font-semibold text-slate-500">Business Strategist</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">BS-Agent</span>
                </div>
              </div>

              {}
              {history.length > 0 && !isBuilding && (
                <div className="mt-8 pt-4 border-t border-slate-200">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-3">Recent Blueprints</p>
                  <div className="space-y-2">
                    {history.slice(0, 3).map(session => (
                      <button
                        key={session.id}
                        onClick={() => loadSession(session)}
                        className="w-full text-left p-2.5 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 hover:bg-slate-100 transition-all duration-300 group"
                      >
                        <p className="text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors line-clamp-1 leading-relaxed">{session.ideaPreview}</p>
                        <p className="text-[10px] text-slate-500">{session.timestamp}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {}
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col h-[650px] shadow-xl overflow-hidden animate-slide-up">
            <div className="border-b border-slate-200 flex bg-white/80 backdrop-blur-md overflow-x-auto select-none">
              <button 
                onClick={() => setActiveTab('logs')} 
                className={`px-5 py-4 font-bold text-xs tracking-wider uppercase flex items-center gap-2 whitespace-nowrap transition-all border-b-2 ${
                  activeTab === 'logs' ? 'text-blue-600 border-blue-200 bg-slate-50 hover:bg-slate-100' : 'text-slate-500 hover:text-slate-500 border-transparent'
                }`}
              >
                <Terminal className="w-3.5 h-3.5"/> Console Logs
              </button>
              <button 
                onClick={() => setActiveTab('research')} 
                disabled={!results.research} 
                className={`px-5 py-4 font-bold text-xs tracking-wider uppercase flex items-center gap-2 whitespace-nowrap transition-all border-b-2 disabled:opacity-30 ${
                  activeTab === 'research' ? 'text-blue-600 border-blue-200 bg-slate-50 hover:bg-slate-100' : 'text-slate-500 hover:text-slate-500 border-transparent'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5"/> Market Analysis {results.research && <CheckCircle2 className="w-3 h-3 text-emerald-400"/>}
              </button>
              <button 
                onClick={() => setActiveTab('model')} 
                disabled={!results.businessModel} 
                className={`px-5 py-4 font-bold text-xs tracking-wider uppercase flex items-center gap-2 whitespace-nowrap transition-all border-b-2 disabled:opacity-30 ${
                  activeTab === 'model' ? 'text-blue-600 border-blue-200 bg-slate-50 hover:bg-slate-100' : 'text-slate-500 hover:text-slate-500 border-transparent'
                }`}
              >
                <FileText className="w-3.5 h-3.5"/> Business Strategy {results.businessModel && <CheckCircle2 className="w-3 h-3 text-emerald-400"/>}
              </button>
              <button 
                onClick={() => setActiveTab('pitch')} 
                disabled={!results.pitchDeck} 
                className={`px-5 py-4 font-bold text-xs tracking-wider uppercase flex items-center gap-2 whitespace-nowrap transition-all border-b-2 disabled:opacity-30 ${
                  activeTab === 'pitch' ? 'text-blue-600 border-blue-200 bg-slate-50 hover:bg-slate-100' : 'text-slate-500 hover:text-slate-500 border-transparent'
                }`}
              >
                <Presentation className="w-3.5 h-3.5"/> Pitch Proposal {results.pitchDeck && <CheckCircle2 className="w-3 h-3 text-emerald-400"/>}
              </button>
            </div>

            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-white/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="min-h-full"
                >
                  {activeTab === 'logs' && (
                    <div className="bg-white border border-slate-200 text-emerald-400 font-mono text-xs md:text-sm p-5 rounded-2xl min-h-full shadow-inner leading-relaxed">
                      <div className="mb-4 text-slate-500"># Crew Agent terminal initialized. Awaiting commands...</div>
                      {logs.map((log, idx) => (
                        <div key={idx} className="mb-2.5">
                          <span className="text-slate-500">[{log.time}]</span>{' '}
                          <span className={log.msg.includes('ERROR') ? 'text-rose-400' : log.msg.includes('SUCCESS') ? 'text-emerald-400' : 'text-emerald-400/90'}>
                            {log.msg}
                          </span>
                        </div>
                      ))}
                      {isBuilding && (
                        <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold animate-pulse">
                          <span className="w-1.5 h-4 bg-blue-600 inline-block animate-pulse"></span> Deploying neural crew...
                        </div>
                      )}
                      <div ref={logEndRef} />
                    </div>
                  )}
                  {activeTab === 'research' && (
                    <div className="prose prose-invert max-w-none pb-12">
                      {renderFormattedText(results.research)}
                    </div>
                  )}
                  {activeTab === 'model' && (
                    <div className="prose prose-invert max-w-none pb-12">
                      {renderFormattedText(results.businessModel)}
                    </div>
                  )}
                  {activeTab === 'pitch' && (
                    <div className="prose prose-invert max-w-none pb-12">
                      {renderFormattedText(results.pitchDeck)}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupBuilder;
