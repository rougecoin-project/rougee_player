'use client'

import Image from 'next/image'

export default function Top10Songs() {
  const topSongs = [
    {
      id: 1,
      rank: 1,
      title: "Flowers",
      artist: "Miley Cyrus",
      album: "Endless Summer Vacation",
      duration: "3:20",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      isPlaying: false
    },
    {
      id: 2,
      rank: 2,
      title: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
      duration: "3:20",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      isPlaying: false
    },
    {
      id: 3,
      rank: 3,
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      duration: "2:47",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      isPlaying: true
    },
    {
      id: 4,
      rank: 4,
      title: "Unholy",
      artist: "Sam Smith ft. Kim Petras",
      album: "Gloria",
      duration: "2:36",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      isPlaying: false
    },
    {
      id: 5,
      rank: 5,
      title: "Heat Waves",
      artist: "Glass Animals",
      album: "Dreamland",
      duration: "3:58",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      isPlaying: false
    },
    {
      id: 6,
      rank: 6,
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      album: "F*CK LOVE 3",
      duration: "2:21",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      isPlaying: false
    },
    {
      id: 7,
      rank: 7,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      isPlaying: false
    },
    {
      id: 8,
      rank: 8,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      isPlaying: false
    },
    {
      id: 9,
      rank: 9,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      isPlaying: false
    },
    {
      id: 10,
      rank: 10,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      duration: "2:54",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      isPlaying: false
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            Top 10 Songs
          </h2>
          <button className="text-gray-400 hover:text-white text-sm font-light transition-colors duration-200">
            View Chart
          </button>
        </div>

        {/* Songs List */}
        <div className="space-y-1">
          {topSongs.map((song) => (
            <div
              key={song.id}
              className={`group flex items-center p-4 sm:p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-800 ${
                song.isPlaying ? 'bg-gray-800/20 border-gray-800' : ''
              }`}
            >
              {/* Rank */}
              <div className="flex-shrink-0 w-8 sm:w-10 text-center">
                <span className={`text-lg sm:text-xl font-light ${
                  song.rank <= 3 ? 'text-white' : 'text-gray-400'
                }`}>
                  {song.rank}
                </span>
              </div>

              {/* Album Art */}
              <div className="flex-shrink-0 ml-4 sm:ml-6">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-gray-800 border border-gray-800">
                  <Image
                    src={song.image}
                    alt={song.album}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Song Info */}
              <div className="flex-1 ml-4 sm:ml-6 min-w-0">
                <h3 className="text-white font-light text-sm sm:text-base truncate">
                  {song.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate font-light">
                  {song.artist}
                </p>
                <p className="text-gray-500 text-xs truncate font-light">
                  {song.album}
                </p>
              </div>

              {/* Duration */}
              <div className="flex-shrink-0 ml-4">
                <span className="text-gray-400 text-xs sm:text-sm font-light">
                  {song.duration}
                </span>
              </div>

              {/* Play/Pause Button */}
              <div className="flex-shrink-0 ml-4">
                {song.isPlaying ? (
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-200">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden mt-6 text-center">
          <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200">
            View Full Chart
          </button>
        </div>
      </div>
    </section>
  )
}
