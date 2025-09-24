'use client'

import Image from 'next/image'

interface PlaylistGridProps {
  category: string
}

export default function PlaylistGrid({ category }: PlaylistGridProps) {
  const playlistData = {
    'my-playlists': [
      {
        id: 1,
        title: "My Favorites",
        creator: "You",
        tracks: 45,
        followers: "12",
        image: "/playlists/my-favorites.jpg",
        isLiked: true,
        isPublic: false
      },
      {
        id: 2,
        title: "Workout Mix",
        creator: "You",
        tracks: 32,
        followers: "8",
        image: "/playlists/workout-mix.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 3,
        title: "Chill Vibes",
        creator: "You",
        tracks: 28,
        followers: "15",
        image: "/playlists/chill-vibes.jpg",
        isLiked: true,
        isPublic: true
      },
      {
        id: 4,
        title: "Road Trip",
        creator: "You",
        tracks: 38,
        followers: "5",
        image: "/playlists/road-trip.jpg",
        isLiked: false,
        isPublic: false
      }
    ],
    'made-for-you': [
      {
        id: 1,
        title: "Discover Weekly",
        creator: "Rougee",
        tracks: 30,
        followers: "2.1M",
        image: "/playlists/discover-weekly.jpg",
        isLiked: false,
        isPublic: true,
        isPremium: true
      },
      {
        id: 2,
        title: "Your Time Capsule",
        creator: "Rougee",
        tracks: 25,
        followers: "1.8M",
        image: "/playlists/time-capsule.jpg",
        isLiked: true,
        isPublic: true,
        isPremium: true
      },
      {
        id: 3,
        title: "Daily Mix 1",
        creator: "Rougee",
        tracks: 35,
        followers: "1.5M",
        image: "/playlists/daily-mix-1.jpg",
        isLiked: false,
        isPublic: true,
        isPremium: true
      },
      {
        id: 4,
        title: "Release Radar",
        creator: "Rougee",
        tracks: 20,
        followers: "1.2M",
        image: "/playlists/release-radar.jpg",
        isLiked: false,
        isPublic: true,
        isPremium: true
      }
    ],
    'popular': [
      {
        id: 1,
        title: "Today's Top Hits",
        creator: "Rougee",
        tracks: 50,
        followers: "2.1M",
        image: "/playlists/top-hits.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 2,
        title: "Global Top 50",
        creator: "Rougee",
        tracks: 50,
        followers: "1.8M",
        image: "/playlists/global-top-50.jpg",
        isLiked: true,
        isPublic: true
      },
      {
        id: 3,
        title: "Viral Hits",
        creator: "Rougee",
        tracks: 40,
        followers: "1.5M",
        image: "/playlists/viral-hits.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 4,
        title: "Hot Country",
        creator: "Rougee",
        tracks: 35,
        followers: "1.2M",
        image: "/playlists/hot-country.jpg",
        isLiked: false,
        isPublic: true
      }
    ],
    'mood': [
      {
        id: 1,
        title: "Happy Hits",
        creator: "Rougee",
        tracks: 30,
        followers: "1.5M",
        image: "/playlists/happy-hits.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 2,
        title: "Sad Songs",
        creator: "Rougee",
        tracks: 25,
        followers: "1.2M",
        image: "/playlists/sad-songs.jpg",
        isLiked: true,
        isPublic: true
      },
      {
        id: 3,
        title: "Workout Energy",
        creator: "Rougee",
        tracks: 40,
        followers: "1.8M",
        image: "/playlists/workout-energy.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 4,
        title: "Sleep & Relax",
        creator: "Rougee",
        tracks: 35,
        followers: "1.3M",
        image: "/playlists/sleep-relax.jpg",
        isLiked: false,
        isPublic: true
      }
    ],
    'genre': [
      {
        id: 1,
        title: "Pop Mix",
        creator: "Rougee",
        tracks: 30,
        followers: "1.5M",
        image: "/playlists/pop-mix.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 2,
        title: "Hip Hop Central",
        creator: "Rougee",
        tracks: 35,
        followers: "1.8M",
        image: "/playlists/hip-hop-central.jpg",
        isLiked: true,
        isPublic: true
      },
      {
        id: 3,
        title: "Rock Classics",
        creator: "Rougee",
        tracks: 40,
        followers: "1.2M",
        image: "/playlists/rock-classics.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 4,
        title: "Electronic Vibes",
        creator: "Rougee",
        tracks: 28,
        followers: "1.1M",
        image: "/playlists/electronic-vibes.jpg",
        isLiked: false,
        isPublic: true
      }
    ],
    'new': [
      {
        id: 1,
        title: "New Music Friday",
        creator: "Rougee",
        tracks: 25,
        followers: "1.8M",
        image: "/playlists/new-music-friday.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 2,
        title: "Fresh Finds",
        creator: "Rougee",
        tracks: 20,
        followers: "1.2M",
        image: "/playlists/fresh-finds.jpg",
        isLiked: true,
        isPublic: true
      },
      {
        id: 3,
        title: "Rising Artists",
        creator: "Rougee",
        tracks: 22,
        followers: "950K",
        image: "/playlists/rising-artists.jpg",
        isLiked: false,
        isPublic: true
      },
      {
        id: 4,
        title: "Indie Discoveries",
        creator: "Rougee",
        tracks: 18,
        followers: "800K",
        image: "/playlists/indie-discoveries.jpg",
        isLiked: false,
        isPublic: true
      }
    ]
  }

  const playlists = playlistData[category as keyof typeof playlistData] || []

  if (playlists.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gray-800 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          No playlists found
        </h3>
        <p className="text-gray-400 text-sm sm:text-base">
          Try a different category or create your first playlist
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Category Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-light text-white">
          {category === 'my-playlists' && 'Your Playlists'}
          {category === 'made-for-you' && 'Made for You'}
          {category === 'popular' && 'Popular Playlists'}
          {category === 'mood' && 'Mood & Activity'}
          {category === 'genre' && 'By Genre'}
          {category === 'new' && 'New Releases'}
        </h2>
        <span className="text-gray-400 text-sm font-light">
          {playlists.length} playlists
        </span>
      </div>

      {/* Playlists Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="group cursor-pointer">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gray-800 border border-gray-800">
              <Image
                src={playlist.image}
                alt={playlist.title}
                fill
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

              {/* Premium badge */}
              {'isPremium' in playlist && playlist.isPremium && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              )}

              {/* Privacy indicator */}
              {!playlist.isPublic && (
                <div className="absolute top-2 left-2">
                  <div className="w-6 h-6 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            {/* Playlist Info */}
            <div className="text-center">
              <h3 className="text-white font-light text-sm sm:text-base mb-1 truncate">
                {playlist.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm truncate font-light">
                {playlist.creator}
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <p className="text-gray-500 text-xs font-light">
                  {playlist.tracks} tracks
                </p>
                <span className="text-gray-600">•</span>
                <p className="text-gray-500 text-xs font-light">
                  {playlist.followers} followers
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors duration-200">
                <svg className={`w-4 h-4 ${playlist.isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors duration-200">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
              {category === 'my-playlists' && (
                <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
