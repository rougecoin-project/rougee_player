'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'

export default function BottomNav() {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = useCallback((itemId: string) => {
    setActiveItem(itemId)
  }, [])

  const navItems = [
    {
      id: 'home',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Home',
      href: '/'
    },
    {
      id: 'search',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      label: 'Search',
      href: '/search'
    },
    {
      id: 'library',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      label: 'Library',
      href: '/library'
    },
    {
      id: 'playlists',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      label: 'Playlists',
      href: '/playlists'
    },
    {
      id: 'wallet',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      label: 'Wallet',
      href: '/wallet'
    }
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800/50 z-50">
      <div className="flex items-center justify-around py-3 px-2 sm:px-4">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            prefetch={true}
            onClick={() => handleItemClick(item.id)}
            className={`
              group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all duration-300 min-w-0 flex-1 active:scale-95 touch-manipulation focus-mobile
              ${activeItem === item.id 
                ? 'text-white bg-gray-800/30' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/20'
              }
            `}
          >
            <div className={`
              relative transition-all duration-300
              ${activeItem === item.id 
                ? 'transform -translate-y-1' 
                : 'group-hover:transform group-hover:-translate-y-0.5'
              }
            `}>
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                {item.icon}
              </div>
              
              {/* Active indicator dot */}
              {activeItem === item.id && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
            </div>
            
            <span className={`
              text-xs sm:text-sm mt-1 transition-all duration-300 truncate max-w-full font-sans antialiased
              ${activeItem === item.id 
                ? 'text-white font-medium' 
                : 'text-gray-500 group-hover:text-gray-400'
              }
            `}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      
      {/* Safe area for iOS home indicator */}
      <div className="h-safe-area-inset-bottom"></div>
    </div>
  )
}