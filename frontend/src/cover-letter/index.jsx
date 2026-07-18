import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import {
  ArrowLeft, FileSignature, Sparkles, Loader2, Copy, Check, Printer,
  History, Trash2, X, RefreshCw, Wand2, Building2, Briefcase,
} from 'lucide-react';
import { toast } from 'sonner';
import GlobalApi from '../../service/GlobalApi';
import { generateCoverLetter, improveCoverLetter } from '../../service/BackendApi';
import { serializeResumeToText } from '../lib/serializeResume';
import ConfirmDialog from '../components/custom/ConfirmDialog';

const STORAGE_KEY = 'careerforge_cover_letter_history';

const TONES = [
  { id: 'professional', label: 'Professional' },
  { id: 'enthusiastic', label: 'Enthusiastic' },
  { id: 'formal', label: 'Formal' },
  { id: 'concise', label: 'Concise' },
];

const loadHistory = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
};
const saveHistory = (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

function CoverLetterGenerator() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useUser();

  const [resumes, setResumes] = useState([]);
  const [selectedResumeId, setSelectedResumeId] = useState(searchParams.get('resumeId') || '');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [hiringManager, setHiringManager] = useState('');
  const [tone, setTone] = useState('professional');
  const [letter, setLetter] = useState('');
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [improveInput, setImproveInput] = useState('');
  const [improving, setImproving] = useState(false);
  const [copied, setCopied] = useState(false);

  const [history, setHistory] = useState(loadHistory);
  const [showHistory, setShowHistory] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const selectedResume = resumes.find((r) => r.documentId === selectedResumeId);

  useEffect(() => {
    const id = searchParams.get('resumeId');
    if (id) setSelectedResumeId(id);
  }, [searchParams]);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      GlobalApi.GetUserResumes(user.primaryEmailAddress.emailAddress).then((resp) => {
        const list = resp.data.data || [];
        setResumes(list);
        if (!selectedResumeId && list.length > 0) {
          setSelectedResumeId(list[0].documentId);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    if (selectedResume?.jobTitle && !jobTitle) {
      setJobTitle(selectedResume.jobTitle);
    }
  }, [selectedResume]);

  const persistSession = (content, extras = {}) => {
    const session = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString(),
      companyName,
      jobTitle,
      tone,
      resumeTitle: selectedResume?.title || 'Untitled',
      letter: content,
      highlights: extras.highlights || highlights,
    };
    setHistory((prev) => {
      const updated = [session, ...prev.slice(0, 19)];
      saveHistory(updated);
      return updated;
    });
  };

  const handleGenerate = async () => {
    if (!selectedResume) {
      toast.error('Please select a resume first.');
      return;
    }
    if (!companyName.trim() || !jobTitle.trim()) {
      toast.error('Company name and job title are required.');
      return;
    }

    setLoading(true);
    try {
      const resumeText = serializeResumeToText(selectedResume);
      const data = await generateCoverLetter({
        resumeText,
        jobTitle: jobTitle.trim(),
        companyName: companyName.trim(),
        jobDescription: jobDescription.trim(),
        hiringManager: hiringManager.trim(),
        tone,
        candidateName: [selectedResume.firstName, selectedResume.lastName].filter(Boolean).join(' '),
      });
      setLetter(data.fullLetter || '');
      setHighlights(data.highlights || []);
      persistSession(data.fullLetter || '', { highlights: data.highlights || [] });
      toast.success('Cover letter generated!');
    } catch (err) {
      toast.error(err.message || 'Generation failed. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  const handleImprove = async () => {
    if (!letter.trim() || !improveInput.trim()) return;
    setImproving(true);
    try {
      const resumeText = selectedResume ? serializeResumeToText(selectedResume) : '';
      const data = await improveCoverLetter({
        currentLetter: letter,
        instruction: improveInput.trim(),
        resumeText,
        jobTitle,
        companyName,
      });
      setLetter(data.fullLetter || letter);
      setImproveInput('');
      toast.success(data.changesSummary || 'Cover letter updated!');
    } catch (err) {
      toast.error(err.message || 'Could not improve letter.');
    } finally {
      setImproving(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(letter);
    setCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html><head><title>Cover Letter - ${companyName}</title>
      <style>
        body { font-family: Georgia, serif; max-width: 700px; margin: 40px auto; line-height: 1.7; color: #111; white-space: pre-wrap; }
      </style></head><body>${letter.replace(/\n/g, '<br>')}</body></html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const loadSession = (session) => {
    setCompanyName(session.companyName);
    setJobTitle(session.jobTitle);
    setTone(session.tone || 'professional');
    setLetter(session.letter);
    setHighlights(session.highlights || []);
    setShowHistory(false);
  };

  const clearHistory = () => {
    setHistory([]);
    saveHistory([]);
    setConfirmOpen(false);
  };

  const deleteSession = (id, e) => {
    e.stopPropagation();
    setHistory((prev) => {
      const updated = prev.filter((s) => s.id !== id);
      saveHistory(updated);
      return updated;
    });
  };

  return (
    <div className="flex bg-white text-slate-900 min-h-screen w-full">
      <ConfirmDialog
        open={confirmOpen}
        title="Clear Cover Letter History"
        message="This will permanently delete all saved cover letters."
        confirmLabel="Clear All"
        onConfirm={clearHistory}
        onCancel={() => setConfirmOpen(false)}
      />

      {/* History Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-border flex flex-col transform transition-transform duration-300 ${showHistory ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <History className="w-4 h-4 text-blue-600" /> Letter History
          </div>
          <div className="flex items-center gap-2">
            {history.length > 0 && (
              <button onClick={() => setConfirmOpen(true)} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1">
                <Trash2 className="w-3 h-3" /> Clear
              </button>
            )}
            <button onClick={() => setShowHistory(false)} className="p-1 hover:bg-secondary rounded-full">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {history.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground text-sm">
              <FileSignature className="w-10 h-10 mx-auto mb-3 opacity-30" />
              Generated letters will appear here.
            </div>
          ) : (
            history.map((session) => (
              <div
                key={session.id}
                onClick={() => loadSession(session)}
                className="p-4 border-b border-border hover:bg-secondary/50 cursor-pointer group transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{session.companyName}</p>
                    <p className="text-xs text-muted-foreground">{session.jobTitle}</p>
                    <p className="text-xs text-muted-foreground mt-1">{session.timestamp}</p>
                  </div>
                  <button onClick={(e) => deleteSession(session.id, e)} className="p-1 hover:text-red-400 opacity-0 group-hover:opacity-100">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showHistory && <div className="fixed inset-0 z-40 bg-white/40" onClick={() => setShowHistory(false)} />}

      {/* Main */}
      <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
        <div className="relative mb-8 animate-slide-up">
          <button onClick={() => navigate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back
          </button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-serif mb-3">AI Cover Letter Generator</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Generate tailored, professional cover letters from your saved resume — matched to any job and company.
            </p>
          </div>
          <button
            onClick={() => setShowHistory(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
          >
            <History className="w-4 h-4" />
            History {history.length > 0 && <span className="bg-blue-100 text-blue-600 text-xs px-1.5 py-0.5 rounded-full font-bold">{history.length}</span>}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
          {/* Input Panel */}
          <div className="premium-card p-6 space-y-5">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" /> Job Details
            </h2>

            <div>
              <label className="text-sm font-medium mb-1 block">Select Resume</label>
              <select
                value={selectedResumeId}
                onChange={(e) => setSelectedResumeId(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 focus:border-blue-300 outline-none text-sm"
                style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
              >
                {resumes.length === 0 && <option value="">No resumes — create one first</option>}
                {resumes.map((r) => (
                  <option key={r.documentId} value={r.documentId}>{r.title || 'Untitled Resume'}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" /> Company Name *
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Google"
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 focus:border-blue-300 outline-none text-sm text-slate-900 placeholder:text-slate-400"
                  style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Job Title *</label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Software Engineer"
                  className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 focus:border-blue-300 outline-none text-sm text-slate-900 placeholder:text-slate-400"
                  style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Hiring Manager (optional)</label>
              <input
                type="text"
                value={hiringManager}
                onChange={(e) => setHiringManager(e.target.value)}
                placeholder="e.g. Jane Smith"
                className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 focus:border-blue-300 outline-none text-sm text-slate-900 placeholder:text-slate-400"
                style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Job Description (optional)</label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job posting here for a more tailored letter..."
                className="w-full min-h-[120px] bg-white border border-slate-200 rounded-md p-3 focus:border-blue-300 outline-none resize-none text-sm text-slate-900 placeholder:text-slate-400"
                style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Tone</label>
              <div className="flex flex-wrap gap-2">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      tone === t.id
                        ? 'bg-blue-100 text-blue-600 border-blue-300'
                        : 'border-slate-200 text-slate-500 hover:border-blue-300'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !selectedResumeId}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-100 hover:scale-[1.02] transition-all disabled:opacity-40 disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin text-white" /> : <Sparkles className="w-5 h-5 text-white" />}
              {loading ? 'Generating...' : 'Generate Cover Letter'}
            </button>
          </div>

          {/* Output Panel */}
          <div className="premium-card flex flex-col overflow-hidden min-h-[500px]">
            <div className="p-4 border-b border-border flex items-center justify-between bg-white/50">
              <h2 className="font-semibold flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-blue-600" /> Your Cover Letter
              </h2>
              {letter && (
                <div className="flex items-center gap-2">
                  <button onClick={handleGenerate} disabled={loading} className="p-2 hover:bg-secondary rounded-md text-muted-foreground" title="Regenerate">
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  </button>
                  <button onClick={handleCopy} className="p-2 hover:bg-secondary rounded-md text-muted-foreground" title="Copy">
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button onClick={handlePrint} className="p-2 hover:bg-secondary rounded-md text-muted-foreground" title="Print">
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <textarea
              value={letter}
              onChange={(e) => setLetter(e.target.value)}
              placeholder="Your AI-generated cover letter will appear here. You can edit it directly."
              className="flex-1 w-full bg-white text-gray-900 font-serif text-sm p-6 resize-none outline-none leading-relaxed min-h-[300px]"
            />

            {highlights.length > 0 && (
              <div className="p-4 border-t border-border bg-secondary/30">
                <p className="text-xs font-semibold text-blue-600 mb-2">Key highlights used:</p>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  {highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            )}

            {letter && (
              <div className="p-4 border-t border-border flex gap-2 items-end">
                <input
                  type="text"
                  value={improveInput}
                  onChange={(e) => setImproveInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleImprove()}
                  placeholder='Ask AI to improve: "Make it shorter" or "Add more technical detail"...'
                  className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-300 outline-none text-slate-900 placeholder:text-slate-400"
                  style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
                />
                <button
                  onClick={handleImprove}
                  disabled={improving || !improveInput.trim()}
                  className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
                >
                  {improving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                  Improve
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverLetterGenerator;
