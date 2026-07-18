import React from 'react'
import { Button } from '../ui/button'
import { Link, useLocation } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Sparkles, LayoutDashboard } from 'lucide-react'

function Header() {
  const { isSignedIn } = useUser()
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold font-serif tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            Career<span className="font-sans font-semibold">Forge</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link to="/faq" className="hover:text-blue-600 transition-colors">FAQs</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        <nav className="flex items-center gap-4">
          {isSignedIn ? (
            <div className="flex items-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <Link to="/auth/sign-in">
              <Button 
                size="sm" 
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all duration-300 rounded-lg font-medium"
              >
                Login / Sign Up
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
