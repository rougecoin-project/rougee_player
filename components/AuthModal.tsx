'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useState } from 'react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { login, isAuthenticated, isLoading } = useAuth()
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleLogin = async () => {
    setIsLoggingIn(true)
    try {
      login()
      onClose()
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoggingIn(false)
    }
  }

  // Close modal when user is authenticated
  if (isAuthenticated && isOpen) {
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-light text-white">Welcome to Rougee Player</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-400 text-sm font-light">
            Connect your wallet or sign in with your preferred method to start streaming music and investing in your favorite artists.
          </p>
          
          <button
            onClick={handleLogin}
            disabled={isLoggingIn || isLoading}
            className="w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
          >
            {isLoggingIn ? 'Connecting...' : 'Connect & Sign In'}
          </button>
          
          <div className="text-center">
            <p className="text-gray-500 text-xs font-light">
              By connecting, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
