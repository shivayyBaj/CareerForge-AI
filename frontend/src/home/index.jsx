import Header from '@/components/custom/Header'
import {
  BrainCircuit,
  FileText,
  Rocket,
  Users,
  Target,
  Trophy,
  Sparkles,
  ArrowRight,
  FileSignature,
  Code2
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const features = [
  {
    icon: FileText,
    title: 'AI Resume Builder',
    description:
      'Generate professional, ATS-optimized resumes tailored to your target role with our premium, auto-formatting builder.',
    link: '/dashboard',
    buttonText: 'Build Resume',
    badge: 'Standard ATS'
  },
  {
    icon: Target,
    title: 'Mock Interview',
    description:
      'Upload your resume for an instant ATS check, receive a custom roadmap, and practice with our interactive Voice AI interviewer.',
    link: '/dashboard/mock-interview',
    buttonText: 'Start Interview',
    badge: 'Voice AI'
  },
  {
    icon: Code2,
    title: 'DSA Practice Arena',
    description:
      'Practice 150+ Data Structures & Algorithms problems inside an integrated sandboxed compiler with AI Code Review.',
    link: '/dashboard/dsa-practice',
    buttonText: 'Start Coding',
    badge: '150+ Problems'
  },
  {
    icon: Rocket,
    title: 'Startup Builder',
    description:
      'Have an idea? Deploy an autonomous multi-agent AI team to conduct market research, build a business model, and pitch deck.',
    link: '/dashboard/startup-builder',
    buttonText: 'Launch Startup',
    badge: 'Autonomous Agents'
  },
  {
    icon: FileSignature,
    title: 'AI Cover Letter',
    description:
      'Generate tailored cover letters from your saved resume — matched to any company, role, and job description in seconds.',
    link: '/dashboard/cover-letter',
    buttonText: 'Write Letter',
    badge: 'Job-Ready'
  }
]

const benefits = [
  {
    icon: BrainCircuit,
    title: 'Next-Gen AI Models',
    description: 'Powered by advanced LLMs like Llama 3 for intelligent, human-like coaching and strategy generation.'
  },
  {
    icon: Users,
    title: 'Multi-Agent Teams',
    description: 'Watch AI agents collaborate in real-time to build comprehensive business strategies from scratch.'
  },
  {
    icon: Trophy,
    title: 'Premium Experience',
    description: 'A beautiful, intuitive interface designed to give you the ultimate edge in your career and ventures.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 14 }
  }
}

function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-amber-500 selection:text-black overflow-hidden relative">
      <Header />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/10 to-orange-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-amber-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[160px] rounded-full -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-36 lg:px-12 flex flex-col items-center">
        <motion.div 
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 mb-8 hover:bg-amber-500/25 transition-all duration-300 backdrop-blur-md cursor-pointer hover:border-amber-500/50"
          >
            <span className="text-xs font-semibold tracking-wider text-amber-400 flex items-center gap-1.5 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> The Ultimate Student Career & Startup Suite
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="mb-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl font-serif text-white"
          >
            Forge Your Career<br />
            With <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">Intelligence</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="mx-auto mb-12 max-w-3xl text-base md:text-lg text-white/60 leading-relaxed font-sans"
          >
            Create premium resumes, solve 150+ DSA problems inside an integrated sandboxed compiler, practice with our interactive Voice AI coach, and spawn multi-agent startup teams.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/dashboard"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-sm font-bold text-black shadow-lg shadow-amber-500/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-amber-500/20 active:scale-[0.98]"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

          </motion.div>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="px-6 py-20 lg:px-12 relative border-t border-white/5 bg-[#080808]/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 flex flex-col justify-between hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-500 group overflow-hidden"
              >
                {/* Light glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                      <feature.icon className="h-5 w-5 text-amber-400" />
                    </div>
                    <span className="text-[10px] tracking-wider font-semibold text-amber-500/70 uppercase border border-amber-500/20 px-2 py-0.5 rounded-full bg-amber-500/5">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    {feature.description}
                  </p>
                </div>
                
                <Link 
                  to={feature.link} 
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:text-black hover:border-amber-500 hover:scale-[1.02]"
                >
                  {feature.buttonText}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-24 lg:px-12">
        <motion.div 
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-bold md:text-5xl font-serif">
            Designed for the Future
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/50 text-sm md:text-base mb-20 max-w-2xl mx-auto">
            Experience next-generation multi-agent architecture combined with state-of-the-art tools.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }} 
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 mb-6"
                >
                  <benefit.icon className="h-6 w-6 text-amber-400" />
                </motion.div>
                <h4 className="text-lg font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-xs text-white/30">
        <p>© 2026 CareerForge AI. Built for future innovators.</p>
      </footer>
    </div>
  )
}

export default Home

