'use client'

export default function WalletCard() {
  const creditBalance = 245
  const creditValue = 24.50 // USD value

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-white mb-2">Credits</h2>
          <p className="text-gray-400 text-sm font-light">Digital currency for music</p>
        </div>
        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="text-4xl font-light text-white mb-2 tracking-tight">
          {creditBalance.toLocaleString()}
        </div>
        <div className="text-gray-400 text-sm font-light">
          ≈ ${creditValue.toFixed(2)} USD
        </div>
      </div>
      
      <div className="flex gap-4">
        <button className="flex-1 bg-white text-black font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:bg-gray-100">
          Buy Credits
        </button>
        <button className="flex-1 bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:bg-gray-700 border border-gray-700">
          Send
        </button>
      </div>
      
      {/* Credit Usage Stats */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-xl font-light text-white">12</div>
            <div className="text-gray-400 text-xs font-light uppercase tracking-wide">Songs</div>
          </div>
          <div>
            <div className="text-xl font-light text-white">3</div>
            <div className="text-gray-400 text-xs font-light uppercase tracking-wide">Albums</div>
          </div>
          <div>
            <div className="text-xl font-light text-white">8</div>
            <div className="text-gray-400 text-xs font-light uppercase tracking-wide">Playlists</div>
          </div>
        </div>
      </div>
    </div>
  )
}
