# Rougee Player Implementation Guide

## 🎯 Step-by-Step Implementation Plan

This guide provides detailed instructions for implementing each major feature of Rougee Player, following a logical progression from basic functionality to advanced Creator Coin features.

## 📋 Implementation Phases

### **Phase 1: Foundation (Week 1-2)**
- Authentication system
- Basic data integration
- Core UI components

### **Phase 2: Music Platform (Week 3-4)**
- Music storage and streaming
- Search and discovery
- Playlist management

### **Phase 3: Creator Coins (Week 5-6)**
- Token system
- Trading interface
- Revenue sharing

### **Phase 4: Advanced Features (Week 7-8)**
- Social features
- Analytics
- Optimization

---

## 🔐 Phase 1: Authentication System

### **Step 1.1: Privy Setup**

#### **Install Dependencies**
```bash
npm install @privy-io/react-auth @privy-io/wagmi
```

#### **Environment Variables**
```env
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
```

#### **Privy Configuration**
```typescript
// lib/privy.ts
import { PrivyProvider } from '@privy-io/react-auth'

export const privyConfig = {
  appId: process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
  config: {
    loginMethods: ['email', 'google', 'apple', 'wallet'],
    appearance: {
      theme: 'dark',
      accentColor: '#3B82F6',
    },
    embeddedWallets: {
      createOnLogin: 'users-without-wallets',
    },
  },
}
```

#### **App Integration**
```typescript
// app/layout.tsx
import { PrivyProvider } from '@privy-io/react-auth'
import { privyConfig } from '@/lib/privy'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PrivyProvider config={privyConfig}>
          {children}
        </PrivyProvider>
      </body>
    </html>
  )
}
```

### **Step 1.2: Authentication Context**

#### **Create Auth Context**
```typescript
// contexts/AuthContext.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePrivy } from '@privy-io/react-auth'

interface AuthContextType {
  user: any
  login: () => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, login, logout, ready } = usePrivy()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (ready) {
      setIsLoading(false)
    }
  }, [ready])

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
```

### **Step 1.3: Login Components**

#### **Login Modal**
```typescript
// components/AuthModal.tsx
'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useState } from 'react'

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { login, user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      await login()
      onClose()
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-light text-white mb-6">Welcome to Rougee Player</h2>
        
        <div className="space-y-4">
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
          >
            {isLoading ? 'Connecting...' : 'Connect Wallet'}
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-4 bg-transparent text-white font-medium border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
```

### **Step 1.4: Protected Routes**

#### **Route Protection**
```typescript
// components/ProtectedRoute.tsx
'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}
```

---

## 🎵 Phase 2: Music Platform

### **Step 2.1: Lighthouse Integration**

#### **Install Dependencies**
```bash
npm install @lighthouse-web3/sdk
```

#### **Lighthouse Configuration**
```typescript
// lib/lighthouse.ts
import lighthouse from '@lighthouse-web3/sdk'

const LIGHTHOUSE_API_KEY = process.env.LIGHTHOUSE_API_KEY!

export class LighthouseService {
  static async uploadFile(file: File): Promise<string> {
    try {
      const uploadResponse = await lighthouse.upload(file, LIGHTHOUSE_API_KEY)
      return uploadResponse.data.Hash
    } catch (error) {
      console.error('Upload failed:', error)
      throw error
    }
  }

  static async getFile(hash: string): Promise<string> {
    return `https://gateway.lighthouse.storage/ipfs/${hash}`
  }

  static async getMetadata(hash: string): Promise<any> {
    try {
      const response = await lighthouse.getUploads(LIGHTHOUSE_API_KEY)
      return response.data.find((item: any) => item.hash === hash)
    } catch (error) {
      console.error('Metadata fetch failed:', error)
      throw error
    }
  }
}
```

### **Step 2.2: Music Upload Component**

#### **Upload Component**
```typescript
// components/MusicUpload.tsx
'use client'

import { useState } from 'react'
import { LighthouseService } from '@/lib/lighthouse'

export default function MusicUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [ipfsHash, setIpfsHash] = useState<string | null>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)
    try {
      const hash = await LighthouseService.uploadFile(file)
      setIpfsHash(hash)
      setUploadProgress(100)
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
      <h3 className="text-2xl font-light text-white mb-6">Upload Music</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Music File
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileSelect}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
          />
        </div>

        {file && (
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="text-white font-medium">{file.name}</p>
            <p className="text-gray-400 text-sm">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        {isUploading && (
          <div className="space-y-2">
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-gray-400 text-sm">Uploading to IPFS...</p>
          </div>
        )}

        {ipfsHash && (
          <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
            <p className="text-green-400 font-medium">Upload Successful!</p>
            <p className="text-gray-400 text-sm">IPFS Hash: {ipfsHash}</p>
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!file || isUploading}
          className="w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
        >
          {isUploading ? 'Uploading...' : 'Upload to IPFS'}
        </button>
      </div>
    </div>
  )
}
```

### **Step 2.3: Music Player**

#### **Audio Player Component**
```typescript
// components/MusicPlayer.tsx
'use client'

import { useState, useRef, useEffect } from 'react'

interface MusicPlayerProps {
  src: string
  title: string
  artist: string
}

export default function MusicPlayer({ src, title, artist }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = parseFloat(e.target.value)
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
      <audio ref={audioRef} src={src} />
      
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        
        <div className="flex-1">
          <h4 className="text-white font-light text-lg">{title}</h4>
          <p className="text-gray-400 text-sm">{artist}</p>
        </div>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
        />
        
        <div className="flex justify-between text-sm text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  )
}
```

---

## 💰 Phase 3: Creator Coins

### **Step 3.1: Base Network Integration**

#### **Install Dependencies**
```bash
npm install wagmi viem @base-org/sdk
```

#### **Base Configuration**
```typescript
// lib/base.ts
import { createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'

export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
})
```

### **Step 3.2: Token Management**

#### **Token Service**
```typescript
// lib/tokens.ts
import { createPublicClient, createWalletClient, http } from 'viem'
import { base } from 'viem/chains'

const publicClient = createPublicClient({
  chain: base,
  transport: http(),
})

export class TokenService {
  static async getBalance(address: string, tokenAddress: string): Promise<bigint> {
    try {
      const balance = await publicClient.readContract({
        address: tokenAddress as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'balanceOf',
        args: [address as `0x${string}`],
      })
      return balance as bigint
    } catch (error) {
      console.error('Balance fetch failed:', error)
      throw error
    }
  }

  static async transfer(
    to: string,
    amount: bigint,
    tokenAddress: string,
    walletClient: any
  ): Promise<string> {
    try {
      const hash = await walletClient.writeContract({
        address: tokenAddress as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'transfer',
        args: [to as `0x${string}`, amount],
      })
      return hash
    } catch (error) {
      console.error('Transfer failed:', error)
      throw error
    }
  }
}
```

### **Step 3.3: Artist Coin Creation**

#### **Artist Coin Component**
```typescript
// components/ArtistCoin.tsx
'use client'

import { useState } from 'react'
import { TokenService } from '@/lib/tokens'

interface ArtistCoinProps {
  artist: {
    id: string
    name: string
    image: string
    coinAddress?: string
  }
}

export default function ArtistCoin({ artist }: ArtistCoinProps) {
  const [balance, setBalance] = useState<bigint>(0n)
  const [isLoading, setIsLoading] = useState(false)

  const handleBuy = async () => {
    if (!artist.coinAddress) return
    
    setIsLoading(true)
    try {
      // Implement buy logic
      console.log('Buying artist coin...')
    } catch (error) {
      console.error('Buy failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-white font-light text-xl">{artist.name}</h3>
          <p className="text-gray-400 text-sm">Artist Coin</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Your Balance</span>
          <span className="text-white font-light">
            {balance.toString()} {artist.name}Coins
          </span>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleBuy}
            disabled={isLoading}
            className="flex-1 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
          >
            {isLoading ? 'Buying...' : 'Buy Coins'}
          </button>
          
          <button className="flex-1 py-3 bg-gray-800 text-white font-medium border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors duration-200">
            Sell Coins
          </button>
        </div>
      </div>
    </div>
  )
}
```

---

## 🚀 Phase 4: Advanced Features

### **Step 4.1: Real-time Updates**

#### **WebSocket Integration**
```typescript
// lib/websocket.ts
export class WebSocketService {
  private ws: WebSocket | null = null
  private listeners: Map<string, Function[]> = new Map()

  connect() {
    this.ws = new WebSocket('wss://api.rougee.com/ws')
    
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      this.emit(data.type, data.payload)
    }
  }

  subscribe(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }
    this.listeners.get(event)!.push(callback)
  }

  private emit(event: string, payload: any) {
    const callbacks = this.listeners.get(event) || []
    callbacks.forEach(callback => callback(payload))
  }
}
```

### **Step 4.2: Analytics Dashboard**

#### **Analytics Component**
```typescript
// components/AnalyticsDashboard.tsx
'use client'

import { useState, useEffect } from 'react'

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState({
    totalStreams: 0,
    totalRevenue: 0,
    topArtists: [],
    recentActivity: []
  })

  useEffect(() => {
    // Fetch analytics data
    const fetchAnalytics = async () => {
      try {
        // Implement analytics API call
        console.log('Fetching analytics...')
      } catch (error) {
        console.error('Analytics fetch failed:', error)
      }
    }

    fetchAnalytics()
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-light text-white">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-light text-lg mb-2">Total Streams</h3>
          <p className="text-3xl font-light text-white">{analytics.totalStreams.toLocaleString()}</p>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-light text-lg mb-2">Total Revenue</h3>
          <p className="text-3xl font-light text-white">${analytics.totalRevenue.toLocaleString()}</p>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-light text-lg mb-2">Active Artists</h3>
          <p className="text-3xl font-light text-white">{analytics.topArtists.length}</p>
        </div>
      </div>
    </div>
  )
}
```

---

## 🧪 Testing Strategy

### **Unit Tests**
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### **Integration Tests**
```bash
npm install --save-dev cypress
```

### **E2E Tests**
```bash
npm install --save-dev playwright
```

---

## 📱 Deployment

### **Vercel Deployment**
```bash
npm install -g vercel
vercel --prod
```

### **Environment Variables**
```env
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
LIGHTHOUSE_API_KEY=your_lighthouse_key
NEXT_PUBLIC_BASE_RPC_URL=your_base_rpc_url
```

---

**This implementation guide provides a comprehensive roadmap for building Rougee Player from the ground up!** 🚀
