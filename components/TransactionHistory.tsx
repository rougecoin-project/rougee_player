'use client'

import { useState } from 'react'

export default function TransactionHistory() {
  const [filter, setFilter] = useState('all')

  const transactions = [
    {
      id: 1,
      type: 'credit_purchase',
      amount: 100,
      description: 'Credits Purchased',
      timestamp: '2 hours ago',
      status: 'completed',
      icon: '💳',
      color: 'green'
    },
    {
      id: 2,
      type: 'song_purchase',
      amount: -5,
      description: 'Song: "Flowers" by Miley Cyrus',
      timestamp: '1 day ago',
      status: 'completed',
      icon: '🎵',
      color: 'red'
    },
    {
      id: 3,
      type: 'album_purchase',
      amount: -25,
      description: 'Album: "Midnights" by Taylor Swift',
      timestamp: '3 days ago',
      status: 'completed',
      icon: '💿',
      color: 'red'
    },
    {
      id: 4,
      type: 'credit_purchase',
      amount: 50,
      description: 'Credits Purchased',
      timestamp: '1 week ago',
      status: 'completed',
      icon: '💳',
      color: 'green'
    },
    {
      id: 5,
      type: 'playlist_purchase',
      amount: -10,
      description: 'Premium Playlist: "Today\'s Top Hits"',
      timestamp: '1 week ago',
      status: 'completed',
      icon: '📋',
      color: 'red'
    },
    {
      id: 6,
      type: 'crypto_deposit',
      amount: 0.05,
      description: 'ETH Deposit',
      timestamp: '2 weeks ago',
      status: 'completed',
      icon: '₿',
      color: 'blue'
    },
    {
      id: 7,
      type: 'credit_purchase',
      amount: 200,
      description: 'Credits Purchased',
      timestamp: '2 weeks ago',
      status: 'completed',
      icon: '💳',
      color: 'green'
    },
    {
      id: 8,
      type: 'song_purchase',
      amount: -5,
      description: 'Song: "As It Was" by Harry Styles',
      timestamp: '3 weeks ago',
      status: 'completed',
      icon: '🎵',
      color: 'red'
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'credit_purchase', label: 'Purchases' },
    { id: 'song_purchase', label: 'Songs' },
    { id: 'album_purchase', label: 'Albums' },
    { id: 'playlist_purchase', label: 'Playlists' },
    { id: 'crypto_deposit', label: 'Crypto' }
  ]

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(tx => tx.type === filter)

  const getAmountColor = (amount: number) => {
    if (amount > 0) return 'text-green-400'
    if (amount < 0) return 'text-red-400'
    return 'text-gray-400'
  }

  const getAmountPrefix = (amount: number) => {
    if (amount > 0) return '+'
    return ''
  }

  const formatAmount = (amount: number, type: string) => {
    if (type === 'crypto_deposit') {
      return `${amount} ETH`
    }
    return `${getAmountPrefix(amount)}${Math.abs(amount)} credits`
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-light text-white">Transaction History</h3>
          <div className="flex items-center gap-3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/20 font-light"
            >
              {filters.map((filterOption) => (
                <option key={filterOption.id} value={filterOption.id}>
                  {filterOption.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredTransactions.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-gray-800 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="text-white font-light text-lg mb-2">No transactions found</h4>
            <p className="text-gray-400 text-sm font-light">No transactions match your current filter</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center gap-6 p-6 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg ${
                    transaction.color === 'green' ? 'bg-green-500/20 border border-green-500/30' :
                    transaction.color === 'red' ? 'bg-red-500/20 border border-red-500/30' :
                    transaction.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30' :
                    'bg-gray-500/20 border border-gray-500/30'
                  }`}>
                    {transaction.icon}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-white font-light text-base truncate">
                    {transaction.description}
                  </p>
                  <p className="text-gray-400 text-sm font-light">
                    {transaction.timestamp}
                  </p>
                </div>
                
                <div className="flex-shrink-0 text-right">
                  <p className={`font-light text-base ${getAmountColor(transaction.amount)}`}>
                    {formatAmount(transaction.amount, transaction.type)}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-500' :
                      transaction.status === 'pending' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}></div>
                    <span className="text-gray-400 text-xs font-light capitalize">
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredTransactions.length > 0 && (
          <div className="mt-6 text-center">
            <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
