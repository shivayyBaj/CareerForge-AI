import React, { useState } from 'react'
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom'
import { useUser, UserButton } from '@clerk/clerk-react'
import Sidebar from './Sidebar'
import { LayoutDashboard, Mic, Code2, Rocket, FileSignature } from 'lucide-react'

const navItems = [
  { name: 'Resume',  path: '/dashboard',                 icon: LayoutDashboard },
  { name: 'Interview',  path: '/dashboard/mock-interview',  icon: Mic },
  { name: 'DSA',    path: '/dashboard/dsa-practice',    icon: Code2 },
  { name: 'Startup', path: '/dashboard/startup-builder', icon: Rocket },
  { name: 'Cover',    path: '/dashboard/cover-letter',    icon: FileSignature },
]

export default function DashboardLayout() {
  const { isLoaded, isSignedIn } = useUser()
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <div className="min-h-screen bg-slate-50 flex pb-16 md:pb-0">
      <div className="hidden md:block">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />
      </div>
      <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? 'md:ml-[68px]' : 'md:ml-64'}`}>
        <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
          <div className="text-sm font-medium text-slate-500">
            Workspace
          </div>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>
        <main className="p-4 md:p-8 flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 z-50 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = item.icon
          return (
            <Link key={item.path} to={item.path} className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-blue-600' : 'text-slate-500'}`}>
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
