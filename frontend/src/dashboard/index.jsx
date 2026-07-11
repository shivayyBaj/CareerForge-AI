import Header from '@/components/custom/Header'
import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem'
import { Link } from 'react-router-dom'
import { Code2, Rocket, Briefcase, FileSignature, Sparkles, Mic } from 'lucide-react'
import { motion } from 'framer-motion'

function Dashboard() {
  const { user } = useUser()
  const [resumeList, setResumeList] = useState([])

  useEffect(() => {
    user && GetResumesList()
  }, [user])

  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then((resp) => {
      setResumeList(resp.data.data)
    })
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        
        {/* Upper Header section */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Workspace Dashboard
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">My Resumes</h2>
            <p className="mt-2 text-sm text-white/50 leading-relaxed max-w-xl">
              Create, optimize, and manage your ATS-friendly resumes for mock interviewing and business generation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <Link to={'/dashboard/mock-interview'} className="flex-1 md:flex-initial">
              <button className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/40 hover:text-amber-300 font-semibold tracking-wide text-sm transition-all duration-300">
                <Mic className="w-4 h-4" />
                Mock Interview
              </button>
            </Link>
            <Link to={'/dashboard/dsa-practice'} className="flex-1 md:flex-initial">
              <button className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/40 hover:text-amber-300 font-semibold tracking-wide text-sm transition-all duration-300">
                <Code2 className="w-4 h-4" />
                DSA Practice
              </button>
            </Link>
            <Link to={'/dashboard/startup-builder'} className="flex-1 md:flex-initial">
              <button className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 font-semibold tracking-wide text-sm transition-all duration-300">
                <Rocket className="w-4 h-4" />
                Startup Builder
              </button>
            </Link>
            <Link to={'/dashboard/cover-letter'} className="flex-1 md:flex-initial">
              <button className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 font-semibold tracking-wide text-sm transition-all duration-300">
                <FileSignature className="w-4 h-4" />
                Cover Letter
              </button>
            </Link>
          </div>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <AddResume />
          {resumeList.length > 0
            ? resumeList.map((resume, index) => (
                <motion.div
                  key={resume.documentId || index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ResumeCardItem resume={resume} refreshData={GetResumesList} />
                </motion.div>
              ))
            : resumeList.length === 0 && (
                [1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="h-[280px] animate-pulse rounded-2xl border border-white/5 bg-white/[0.02]"
                  />
                ))
              )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

