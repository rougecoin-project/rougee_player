'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import BottomNav from '@/components/BottomNav'
import PlaylistGrid from '@/components/PlaylistGrid'

export default function PlaylistsPage() {
  const [activeCategory, setActiveCategory] = useState('my-playlists')

  const playlistCategories = [
    { id: 'my-playlists', label: 'My Playlists' },
    { id: 'made-for-you', label: 'Made for You' },
    { id: 'popular', label: 'Popular' },
    { id: 'mood', label: 'Mood & Activity' },
    { id: 'genre', label: 'By Genre' },
    { id: 'new', label: 'New Releases' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="md:ml-20 pb-20 md:pb-8 pt-4 sm:pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Playlists
            </h1>
            
            {/* Create Playlist Button */}
            <div className="flex items-center justify-between mb-6">
              <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="hidden sm:inline">Create Playlist</span>
                <span className="sm:hidden">Create</span>
              </button>
              
              {/* Search Playlists */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search playlists..."
                  className="w-48 sm:w-64 h-10 sm:h-12 pl-10 pr-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex border-b border-gray-800">
              {playlistCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                    activeCategory === category.id
                      ? 'text-white border-white'
                      : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Playlist Content */}
          <PlaylistGrid category={activeCategory} />
        </div>
      </main>
      
      <BottomNav />
    </div>
  )
}
