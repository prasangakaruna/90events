'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EventCard from '@/components/EventCard';
import YouTubeVideo from '@/components/YouTubeVideo';
import EventCardsSlider from '@/components/EventCardsSlider';
import { useTranslation } from '@/contexts/TranslationContext';

// Multiple events data for Home 2
const multipleEvents = [
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
    status: 'available' as const,
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
  {
    id: '6',
    title: 'İlker Ayrık - Gerçekler Acıdır Gaziantep',
    date: '19 Nisan 2025 • 20:00',
    location: 'Gaziantep Arena, Gaziantep',
    price: '₺200\'den başlayan fiyatlarla',
    image: '/img/img16346_orig.webp',
    category: 'Comedy',
    status: 'available' as const,
  },
  {
    id: '7',
    title: 'İlker Ayrık - Gerçekler Acıdır Adana',
    date: '26 Nisan 2025 • 21:00',
    location: 'Adana Arena, Adana',
    price: '₺210\'den başlayan fiyatlarla',
    image: '/img/img16346_orig.webp',
    category: 'Comedy',
    status: 'available' as const,
  },
];

// Shows data - each show contains multiple events
interface Show {
  id: string;
  name: string;
  description?: string;
  events: typeof multipleEvents;
}

const shows: Show[] = [
  {
    id: 'show-1',
    name: 'Gerçekler Acıdır Tour 2025',
    description: 'Experience the magic across multiple cities',
    events: [
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
        status: 'available' as const,
      },
    ],
  },
  {
    id: 'show-2',
    name: 'Spring Special Shows',
    description: 'Special spring edition performances',
    events: [
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
      {
        id: '6',
        title: 'İlker Ayrık - Gerçekler Acıdır Gaziantep',
        date: '19 Nisan 2025 • 20:00',
        location: 'Gaziantep Arena, Gaziantep',
        price: '₺200\'den başlayan fiyatlarla',
        image: '/img/img16346_orig.webp',
        category: 'Comedy',
        status: 'available' as const,
      },
    ],
  },
  {
    id: 'show-3',
    name: 'Summer Tour 2025',
    description: 'Summer special events',
    events: [
      {
        id: '7',
        title: 'İlker Ayrık - Gerçekler Acıdır Adana',
        date: '26 Nisan 2025 • 21:00',
        location: 'Adana Arena, Adana',
        price: '₺210\'den başlayan fiyatlarla',
        image: '/img/img16346_orig.webp',
        category: 'Comedy',
        status: 'available' as const,
      },
    ],
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

const testimonials = [
  {
    quote: "The show was truly captivating, a perfect blend of humor and illusion. I was on the edge of my seat the entire time!",
    author: "JOHN DOE",
    role: "CEO of XYZ Corp",
    rating: 5,
  },
];

export default function Home2() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Check if there are multiple shows
  const hasMultipleShows = shows.length > 1;
  
  // Auto-play slider for hero banner
  useEffect(() => {
    if (!isAutoPlaying || shows.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= shows.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [shows.length, isAutoPlaying]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? shows.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev >= shows.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentShow = shows[currentSlide];
  
  return (
    <div className="min-h-[450px] bg-black text-white banner-container">
      {/* Hero Section - Professional Banner Slider */}
      <section className="relative min-h-[680px] flex items-center justify-center overflow-hidden" style={{ marginTop: 0 }}>
        {/* Slider Container */}
        <div className="absolute inset-0">
          {shows.map((show, index) => (
            <div
              key={show.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Professional Dark stage background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-black/98 to-black/95"></div>
              
              {/* Background Image - Full Section */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Dynamic Reddish-orange glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-red-600/20 to-transparent blur-3xl animate-pulse-glow"></div>
                
                {/* Event Stage Image Background - Full Cover */}
                <div className="absolute inset-0 opacity-50">
                  <Image
                    src={show.events[0]?.image || '/img/event-stage-BBm4cEDz.webp'}
                    alt={show.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center center' }}
                    quality={95}
                  />
                </div>
                
                {/* Additional transparent image overlay for depth */}
                <div className="absolute inset-0 opacity-30">
                  <Image
                    src={show.events[0]?.image || '/img/event-stage-BBm4cEDz.webp'}
                    alt={show.name}
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
            </div>
          ))}
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
        
        {/* Content Slider */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
            {/* Left side - Professional Content */}
            <div className="text-left lg:text-left flex flex-col justify-center space-y-4">
              {/* Show Name Badge */}
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  {currentShow.name}
                </span>
              </div>
              
              {/* ILKER AYRIK - Left Side */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-2 font-light italic tracking-wide">
                ILKER AYRIK
              </p>
              
              {/* Main Title - Professional Typography */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight">
                <span className="neon-text block mb-1">Gerçekler</span>
                <span className="neon-text block">Acıdır</span>
              </h1>
              
              {/* Show Description */}
              {currentShow.description && (
                <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
                  {currentShow.description}
                </p>
              )}
              
              {/* CTA Buttons - Professional */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/tickets"
                  className="btn-gradient-lg flex items-center justify-center gap-2"
                >
                  <span>{t.buyTicket || 'Get Tickets'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
                <Link
                  href="/tickets"
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
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">{currentShow.events.length}</div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">Events</div>
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
        
        {/* Navigation Arrows */}
        {shows.length > 1 && (
          <>
            <button
              onClick={goToPreviousSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:border-white/50 text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous show"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:border-white/50 text-white transition-all duration-300 hover:scale-110"
              aria-label="Next show"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </>
        )}
        
        {/* Dots Indicator */}
        {shows.length > 1 && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
            {shows.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-gradient-to-r from-[#f0425f] to-[#ec4899]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to show ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Professional Bottom Gradient Fade - Reduced */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Multiple Events Grid Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              All Events
            </div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
               SHOWS
             </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Choose from multiple dates and locations. Find the perfect event for you!
            </p>
          </div>
          
          {/* Multiple Shows Tab Section - Only show if multiple shows */}
          {hasMultipleShows ? (
            <>
              {/* Show Tabs */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3 justify-center border-b border-gray-800 pb-4">
                  {shows.map((show, index) => (
                    <button
                      key={show.id}
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        activeTab === index
                          ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white shadow-lg shadow-[#f0425f]/30'
                          : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className="text-left">
                        <div className="text-sm font-bold">{show.name}</div>
                        <div className="text-xs opacity-80">{show.events.length} Events</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tab Content - Show Description */}
              {shows[activeTab].description && (
                <div className="mb-6 text-center">
                  <p className="text-gray-300 text-lg">{shows[activeTab].description}</p>
                </div>
              )}
              
              {/* Events Grid for Active Show */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {shows[activeTab].events.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Events Grid - Fallback if only one show */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {multipleEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </>
          )}
          
          {/* View All Link */}
          <div className="text-center">
            <Link
              href="/events"
              className="btn-primary-lg inline-flex items-center gap-2"
            >
              <span>View All Events</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
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

          {/* Every Ticket has a chance Win Banner */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#f0425f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-3xl mb-2">Every Ticket has a chance Win</h3>
                  <p className="text-gray-300">Automatic entry into our grand prize draw at each show</p>
                </div>
              </div>
              <Link
                href="/tickets"
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
              className="btn-primary-lg inline-flex items-center gap-2"
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
                className="btn-primary-lg inline-flex items-center gap-2"
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

      {/* CTA Section */}
      <section className="py-24 bg-[#f0425f] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.readyToTest}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t.readyDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tickets"
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

