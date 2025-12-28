'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: string;
  image: string;
  category?: string;
  status?: 'available' | 'sold-out';
}

interface HeroEventSliderProps {
  events: Event[];
}

export default function HeroEventSlider({ events }: HeroEventSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [events.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (events.length === 0) return null;

  const currentEvent = events[currentIndex];
  const prevIndex = (currentIndex - 1 + events.length) % events.length;
  const nextIndex = (currentIndex + 1) % events.length;

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col justify-center" style={{ maxHeight: '500px' }}>
      {/* Main Event Card - Modern Design */}
      <div className="relative group">
        {/* Glow effect behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
        
        {/* Main Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 shadow-2xl" style={{ height: '500px' }}>
          <Link href={`/events/${currentEvent.id}`} className="block h-full">
            {/* Image Container */}
            <div className="relative h-3/5 overflow-hidden">
              <Image
                src={currentEvent.image || '/img/img16346_orig.webp'}
                alt={currentEvent.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: 'center 30%' }}
                priority={currentIndex === 0}
                quality={95}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              
              {/* Status Badge - Top Right */}
              <div className="absolute top-4 right-4 z-10">
                {currentEvent.status === 'sold-out' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-lg border border-red-400/50">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    SOLD OUT
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-lg border border-green-400/50">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    AVAILABLE
                  </span>
                )}
              </div>
              
              {/* Slide Counter - Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white text-xs font-semibold">
                    {currentIndex + 1} / {events.length}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="relative h-2/5 p-6 flex flex-col justify-between bg-gradient-to-b from-gray-900/95 to-black">
              {/* Title */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                  {currentEvent.title}
                </h3>
                
                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#f0425f] to-[#ec4899] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">📅</span>
                    </div>
                    <span className="truncate">{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#f0425f] to-[#ec4899] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">📍</span>
                    </div>
                    <span className="truncate">{currentEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#f0425f] to-[#ec4899] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">💰</span>
                    </div>
                    <span>{currentEvent.price}</span>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs text-gray-400 uppercase tracking-wider">View Event</span>
                <div className="flex items-center gap-2 text-[#f0425f] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Details</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Navigation Controls - Modern Design */}
      <div className="flex items-center justify-between mt-6">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#f0425f]/80 to-[#ec4899]/80 hover:from-[#f0425f] hover:to-[#ec4899] backdrop-blur-sm border border-white/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#f0425f]/50"
          aria-label="Previous event"
        >
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Thumbnail Indicators */}
        <div className="flex items-center gap-2 flex-1 justify-center px-4">
          {events.map((event, index) => {
            const isActive = index === currentIndex;
            const isNearby = index === prevIndex || index === nextIndex;
            
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 rounded-lg overflow-hidden ${
                  isActive 
                    ? 'w-16 h-12 ring-2 ring-[#f0425f] ring-offset-2 ring-offset-black scale-110' 
                    : isNearby
                    ? 'w-12 h-8 opacity-60 hover:opacity-100 hover:scale-105'
                    : 'w-8 h-6 opacity-30 hover:opacity-60 hover:scale-105'
                }`}
                aria-label={`Go to event ${index + 1}`}
              >
                <Image
                  src={event.image || '/img/img16346_orig.webp'}
                  alt={event.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f0425f]/40 to-transparent"></div>
                )}
              </button>
            );
          })}
        </div>
        
        {/* Next Button */}
        <button
          onClick={goToNext}
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#f0425f]/80 to-[#ec4899]/80 hover:from-[#f0425f] hover:to-[#ec4899] backdrop-blur-sm border border-white/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#f0425f]/50"
          aria-label="Next event"
        >
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / events.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
