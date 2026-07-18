import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useUser, UserButton } from '@clerk/clerk-react'
import Sidebar from './Sidebar'

export default function DashboardLayout() {
  const { isLoaded, isSignedIn } = useUser()
  const [collapsed, setCollapsed] = useState(false)

  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? 'ml-[68px]' : 'ml-64'}`}>
        <header className="h-16 border-b bg-white flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="text-sm font-medium text-slate-500">
            Workspace
          </div>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>
        <main className="p-8 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
