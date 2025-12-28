'use client';

import Link from 'next/link';
import Image from 'next/image';
import EventCard from '@/components/EventCard';
import HeroEventSlider from '@/components/HeroEventSlider';
import LiveShowsSlider from '@/components/LiveShowsSlider';
import YouTubeVideo from '@/components/YouTubeVideo';
import { useTranslation } from '@/contexts/TranslationContext';

// Hero slider events data
const heroEvents = [
  {
    id: '1',
    title: 'İlker Ayrık - Gerçekler Acıdır Stand-Up Show',
    date: '15 Mart 2025 • 20:00',
    location: 'Zorlu PSM, İstanbul',
    price: '₺250\'den başlayan fiyatlarla',
    image: '/img/img16346_orig.webp',
    category: 'Comedy',
    status: 'available' as const,
  },
  {
    id: '2',
    title: 'İlker Ayrık - Gerçekler Acıdır Ankara',
    date: '22 Mart 2025 • 20:30',
    location: 'Ankara Arena, Ankara',
    price: '₺200\'den başlayan fiyatlarla',
    image: '/img/img16346_orig.webp',
    category: 'Comedy',
    status: 'available' as const,
  },
  {
    id: '3',
    title: 'İlker Ayrık - Gerçekler Acıdır İzmir',
    date: '29 Mart 2025 • 21:00',
    location: 'İzmir Arena, İzmir',
    price: '₺220\'den başlayan fiyatlarla',
    image: '/img/img16346_orig.webp',
    category: 'Comedy',
    status: 'sold-out' as const,
  },
  {
    id: '4',
    title: 'İlker Ayrık - Gerçekler Acıdır Bursa',
    date: '5 Nisan 2025 • 20:00',
    location: 'Merinos Atatürk Kongre ve Kültür Merkezi, Bursa',
    price: '₺180\'den başlayan fiyatlarla',
    image: '/img/img16346_orig.webp',
    category: 'Comedy',
    status: 'available' as const,
  },
  {
    id: '5',
    title: 'İlker Ayrık - Gerçekler Acıdır Antalya',
    date: '12 Nisan 2025 • 21:00',
    location: 'Antalya Expo Center, Antalya',
    price: '₺230\'den başlayan fiyatlarla',
    image: '/img/img16346_orig.webp',
    category: 'Comedy',
    status: 'available' as const,
  },
];

// Mock data
const liveShows = [
  {
    id: '1',
    city: 'New York, NY',
    venue: 'Madison Square Garden',
    date: 'March 15, 2025',
    time: '8:00 PM',
    status: 'SOLD OUT',
    available: false,
  },
  {
    id: '2',
    city: 'Toronto, ON',
    venue: 'Scotiabank Arena',
    date: 'March 22, 2025',
    time: '8:30 PM',
    status: 'AVAILABLE',
    available: true,
  },
  {
    id: '3',
    city: 'Chicago, IL',
    venue: 'United Center',
    date: 'March 29, 2025',
    time: '9:00 PM',
    status: 'AVAILABLE',
    available: true,
  },
  {
    id: '4',
    city: 'Miami, FL',
    venue: 'American Airlines Arena',
    date: 'April 5, 2025',
    time: '8:00 PM',
    status: 'AVAILABLE',
    available: true,
  },
  {
    id: '5',
    city: 'Dallas, TX',
    venue: 'American Airlines Center',
    date: 'April 12, 2025',
    time: '8:30 PM',
    status: 'SOLD OUT',
    available: false,
  },
  {
    id: '6',
    city: 'Los Angeles, CA',
    venue: 'Staples Center',
    date: 'April 19, 2025',
    time: '9:00 PM',
    status: 'AVAILABLE',
    available: true,
  },
];

const prizes = [
  { icon: '🚗', title: 'Luxury Cars', value: '$15,000+' },
  { icon: '⌚', title: 'Smart Watches', value: '$12,000+' },
  { icon: '💍', title: 'Diamond Rings', value: '$9,000+' },
  { icon: '💎', title: 'Fine Jewelry', value: '$15,000+' },
];

const benefits = [
  {
    icon: '⭐',
    title: 'Authentic Cultural Experience',
    description: 'Immerse yourself in a unique blend of drama, comedy, and illusion that reflects real life experiences.',
  },
  {
    icon: '🏆',
    title: 'Premium Entertainment Redefined',
    description: 'Experience world-class performances that push the boundaries of traditional entertainment.',
  },
  {
    icon: '💰',
    title: 'Affordable Entertainment Option',
    description: 'Enjoy premium entertainment at accessible prices, making unforgettable experiences available to everyone.',
  },
];

const testimonials = [
  {
    quote: "The show was truly captivating, a perfect blend of humor and illusion. I was on the edge of my seat the entire time!",
    author: "JOHN DOE",
    role: "CEO of XYZ Corp",
    rating: 5,
  },
];

const sponsorshipTiers = [
  {
    name: 'Title Sponsor',
    price: '$50,000',
    icon: '🏆',
    benefits: [
      'Logo on all marketing materials',
      'VIP access to all shows',
      'Social media mentions',
      'Exclusive backstage access',
    ],
    popular: false,
  },
  {
    name: 'Platinum Sponsor',
    price: '$25,000',
    icon: '⭐',
    benefits: [
      'Logo on event materials',
      'VIP tickets for 10 shows',
      'Social media promotion',
      'Branded merchandise',
    ],
    popular: true,
  },
  {
    name: 'Gold Sponsor',
    price: '$15,000',
    icon: '🥇',
    benefits: [
      'Logo on select materials',
      'VIP tickets for 5 shows',
      'Social media mentions',
      'Event program listing',
    ],
    popular: false,
  },
  {
    name: 'Silver Sponsor',
    price: '$5,000',
    icon: '🎗️',
    benefits: [
      'Event program listing',
      'VIP tickets for 2 shows',
      'Social media mention',
      'Brand recognition',
    ],
    popular: false,
  },
];

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[450px] bg-black text-white">
      {/* Hero Section - Professional Banner */}
      <section className="relative min-h-[680px] flex items-center justify-center" style={{ marginTop: 0 }}>
        {/* Professional Stage Background with Enhanced Lighting */}
        <div className="absolute inset-0">
          {/* Dynamic Reddish-orange glow from left side */}
          <div className="absolute left-0 top-0 bottom-0 w-2/5 bg-gradient-to-r from-orange-600/70 via-red-600/50 to-transparent blur-3xl animate-pulse-glow"></div>
          {/* Professional Dark stage background with depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/98 to-black/95"></div>
          {/* Artist Image Background - Transparent */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/img/img16346_orig.webp"
              alt="Über Ayrık on stage"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              priority
              quality={95}
            />
          </div>
          
          {/* Additional transparent artist image overlay for depth */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/img/img16346_orig.webp"
              alt="Über Ayrık on stage"
              fill
              className="object-cover blur-sm"
              style={{ objectPosition: 'center center' }}
              quality={80}
            />
          </div>
          {/* Professional Spotlight effect */}
          <div className="absolute inset-0 bg-gradient-radial from-white/12 via-transparent to-transparent" style={{
            background: 'radial-gradient(ellipse at center 40%, rgba(255,255,255,0.18) 0%, transparent 65%)'
          }}></div>
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
        
        {/* ACIDIR Console Text Effect - Professional */}
        <div className="absolute bottom-6 right-6 md:right-12 z-20 hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 blur-lg bg-red-600/60 animate-pulse"></div>
            <div className="relative text-4xl md:text-6xl font-black text-white tracking-wider" style={{
              textShadow: '0 0 25px rgba(239, 68, 68, 0.9), 0 0 50px rgba(239, 68, 68, 0.7), 0 0 75px rgba(239, 68, 68, 0.5)',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.15em',
              transform: 'perspective(600px) rotateY(-8deg)',
            }}>
              ACIDIR
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
            {/* Left side - Professional Content */}
            <div className="text-left lg:text-left animate-fadeIn flex flex-col justify-center space-y-4">
              {/* Badge */}
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  {t.livePerformance}
                </span>
              </div>
              
              {/* Main Title - Professional Typography */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight">
                <span className="neon-text block mb-1">Gerçekler</span>
                <span className="neon-text block">Acıdır</span>
          </h1>
              
              {/* Subtitle */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-4 font-light italic tracking-wide">
                Über Ayrık
              </p>
              
              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
                {t.heroDescription}
              </p>
              
              {/* CTA Buttons - Professional */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="/events"
                  className="group relative px-8 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-xl hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60 text-center overflow-hidden"
            >
                  <span className="relative z-10">{t.buyTicket}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ec4899] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
                  href="/about"
                  className="px-8 py-3.5 border-2 border-white/40 text-white rounded-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:scale-105 font-semibold text-base backdrop-blur-md text-center shadow-lg"
                >
                  {t.moreInfo}
                </Link>
              </div>
              
              {/* Statistics - Professional Cards */}
              <div className="flex flex-wrap gap-6 md:gap-8">
                <div className="text-left group">
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">7</div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{t.shows}</div>
                </div>
                <div className="text-left group">
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">$50K+</div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{t.prizes}</div>
                </div>
                <div className="text-left group">
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">1</div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{t.experience}</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Professional Event Slider */}
            <div className="relative flex items-center justify-center h-full mt-12 lg:mt-0">
              <HeroEventSlider events={heroEvents} />
            </div>
          </div>
        </div>
        
        {/* Professional Bottom Gradient Fade - Reduced */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Shows Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideInUp">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
            {t.aboutShows}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t.loveOnStage}<span className="gradient-text"> {t.truthRevealed}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.aboutShowsDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { num: '01', title: 'Gerçekçi Deneyim', desc: 'Realistic experiences that mirror life\'s most profound moments', icon: '🎭' },
            { num: '02', title: 'Hayatın Her Anı', desc: 'Every moment of life captured in stunning performances', icon: '✨' },
            { num: '03', title: 'Amazing Prizes', desc: 'Win incredible prizes worth over $50,000 at every show', icon: '🎁' },
            { num: '04', title: 'Unforgettable Experience', desc: 'Create memories that will last a lifetime', icon: '🌟' },
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="relative group"
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#f0425f]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f0425f]/20">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-lg blur-md opacity-50"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-extrabold text-white">{feature.num}</span>
                    </div>
                  </div>
                  <div className="text-3xl">{feature.icon}</div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f0425f] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Shows Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        {/* Artist Image Background - Transparent */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <Image
            src="/img/img16346_orig.webp"
            alt="Über Ayrık on stage"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            quality={90}
          />
        </div>
        {/* Black shade overlay on top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 pointer-events-none"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.liveShows}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t.catchUsLive}</h2>
            <p className="text-lg text-gray-400">{t.liveShowsDescription}</p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <LiveShowsSlider shows={liveShows} />
          </div>
        </div>
        </div>
      </section>

      {/* Multiple Events Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
            {t.allEvents || 'ALL EVENTS'}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.upcomingEvents || 'Upcoming Events'}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t.discoverAllEvents || 'Discover all our upcoming shows and book your tickets today'}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {heroEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-block px-10 py-4 border-2 border-[#f0425f] text-[#f0425f] rounded-xl hover:bg-[#f0425f] hover:text-white transition-all font-semibold text-lg transform hover:scale-105"
          >
            {t.viewAllEvents || 'View All Events'}
          </Link>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
            {t.prizesSection}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            {t.amazingPrizes}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t.prizesDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {prizes.map((prize, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              {/* Gradient Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity blur-sm"></div>
              
              {/* Prize Card */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#f0425f]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f0425f]/30">
                {/* Prize Value - Prominent */}
                <div className="mb-4">
                  <p className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                    {prize.value}
                  </p>
                </div>
                
                {/* Prize Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f0425f] transition-colors">
                  {prize.title}
                </h3>
                
                {/* Decorative Line */}
                <div className="h-1 w-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Every Ticket Wins - Enhanced */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Gradient Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-900/98 to-black/98 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                      ✓
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{t.everyTicketWins}</h3>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {t.guaranteedPrizes || "Guaranteed prizes for all attendees. No matter which ticket you purchase, you're a winner!"}
                  </p>
                </div>
                <Link
                  href="/events"
                  className="px-10 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-xl hover:from-[#d63852] hover:to-[#db2777] transition-all font-bold text-lg shadow-2xl hover:shadow-[#f0425f]/50 transform hover:scale-105 whitespace-nowrap"
                >
                  {t.getYourTicketNow}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Shows Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.pastShows}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.pastShows}</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <YouTubeVideo
              videoId="sW-tn_cUZEk"
              title="Über Ayrık - Past Shows Highlights"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Experience the Magic Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
            {t.highlights}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t.experienceTheMagic}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t.highlightsDescription}
          </p>
        </div>
        
        {/* YouTube Video Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { videoId: 'sW-tn_cUZEk', title: 'Show Highlights - Episode 1' },
            { videoId: 'sW-tn_cUZEk', title: 'Show Highlights - Episode 2' },
            { videoId: 'sW-tn_cUZEk', title: 'Show Highlights - Episode 3' },
            { videoId: 'sW-tn_cUZEk', title: 'Show Highlights - Episode 4' },
          ].map((video, idx) => (
            <YouTubeVideo
              key={idx}
              videoId={video.videoId}
              title={video.title}
            />
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="text-5xl text-[#f0425f] mb-6">"</div>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              {testimonials[0].quote}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">{testimonials[0].author}</p>
                <p className="text-gray-400 text-sm">{testimonials[0].role}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.whyChooseUs}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.benefitsOf90Events}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-2xl p-8 text-center hover-lift"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '20+', label: t.yearsOfExperience || 'Years of Experience', icon: '⭐' },
              { value: '70,000+', label: t.happyCustomers || 'Happy Customers', icon: '😊' },
              { value: '40,000+', label: t.ticketsSold || 'Tickets Sold', icon: '🎫' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.beFirstToHear}</h2>
          <p className="text-lg text-gray-400 mb-8">{t.newsletterDescription}</p>
          
          <form className="glass-effect rounded-2xl p-8 space-y-4">
            <input
              type="text"
              placeholder={t.yourName}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] transition-colors"
            />
            <input
              type="email"
              placeholder={t.yourEmail}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] transition-colors"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 accent-[#f0425f]"
              />
              <label htmlFor="terms" className="text-gray-400 text-sm">
                {t.agreeTerms}
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg"
            >
              {t.registerHere}
            </button>
          </form>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
            {t.ourPartners || 'OUR PARTNERS'}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.ourPartners || 'Our Sponsors'}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t.proudPartners || 'We\'re proud to partner with these amazing brands'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Amerika Liturk', logo: '/sponsors/amerikaliturknew.png' },
            { name: 'Grape Law', logo: '/sponsors/grapeLaw2.jpg' },
            { name: 'Turk of America', logo: '/sponsors/TurkOfAmerica.png' },
          ].map((sponsor, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
              <div className="relative glass-effect rounded-2xl p-8 flex items-center justify-center hover-lift min-h-[200px]">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="object-contain max-w-full max-h-24 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.sponsorship}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.partnerWith90Events}</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t.sponsorshipDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sponsorshipTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`glass-effect rounded-2xl p-6 hover-lift relative ${
                  tier.popular ? 'ring-2 ring-[#f0425f]' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-semibold rounded-full">
                    {t.popular}
                  </div>
                )}
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold gradient-text mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-6 text-sm text-gray-400">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#f0425f] mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold">
                  {t.becomeSponsor}
                </button>
              </div>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t.customSponsorship}</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold"
                >
                  {t.contactUsHere}
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
                >
                  {t.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.readyToTest}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t.readyDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="px-10 py-4 bg-white text-[#f0425f] rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-2xl"
            >
              {t.buyTickets}
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              {t.applyNow}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
