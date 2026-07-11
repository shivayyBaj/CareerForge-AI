import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
import SignInPage from './auth/sign-in/index.jsx'
import EditResume from './dashboard/resume/[resumeId]/edit/index.jsx'
import ViewResume from './my-resume/[resumeId]/view/index.jsx'
import MockInterview from './mock-interview/index.jsx'
import DsaPracticePage from './dsa-practice/index.jsx'
import StartupBuilder from './startup-builder/index.jsx'
import CoverLetterGenerator from './cover-letter/index.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/resume/:resumeId/edit',
        element: <EditResume />
      },
      {
        path: '/dashboard/mock-interview',
        element: <MockInterview />
      },
      {
        path: '/dashboard/dsa-practice',
        element: <DsaPracticePage />
      },
      {
        path: '/dashboard/startup-builder',
        element: <StartupBuilder />
      },
      {
        path: '/dashboard/cover-letter',
        element: <CoverLetterGenerator />
      }
    ]
  },
  {
    path: '/sign-in',
    element: <SignInPage />
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  },
  {
    path: '/my-resume/:resumeId/view',
    element: <ViewResume />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
)