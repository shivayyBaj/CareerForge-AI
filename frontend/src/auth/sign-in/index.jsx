import Header from '@/components/custom/Header'
import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center px-4 py-16">
        <div className="premium-card premium-glow p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold">Welcome Back</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to build your professional resume
            </p>
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default SignInPage
