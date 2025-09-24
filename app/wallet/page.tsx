'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import BottomNav from '@/components/BottomNav'
import WalletCard from '@/components/WalletCard'
import TransactionHistory from '@/components/TransactionHistory'

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'buy-credits', label: 'Buy Credits' },
    { id: 'crypto', label: 'Crypto' },
    { id: 'history', label: 'History' }
  ]

  const handleConnectWallet = async () => {
    // Placeholder for Privy wallet connection
    try {
      // This would integrate with Privy SDK
      console.log('Connecting wallet...')
      setIsWalletConnected(true)
      setWalletAddress('0x1234...5678') // Mock address
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  const handleDisconnectWallet = () => {
    setIsWalletConnected(false)
    setWalletAddress('')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="md:ml-20 pb-20 md:pb-8 pt-4 sm:pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Wallet
            </h1>
            
            {/* Wallet Connection Status */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${isWalletConnected ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                <span className="text-gray-300 text-sm sm:text-base">
                  {isWalletConnected ? 'Wallet Connected' : 'Wallet Not Connected'}
                </span>
                {isWalletConnected && (
                  <span className="text-gray-400 text-xs sm:text-sm font-mono">
                    {walletAddress}
                  </span>
                )}
              </div>
              
              {!isWalletConnected ? (
                <button
                  onClick={handleConnectWallet}
                  className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="hidden sm:inline">Connect Wallet</span>
                  <span className="sm:hidden">Connect</span>
                </button>
              ) : (
                <button
                  onClick={handleDisconnectWallet}
                  className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden sm:inline">Disconnect</span>
                  <span className="sm:hidden">Disconnect</span>
                </button>
              )}
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-white border-white'
                      : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <WalletCard />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-colors duration-200">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="text-white font-medium">Buy Credits</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 bg-green-600/20 hover:bg-green-600/30 rounded-lg transition-colors duration-200">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                      <span className="text-white font-medium">Send Credits</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-colors duration-200">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-white font-medium">View Analytics</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">Credits Purchased</p>
                        <p className="text-gray-400 text-xs">+100 credits • 2 hours ago</p>
                      </div>
                      <span className="text-green-400 text-sm font-semibold">+$10</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">Song Purchase</p>
                        <p className="text-gray-400 text-xs">"Flowers" by Miley Cyrus • 1 day ago</p>
                      </div>
                      <span className="text-red-400 text-sm font-semibold">-5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'buy-credits' && (
            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-light text-white mb-8">Buy Credits</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[
                    { credits: 50, price: 5, popular: false },
                    { credits: 100, price: 10, popular: true },
                    { credits: 250, price: 25, popular: false },
                    { credits: 500, price: 50, popular: false },
                    { credits: 1000, price: 100, popular: false },
                    { credits: 2500, price: 250, popular: false }
                  ].map((package_, index) => (
                    <div key={index} className={`relative p-6 rounded-xl border cursor-pointer transition-all duration-200 ${
                      package_.popular 
                        ? 'border-white bg-white/5' 
                        : 'border-gray-800 bg-gray-800/30 hover:border-gray-700'
                    }`}>
                      {package_.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium">Most Popular</span>
                        </div>
                      )}
                      <div className="text-center">
                        <h4 className="text-white font-light text-2xl mb-1">{package_.credits}</h4>
                        <p className="text-gray-400 text-sm mb-4 font-light">credits</p>
                        <p className="text-white font-light text-lg mb-6">${package_.price}</p>
                        <button className="w-full py-3 bg-white text-black font-medium rounded-lg transition-all duration-200 hover:bg-gray-100">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'crypto' && (
            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-light text-white mb-8">Crypto Wallet</h3>
                {isWalletConnected ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 bg-gray-800/30 border border-gray-800 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                          <span className="text-orange-400 font-bold text-lg">₿</span>
                        </div>
                        <div>
                          <p className="text-white font-light text-lg">Bitcoin</p>
                          <p className="text-gray-400 text-sm font-light">BTC</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-light text-lg">0.0000</p>
                        <p className="text-gray-400 text-sm font-light">$0.00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-6 bg-gray-800/30 border border-gray-800 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                          <span className="text-blue-400 font-bold text-lg">Ξ</span>
                        </div>
                        <div>
                          <p className="text-white font-light text-lg">Ethereum</p>
                          <p className="text-gray-400 text-sm font-light">ETH</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-light text-lg">0.0000</p>
                        <p className="text-gray-400 text-sm font-light">$0.00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-6 bg-gray-800/30 border border-gray-800 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                          <span className="text-purple-400 font-bold text-lg">B</span>
                        </div>
                        <div>
                          <p className="text-white font-light text-lg">Base</p>
                          <p className="text-gray-400 text-sm font-light">BASE</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-light text-lg">0.0000</p>
                        <p className="text-gray-400 text-sm font-light">$0.00</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Connect Your Wallet</h4>
                    <p className="text-gray-400 text-sm mb-4">Connect your wallet to view crypto balances and make transactions</p>
                    <button
                      onClick={handleConnectWallet}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                      Connect Wallet
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <TransactionHistory />
          )}
        </div>
      </main>
      
      <BottomNav />
    </div>
  )
}
