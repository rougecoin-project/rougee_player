# Rougee Player - Music Streaming Platform with Creator Coins

🌐 **Live Demo**: [https://rougeeplayer.netlify.app/](https://rougeeplayer.netlify.app/)

## 🎵 Overview

Rougee Player is a modern music streaming platform that integrates a revolutionary Creator Coin system, allowing fans to invest in and trade tokens for their favorite artists. Built with Next.js, TypeScript, and Tailwind CSS, the platform combines traditional music streaming with innovative tokenized fan engagement.

## 🚀 Key Features

### Music Streaming
- **Hero Banner**: Dynamic video backgrounds with mobile optimization
- **Trending Artists**: Grid-based artist discovery with play controls
- **Top 10 Songs**: Ranked music charts with interactive play buttons
- **Search & Discovery**: Advanced search with category filtering
- **Playlists**: User-created and curated playlist management

### Creator Coin System on Keeta KTA Chain
- **XRGE Token**: Native platform token (36 billion supply) deployed on KTA chain
- **Artist Coins**: Each artist gets their own KTA-based tradable token
- **Fan Investment**: Users can buy/sell artist tokens using KTA infrastructure
- **Revenue Sharing**: Artists earn from their coin trading activity via KTA smart contracts
- **Trading Interface**: Built-in exchange for artist coins powered by Keeta KTA chain

### Keeta KTA Chain Integration
- **Modern Wallet**: Clean, professional wallet interface optimized for KTA chain
- **Credit System**: Digital credits powered by Keeta KTA blockchain
- **KTA Chain Support**: Native integration with Keeta blockchain infrastructure
- **Transaction History**: Real-time KTA chain transaction tracking
- **Buy Credits**: KTA-based credit packages for seamless music purchases

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Blockchain**: Keeta KTA Chain integration
- **Wallet**: KTA-compatible wallet infrastructure
- **Styling**: Tailwind CSS
- **Components**: React with modern hooks
- **Authentication**: Ready for KTA chain wallet integration
- **Design**: Mobile-first, responsive design

## 🔗 Keeta KTA Chain Integration

Rougee Player is designed to integrate seamlessly with the Keeta KTA blockchain:

### **Planned KTA Integration Features:**
- **Native KTA Wallet Support**: Direct integration with KTA chain wallets
- **KTA Token Economy**: XRGE and artist coins deployed as KTA native tokens
- **Smart Contracts**: Artist royalties and fan rewards via KTA smart contracts
- **Gas Optimization**: Leverage KTA's low-cost transaction infrastructure
- **Cross-Chain Bridge**: Potential bridging between KTA and other networks
- **DeFi Integration**: Staking and yield farming for artist tokens on KTA

### **Implementation Roadmap:**
1. **Phase 1**: KTA wallet connection and basic token transfers
2. **Phase 2**: Artist coin deployment on KTA chain
3. **Phase 3**: Smart contract integration for royalties
4. **Phase 4**: Advanced DeFi features and trading

### **Technical Benefits of KTA Chain:**
- **Low Transaction Costs**: Affordable microtransactions for music purchases
- **Fast Finality**: Quick transaction confirmation for seamless UX
- **Scalability**: Handle millions of music streaming transactions
- **Developer Tools**: Rich ecosystem for building music-focused dApps

## 📱 Mobile Optimization

- **Responsive Design**: Optimized for all screen sizes
- **Touch Interactions**: Enhanced mobile touch targets
- **Performance**: Optimized video loading and rendering
- **Navigation**: Bottom navigation for mobile users
- **Safe Areas**: iOS compatibility with safe area insets

## 🎨 Design Philosophy

- **Minimalism**: Clean, uncluttered layouts
- **Typography**: Light font weights for elegance
- **Spacing**: Generous padding and margins
- **Color**: Subtle grays with minimal color accents
- **Borders**: Clean, subtle borders instead of heavy styling
- **Consistency**: Uniform design language throughout

## 📁 Project Structure

```
rougee_player/
├── app/
│   ├── globals.css          # Global styles and utilities
│   ├── page.tsx            # Homepage with hero, trending, top songs
│   ├── search/
│   │   └── page.tsx        # Search page with discover section
│   ├── playlists/
│   │   └── page.tsx        # Playlists page with categories
│   └── wallet/
│       └── page.tsx        # Wallet page with crypto integration
├── components/
│   ├── Navbar.tsx          # Top navigation with user dropdown
│   ├── Sidebar.tsx         # Desktop sidebar navigation
│   ├── BottomNav.tsx       # Mobile bottom navigation
│   ├── HeroBanner.tsx      # Hero section with video backgrounds
│   ├── TrendingArtists.tsx # Trending artists grid
│   ├── Top10Songs.tsx      # Top songs chart
│   ├── DiscoverSection.tsx # Search discover section
│   ├── SearchResults.tsx   # Search results component
│   ├── PlaylistGrid.tsx    # Playlist grid with categories
│   ├── WalletCard.tsx      # Wallet balance and actions
│   └── TransactionHistory.tsx # Transaction history display
└── public/
    ├── logo/               # Logo assets
    ├── hero.mp4           # Desktop hero video
    └── hero_m.mp4         # Mobile hero video
```

## 🔧 Key Components

### HeroBanner
- Dynamic video backgrounds (desktop/mobile optimized)
- Mobile logo display instead of text
- Clean call-to-action buttons
- Professional navigation overlay

### TrendingArtists
- Responsive artist grid
- Hover play controls
- Clean typography and spacing
- Professional image borders

### Top10Songs
- Ranked song list with album art
- Interactive play/pause controls
- Clean card design with subtle borders
- Professional typography

### Wallet System
- Modern wallet card design
- Credit balance and USD conversion
- Buy credits interface
- Crypto wallet integration
- Transaction history

### Creator Coin Features (Planned)
- Artist token creation
- Trading interface
- Fan investment system
- Revenue sharing mechanisms
- Token performance tracking

## 🎯 Future Development

### Phase 1: Core Platform
- [x] Modern UI/UX design
- [x] Mobile optimization
- [x] Wallet integration
- [x] Search and discovery
- [x] Playlist management

### Phase 2: Creator Coins
- [ ] Artist token creation system
- [ ] Trading interface
- [ ] Fan investment features
- [ ] Revenue sharing mechanisms
- [ ] Token performance analytics

### Phase 3: Advanced Features
- [ ] Social features
- [ ] Live streaming
- [ ] NFT integration
- [ ] Advanced analytics
- [ ] API development

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd rougee_player
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📱 Mobile Testing

The platform is optimized for mobile devices. Test on:
- iOS Safari
- Android Chrome
- Various screen sizes (320px - 1920px)

## 🎨 Design System

### Colors
- **Primary**: White (#FFFFFF)
- **Secondary**: Gray variations (#1F2937, #374151, #6B7280)
- **Accent**: Blue (#3B82F6)
- **Background**: Black (#000000)

### Typography
- **Font**: System fonts (San Francisco, Segoe UI, etc.)
- **Weights**: Light (300), Medium (500)
- **Sizes**: Responsive scaling

### Spacing
- **Padding**: 4, 6, 8, 12, 16, 24, 32px
- **Margins**: 4, 6, 8, 12, 16, 24, 32px
- **Gaps**: 4, 6, 8, 12, 16, 24, 32px

## 🔐 Security

- **Crypto Integration**: Secure wallet connections
- **Transaction Safety**: Encrypted transaction handling
- **User Data**: Privacy-focused design
- **API Security**: Secure backend integration

## 📊 Performance

- **Image Optimization**: Next.js Image component
- **Video Optimization**: Responsive video loading
- **Code Splitting**: Automatic code splitting
- **Caching**: Optimized caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🌐 Deployment

### **Live Frontend**
- **URL**: [https://rougeeplayer.netlify.app/](https://rougeeplayer.netlify.app/)
- **Platform**: Netlify (auto-deploy from main branch)
- **Status**: ✅ Production ready

### **Local Development**
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### **Production Build**
```bash
npm run build
npm start
```

## 📄 License

[License information to be added]

## 🎵 Vision

Rougee Player aims to revolutionize the music industry by combining traditional streaming with innovative tokenized fan engagement. By allowing fans to invest in their favorite artists through Creator Coins, we're creating a new paradigm where music success is directly tied to fan investment and engagement.

---

**Built with ❤️ for the future of music streaming**