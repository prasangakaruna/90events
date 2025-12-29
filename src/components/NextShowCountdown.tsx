'use client';

import { useState, useEffect } from 'react';

interface Event {
  venue: string;
  date: string;
  doorsTime: string;
  showTime: string;
  targetDate: Date;
}

const events: Event[] = [
  {
    venue: 'The Town Hall, New York',
    date: 'Nov 7, 2026',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    targetDate: new Date('2026-11-07T20:00:00'),
  },
  {
    venue: '',
    date: 'Nov 14, 2026',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    targetDate: new Date('2026-11-14T20:00:00'),
  },
  {
    venue: 'Copernicus Center, Chicago',
    date: 'Nov 15, 2026',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    targetDate: new Date('2026-11-15T20:00:00'),
  },
  {
    venue: 'Spangenberg Theater, Palo Alto',
    date: 'Nov 22, 2026',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    targetDate: new Date('2026-11-22T20:00:00'),
  },
];

export default function NextShowCountdown() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Auto-slide through events
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000); // Change event every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate countdown for current event
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = events[currentIndex].targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentEvent = events[currentIndex];

  return (
    <div className="w-full">
      {/* Event Info Card - Slider */}
      <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl animate-fade-up relative overflow-hidden" style={{ animationDelay: '0.15s' }}>
        {/* Slide indicator dots */}
        <div className="absolute top-2 right-2 flex gap-1 z-10">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#f0425f] w-6' : 'bg-white/30'
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>

        <div className="transition-all duration-500 ease-in-out">
          <p className="text-lg font-semibold text-white mb-2">Gercekler Acidir by Ilker Ayrik</p>
          {currentEvent.venue && (
            <p className="text-base text-gray-300 mb-3">{currentEvent.venue}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#f0425f]">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              {currentEvent.date}
            </span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#f0425f]">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Doors {currentEvent.doorsTime}</span>
              <span className="mx-1">·</span>
              <span>Show {currentEvent.showTime}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
        <p className="text-sm font-semibold text-white mb-4 text-center">Next Show In</p>
        <div className="flex items-center justify-center gap-4">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">
              {String(timeLeft.days).padStart(3, '0')}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Days</div>
          </div>
          
          <div className="text-3xl font-bold text-[#f0425f]">:</div>
          
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Hours</div>
          </div>
          
          <div className="text-3xl font-bold text-[#f0425f]">:</div>
          
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Min</div>
          </div>
          
          <div className="text-3xl font-bold text-[#f0425f]">:</div>
          
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
}

