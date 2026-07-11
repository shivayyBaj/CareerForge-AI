import React from 'react'
import { Button } from '../ui/button'
import { Link, useLocation } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Sparkles, LayoutDashboard } from 'lucide-react'

function Header() {
  const { isSignedIn } = useUser()
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-black animate-pulse" />
          </div>
          <span className="text-xl font-bold font-serif tracking-wider text-white transition-colors duration-300 group-hover:text-amber-400">
            Career<span className="text-amber-500 font-sans font-semibold">Forge</span>
            <span className="text-[10px] tracking-widest text-white/40 ml-1.5 font-sans font-medium uppercase border border-white/10 px-1 py-0.5 rounded">AI</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <Link to="/dashboard">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`relative flex items-center gap-1.5 border-amber-500/20 bg-amber-500/5 text-amber-400 font-medium tracking-wide hover:bg-amber-500/10 hover:border-amber-500/40 hover:text-amber-300 transition-all duration-300 rounded-lg ${
                    location.pathname === '/dashboard' ? 'border-amber-500/50 bg-amber-500/10 text-amber-300' : ''
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  Dashboard
                </Button>
              </Link>
              <div className="border-l border-white/15 pl-4 py-1 flex items-center">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 border border-amber-500/20 hover:scale-105 transition-transform duration-300"
                    }
                  }} 
                />
              </div>
            </>
          ) : (
            <Link to="/auth/sign-in">
              <Button 
                size="sm" 
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 font-semibold tracking-wide text-black hover:scale-105 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-md shadow-amber-500/10"
              >
                Get Started
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header

