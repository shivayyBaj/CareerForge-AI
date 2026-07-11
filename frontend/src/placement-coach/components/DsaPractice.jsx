import React, { useState, useEffect, useRef } from 'react';
import {
  Play, RotateCcw, Sparkles, Terminal, Code2, ChevronDown, ChevronRight, CheckCircle2, XCircle, Loader2, Lightbulb, Check, Search, Trophy, BookOpen, X, Clock, MemoryStick, Zap, Upload
} from 'lucide-react';
import { DSA_QUESTIONS, LANGUAGES, DIFFICULTY_COLORS } from '../dsaQuestions';
import { buildRunnableCode, parseTestResults, formatExecutionOutput, parseStructuredResults, executionHasErrors } from '../codeRunner';
import { executeCode, getSolution } from '../../../service/BackendApi';
import { motion, AnimatePresence } from 'framer-motion';

const CODE_STORAGE_KEY = 'careerforge_dsa_code';
const SOLVED_STORAGE_KEY = 'careerforge_dsa_solved';

const loadSavedCode = () => {
  try { return JSON.parse(localStorage.getItem(CODE_STORAGE_KEY) || '{}'); }
  catch { return {}; }
};

const saveCode = (data) => {
  localStorage.setItem(CODE_STORAGE_KEY, JSON.stringify(data));
};

const loadSolved = () => {
  try { return JSON.parse(localStorage.getItem(SOLVED_STORAGE_KEY) || '[]'); }
  catch { return []; }
};

const saveSolved = (ids) => {
  localStorage.setItem(SOLVED_STORAGE_KEY, JSON.stringify(ids));
};

function formatValue(val, lang) {
  if (val === undefined || val === null) {
    return lang === 'python' ? 'None' : 'null';
  }
  if (typeof val === 'boolean') {
    if (lang === 'python') return val ? 'True' : 'False';
    return val ? 'true' : 'false';
  }
  if (typeof val === 'string') {
    if (lang === 'python') {
      if (val === 'true') return 'True';
      if (val === 'false') return 'False';
      if (val === 'null') return 'None';
    }
    return val;
  }
  if (Array.isArray(val)) {
    return '[' + val.map(item => formatValue(item, lang)).join(', ') + ']';
  }
  if (typeof val === 'object') {
    if (lang === 'python') {
      const parts = Object.entries(val).map(([k, v]) => `${JSON.stringify(k)}: ${formatValue(v, lang)}`);
      return '{' + parts.join(', ') + '}';
    }
    return JSON.stringify(val);
  }
  return String(val);
}

function renderHighlightedCode(code, language) {
  if (!code) return null;
  const lines = code.split('\n');
  return lines.map((line, lineIdx) => {
    let codePart = line;
    let commentPart = '';
    
    if (language === 'python') {
      const idx = line.indexOf('#');
      if (idx !== -1) {
        codePart = line.substring(0, idx);
        commentPart = line.substring(idx);
      }
    } else {
      const idx = line.indexOf('//');
      if (idx !== -1) {
        codePart = line.substring(0, idx);
        commentPart = line.substring(idx);
      }
    }

    if (commentPart) {
      if (codePart.trim() && !codePart.endsWith('  ')) {
        const spacesToAdd = codePart.endsWith(' ') ? ' ' : '  ';
        codePart = codePart + spacesToAdd;
      }
    }

    const words = codePart.split(/(\b\w+\b)/);
    const keywords = new Set([
      'def', 'class', 'return', 'function', 'public', 'private', 'protected',
      'import', 'for', 'while', 'if', 'else', 'const', 'let', 'var', 'pass',
      'int', 'void', 'string', 'vector', 'bool', 'boolean', 'new', 'static', 'lambda', 'self', 'public:', 'private:', 'from'
    ]);

    const highlightedCode = words.map((word, wordIdx) => {
      if (keywords.has(word)) {
        return <span key={wordIdx} className="text-amber-400 font-bold">{word}</span>;
      }
      if (/^\d+$/.test(word)) {
        return <span key={wordIdx} className="text-violet-400">{word}</span>;
      }
      return word;
    });

    return (
      <div key={lineIdx} className="min-h-[1.5rem] whitespace-pre">
        {highlightedCode}
        {commentPart && (
          <span className="text-emerald-500/80 font-normal italic">{commentPart}</span>
        )}
      </div>
    );
  });
}

function DsaPractice({ jobTitle = '' }) {
  const [selectedId, setSelectedId] = useState(DSA_QUESTIONS[0]?.id || 'two-sum');
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [solutionLoading, setSolutionLoading] = useState(false);
  const [aiSolution, setAiSolution] = useState(null);
  const [showSolutionPanel, setShowSolutionPanel] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [testResults, setTestResults] = useState(null);
  const [structuredResults, setStructuredResults] = useState([]);
  const [activeTestTab, setActiveTestTab] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);
  
  const [solvedIds, setSolvedIds] = useState(loadSolved);
  const [expandedTopics, setExpandedTopics] = useState(new Set([DSA_QUESTIONS[0]?.topic || 'Arrays & Hashing']));
  const terminalRef = useRef(null);
  const fileInputRef = useRef(null);

  const question = DSA_QUESTIONS.find((q) => q.id === selectedId) || DSA_QUESTIONS[0];
  const savedCode = useRef(loadSavedCode());

  useEffect(() => {
    const key = `${selectedId}_${language}`;
    const saved = savedCode.current[key];
    setCode(saved || question?.starterCode[language] || '');
    setAiSolution(null);
    setShowSolutionPanel(false);
    setTestResults(null);
    setStructuredResults([]);
    setActiveTestTab(0);
    setTerminalOutput('');
  }, [selectedId, language, question]);

  useEffect(() => {
    const key = `${selectedId}_${language}`;
    savedCode.current[key] = code;
    saveCode(savedCode.current);
  }, [code, selectedId, language]);

  useEffect(() => {
    saveSolved(solvedIds);
  }, [solvedIds]);

  useEffect(() => {
    terminalRef.current?.scrollTo({ top: terminalRef.current.scrollHeight, behavior: 'smooth' });
  }, [terminalOutput]);


  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    readFileContent(file);
  };

  const readFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === 'string') {
        setCode(text);
        const ext = file.name.split('.').pop()?.toLowerCase();
        if (ext === 'py') setLanguage('python');
        else if (ext === 'js') setLanguage('javascript');
        else if (ext === 'java') setLanguage('java');
        else if (ext === 'cpp' || ext === 'cc' || ext === 'cxx') setLanguage('cpp');
        setTerminalOutput(`Uploaded file: ${file.name}\n`);
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) readFileContent(file);
  };

  const toggleSolved = (id, e) => {
    e.stopPropagation();
    setSolvedIds((prev) => {
      const isSolved = prev.includes(id);
      if (isSolved) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const toggleTopicExpand = (topic) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topic)) {
        next.delete(topic);
      } else {
        next.add(topic);
      }
      return next;
    });
  };

  const handleRun = async () => {
    setRunning(true);
    setTerminalOutput('Compiling and running on sandbox execution container...\n');
    setStructuredResults([]);
    setActiveTestTab(0);
    try {
      const runnable = buildRunnableCode(language, code, question);
      const result = await executeCode(language, runnable);
      const output = formatExecutionOutput(result);
      const stdout = result.run?.stdout || '';
      const structured = parseStructuredResults(stdout);
      const hasErrors = executionHasErrors(result, stdout);
      const results = parseTestResults(stdout, hasErrors);
      setTestResults(results);
      setStructuredResults(hasErrors ? [] : structured);
      setTerminalOutput(output);
      
      if (results.allPassed && results.total > 0) {
        setSolvedIds(prev => prev.includes(question.id) ? prev : [...prev, question.id]);
      }
    } catch (err) {
      setTestResults(null);
      setStructuredResults([]);
      setTerminalOutput(`Execution failed: ${err.message}\n\nPlease check if your backend environment is running.`);
    } finally {
      setRunning(false);
    }
  };

  const handleReset = () => {
    setCode(question?.starterCode[language] || '');
    setTerminalOutput('');
    setTestResults(null);
  };


  const handleGetSolution = async () => {
    setSolutionLoading(true);
    setShowSolutionPanel(true);
    setAiSolution(null);
    try {
      const solution = await getSolution({
        problemTitle: question.title,
        problemDescription: question.description,
        constraints: question.constraints,
        examples: question.examples,
        language,
        topic: question.topic,
        starterCode: question?.starterCode[language] || '',
        functionName: question?.functionName || '',
        userCode: code,
      });
      setAiSolution(solution);
    } catch (err) {
      setAiSolution({
        approach: `Could not load solution: ${err.message}`,
        timeComplexity: 'N/A',
        spaceComplexity: 'N/A',
        solutionCode: '',
        walkthrough: '',
        keyInsights: [],
      });
    } finally {
      setSolutionLoading(false);
    }
  };

  const applyAiSolution = () => {
    if (aiSolution?.solutionCode) {
      setCode(aiSolution.solutionCode);
      setShowSolutionPanel(false);
      setTerminalOutput('AI solution applied to editor. Click Run to evaluate.\n');
    }
  };

  const groupedQuestions = {};
  DSA_QUESTIONS.forEach((q) => {
    if (!groupedQuestions[q.topic]) {
      groupedQuestions[q.topic] = [];
    }
    const matchesDifficulty = difficultyFilter === 'All' || q.difficulty === difficultyFilter;
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) || q.topic.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (matchesDifficulty && matchesSearch) {
      groupedQuestions[q.topic].push(q);
    }
  });

  const totalQuestions = DSA_QUESTIONS.length;
  const solvedCount = solvedIds.length;
  const solvedPercentage = Math.round((solvedCount / totalQuestions) * 100) || 0;

  const lineCount = code.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  const currentLang = LANGUAGES.find((l) => l.id === language);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 h-auto xl:h-[calc(100vh-160px)] min-h-0 animate-slide-up text-white select-none pb-6 xl:pb-0">
      
      {/* ── Question List ── */}
      <div className="xl:col-span-3 h-[400px] xl:h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col overflow-hidden shadow-xl">
        
        <div className="p-4 border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-500" /> NeetCode 150 Progress
            </span>
            <span className="text-xs font-mono text-amber-400 font-bold">{solvedCount}/{totalQuestions} ({solvedPercentage}%)</span>
          </div>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
              style={{ width: `${solvedPercentage}%` }}
            />
          </div>
        </div>

        <div className="p-3 border-b border-white/5 space-y-2.5">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input
              type="text"
              placeholder="Search problems, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#090909] border border-white/5 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-white/20 focus:border-amber-500/30 outline-none transition-colors"
            />
          </div>
          
          <div className="flex gap-1 flex-wrap">
            {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
              <button
                key={d}
                onClick={() => setDifficultyFilter(d)}
                className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg border transition-all ${
                  difficultyFilter === d
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'border-white/5 text-white/40 hover:border-white/10 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1 select-none">
          {Object.keys(groupedQuestions).map((topic) => {
            const list = groupedQuestions[topic];
            if (list.length === 0) return null;
            const isExpanded = expandedTopics.has(topic);
            const topicSolvedCount = list.filter(q => solvedIds.includes(q.id)).length;
            
            return (
              <div key={topic} className="border border-white/5 rounded-xl bg-white/[0.01] overflow-hidden">
                <button
                  onClick={() => toggleTopicExpand(topic)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-xs font-bold font-serif text-white/90 truncate">{topic}</p>
                    <span className="text-[10px] text-white/40 font-semibold mt-0.5 inline-block">
                      {topicSolvedCount}/{list.length} Solved
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0 text-white/40">
                    {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-[#050505]/40 border-t border-white/5"
                    >
                      {list.map((q) => {
                        const isSolved = solvedIds.includes(q.id);
                        return (
                          <div
                            key={q.id}
                            onClick={() => setSelectedId(q.id)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 border-b border-white/5 last:border-0 cursor-pointer transition-colors ${
                              selectedId === q.id ? 'bg-amber-500/10 border-l-2 border-l-amber-500' : 'hover:bg-white/[0.01]'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0 pr-2">
                              <button 
                                onClick={(e) => toggleSolved(q.id, e)}
                                className={`flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                  isSolved 
                                    ? 'bg-amber-500 border-amber-500 text-black' 
                                    : 'border-white/20 hover:border-amber-500/40 text-transparent'
                                }`}
                              >
                                <Check className="w-3 h-3 stroke-[3px]" />
                              </button>
                              <span className={`text-xs font-semibold truncate leading-tight ${
                                isSolved ? 'text-white/40 line-through' : 'text-white/80'
                              }`}>
                                {q.title}
                              </span>
                            </div>
                            <span className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded border flex-shrink-0 ${
                              DIFFICULTY_COLORS[q.difficulty]
                            }`}>
                              {q.difficulty[0]}
                            </span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Problem Statement ── */}
      <div className="xl:col-span-3 h-[400px] xl:h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col overflow-hidden shadow-xl">
        <div className="p-4 border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center justify-between mb-1.5">
            <h2 className="text-base font-bold font-serif">{question?.title}</h2>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${DIFFICULTY_COLORS[question?.difficulty]}`}>
              {question?.difficulty}
            </span>
          </div>
          <p className="text-xs text-white/30 uppercase tracking-widest font-bold font-mono">{question?.topic}</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs md:text-sm">
          <p className="text-white/60 whitespace-pre-line leading-relaxed">{question?.description}</p>

          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 font-serif text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" /> Examples
            </h4>
            {question?.examples.map((ex, i) => (
              <div key={i} className="bg-[#090909] border border-white/5 rounded-xl p-3.5 font-mono text-[11px] leading-relaxed text-white/70">
                <p><span className="text-white/30 font-bold">Input:</span> {ex.input}</p>
                <p><span className="text-white/30 font-bold">Output:</span> {formatValue(ex.output, language)}</p>
                {ex.explanation && <p className="text-white/40 mt-1.5"><span className="text-white/20 font-bold">Explanation:</span> {ex.explanation}</p>}
              </div>
            ))}
          </div>

          {question?.constraints && question?.constraints.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-bold text-amber-400 font-serif text-xs uppercase tracking-wider">Constraints</h4>
              <ul className="text-xs text-white/40 space-y-1 list-disc list-inside">
                {question.constraints.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ── Code Editor + Terminal ── */}
      <div className="xl:col-span-6 flex flex-col gap-4 min-h-[700px] xl:min-h-0 xl:h-full">
        
        {/* Toolbar */}
        <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent px-4 py-2.5 flex items-center justify-between gap-3 flex-wrap shadow-xl">
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider border border-white/5 hover:border-white/20 bg-white/5 px-3 py-1.5 rounded-xl transition-all"
            >
              {currentLang?.label} <ChevronDown className="w-3 h-3" />
            </button>
            {showLangMenu && (
              <div className="absolute top-full left-0 mt-1.5 bg-black/95 border border-white/10 rounded-xl shadow-2xl z-20 min-w-[130px] p-1 overflow-hidden">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => { setLanguage(lang.id); setShowLangMenu(false); }}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-white/5 transition-all ${
                      language === lang.id ? 'text-amber-400 bg-amber-500/5' : 'text-white/60'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {testResults && (
              <span className={`text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1 ${testResults.allPassed ? 'text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20' : 'text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20'}`}>
                {testResults.allPassed
                  ? (testResults.total === 0 ? <><CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" /> Ran Successfully</> : <><CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" /> All Passed</>)
                  : <><XCircle className="w-3.5 h-3.5" /> {testResults.passed}/{testResults.total} Passed</>}
              </span>
            )}

            <button
              onClick={handleReset}
              className="p-2 border border-white/5 hover:border-white/10 bg-white/5 rounded-xl text-white/50 hover:text-white transition-all"
              title="Reset starter template"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handleRun}
              disabled={running}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
            >
              {running ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              Run
            </button>

            {/* ── AI Solution Button ── */}
            <button
              onClick={handleGetSolution}
              disabled={solutionLoading}
              title="View AI-generated solution with explanation"
              className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 border border-violet-500/20"
            >
              {solutionLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <BookOpen className="w-3.5 h-3.5" />}
              Solution
            </button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="rounded-2xl border border-white/5 bg-[#0b0c13] flex-1 min-h-[220px] flex flex-col overflow-hidden shadow-xl" onDragOver={handleDragOver} onDrop={handleDrop}>
          <div className="px-4 py-2 bg-[#090a0f] border-b border-white/5 flex items-center justify-between text-[10px] text-white/30 font-mono">
            <span className="flex items-center gap-1.5 uppercase font-bold"><Code2 className="w-3.5 h-3.5" /> solution.{language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : 'cpp'}</span>
            <span>Tab size: 2 spaces</span>
          </div>
          
          <div className="flex-1 flex overflow-hidden font-mono text-[13px] leading-relaxed relative">
            
            <div className="w-10 bg-[#07080c] select-none text-right pr-2 text-white/10 pt-4 border-r border-white/5 font-bold">
              {lineNumbers.map((ln) => (
                <div key={ln}>{ln}</div>
              ))}
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  e.preventDefault();
                  const start = e.target.selectionStart;
                  const end = e.target.selectionEnd;
                  setCode(code.substring(0, start) + '  ' + code.substring(end));
                  requestAnimationFrame(() => {
                    e.target.selectionStart = e.target.selectionEnd = start + 2;
                  });
                }
              }}
              spellCheck={false}
              className="flex-1 bg-transparent text-amber-100 p-4 resize-none outline-none overflow-y-auto leading-relaxed border-0 focus:ring-0"
              style={{ tabSize: 2 }}
            />
          </div>
        </div>

        {/* Bottom Panels Container */}
        <div className={`flex flex-col xl:flex-row gap-4 shrink-0 ${showSolutionPanel ? 'xl:max-h-[350px]' : ''}`}>
          {/* LeetCode-Style Testcase Terminal */}
          <div className="rounded-2xl border border-white/5 bg-[#090909] flex flex-col overflow-hidden shadow-xl flex-1" style={{ minHeight: '180px' }}>
          <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between text-[10px] font-mono bg-[#07080d]">
            <span className="flex items-center gap-1.5 uppercase font-bold text-white/30">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Test Results
            </span>
            {testResults && (
              <span className={`flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider ${
                testResults.allPassed ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {testResults.allPassed
                  ? <><CheckCircle2 className="w-3 h-3" /> {testResults.total > 0 ? `${testResults.passed}/${testResults.total} Passed` : 'Ran'}</>
                  : <><XCircle className="w-3 h-3" /> {testResults.passed}/{testResults.total} Passed</>}
              </span>
            )}
          </div>

          {structuredResults.length > 0 ? (
            <div className="flex flex-col flex-1 overflow-hidden">
              {/* Tab bar */}
              <div className="flex items-center gap-1 px-3 pt-2 border-b border-white/5 overflow-x-auto scrollbar-none">
                {structuredResults.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestTab(i)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-xl text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border-b-2 ${
                      activeTestTab === i
                        ? r.status === 'PASS'
                          ? 'border-emerald-500 text-emerald-400 bg-emerald-500/5'
                          : 'border-rose-500 text-rose-400 bg-rose-500/5'
                        : 'border-transparent text-white/30 hover:text-white/50'
                    }`}
                  >
                    {r.status === 'PASS'
                      ? <CheckCircle2 className="w-3 h-3" />
                      : <XCircle className="w-3 h-3" />}
                    Case {r.testNum}
                  </button>
                ))}
              </div>

              {/* Active test case detail */}
              {(() => {
                const r = structuredResults[activeTestTab];
                if (!r) return null;
                return (
                  <div className="flex-1 overflow-y-auto p-3 grid grid-cols-3 gap-2 font-mono text-[11px]">
                    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-2.5 space-y-1">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">Input</p>
                      <p className="text-white/60 break-all">{formatValue(r.input, language)}</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-2.5 space-y-1">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">Expected</p>
                      <p className="text-sky-300 break-all">{formatValue(r.expected, language)}</p>
                    </div>
                    <div className={`rounded-xl p-2.5 space-y-1 border ${
                      r.status === 'PASS'
                        ? 'bg-emerald-500/5 border-emerald-500/20'
                        : 'bg-rose-500/5 border-rose-500/20'
                    }`}>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">Output</p>
                      <p className={`break-all ${r.status === 'PASS' ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatValue(r.actual, language)}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            /* Fallback: raw terminal output (compile errors etc) */
            <pre
              ref={terminalRef}
              className="flex-1 overflow-y-auto p-4 text-[11px] text-emerald-400 bg-black leading-relaxed font-mono whitespace-pre-wrap select-text"
            >
              {terminalOutput || 'Sandbox shell online. Write a solution and click "Run" to evaluate test cases.'}
            </pre>
          )}
        </div>



        {/* ── AI Solution Panel ── */}
        <AnimatePresence>
          {showSolutionPanel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex-1 flex flex-col rounded-2xl border border-violet-500/20 bg-gradient-to-b from-violet-500/[0.04] to-transparent shadow-2xl overflow-hidden xl:max-h-[350px]"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-violet-500/[0.05] border-b border-violet-500/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">AI Solution</h4>
                    <p className="text-[10px] text-violet-300/60 font-semibold uppercase tracking-wider">{question?.title} · {language}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {aiSolution?.solutionCode && (
                    <button
                      onClick={applyAiSolution}
                      className="flex items-center gap-1.5 text-xs bg-violet-500 hover:bg-violet-400 text-white font-bold px-3 py-1.5 rounded-xl transition-all"
                    >
                      <Zap className="w-3.5 h-3.5" /> Apply to Editor
                    </button>
                  )}
                  <button
                    onClick={() => setShowSolutionPanel(false)}
                    className="p-1.5 hover:bg-white/5 border border-white/5 rounded-xl transition-colors"
                  >
                    <X className="w-3.5 h-3.5 text-white/40" />
                  </button>
                </div>
              </div>

              {/* Panel body */}
              <div className="p-5 space-y-5 overflow-y-auto flex-1">
                {solutionLoading ? (
                  <div className="flex flex-col items-center justify-center py-10 gap-3">
                    <div className="w-10 h-10 rounded-full border border-violet-500/20 bg-violet-500/5 flex items-center justify-center">
                      <Loader2 className="w-5 h-5 text-violet-400 animate-spin" />
                    </div>
                    <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">Generating optimal solution...</p>
                    <p className="text-[10px] text-white/20">This may take a few seconds</p>
                  </div>
                ) : aiSolution ? (
                  <>
                    {/* Code Review Section */}
                    {aiSolution.codeReview && (
                      <div className="bg-[#090909] border border-white/5 rounded-xl p-4 space-y-4 mb-4">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-white">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Code Review
                          </p>
                          {aiSolution.codeReview.isCorrect ? (
                            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Correct & Efficient</span>
                          ) : (
                            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">Needs Improvement</span>
                          )}
                        </div>
                        
                        <p className="text-xs text-white/70 leading-relaxed">{aiSolution.codeReview.feedback}</p>
                        
                        {aiSolution.codeReview.errors?.length > 0 && (
                          <div className="space-y-1.5">
                            <p className="text-xs font-bold text-rose-400">Errors Identified:</p>
                            <ul className="text-xs text-white/50 space-y-1 list-disc list-inside">
                              {aiSolution.codeReview.errors.map((e, i) => <li key={i}>{e}</li>)}
                            </ul>
                          </div>
                        )}
                        
                        {aiSolution.codeReview.hints?.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-amber-400">Hints:</p>
                            <ul className="text-xs text-white/50 space-y-0.5 list-disc list-inside">
                              {aiSolution.codeReview.hints.map((h, i) => <li key={i}>{h}</li>)}
                            </ul>
                          </div>
                        )}

                        {aiSolution.codeReview.correctedCode && (
                          <div className="space-y-1.5 mt-2">
                            <p className="text-xs font-bold text-emerald-400">Fixed Version of Your Code:</p>
                            <div className="text-[12px] bg-[#0b0c13] border border-white/5 text-amber-100 p-3 rounded-xl overflow-x-auto font-mono shadow-inner">
                              {renderHighlightedCode(aiSolution.codeReview.correctedCode, language)}
                            </div>
                            <button
                              onClick={() => setCode(aiSolution.codeReview.correctedCode)}
                              className="mt-2 text-[10px] bg-amber-500/90 hover:bg-amber-400 text-black font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5"
                            >
                              <Zap className="w-3 h-3" /> Apply Fix to Editor
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Complexity badges */}
                    <div className="flex flex-wrap gap-2">
                      {aiSolution.timeComplexity && (
                        <div className="flex items-center gap-1.5 bg-[#090909] border border-white/5 px-3 py-1.5 rounded-xl">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Time:</span>
                          <span className="text-[11px] font-mono font-bold text-emerald-400">{aiSolution.timeComplexity}</span>
                        </div>
                      )}
                      {aiSolution.spaceComplexity && (
                        <div className="flex items-center gap-1.5 bg-[#090909] border border-white/5 px-3 py-1.5 rounded-xl">
                          <MemoryStick className="w-3.5 h-3.5 text-sky-400" />
                          <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Space:</span>
                          <span className="text-[11px] font-mono font-bold text-sky-400">{aiSolution.spaceComplexity}</span>
                        </div>
                      )}
                    </div>

                    {/* Approach */}
                    {aiSolution.approach && (
                      <div className="bg-[#090909] border border-white/5 rounded-xl p-4 space-y-2">
                        <p className="text-xs font-bold text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5" /> Approach & Strategy
                        </p>
                        <p className="text-xs text-white/60 leading-relaxed whitespace-pre-line">{aiSolution.approach}</p>
                      </div>
                    )}

                    {/* Key Insights */}
                    {aiSolution.keyInsights?.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5" /> Key Insights
                        </p>
                        <ul className="space-y-1.5">
                          {aiSolution.keyInsights.map((insight, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-white/60 leading-relaxed">
                              <span className="w-4 h-4 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Solution Code */}
                    {aiSolution.solutionCode && (
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5" /> Solution Code
                        </p>
                        <div className="relative group">
                          <div className="text-[12px] bg-[#0b0c13] border border-white/5 text-amber-100 p-4 rounded-xl overflow-x-auto font-mono leading-relaxed shadow-inner">
                            {renderHighlightedCode(aiSolution.solutionCode, language)}
                          </div>
                          <button
                            onClick={applyAiSolution}
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-[10px] bg-violet-500/90 hover:bg-violet-400 text-white font-bold px-2.5 py-1 rounded-lg"
                          >
                            <Zap className="w-3 h-3" /> Apply
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step-by-step walkthrough */}
                    {aiSolution.walkthrough && (
                      <div className="bg-[#090909] border border-white/5 rounded-xl p-4 space-y-2">
                        <p className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" /> Step-by-Step Walkthrough
                        </p>
                        <p className="text-xs text-white/50 leading-relaxed whitespace-pre-line">{aiSolution.walkthrough}</p>
                      </div>
                    )}
                  </>
                ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default DsaPractice;
