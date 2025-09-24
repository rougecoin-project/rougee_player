'use client'

import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="relative h-[24rem] sm:h-[28rem] md:h-[36rem] lg:h-[40rem] xl:h-[44rem] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Desktop Video Background */}
      <video
        className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/file.svg"
      />
      {/* Mobile Video Background */}
      <video
        className="sm:hidden absolute inset-0 w-full h-full object-cover object-center"
        src="/hero_m.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/file.svg"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/60" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center sm:items-start justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-full sm:max-w-4xl w-full text-center sm:text-left sm:pt-0">
        {/* Mobile Logo */}
        <div className="sm:hidden mb-4">
          <Image
            src="/logo/logo.png"
            alt="Rougee Player Logo"
            width={280}
            height={80}
            className="h-16 w-auto filter drop-shadow-lg"
          />
        </div>
        {/* Desktop Text */}
        <h1 className="hidden sm:block text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Where every music scene lives.
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-10 md:mb-12 drop-shadow max-w-[85vw] sm:max-w-2xl leading-relaxed">
          Discover millions of songs, remixes and DJ sets: every chart-topping track you can find elsewhere, and millions more you can't find anywhere else.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200">
            Upload
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-medium border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-200">
           Get RouGee Pro 
          </button>
        </div>
      </div>
      {/* Top-right navigation - hidden on mobile to prevent overlap */}
      <div className="hidden sm:flex absolute top-6 right-8 z-20 flex-row gap-4 items-center">
        <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">Sign in</button>
        <button className="px-6 py-3 bg-transparent text-white font-medium border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200">Create account</button>
        <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors duration-200">For Artists</a>
      </div>
    </section>
  );
}