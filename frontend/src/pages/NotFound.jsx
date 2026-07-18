import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function NotFound() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 p-6">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Oops! Page not found.</h2>
      <p className="text-slate-600 mb-8 max-w-md text-center">
        {error?.statusText || error?.message || "The page you are looking for doesn't exist or has been moved."}
      </p>
      <Link to="/" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
        Go back home
      </Link>
    </div>
  )
}
