'use client'

import Image from 'next/image'

export default function TrendingArtists() {
  const trendingArtists = [
    {
      id: 1,
      name: "Drake",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      followers: "2.1M",
      genre: "Hip-Hop"
    },
    {
      id: 2,
      name: "Taylor Swift",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
      followers: "1.8M",
      genre: "Pop"
    },
    {
      id: 3,
      name: "The Weeknd",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      followers: "1.5M",
      genre: "R&B"
    },
    {
      id: 4,
      name: "Billie Eilish",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      followers: "1.3M",
      genre: "Alternative"
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            Trending Artists
          </h2>
          <button className="text-gray-400 hover:text-white text-sm font-light transition-colors duration-200">
            View All
          </button>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {trendingArtists.map((artist) => (
            <div
              key={artist.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 bg-gray-800 border border-gray-800">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Artist Info */}
              <div className="text-center">
                <h3 className="text-white font-light text-sm sm:text-base mb-1 truncate">
                  {artist.name}
                </h3>
                <p className="text-gray-400 text-xs font-light">
                  {artist.followers} followers
                </p>
                <p className="text-gray-500 text-xs font-light">
                  {artist.genre}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden mt-8 text-center">
          <button className="w-full py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200">
            View All Artists
          </button>
        </div>
      </div>
    </section>
  )
}
