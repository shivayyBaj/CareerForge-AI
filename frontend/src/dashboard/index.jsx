import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem'
import { FileText, Trophy, Code2, Users } from 'lucide-react'
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

  const stats = [
    { label: 'Total Resumes', value: resumeList.length, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Interviews Practiced', value: '0', icon: Trophy, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'DSA Solved', value: '0', icon: Code2, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'Startups Built', value: '0', icon: Users, color: 'text-violet-600', bg: 'bg-violet-100' }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      
      {}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Overview</h1>
        <p className="mt-1 text-sm text-slate-500">
          Welcome back, {user?.firstName || 'User'}! Here is what is happening with your career today.
        </p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center gap-4 shadow-sm">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Recent Resumes</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <AddResume />
          {resumeList.length > 0
            ? resumeList.map((resume, index) => (
                <motion.div
                  key={resume.documentId || index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <ResumeCardItem resume={resume} refreshData={GetResumesList} />
                </motion.div>
              ))
            : resumeList.length === 0 && (
                [1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="h-[280px] animate-pulse rounded-2xl border border-slate-200 bg-slate-100"
                  />
                ))
              )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
