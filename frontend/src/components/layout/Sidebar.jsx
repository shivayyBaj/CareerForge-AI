import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Mic, Code2, Rocket, FileSignature,
  Sparkles, PanelLeftClose, PanelLeftOpen,
} from 'lucide-react'

const navItems = [
  { name: 'Resume Builder',  path: '/dashboard',                 icon: LayoutDashboard },
  { name: 'Mock Interview',  path: '/dashboard/mock-interview',  icon: Mic },
  { name: 'DSA Practice',    path: '/dashboard/dsa-practice',    icon: Code2 },
  { name: 'Startup Builder', path: '/dashboard/startup-builder', icon: Rocket },
  { name: 'Cover Letter',    path: '/dashboard/cover-letter',    icon: FileSignature },
]

export default function Sidebar({ collapsed = false, onToggle }) {
  const location = useLocation()

  return (
    <div
      className={`h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0 z-20 transition-[width] duration-300 ease-in-out overflow-visible ${
        collapsed ? 'w-[68px]' : 'w-64'
      }`}
    >
      {}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100 flex-shrink-0">
        {!collapsed ? (
          <Link to="/" className="flex items-center gap-2.5 group min-w-0">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
              Career<span className="font-semibold">Forge</span>
            </span>
          </Link>
        ) : (
          <Link to="/" className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm mx-auto hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </Link>
        )}

        {!collapsed && (
          <button
            onClick={onToggle}
            className="flex-shrink-0 p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
            title="Collapse sidebar"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        )}
      </div>

      {}
      {collapsed && (
        <button
          onClick={onToggle}
          className="mx-auto mt-3 mb-1 flex items-center justify-center w-8 h-8 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
          title="Expand sidebar"
        >
          <PanelLeftOpen className="w-4 h-4" />
        </button>
      )}

      {}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-visible">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = item.icon

          return (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`flex items-center gap-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                  collapsed ? 'justify-center px-2 py-2.5' : 'px-3 py-2.5'
                } ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon
                  className={`w-[18px] h-[18px] flex-shrink-0 transition-colors ${
                    isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />
                {!collapsed && (
                  <span className="truncate">{item.name}</span>
                )}
              </Link>

              {}
              {collapsed && (
                <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50
                                opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <div className="bg-slate-800 text-white text-xs font-medium px-2.5 py-1.5 rounded-md shadow-lg whitespace-nowrap">
                    {item.name}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-800" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {}
      {!collapsed && (
        <div className="p-3 border-t border-slate-100 flex-shrink-0">
          <div className="p-3.5 bg-slate-50 rounded-xl">
            <p className="text-xs font-semibold text-slate-800 mb-0.5">Need help?</p>
            <p className="text-[11px] text-slate-400 mb-2.5 leading-relaxed">
              Browse docs or contact support.
            </p>
            <Link to="/dashboard/documentation">
              <button className="w-full text-xs font-medium bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
                Documentation
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
