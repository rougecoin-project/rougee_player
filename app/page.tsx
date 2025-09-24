import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import BottomNav from '@/components/BottomNav'
import HeroBanner from '@/components/HeroBanner'
import TrendingArtists from '@/components/TrendingArtists'
import Top10Songs from '@/components/Top10Songs'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      <main className="md:ml-20 pb-20 md:pb-8 pt-0 sm:pt-2">
        <HeroBanner />
        <TrendingArtists />
        <Top10Songs />
        {/* Additional content will go here */}
      </main>
      <BottomNav />
    </div>
  )
}
