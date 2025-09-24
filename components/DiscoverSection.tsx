'use client'

import Image from 'next/image'

export default function DiscoverSection() {
  const featuredArtists = [
    {
      id: 1,
      name: "Luna Rose",
      genre: "Indie Pop",
      followers: "125K",
      image: "/artists/luna-rose.jpg",
      isPremium: true,
      badge: "Featured"
    },
    {
      id: 2,
      name: "Midnight Vibes",
      genre: "Electronic",
      followers: "89K",
      image: "/artists/midnight-vibes.jpg",
      isPremium: true,
      badge: "Sponsored"
    },
    {
      id: 3,
      name: "Echo Valley",
      genre: "Alternative Rock",
      followers: "156K",
      image: "/artists/echo-valley.jpg",
      isPremium: true,
      badge: "Rising"
    },
    {
      id: 4,
      name: "Neon Dreams",
      genre: "Synthwave",
      followers: "203K",
      image: "/artists/neon-dreams.jpg",
      isPremium: true,
      badge: "Trending"
    }
  ]

  const trendingSongs = [
    {
      id: 1,
      title: "Electric Dreams",
      artist: "Luna Rose",
      duration: "3:45",
      image: "/albums/electric-dreams.jpg",
      isPremium: true
    },
    {
      id: 2,
      title: "Midnight City",
      artist: "Midnight Vibes",
      duration: "4:12",
      image: "/albums/midnight-city.jpg",
      isPremium: true
    },
    {
      id: 3,
      title: "Echo Chamber",
      artist: "Echo Valley",
      duration: "3:28",
      image: "/albums/echo-chamber.jpg",
      isPremium: true
    }
  ]

  const trendingPlaylists = [
    {
      id: 1,
      title: "New Discoveries",
      creator: "Rougee",
      tracks: 25,
      followers: "1.2M",
      image: "/playlists/new-discoveries.jpg",
      isPremium: true
    },
    {
      id: 2,
      title: "Indie Rising",
      creator: "Rougee",
      tracks: 30,
      followers: "890K",
      image: "/playlists/indie-rising.jpg",
      isPremium: true
    }
  ]

  return (
    <div className="space-y-12">
      {/* Featured Artists Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            Discover New Artists
          </h2>
          <div className="flex items-center gap-2 text-gray-400 text-sm font-light">
            <span>Premium Placements</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {featuredArtists.map((artist) => (
            <div key={artist.id} className="group cursor-pointer relative">
              {/* Premium Badge */}
              <div className="absolute top-2 right-2 z-10">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  artist.badge === 'Featured' ? 'bg-white text-black' :
                  artist.badge === 'Sponsored' ? 'bg-gray-800 text-white border border-gray-700' :
                  artist.badge === 'Rising' ? 'bg-gray-800 text-white border border-gray-700' :
                  'bg-gray-800 text-white border border-gray-700'
                }`}>
                  {artist.badge}
                </div>
              </div>
              
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 bg-gray-800 border border-gray-800">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
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
      </div>

      {/* Trending Songs Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Trending Now
          </h2>
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Trending</span>
          </div>
        </div>
        
        <div className="space-y-2">
          {trendingSongs.map((song, index) => (
            <div
              key={song.id}
              className="group flex items-center p-3 sm:p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200 cursor-pointer relative"
            >
              {/* Premium Indicator */}
              <div className="absolute top-2 right-2">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>

              {/* Rank */}
              <div className="flex-shrink-0 w-8 sm:w-10 text-center">
                <span className="text-lg sm:text-xl font-bold text-yellow-400">
                  #{index + 1}
                </span>
              </div>

              {/* Album Art */}
              <div className="flex-shrink-0 ml-3 sm:ml-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    src={song.image}
                    alt={song.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                  {song.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate">
                  {song.artist}
                </p>
              </div>

              {/* Duration */}
              <div className="flex-shrink-0 ml-4">
                <span className="text-gray-400 text-xs sm:text-sm">
                  {song.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Playlists Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          Curated Playlists
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {trendingPlaylists.map((playlist) => (
            <div key={playlist.id} className="group cursor-pointer relative">
              {/* Premium Badge */}
              <div className="absolute top-2 right-2 z-10">
                <div className="px-2 py-1 rounded-full text-xs font-semibold bg-purple-500 text-white">
                  Curated
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3 sm:mb-4 bg-gray-800">
                <Image
                  src={playlist.image}
                  alt={playlist.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 truncate">
                  {playlist.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate">
                  {playlist.creator}
                </p>
                <p className="text-gray-500 text-xs">
                  {playlist.tracks} tracks • {playlist.followers} followers
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monetization Info */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white">Artist Spotlight Program</h3>
        </div>
        <p className="text-gray-300 text-sm sm:text-base mb-4">
          Get your music featured in our discover section and reach millions of music lovers. 
          Premium placements help artists gain visibility and grow their fanbase.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
          Learn More About Artist Placements
        </button>
      </div>
    </div>
  )
}
