'use client';

import Link from 'next/link';
import Image from 'next/image';
import EventCard from '@/components/EventCard';
import YouTubeVideo from '@/components/YouTubeVideo';
import NextShowCountdown from '@/components/NextShowCountdown';
import EventCardsSlider from '@/components/EventCardsSlider';
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
    date: 'Nov 7',
    city: 'New York, NY',
    venue: 'The Town Hall',
    price: '$75',
    available: true,
  },
  {
    id: '2',
    date: 'Nov 14',
    city: 'TBA',
    venue: 'TBA',
    price: '$55',
    available: true,
  },
  {
    id: '3',
    date: 'Nov 15',
    city: 'Chicago, IL',
    venue: 'Copernicus Center',
    price: '$45',
    available: true,
  },
  {
    id: '4',
    date: 'Nov 22',
    city: 'Palo Alto, CA',
    venue: 'Spangenberg Theater',
    price: '$40',
    available: true,
  },
  {
    id: '5',
    date: 'Nov 28',
    city: 'TBA',
    venue: 'TBA',
    price: '$95',
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
    <div className="min-h-[450px] bg-black text-white banner-container">
      {/* Hero Section - Professional Banner */}
      <section className="relative min-h-[680px] flex items-center justify-center" style={{ marginTop: 0 }}>
        {/* Professional Dark stage background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/98 to-black/95"></div>
        
        {/* Background Image - Full Section */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dynamic Reddish-orange glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-red-600/20 to-transparent blur-3xl animate-pulse-glow"></div>
          
          {/* Event Stage Image Background - Full Cover */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="/img/event-stage-BBm4cEDz.webp"
              alt="Event stage"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              priority
              quality={95}
            />
          </div>
          
          {/* Additional transparent image overlay for depth */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/img/event-stage-BBm4cEDz.webp"
              alt="Event stage"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* ACIDIR Console Text Effect - Professional - Moved to bottom */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block acidir-text">
          <div className="relative">
            <div className="absolute inset-0 blur-lg bg-red-600/60 animate-pulse"></div>
            <div className="relative text-4xl md:text-6xl font-black text-white tracking-wider acidir-text-content" style={{
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
                  Hosted by İlker Ayrık
                </span>
              </div>
              
              {/* Über Ayrık - Left Side */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-2 font-light italic tracking-wide">
                Über Ayrık
              </p>
              
              {/* Main Title - Professional Typography */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight">
                <span className="neon-text block mb-1">Gerçekler</span>
                <span className="neon-text block">Acıdır</span>
          </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
                {t.heroDescription}
              </p>
              
              {/* CTA Buttons - Professional */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="/events"
              className="btn-gradient-lg flex items-center justify-center gap-2"
            >
              <span>{t.buyTicket || 'Get Tickets'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              href="/events"
              className="btn-secondary-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>View All Dates</span>
                </Link>
              </div>
              
              {/* Statistics - Professional Cards */}
              <div className="flex flex-wrap gap-6 md:gap-8 mb-6">
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
            
            {/* Right side - Empty or can be used for image */}
            <div className="flex items-center justify-center lg:justify-end">
              {/* Right side can be used for additional content if needed */}
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

      {/* Prize Cards Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Amazing Prizes</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every ticket is a chance to win incredible prizes worth over $50,000 at every show!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-white font-bold text-lg mb-2">Annual Insurance Package</h3>
              <p className="text-gray-400 text-sm mb-4">by State Farm Insurance</p>
              <div className="text-[#f0425f] font-bold text-2xl">$2,500</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-white font-bold text-lg mb-2">Cash Prize</h3>
              <p className="text-gray-400 text-sm mb-4">by Bank of America</p>
              <div className="text-[#f0425f] font-bold text-2xl">$10,000</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-white font-bold text-lg mb-2">Weekend Getaway Package</h3>
              <p className="text-gray-400 text-sm mb-4">by Marriott Hotels</p>
              <div className="text-[#f0425f] font-bold text-2xl">$3,000</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-white font-bold text-lg mb-2">Dining Gift Cards</h3>
              <p className="text-gray-400 text-sm mb-4">by Olive Garden</p>
              <div className="text-[#f0425f] font-bold text-2xl">$500</div>
            </div>
          </div>

          {/* Every Ticket Wins Banner */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#f0425f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-3xl mb-2">Every Ticket Wins</h3>
                  <p className="text-gray-300">Automatic entry into our grand prize draw at each show</p>
                </div>
              </div>
              <Link
                href="/events"
                className="btn-primary-lg flex items-center gap-2 whitespace-nowrap"
              >
                <span>Buy Tickets Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Shows Section - Professional */}
      <section className="py-24 bg-white text-black relative overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f0425f] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ec4899] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Tour Dates
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
              Catch us live
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              7 cities across North America. One unforgettable experience.
            </p>
          </div>
          
          {/* Event Cards Slider */}
          <div className="max-w-7xl mx-auto">
            <EventCardsSlider events={liveShows} />
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f0425f] hover:bg-[#d63852] text-white rounded-lg transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl"
            >
              <span>View All Tour Dates</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* İlker Ayrık Host Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/img/img16346_orig.webp"
                  alt="İlker Ayrık"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  quality={95}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#f0425f] rounded-lg">
                <span className="text-white text-sm font-semibold">Your Host</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">İlker Ayrık</h2>

              <p className="text-xl text-[#f0425f] font-semibold">Turkey's Beloved Entertainer</p>

              <p className="text-gray-300 text-lg leading-relaxed">
                İlker Ayrık is one of Turkey's most recognized TV personalities with over 20 years of experience in entertainment. Known for his charismatic hosting style and quick wit, he has brought joy to millions of viewers across numerous hit shows.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <path d="M2 10h20"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">Prime-time TV host</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">Multiple award winner</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                    <line x1="8" x2="16" y1="22" y2="22"></line>
                  </svg>
                  <span className="text-white text-sm font-medium">Stand-up comedian</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">Live event master</span>
                </div>
              </div>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f0425f] hover:bg-[#d63852] text-white rounded-lg transition-all duration-300 font-semibold text-base"
              >
                <span>See İlker Live</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Shows Section */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#f0425f] text-white text-sm font-semibold rounded-lg mb-4">
              {t.aboutShows}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.loveOnStage} <span className="text-[#f0425f]">{t.truthRevealed}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.aboutShowsDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Gerçekçi Deneyim', desc: 'Realistic experiences that mirror life\'s most profound moments', icon: '🎭' },
              { num: '02', title: 'Hayatın Her Anı', desc: 'Every moment of life captured in stunning performances', icon: '✨' },
              { num: '03', title: 'Amazing Prizes', desc: 'Win incredible prizes worth over $50,000 at every show', icon: '🎁' },
              { num: '04', title: 'Unforgettable Experience', desc: 'Create memories that will last a lifetime', icon: '🌟' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#f0425f] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-[#f0425f] rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{feature.num}</span>
                  </div>
                  <div className="text-3xl">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f0425f] text-white text-sm font-semibold rounded-lg mb-6">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Steps to the Spotlight
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join the most entertaining couples game show in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#f0425f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                    <path d="M13 5v2"></path>
                    <path d="M13 17v2"></path>
                    <path d="M13 11v2"></path>
                  </svg>
                </div>
                <div className="text-5xl font-bold text-gray-700 leading-none">01</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Get Your Tickets</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Purchase tickets for your preferred city and date. Couples who want to compete on stage can apply during checkout.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">Choose your city</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">Select seats</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">Apply to compete (optional)</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="text-5xl font-bold text-gray-700 leading-none">02</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Come to the Show</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Arrive at the venue, enjoy the pre-show atmosphere, and get ready for an unforgettable evening of laughter and surprises.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">Doors open 1 hour early</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">Meet other couples</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">Enjoy refreshments</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div className="text-5xl font-bold text-gray-700 leading-none">03</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Win Amazing Prizes</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Whether you're competing or in the audience, everyone has a chance to win. Contestants compete for the grand prize pool!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">$50K+ in prizes</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">Audience giveaways</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0425f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-300 text-sm">VIP experiences</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/events"
              className="btn-primary-lg inline-flex items-center gap-2"
            >
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

    

      {/* Sponsors Section */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Sponsors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proudly supported by leading brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-[#f0425f] transition-all duration-300">
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop"
                  alt="Mint"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-block px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded mb-2">MAIN SPONSOR</div>
                <h3 className="font-bold text-xl mb-2">Mint</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Find Trusted Professionals for Any Job. Mint connects homeowners and property managers with verified service providers.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600 text-xs">Prize Value</span>
                  <span className="text-[#f0425f] font-bold text-lg">$2,500</span>
                </div>
              </div>
            </div>
        
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-[#f0425f] transition-all duration-300">
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop"
                  alt="Doğtaş Furniture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-block px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded mb-2">MAIN SPONSOR</div>
                <h3 className="font-bold text-xl mb-2">Doğtaş Furniture</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Premium Turkish furniture brand offering elegant and modern home furnishings for every lifestyle.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600 text-xs">Prize Value</span>
                  <span className="text-[#f0425f] font-bold text-lg">$8,500</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-[#f0425f] transition-all duration-300">
              <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                <Image
                  src="/img/toyoto.jpg"
                  alt="Toyota Motors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-block px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded mb-2">MAIN SPONSOR</div>
                <h3 className="font-bold text-xl mb-2">Toyota Motors</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Official automotive partner of the 90s Tour. Providing luxury transportation for artists and crew.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600 text-xs">Prize Value</span>
                  <span className="text-[#f0425f] font-bold text-lg">$35,000</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-[#f0425f] transition-all duration-300">
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop"
                  alt="Coca-Cola Company"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-block px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded mb-2">MAIN SPONSOR</div>
                <h3 className="font-bold text-xl mb-2">Coca-Cola Company</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Exclusive beverage sponsor. Refreshing fans at every venue with classic Coca-Cola products.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600 text-xs">Prize Value</span>
                  <span className="text-[#f0425f] font-bold text-lg">$5,000</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-[#f0425f] transition-all duration-300">
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop"
                  alt="Samsung Electronics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-block px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded mb-2">MAIN SPONSOR</div>
                <h3 className="font-bold text-xl mb-2">Samsung Electronics</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Technology partner providing state-of-the-art displays and mobile devices for the tour experience.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600 text-xs">Prize Value</span>
                  <span className="text-[#f0425f] font-bold text-lg">$8,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <h3 className="font-bold text-xl">Local Sponsors in Every City</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  Each show features unique local sponsors with exclusive prizes for that city. From New Jersey to California, discover amazing prizes from businesses in your area!
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">NJ</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">PA</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">DC</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">WA</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">CA</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">+2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      {/* Past Shows & Testimonials Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#f0425f] text-white text-sm font-semibold rounded-lg mb-4">
              {t.pastShows}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.pastShows}</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              {t.experienceTheMagic}
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              {t.highlightsDescription}
            </p>
          </div>
          
          {/* Video and Featured Images */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Left Image */}
            <div className="hidden lg:block relative group overflow-hidden rounded-xl aspect-video cursor-pointer">
              <Image
                src="/img/img16346_orig.webp"
                alt="Past Show Performance 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
            
            {/* Center Video */}
            <div className="lg:col-span-1">
              <YouTubeVideo
                videoId="sW-tn_cUZEk"
                title="Über Ayrık - Past Shows Highlights"
                className="rounded-2xl"
              />
            </div>
            
            {/* Right Image */}
            <div className="hidden lg:block relative group overflow-hidden rounded-xl aspect-video cursor-pointer">
              <Image
                src="/img/event-stage-BBm4cEDz.webp"
                alt="Past Show Performance 2"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[
              { src: '/img/img16346_orig.webp', alt: 'Show Performance 1' },
              { src: '/img/event-stage-BBm4cEDz.webp', alt: 'Show Performance 2' },
              { src: '/img/img16346_orig.webp', alt: 'Show Performance 3' },
              { src: '/img/event-stage-BBm4cEDz.webp', alt: 'Show Performance 4' },
              { src: '/img/img16346_orig.webp', alt: 'Show Performance 5' },
              { src: '/img/event-stage-BBm4cEDz.webp', alt: 'Show Performance 6' },
              { src: '/img/img16346_orig.webp', alt: 'Show Performance 7' },
              { src: '/img/event-stage-BBm4cEDz.webp', alt: 'Show Performance 8' },
            ].map((image, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer bg-gray-900"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/img/img16346_orig.webp';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 md:p-12 border border-gray-800">
              <div className="text-5xl text-[#f0425f] mb-6">"</div>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                {testimonials[0].quote}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg text-white">{testimonials[0].author}</p>
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
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.beFirstToHear}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.newsletterDescription}</p>
          </div>
          
          <form className="bg-gray-50 rounded-lg p-8 space-y-4 border border-gray-200">
            <input
              type="text"
              placeholder={t.yourName}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-[#f0425f] transition-colors"
            />
            <input
              type="email"
              placeholder={t.yourEmail}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-[#f0425f] transition-colors"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 accent-[#f0425f]"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                {t.agreeTerms}
              </label>
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
            >
              {t.registerHere}
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f0425f] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.readyToTest}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t.readyDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="btn-secondary-dark-lg"
            >
              {t.buyTickets}
            </Link>
            <Link
              href="/contact"
              className="btn-secondary-lg"
            >
              {t.applyNow}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
