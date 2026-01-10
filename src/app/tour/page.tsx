'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Show {
  id: string;
  date: string;
  city: string;
  venue: string;
  doorsTime: string;
  showTime: string;
  price: string;
  available: boolean;
  targetDate: Date;
}

interface ExperiencePackage {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  groupSize: string;
  activity: string;
  highlights: string[];
  locations: string[];
}

const shows: Show[] = [
  {
    id: '1',
    date: 'Nov 7',
    city: 'New York, NY',
    venue: 'The Town Hall',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    price: 'From $75',
    available: true,
    targetDate: new Date('2026-11-07T20:00:00'),
  },
  {
    id: '2',
    date: 'Nov 14',
    city: 'TBA',
    venue: 'TBA',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    price: 'From $50',
    available: true,
    targetDate: new Date('2026-11-14T20:00:00'),
  },
  {
    id: '3',
    date: 'Nov 15',
    city: 'Chicago, IL',
    venue: 'Copernicus Center',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    price: 'From $45',
    available: true,
    targetDate: new Date('2026-11-15T20:00:00'),
  },
  {
    id: '4',
    date: 'Nov 20',
    city: 'TBA',
    venue: 'TBA',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    price: 'From $55',
    available: true,
    targetDate: new Date('2026-11-20T20:00:00'),
  },
  {
    id: '5',
    date: 'Nov 22',
    city: 'Palo Alto, CA',
    venue: 'Spangenberg Theater',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    price: 'From $40',
    available: true,
    targetDate: new Date('2026-11-22T20:00:00'),
  },
  {
    id: '6',
    date: 'Nov 28',
    city: 'TBA',
    venue: 'TBA',
    doorsTime: '7:00 PM',
    showTime: '8:00 PM',
    price: 'From $60',
    available: true,
    targetDate: new Date('2026-11-28T20:00:00'),
  },
];

const experiencePackages: ExperiencePackage[] = [
  {
    id: '1',
    category: '🏕️ FAMILY FOCUSED',
    title: 'Family Camping Adventure',
    subtitle: '"Gerçekler Acıdır USA Edition"',
    price: 'Contact Us',
    duration: '8 Days',
    groupSize: '12-16',
    activity: 'Moderate',
    highlights: [
      'Camp with Ilker at Grand Canyon & Zion',
      'Learn American camping techniques',
      'Family campfire meals & s\'mores',
      'Mix of camping & luxury hotels',
      'Behind-the-scenes filming access',
    ],
    locations: ['🏜️ Grand Canyon', '🏔️ Zion', '🌅 Bryce Canyon', '🏜️ Sedona'],
  },
  {
    id: '2',
    category: '🚛 CULINARY FOCUSED',
    title: 'Trucker\'s Culinary Road Trip',
    subtitle: '"Big Rig, Big Flavors"',
    price: 'Contact Us',
    duration: '10 Days',
    groupSize: '10-12',
    activity: 'Light',
    highlights: [
      'Ride in production truck with Ilker',
      'Cook at scenic highway stops',
      'Visit authentic truck stops',
      'Pacific Coast Highway beauty',
      'Historic Route 66 experience',
    ],
    locations: ['🌉 San Francisco', '🌊 Big Sur', '🏖️ Santa Barbara', '🛣️ Route 66'],
  },
  {
    id: '3',
    category: '🚙 ADVENTURE EXTREME',
    title: 'Jeep Wilderness Expedition',
    subtitle: '"Off-Road Amerika"',
    price: 'Contact Us',
    duration: '9 Days',
    groupSize: '8-10',
    activity: 'Challenging',
    highlights: [
      'Drive your own Jeep Wrangler',
      'Rooftop tent camping under stars',
      'Hell\'s Revenge legendary trail',
      'Remote backcountry access',
      'Professional off-road training',
    ],
    locations: ['🏔️ Moab', '🏜️ Canyonlands', '🌵 Monument Valley', '⛰️ Capitol Reef'],
  },
  {
    id: '4',
    category: '🏍️ GOURMET EXPERIENCE',
    title: 'Motorcycle Foodie Journey',
    subtitle: '"Two Wheels, Endless Flavors"',
    price: 'Contact Us',
    duration: '10 Days',
    groupSize: '8-10',
    activity: 'Moderate',
    highlights: [
      'Ride Honda motorcycles premium routes',
      'Michelin-star restaurants & wineries',
      'Wine tasting Napa & Sonoma',
      'Pacific Coast Highway riding',
      'Meet acclaimed chefs',
    ],
    locations: ['🍷 Napa Valley', '🌊 Oregon Coast', '🍺 Portland', '🌆 Seattle'],
  },
];

const testimonials = [
  {
    quote: "The camping retreat was magical! İlker's stories around the campfire were unforgettable.",
    author: 'Sarah & Mike',
    location: 'Los Angeles, CA',
    rating: 5,
  },
  {
    quote: "Best decision ever! The truck adventure gave us views we'll never forget.",
    author: 'David Chen',
    location: 'New York, NY',
    rating: 5,
  },
  {
    quote: 'The VIP package was worth every penny. A truly once-in-a-lifetime experience.',
    author: 'Maria Santos',
    location: 'Miami, FL',
    rating: 5,
  },
];

export default function TourPage() {
  const [currentShowIndex, setCurrentShowIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const currentShow = shows[currentShowIndex];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = currentShow.targetDate.getTime();
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
  }, [currentShowIndex]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Professional */}
      <section className="relative min-h-[680px] flex items-center justify-center" style={{ marginTop: 0 }}>
        {/* Professional Dark stage background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/98 to-black/95"></div>
        
        {/* Background Image - Full Section */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dynamic Reddish-orange glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-red-600/20 to-transparent blur-3xl animate-pulse-glow"></div>
          
          {/* Professional Spotlight effect */}
          <div className="absolute inset-0 bg-gradient-radial from-white/12 via-transparent to-transparent" style={{
            background: 'radial-gradient(ellipse at center 40%, rgba(255,255,255,0.18) 0%, transparent 65%)'
          }}></div>
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Exclusive Experiences
              </div>
              <h1 className="mb-6">
                Create Lifetime Memories with İlker
              </h1>
              <p className="body-text-lg text-gray-300 mb-6 max-w-2xl">
                Go beyond the show. Join İlker Ayrık on exclusive adventures that combine entertainment, exploration, and unforgettable moments you'll treasure forever.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Link
                  href="#shows"
                  className="btn-gradient-lg"
                >
                  View Tour Dates
                </Link>
                <Link
                  href="#packages"
                  className="btn-secondary-lg"
                >
                  Experience Packages
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-base">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    500+
                  </div>
                  <div>
                    <div className="text-white font-semibold">Happy Guests</div>
                    <div className="text-gray-400 text-sm">Verified reviews</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    4.9
                  </div>
                  <div>
                    <div className="text-white font-semibold">Rating</div>
                    <div className="text-gray-400 text-sm">Out of 5 stars</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    📸
                  </div>
                  <div>
                    <div className="text-white font-semibold">Photo Memories</div>
                    <div className="text-gray-400 text-sm">Included in packages</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/img/img16346_orig.webp"
                    alt="İlker Ayrık"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/img/img16346_orig.webp"
                  alt="ACIDIR New Ayrik"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/img/img16346_orig.webp"
                  alt="ACIDIR New Ayrik"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   

   

         {/* Choose Your Adventure Section - Professional */}
         <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Experience Packages
            </div>
            <h2 className="mb-4">Choose Your Adventure</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-3 leading-relaxed">
              Every package is designed to create unforgettable memories. Pick the experience that speaks to you.
            </p>
            <p className="text-sm text-gray-500">
              Most experiences are <span className="text-[#f0425f] font-semibold">standalone</span> - no show ticket required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiencePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-gray-900 rounded-xl p-8 border-2 border-gray-800 hover:border-[#f0425f] transition-all relative shadow-lg hover:shadow-xl group"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-[#f0425f] uppercase tracking-wider">
                    {pkg.category}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#f0425f] transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-400 italic mb-6 text-sm">{pkg.subtitle}</p>

                {/* Info Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-800">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Duration</div>
                    <div className="text-white font-semibold">{pkg.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Group Size</div>
                    <div className="text-white font-semibold">{pkg.groupSize}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Activity</div>
                    <div className="text-white font-semibold">{pkg.activity}</div>
                  </div>
                </div>

                {/* Tour Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Tour Highlights</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start gap-3">
                        <span className="text-[#f0425f] mt-0.5 font-bold">✓</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Locations */}
                <div className="mb-6 pb-6 border-b border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {pkg.locations.map((location, index) => (
                      <span key={index} className="text-sm text-gray-400">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">From</div>
                    <div className="text-xl font-bold text-[#f0425f]">{pkg.price}</div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all font-semibold text-sm border border-gray-700">
                      Contact Us
                    </button>
                    <Link
                      href={`/tour/packages/${pkg.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-sm flex items-center gap-2"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


         {/* Catch İlker Live Section - Professional */}
         <section id="shows" className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-black relative overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f0425f] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ec4899] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Tour Dates
            </div>
            <h2 className="mb-4 text-black">Catch İlker Live</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">Find a show near you and secure your tickets today</p>
            <Link
              href="/tickets"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60"
            >
              <span>Book Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Next Show Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="mb-6 text-black">Next Show In</h3>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#f0425f] mb-2">{currentShow.city}</div>
                  <div className="text-gray-600">
                    {currentShow.date === 'Nov 7' ? 'Saturday, November 7' : currentShow.date} • {currentShow.venue}
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  {shows.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentShowIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentShowIndex ? 'bg-[#f0425f] w-8' : 'bg-gray-300 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-10 border-2 border-[#f0425f] shadow-lg">
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                      {String(timeLeft.days).padStart(3, '0')}
                    </div>
                    <div className="text-sm text-gray-600 uppercase">Days</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-600 uppercase">Hours</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-600 uppercase">Minutes</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-600 uppercase">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Show Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((show) => (
              <div
                key={show.id}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#f0425f] transition-all relative shadow-md hover:shadow-xl group"
              >
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/img/img16346_orig.webp"
                    alt={show.city}
                    fill
                    className="object-cover"
                  />
                  {show.available && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-md z-10">
                      Available
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-600 mb-2">{show.date}</div>
                <div className="text-xl font-bold mb-2 text-black">{show.city}</div>
                <div className="text-gray-600 text-sm mb-2">{show.venue}</div>
                <div className="text-gray-600 text-sm mb-4">
                  Doors: {show.doorsTime} • Show: {show.showTime}
                </div>
                <div className="text-lg font-bold text-[#f0425f] mb-4">{show.price}</div>
                <Link
                  href="/tickets"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-sm shadow-lg hover:shadow-[#f0425f]/50"
                >
                  <span>Book Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


   {/* More Than Just a Tour Section - Professional */}
   <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Why Choose Us
            </div>
            <h2 className="mb-4">More Than Just a Tour</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              It's an Experience - Every moment is crafted to create unforgettable memories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-[#f0425f]/50 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  ❤️
                </div>
                <h3 className="mb-4">Personal Connection</h3>
                <p className="text-gray-400 leading-relaxed">Small groups mean real conversations and genuine moments with İlker that create lasting bonds.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-[#f0425f]/50 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  📸
                </div>
                <h3 className="mb-4">Captured Moments</h3>
                <p className="text-gray-400 leading-relaxed">Professional photos and videos to relive your adventure forever and share with loved ones.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-[#f0425f]/50 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <h3 className="mb-4">Exclusive Access</h3>
                <p className="text-gray-400 leading-relaxed">Behind the scenes stories and experiences you won't find anywhere else in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* City Based Sponsors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-black relative overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f0425f] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ec4899] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Local Partners
            </div>
            <h2 className="mb-4 text-black">City Based Sponsors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with local businesses in each state to bring you exclusive prizes and experiences. Support local sponsors in your area!
            </p>
          </div>

          <div className="space-y-12">
            {/* New York Sponsors */}
            <div>
              <h3 className="mb-6 flex items-center gap-2">
                <span className="text-3xl">🗽</span>
                <span>New York, NY</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Meta Studio', tier: 'Gold', value: '$1,500', description: 'Creative design studio', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop' },
                  { name: 'Prime Fitness', tier: 'Silver', value: '$1,500', description: 'Premium fitness center', logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=200&fit=crop' },
                  { name: 'Saka Restaurant', tier: 'Bronze', value: '$1,500', description: 'Authentic Turkish cuisine', logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop' },
                ].map((sponsor, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-500/50 transition-all shadow-md hover:shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sponsor.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-600' :
                        sponsor.tier === 'Silver' ? 'bg-gray-400/20 text-gray-600' :
                        'bg-orange-500/20 text-orange-600'
                      }`}>
                        {sponsor.tier}
                      </span>
                    </div>
                    <h4 className="text-black mb-2">{sponsor.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{sponsor.description}</p>
                    <div className="text-yellow-600 font-bold">{sponsor.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Illinois Sponsors */}
            <div>
              <h3 className="mb-6 flex items-center gap-2">
                <span className="text-3xl">🏙️</span>
                <span>Illinois (Chicago)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Dream Homes', tier: 'Platinum', value: '$1,500', description: 'Luxury real estate', logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop' },
                  { name: 'Tech Solutions', tier: 'Diamond', value: '$1,500', description: 'IT consulting services', logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop' },
                  { name: 'Public Relations', tier: 'Gold', value: '$1,500', description: 'PR and marketing agency', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
                ].map((sponsor, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-500/50 transition-all shadow-md hover:shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sponsor.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-600' :
                        sponsor.tier === 'Diamond' ? 'bg-blue-500/20 text-blue-600' :
                        'bg-yellow-500/20 text-yellow-600'
                      }`}>
                        {sponsor.tier}
                      </span>
                    </div>
                    <h4 className="text-black mb-2">{sponsor.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{sponsor.description}</p>
                    <div className="text-yellow-600 font-bold">{sponsor.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* California Sponsors */}
            <div>
              <h3 className="mb-6 flex items-center gap-2">
                <span className="text-3xl">🌴</span>
                <span>California (Palo Alto)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Creative Agency', tier: 'Silver', value: '$1,500', description: 'Full-service creative agency', logo: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=200&h=200&fit=crop' },
                  { name: 'IT Solutions', tier: 'Bronze', value: '$1,500', description: 'Technology solutions provider', logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop' },
                  { name: 'Marketing Firm', tier: 'Platinum', value: '$1,500', description: 'Digital marketing experts', logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop' },
                ].map((sponsor, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-500/50 transition-all shadow-md hover:shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sponsor.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                        sponsor.tier === 'Silver' ? 'bg-gray-400/20 text-gray-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {sponsor.tier}
                      </span>
                    </div>
                    <h4 className="text-black mb-2">{sponsor.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{sponsor.description}</p>
                    <div className="text-yellow-600 font-bold">{sponsor.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA for Sponsors - Professional */}
          <div className="mt-10 text-center">
            <div className="  rounded-xl p-8 border-2 border-[#f0425f]/30 max-w-4xl mx-auto shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-3" style={{ color: '#000' }}>Become a City Sponsor</h3>
              <p className="text-black mb-6 text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#000' }}>
                Join our network of local sponsors and get your brand in front of thousands of event attendees in your state.
              </p>
              <Link
                href="/sponsors"
                className="btn-primary-lg inline-flex items-center gap-2"
              >
                <span>Apply as City Sponsor</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Professional */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">What Guests Are Saying</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real experiences from people who have joined our exclusive adventures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-[#f0425f]/50 transition-all shadow-lg">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-sm font-semibold text-white mb-1">- {testimonial.author}</p>
                  {testimonial.location && (
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Professional */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Ready for the Experience of a Lifetime?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
            Don't just watch the show – be part of the adventure. Limited spots available for each experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#packages"
              className="btn-secondary-dark-lg"
            >
              View All Packages
            </Link>
            <Link
              href="/tickets"
              className="btn-secondary-lg"
            >
              Get Show Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

