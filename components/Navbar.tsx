'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'
import AuthModal from './AuthModal'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, logout, isAuthenticated, isLoading } = useAuth()

  return (
    <nav className="bg-black/95 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation focus-mobile">
              <Image
                src="/logo/rougeenewlogo.png"
                alt="Rougee Player Logo"
                width={280}
                height={80}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
              />
            </Link>
          </div>

              {/* Avatar Dropdown or Login Button */}
              <div className="relative">
                {isAuthenticated ? (
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="group flex items-center space-x-2 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 hover:from-gray-700/60 hover:to-gray-600/60 hover:border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 backdrop-blur-sm active:scale-95 touch-manipulation focus-mobile"
                  >
                    <div className="relative">
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center ring-2 ring-gray-600/30 group-hover:ring-gray-500/50 transition-all duration-300">
                        {user?.google?.picture ? (
                          <img
                            src={user.google.picture}
                            alt="Profile"
                            className="w-9 h-9 rounded-full object-cover"
                          />
                        ) : (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-all duration-300 ${isDropdownOpen ? 'rotate-180 text-gray-300' : 'group-hover:text-gray-300'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Sign In
                  </button>
                )}

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                <div className="px-3 py-2 border-b border-gray-700/50 mb-1">
                  <p className="text-sm font-medium text-white">
                    {user?.google?.name || user?.email?.address || 'User Account'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {user?.email?.address || user?.google?.email || 'Connected'}
                  </p>
                </div>
                
                <Link
                  href="/profile"
                  className="flex items-center space-x-3 px-3 py-2 mx-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profile</span>
                </Link>
                
                <Link
                  href="/settings"
                  className="flex items-center space-x-3 px-3 py-2 mx-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Settings</span>
                </Link>
                
                <Link
                  href="/help"
                  className="flex items-center space-x-3 px-3 py-2 mx-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Help</span>
                </Link>
                
                <div className="border-t border-gray-700/50 mt-2 pt-2">
                  <button
                    className="flex items-center space-x-3 w-full px-3 py-2 mx-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-all duration-200"
                    onClick={() => {
                      logout()
                      setIsDropdownOpen(false)
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  )
}