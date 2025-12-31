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
  title: string;
  price: string;
  description: string;
  features: string[];
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
    title: 'Scenic Truck Adventure',
    price: '$299',
    description: 'Join İlker for an unforgettable journey through breathtaking landscapes in a comfortable truck. Experience nature like never before.',
    features: [
      '4-hour scenic tour',
      'Professional guide',
      'Photo opportunities',
      'Refreshments included',
      'Small group experience',
    ],
  },
  {
    id: '2',
    title: 'Outdoor Camping Retreat',
    price: '$449',
    description: 'Spend a night under the stars with İlker. Campfire stories, stargazing, and authentic outdoor experience.',
    features: [
      'Overnight camping',
      'Campfire dinner',
      'Stargazing session',
      'Breakfast included',
      'Camping gear provided',
    ],
  },
  {
    id: '3',
    title: 'Bike & Dine Tour',
    price: '$199',
    description: 'Explore the city on two wheels, then enjoy a curated dining experience with İlker.',
    features: [
      '3-hour bike tour',
      'Local restaurant visit',
      'Meal included',
      'Bike rental',
      'City exploration',
    ],
  },
  {
    id: '4',
    title: 'VIP Sponsor Dinner',
    price: '$149',
    description: 'An exclusive dinner experience with İlker and other VIP guests. Intimate setting, great food, great company.',
    features: [
      '3-course dinner',
      'Meet & greet with İlker',
      'VIP seating',
      'Wine pairing',
      'Limited to 20 guests',
    ],
  },
  {
    id: '5',
    title: 'Ultimate VIP Package',
    price: '$899',
    description: 'The complete experience: show tickets, backstage access, dinner, and a personal meet & greet.',
    features: [
      'Premium show tickets',
      'Backstage access',
      'VIP dinner',
      'Personal meet & greet',
      'Photo opportunities',
      'Signed merchandise',
    ],
  },
];

const testimonials = [
  {
    quote: "The camping retreat was magical! İlker's stories around the campfire were unforgettable.",
    author: 'Sarah M.',
    rating: 5,
  },
  {
    quote: "Best decision ever! The truck adventure gave us views we'll never forget.",
    author: 'David Chen',
    rating: 5,
  },
  {
    quote: 'The VIP package was worth every penny. A truly once-in-a-lifetime experience.',
    author: 'Maria Santos',
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-6">
                Exclusive Experiences
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Create Lifetime Memories with İlker
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                Go beyond the show. Join İlker Ayrık on exclusive adventures that combine entertainment, exploration, and unforgettable moments you'll treasure forever.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="#shows"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60"
                >
                  View Tour Dates
                </Link>
                <Link
                  href="#packages"
                  className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base border border-white/40 hover:border-white/60"
                >
                  Experience Packages
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <span>500+ happy guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📸</span>
                  <span>Photo memories included</span>
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

   

      {/* More Than Just a Tour Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">More Than Just a Tour - It's an Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold mb-3">Personal Connection</h3>
                <p className="text-gray-400">Small groups mean real conversations and genuine moments with İlker.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold mb-3">Captured Moments</h3>
                <p className="text-gray-400">Professional photos and videos to relive your adventure forever.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-3">Exclusive Access</h3>
                <p className="text-gray-400">Behind the scenes stories and experiences you won't find anywhere else.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


         {/* Catch İlker Live Section */}
         <section id="shows" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Catch İlker Live</h2>
            <p className="text-lg text-gray-400">Find a show near you and secure your tickets today</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Next Show Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Next Show In</h3>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#f0425f] mb-2">{currentShow.city}</div>
                  <div className="text-gray-400">
                    {currentShow.date === 'Nov 7' ? 'Saturday, November 7' : currentShow.date} • {currentShow.venue}
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  {shows.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentShowIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentShowIndex ? 'bg-[#f0425f] w-8' : 'bg-gray-700 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-xl p-8 border-2 border-[#f0425f]">
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                      {String(timeLeft.days).padStart(3, '0')}
                    </div>
                    <div className="text-sm text-gray-400 uppercase">Days</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-400 uppercase">Hours</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-400 uppercase">Minutes</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-400 uppercase">Seconds</div>
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
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-[#f0425f] transition-all relative"
              >
                {show.available && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded">
                    Available
                  </div>
                )}
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/img/img16346_orig.webp"
                    alt={show.city}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm text-gray-400 mb-2">{show.date}</div>
                <div className="text-xl font-bold mb-2">{show.city}</div>
                <div className="text-gray-400 text-sm mb-2">{show.venue}</div>
                <div className="text-gray-400 text-sm mb-4">
                  Doors: {show.doorsTime} • Show: {show.showTime}
                </div>
                <div className="text-lg font-bold text-[#f0425f]">{show.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Adventure Section */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Adventure</h2>
            <p className="text-lg text-gray-400 mb-4">
              Every package is designed to create unforgettable memories. Pick the experience that speaks to you.
            </p>
            <p className="text-sm text-gray-500">
              Most experiences are <span className="text-red-400 font-semibold">standalone</span> - no show ticket required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiencePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-gray-900 rounded-xl p-6 border-2 border-transparent hover:border-[#f0425f] transition-all relative"
              >
                <div className="absolute top-4 right-4 text-2xl font-bold text-[#f0425f]">{pkg.price}</div>
                <h3 className="text-2xl font-bold mb-3 pr-20">{pkg.title}</h3>
                <p className="text-gray-400 mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-[#f0425f] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60">
                  Book This Experience
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Based Sponsors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full mb-4">
              Local Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">City Based Sponsors</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We partner with local businesses in each state to bring you exclusive prizes and experiences. Support local sponsors in your area!
            </p>
          </div>

          <div className="space-y-12">
            {/* New York Sponsors */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">🗽</span>
                <span>New York, NY</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Meta Studio', tier: 'Gold', value: '$1,500', description: 'Creative design studio', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop' },
                  { name: 'Prime Fitness', tier: 'Silver', value: '$1,500', description: 'Premium fitness center', logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=200&fit=crop' },
                  { name: 'Saka Restaurant', tier: 'Bronze', value: '$1,500', description: 'Authentic Turkish cuisine', logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop' },
                ].map((sponsor, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sponsor.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                        sponsor.tier === 'Silver' ? 'bg-gray-400/20 text-gray-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {sponsor.tier}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{sponsor.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{sponsor.description}</p>
                    <div className="text-yellow-400 font-bold">{sponsor.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Illinois Sponsors */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">🏙️</span>
                <span>Illinois (Chicago)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Dream Homes', tier: 'Platinum', value: '$1,500', description: 'Luxury real estate', logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop' },
                  { name: 'Tech Solutions', tier: 'Diamond', value: '$1,500', description: 'IT consulting services', logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop' },
                  { name: 'Public Relations', tier: 'Gold', value: '$1,500', description: 'PR and marketing agency', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
                ].map((sponsor, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sponsor.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                        sponsor.tier === 'Diamond' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {sponsor.tier}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{sponsor.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{sponsor.description}</p>
                    <div className="text-yellow-400 font-bold">{sponsor.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* California Sponsors */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">🌴</span>
                <span>California (Palo Alto)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Creative Agency', tier: 'Silver', value: '$1,500', description: 'Full-service creative agency', logo: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=200&h=200&fit=crop' },
                  { name: 'IT Solutions', tier: 'Bronze', value: '$1,500', description: 'Technology solutions provider', logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop' },
                  { name: 'Marketing Firm', tier: 'Platinum', value: '$1,500', description: 'Digital marketing experts', logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop' },
                ].map((sponsor, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
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
                    <h4 className="text-lg font-bold text-white mb-2">{sponsor.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{sponsor.description}</p>
                    <div className="text-yellow-400 font-bold">{sponsor.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA for Sponsors */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-red-900/50 rounded-xl p-8 border border-purple-700/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Become a City Sponsor</h3>
              <p className="text-gray-300 mb-6">
                Join our network of local sponsors and get your brand in front of thousands of event attendees in your state.
              </p>
              <Link
                href="/sponsors"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl hover:shadow-[#f0425f]/60"
              >
                Apply as City Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What Guests Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-sm text-gray-400">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for the Experience of a Lifetime?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Don't just watch the show - be part of the adventure. Limited spots available for each experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#packages"
              className="px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60"
            >
              View All Packages
            </Link>
            <Link
              href="/tickets"
              className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base border border-white/40 hover:border-white/60"
            >
              Get Show Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

