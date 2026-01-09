'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: string;
  date: string;
  city: string;
  venue: string;
  price: string;
  available: boolean;
}

interface EventCardsSliderProps {
  events: Event[];
}

export default function EventCardsSlider({ events }: EventCardsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying || events.length <= itemsPerView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = events.length - itemsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [events.length, isAutoPlaying, itemsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = events.length - itemsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = events.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index: number) => {
    const maxIndex = events.length - itemsPerView;
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  if (events.length === 0) return null;

  const maxIndex = events.length - itemsPerView;

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#f0425f]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#f0425f]/10 h-full group shadow-md">
                {/* Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src="/img/img16346_orig.webp"
                    alt={event.city}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    quality={90}
                  />
                  {/* Availability Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-md">
                      Available
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Date */}
                  <div className="flex items-center gap-2">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-[#f0425f] to-[#ec4899] rounded-full"></div>
                    <span className="text-[#f0425f] font-bold text-sm uppercase tracking-wide">{event.date}</span>
                  </div>
                  
                  {/* Location */}
                  <h3 className="text-black font-bold text-lg leading-tight">{event.city}</h3>
                  
                  {/* Venue */}
                  <div className="flex items-start gap-2 text-gray-600 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#f0425f]">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="leading-snug line-clamp-2">{event.venue}</span>
                  </div>
                  
                  {/* Times */}
                  <div className="flex items-center gap-2 text-gray-600 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0 text-[#f0425f]">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>7:00 PM • 8:00 PM</span>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-100"></div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">From</span>
                    <span className="text-[#f0425f] font-bold text-lg">{event.price}</span>
                  </div>
                  
                  {/* Buy Ticket Button */}
                  {event.available && (
                    <Link
                      href={`/events/${event.id}`}
                      className="block w-full mt-3 px-4 py-2.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-center font-semibold rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:shadow-[#f0425f]/30"
                    >
                      Buy Ticket
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {events.length > itemsPerView && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center border-2 border-gray-200 hover:border-[#f0425f] shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous events"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-700 hover:text-[#f0425f]">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center border-2 border-gray-200 hover:border-[#f0425f] shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next events"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-700 hover:text-[#f0425f]">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {events.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#f0425f] w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

