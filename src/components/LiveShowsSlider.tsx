'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Show {
  id: string;
  city: string;
  venue: string;
  date: string;
  time: string;
  status: string;
  available: boolean;
}

interface LiveShowsSliderProps {
  shows: Show[];
}

export default function LiveShowsSlider({ shows }: LiveShowsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying || shows.length <= itemsPerView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = shows.length - itemsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [shows.length, isAutoPlaying, itemsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = shows.length - itemsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = shows.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index: number) => {
    const maxIndex = shows.length - itemsPerView;
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  if (shows.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {shows.map((show) => (
            <div
              key={show.id}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="glass-effect rounded-xl p-6 hover-lift relative overflow-hidden group h-full">
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-semibold rounded-full z-10">
                  LIVE SHOW
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
                  show.available 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}>
                  {show.status}
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#f0425f] transition-colors">
                    {show.city}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{show.venue}</p>
                  <div className="space-y-2 text-sm mb-4">
                    <p className="text-gray-300">📅 {show.date}</p>
                    <p className="text-gray-300">🕐 {show.time}</p>
                  </div>
                  {show.available && (
                    <Link
                      href={`/events/${show.id}`}
                      className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold"
                    >
                      Get Tickets
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {shows.length > itemsPerView && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all z-20 shadow-lg"
            aria-label="Previous shows"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all z-20 shadow-lg"
            aria-label="Next shows"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {shows.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(shows.length / itemsPerView) }).map((_, index) => {
            const slideIndex = index * itemsPerView;
            const isActive = Math.floor(currentIndex / itemsPerView) === index;
            return (
              <button
                key={index}
                onClick={() => goToSlide(slideIndex)}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-8 h-2 bg-gradient-to-r from-[#f0425f] to-[#ec4899]'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

