'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-purple-900/30 rounded-xl overflow-hidden border border-purple-800/30 hover:border-purple-700/50 transition-all duration-300 hover:scale-105 h-full">
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src="/img/img16346_orig.webp"
                    alt={event.city}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
                
                {/* Content */}
                <div className="p-5 space-y-3">
                  {/* Date and Availability */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#f0425f] font-bold text-base">{event.date}</span>
                    <span className="px-3 py-1 bg-green-500/80 text-white text-xs font-semibold rounded-full">Available</span>
                  </div>
                  
                  {/* Location */}
                  <h3 className="text-white font-bold text-lg">{event.city}</h3>
                  
                  {/* Venue */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{event.venue}</span>
                  </div>
                  
                  {/* Times */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Doors: 7:00 PM Show: 8:00 PM</span>
                  </div>
                  
                  {/* Price */}
                  <div className="pt-2">
                    <span className="text-[#f0425f] font-semibold">From {event.price}</span>
                  </div>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-purple-900/80 hover:bg-purple-900 rounded-full flex items-center justify-center border border-purple-700/50 transition-all duration-300 hover:scale-110"
            aria-label="Previous events"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-purple-900/80 hover:bg-purple-900 rounded-full flex items-center justify-center border border-purple-700/50 transition-all duration-300 hover:scale-110"
            aria-label="Next events"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
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

