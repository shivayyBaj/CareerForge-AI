import Header from '@/components/custom/Header'
import {
  BrainCircuit,
  FileText,
  Rocket,
  Users,
  Target,
  Trophy,
  ArrowRight,
  FileSignature,
  Code2,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const features = [
  {
    icon: FileText,
    title: 'AI Resume Builder',
    description: 'Generate professional, ATS-optimized resumes tailored to your target role with our premium builder.',
    link: '/dashboard',
    buttonText: 'Build Resume',
    colSpan: 'col-span-1',
    bgClass: 'bg-blue-50/50',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100'
  },
  {
    icon: Target,
    title: 'Mock Interview',
    description: 'Upload your resume for an instant check and practice with an interactive Voice AI interviewer.',
    link: '/dashboard/mock-interview',
    buttonText: 'Start Interview',
    colSpan: 'col-span-1',
    bgClass: 'bg-indigo-50/50',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-100'
  },
  {
    icon: Code2,
    title: 'DSA Practice',
    description: 'Practice 150+ DSA problems in a sandboxed compiler.',
    link: '/dashboard/dsa-practice',
    buttonText: 'Start Coding',
    colSpan: 'col-span-1',
    bgClass: 'bg-emerald-50/50',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100'
  },
  {
    icon: Rocket,
    title: 'Startup Builder',
    description: 'Deploy an autonomous AI team to conduct market research and build a pitch deck.',
    link: '/dashboard/startup-builder',
    buttonText: 'Launch Startup',
    colSpan: 'col-span-1',
    bgClass: 'bg-violet-50/50',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-100'
  },
  {
    icon: FileSignature,
    title: 'Cover Letter',
    description: 'Generate tailored cover letters from your saved resume matched to any company role.',
    link: '/dashboard/cover-letter',
    buttonText: 'Write Letter',
    colSpan: 'col-span-1',
    bgClass: 'bg-sky-50/50',
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-100'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
}

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      <Header />

      {}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-sky-400/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {}
      <section className="relative px-6 py-24 md:py-32 lg:px-12 flex flex-col items-center">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >

          <motion.h1 
            variants={itemVariants} 
            className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl text-slate-900"
          >
            Accelerate your career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">confidence</span>.
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 leading-relaxed"
          >
            The all-in-one platform for modern job seekers. Create standout resumes, ace your interviews with AI mock sessions, and sharpen your coding skills.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/dashboard"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started for Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {}
      <section className="px-6 py-20 lg:px-12 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
            <p className="text-slate-500 text-lg">Powerful tools designed to give you the ultimate edge.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className={`relative rounded-3xl border border-slate-200 p-8 flex flex-col justify-between transition-shadow hover:shadow-xl hover:shadow-slate-200/50 ${feature.colSpan} ${feature.bgClass}`}
              >
                <div>
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${feature.iconBg}`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-auto flex justify-end">
                  <Link 
                    to={feature.link} 
                    className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900 shadow-sm"
                  >
                    {feature.buttonText}
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {}
      <footer className="border-t border-slate-200 bg-white py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-bold text-slate-900">CareerForge</span>
        </div>
        <p className="text-sm text-slate-500">© 2026 CareerForge. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
