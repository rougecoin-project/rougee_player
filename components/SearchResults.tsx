'use client'

import Image from 'next/image'

interface SearchResultsProps {
  query: string
  category: string
  isSearching: boolean
}

export default function SearchResults({ query, category, isSearching }: SearchResultsProps) {
  // Mock search results data
  const mockResults = {
    songs: [
      {
        id: 1,
        title: "Flowers",
        artist: "Miley Cyrus",
        album: "Endless Summer Vacation",
        duration: "3:20",
        image: "/albums/flowers.jpg",
        isPlaying: false
      },
      {
        id: 2,
        title: "Anti-Hero",
        artist: "Taylor Swift",
        album: "Midnights",
        duration: "3:20",
        image: "/albums/anti-hero.jpg",
        isPlaying: false
      },
      {
        id: 3,
        title: "As It Was",
        artist: "Harry Styles",
        album: "Harry's House",
        duration: "2:47",
        image: "/albums/as-it-was.jpg",
        isPlaying: true
      }
    ],
    artists: [
      {
        id: 1,
        name: "Taylor Swift",
        followers: "1.8M",
        genre: "Pop",
        image: "/artists/taylor.jpg"
      },
      {
        id: 2,
        name: "Harry Styles",
        followers: "1.5M",
        genre: "Pop Rock",
        image: "/artists/harry.jpg"
      },
      {
        id: 3,
        name: "Miley Cyrus",
        followers: "1.2M",
        genre: "Pop",
        image: "/artists/miley.jpg"
      }
    ],
    albums: [
      {
        id: 1,
        title: "Midnights",
        artist: "Taylor Swift",
        year: "2022",
        tracks: 13,
        image: "/albums/midnights.jpg"
      },
      {
        id: 2,
        title: "Harry's House",
        artist: "Harry Styles",
        year: "2022",
        tracks: 13,
        image: "/albums/harrys-house.jpg"
      },
      {
        id: 3,
        title: "Endless Summer Vacation",
        artist: "Miley Cyrus",
        year: "2023",
        tracks: 14,
        image: "/albums/endless-summer.jpg"
      }
    ],
    playlists: [
      {
        id: 1,
        title: "Today's Top Hits",
        creator: "Rougee",
        tracks: 50,
        followers: "2.1M",
        image: "/playlists/top-hits.jpg"
      },
      {
        id: 2,
        title: "Pop Mix",
        creator: "Rougee",
        tracks: 30,
        followers: "1.5M",
        image: "/playlists/pop-mix.jpg"
      },
      {
        id: 3,
        title: "Chill Vibes",
        creator: "Rougee",
        tracks: 25,
        followers: "800K",
        image: "/playlists/chill-vibes.jpg"
      }
    ]
  }

  if (isSearching) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-white text-lg">Searching...</span>
        </div>
      </div>
    )
  }

  const getResults = () => {
    if (category === 'all') {
      return {
        songs: mockResults.songs.slice(0, 3),
        artists: mockResults.artists.slice(0, 3),
        albums: mockResults.albums.slice(0, 3),
        playlists: mockResults.playlists.slice(0, 3)
      }
    }
    return { [category]: mockResults[category as keyof typeof mockResults] }
  }

  const results = getResults()

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Results for "{query}"
        </h2>
        <span className="text-gray-400 text-sm">
          {Object.values(results).flat().length} results
        </span>
      </div>

      {/* Songs Results */}
      {(category === 'all' || category === 'songs') && results.songs && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Songs</h3>
          <div className="space-y-2">
            {results.songs.map((song) => (
              <div
                key={song.id}
                className={`group flex items-center p-3 sm:p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200 cursor-pointer ${
                  song.isPlaying ? 'bg-blue-900/30 border border-blue-500/30' : ''
                }`}
              >
                <div className="flex-shrink-0 ml-3 sm:ml-4">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-gray-800">
                    <Image
                      src={song.image}
                      alt={song.album}
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
                <div className="flex-1 ml-4 sm:ml-6 min-w-0">
                  <h4 className="text-white font-semibold text-sm sm:text-base truncate">
                    {song.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">
                    {song.artist}
                  </p>
                  <p className="text-gray-500 text-xs truncate">
                    {song.album}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {song.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Artists Results */}
      {(category === 'all' || category === 'artists') && results.artists && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Artists</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {results.artists.map((artist) => (
              <div key={artist.id} className="group cursor-pointer">
                <div className="relative aspect-square rounded-full overflow-hidden mb-3 sm:mb-4 bg-gray-800">
                  <Image
                    src={artist.image}
                    alt={artist.name}
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
                  <h4 className="text-white font-semibold text-sm sm:text-base mb-1 truncate">
                    {artist.name}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {artist.followers} followers
                  </p>
                  <p className="text-gray-500 text-xs">
                    {artist.genre}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Albums Results */}
      {(category === 'all' || category === 'albums') && results.albums && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Albums</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {results.albums.map((album) => (
              <div key={album.id} className="group cursor-pointer">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-3 sm:mb-4 bg-gray-800">
                  <Image
                    src={album.image}
                    alt={album.title}
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
                  <h4 className="text-white font-semibold text-sm sm:text-base mb-1 truncate">
                    {album.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">
                    {album.artist}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {album.year} • {album.tracks} tracks
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Playlists Results */}
      {(category === 'all' || category === 'playlists') && results.playlists && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Playlists</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {results.playlists.map((playlist) => (
              <div key={playlist.id} className="group cursor-pointer">
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
                  <h4 className="text-white font-semibold text-sm sm:text-base mb-1 truncate">
                    {playlist.title}
                  </h4>
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
      )}
    </div>
  )
}
