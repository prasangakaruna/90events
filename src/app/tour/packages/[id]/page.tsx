'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

export default function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const packageData = experiencePackages.find((pkg) => pkg.id === id);

  if (!packageData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <Link
            href="/tour"
            className="text-[#f0425f] hover:underline"
          >
            Back to Tour Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center" style={{ marginTop: 0 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/98 to-black/95"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-red-600/20 to-transparent blur-3xl animate-pulse-glow"></div>
          
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/img/baneer.jpg"
              alt="Hero banner"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              priority
              quality={95}
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            {packageData.category}
          </div>
          <h1 className="mb-4">{packageData.title}</h1>
          <p className="text-xl text-gray-300 italic mb-6">{packageData.subtitle}</p>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Join İlker Ayrık on an unforgettable adventure that combines authentic experiences with breathtaking landscapes. 
                  This exclusive tour package offers a unique opportunity to explore America's most iconic destinations while 
                  creating lasting memories with fellow travelers.
                </p>
                
                {/* Info Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Duration</div>
                    <div className="text-xl font-bold text-white">{packageData.duration}</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Group Size</div>
                    <div className="text-xl font-bold text-white">{packageData.groupSize}</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Activity Level</div>
                    <div className="text-xl font-bold text-white">{packageData.activity}</div>
                  </div>
                </div>
              </div>

              {/* Tour Highlights */}
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Tour Highlights</h2>
                <ul className="space-y-4">
                  {packageData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed pt-1">{highlight}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locations */}
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Destinations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {packageData.locations.map((location, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center hover:border-[#f0425f] transition-all"
                    >
                      <div className="text-2xl mb-2">{location.split(' ')[0]}</div>
                      <div className="text-sm text-gray-300">{location.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-white">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f0425f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold mb-1">Professional Guide</div>
                      <div className="text-gray-400 text-sm">Experienced tour guide throughout the journey</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f0425f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold mb-1">Accommodation</div>
                      <div className="text-gray-400 text-sm">Comfortable lodging as specified in itinerary</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f0425f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold mb-1">Meals</div>
                      <div className="text-gray-400 text-sm">Daily meals and special dining experiences</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f0425f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold mb-1">Transportation</div>
                      <div className="text-gray-400 text-sm">All transportation during the tour</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f0425f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold mb-1">Equipment</div>
                      <div className="text-gray-400 text-sm">All necessary equipment provided</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f0425f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold mb-1">Photo & Video</div>
                      <div className="text-gray-400 text-sm">Professional documentation of your journey</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#f0425f] mb-2">From</div>
                  <div className="text-2xl font-bold text-white">{packageData.price}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg shadow-lg hover:shadow-[#f0425f]/50">
                    Book This Experience
                  </button>
                  <button className="w-full px-6 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all font-semibold border border-gray-700">
                    Contact Us
                  </button>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <h3 className="text-lg font-bold mb-4 text-white">Quick Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white font-semibold">{packageData.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Group Size</span>
                      <span className="text-white font-semibold">{packageData.groupSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Activity</span>
                      <span className="text-white font-semibold">{packageData.activity}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-6 mt-6">
                  <Link
                    href="/tour"
                    className="flex items-center gap-2 text-[#f0425f] hover:text-[#ec4899] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5"></path>
                      <path d="m12 19-7-7 7-7"></path>
                    </svg>
                    Back to All Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
