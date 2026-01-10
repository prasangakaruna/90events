'use client';

import { use } from 'react';
import Link from 'next/link';

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
      {/* Simple Header Section */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              {packageData.category}
            </div>
            <h1 className="mb-4">{packageData.title}</h1>
            <p className="text-xl text-gray-300 italic">{packageData.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                {packageData.id === '2' ? (
                  <div className="mb-4">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      <span className="font-semibold text-white">{packageData.duration}</span> | <span className="font-semibold text-white">Pacific Coast Highway & Route 66</span> | <span className="font-semibold text-white">{packageData.groupSize} Participants</span>
                    </p>
                  </div>
                ) : packageData.id === '3' ? (
                  <div className="mb-4">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      <span className="font-semibold text-white">{packageData.duration}</span> | <span className="font-semibold text-white">Utah Mighty 5 & Arizona Desert</span> | <span className="font-semibold text-white">{packageData.groupSize} Participants</span>
                    </p>
                  </div>
                ) : packageData.id === '4' ? (
                  <div className="mb-4">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      <span className="font-semibold text-white">{packageData.duration}</span> | <span className="font-semibold text-white">Wine Country to Seattle</span> | <span className="font-semibold text-white">{packageData.groupSize} Riders</span>
                    </p>
                  </div>
                ) : null}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Duration</div>
                    <div className="text-lg font-bold text-white">{packageData.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Group Size</div>
                    <div className="text-lg font-bold text-white">{packageData.groupSize}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Activity Level</div>
                    <div className="text-lg font-bold text-white">{packageData.activity}</div>
                  </div>
                </div>
              </div>

              {/* Tour Highlights */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                <h5 className="text-xl font-bold mb-4 text-white">Tour Highlights</h5>
                <ul className="space-y-3">
                  {packageData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#f0425f] text-lg mt-0.5">✓</span>
                      <p className="text-gray-300 leading-relaxed">{highlight}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locations */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                <h5 className="text-xl font-bold mb-4 text-white">Destinations</h5>
                <div className="flex flex-wrap gap-3">
                  {packageData.locations.map((location, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg px-4 py-2 border border-gray-700"
                    >
                      <span className="text-gray-300">{location}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour Route - Only for Trucker's Culinary Road Trip */}
              {packageData.id === '2' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">📍 Tour Route</h5>
                  <div className="mb-4">
                    <p className="text-gray-300 mb-3">
                      <span className="font-semibold">Route:</span> San Francisco → Monterey (75 mi) → Cambria (90 mi) → Santa Barbara (90 mi) → LA (85 mi) → Palm Desert (130 mi) → Needles (230 mi) → Williams (180 mi) → Flagstaff (35 mi) → Las Vegas (260 mi)
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="font-semibold">Total Distance:</span> ~1,175 miles of coastal and desert highways
                    </p>
                  </div>
                </div>
              )}

              {/* Tour Route - Only for Jeep Wilderness Expedition */}
              {packageData.id === '3' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">📍 Tour Route</h5>
                  <div className="mb-4">
                    <p className="text-gray-300 mb-3">
                      <span className="font-semibold">Route:</span> Salt Lake City → Moab (235 mi) → Canyonlands → Monument Valley (150 mi) → Page/Vermilion Cliffs (125 mi) → Grand Staircase (126 mi) → Capitol Reef/Torrey (70 mi) → Salt Lake City (225 mi)
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="font-semibold">Off-Road Miles:</span> Significant 4x4 trail driving including Hell's Revenge, White Rim Road sections, and Cottonwood Canyon Road
                    </p>
                  </div>
                </div>
              )}

              {/* Tour Route - Only for Motorcycle Foodie Journey */}
              {packageData.id === '4' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">📍 Tour Route</h5>
                  <div className="mb-4">
                    <p className="text-gray-300 mb-3">
                      <span className="font-semibold">Route:</span> San Francisco → Napa (50 mi) → Sonoma (30 mi) → Eureka (240 mi) → Gold Beach OR (160 mi) → Eugene (160 mi) → Portland (110 mi) → Columbia Gorge (60 mi) → Seattle (175 mi)
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="font-semibold">Total Distance:</span> ~985 miles of premium scenic riding
                    </p>
                  </div>
                </div>
              )}

              {/* Motorcycles & Gear - Only for Motorcycle Foodie Journey */}
              {packageData.id === '4' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">🏍️ Motorcycles & Gear</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Motorcycles</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Honda Africa Twin or CB500X</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Saddlebags & tank bags</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Communication systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>GPS navigation units</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Safety Gear Provided</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>DOT-approved helmets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Armored riding jackets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Gloves & rain gear</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Emergency first aid</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                    <p className="text-sm text-yellow-300">
                      <span className="font-semibold">⚠️ Requirement:</span> Valid motorcycle license required. Intermediate riding experience recommended for Pacific Coast Highway.
                    </p>
                  </div>
                </div>
              )}

              {/* Jeep & Equipment - Only for Jeep Wilderness Expedition */}
              {packageData.id === '3' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">🚙 Jeep & Equipment</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Vehicle Specs</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Jeep Wrangler Unlimited Rubicon</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>iKamper rooftop tent (sleeps 2-3)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Off-road tires & recovery equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>GPS units & communication radios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Camp kitchen & cooking gear</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Training Provided</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>4x4 driving basics & techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Rock crawling fundamentals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Vehicle recovery methods</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Trail etiquette & safety</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">✓</span>
                          <span>Rooftop tent setup/breakdown</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Daily Itinerary - Only for Family Camping Adventure */}
              {packageData.id === '1' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">Daily Itinerary</h5>
                  <div className="space-y-6">
                    {/* Day 1 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 1
                        </div>
                        <h3 className="text-lg font-bold text-white">Arrival in Las Vegas</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Welcome & Orientation • Equipment Setup • Welcome Dinner</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">🏨 The Cosmopolitan of Las Vegas</div>
                        <div className="text-xs text-gray-400">📍 3708 Las Vegas Blvd South, Las Vegas, NV 89109</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Airport arrival, equipment distribution, safety briefing, welcome dinner at Scarpetta, tour orientation with Ilker</p>
                      <div className="text-xs text-[#f0425f] font-semibold">🍽️ Dinner</div>
                    </div>

                    {/* Day 2 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 2
                        </div>
                        <h3 className="text-lg font-bold text-white">Las Vegas to Grand Canyon</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">First Camping Night • Mather Point Views • Rim Walk • Campfire Dinner</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">⛺ Mather Campground</div>
                        <div className="text-xs text-gray-400">📍 Grand Canyon Village, South Rim, Arizona</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Drive to Grand Canyon with Route 66 stop, first reactions filming at Mather Point, lunch at El Tovar, rim walk to Yavapai Museum, tent setup, sunset viewing, campfire dinner (burgers, hot dogs, s'mores), stargazing</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (hotel)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch (El Tovar)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Dinner (camp)</span>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 3
                        </div>
                        <h3 className="text-lg font-bold text-white">Grand Canyon Exploration</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Bright Angel Trail Hike • Desert View Drive • Ranger Program</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">⛺ Mather Campground</div>
                        <div className="text-xs text-gray-400">📍 Grand Canyon South Rim</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Sunrise shoot, camp breakfast cooking, Bright Angel Trail hike (3 miles), picnic lunch, Desert View Drive (Tusayan Ruin, Desert View Watchtower), BBQ dinner, ranger program, stargazing</p>
                      <div className="text-xs text-[#f0425f] font-semibold">🍽️ All meals at camp</div>
                    </div>

                    {/* Day 4 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 4
                        </div>
                        <h3 className="text-lg font-bold text-white">Grand Canyon to Zion</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Break Camp • Scenic Drive • Hotel Check-in • Evening Canyon Drive</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">🏨 Springhill Suites Springdale Zion</div>
                        <div className="text-xs text-gray-400">📍 1127 Zion Park Blvd, Springdale, UT 84767</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Break camp, drive to Springdale with Coral Pink Sand Dunes stop, lunch at Bit & Spur, hotel check-in, pool time, Zion Visitor Center, sunset scenic drive, dinner at King's Landing Bistro</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (camp)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch & Dinner (restaurants)</span>
                      </div>
                    </div>

                    {/* Day 5 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 5
                        </div>
                        <h3 className="text-lg font-bold text-white">Zion National Park Camping</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Emerald Pools Hike • Virgin River Swimming • Ranger Program</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">⛺ Watchman Campground</div>
                        <div className="text-xs text-gray-400">📍 Zion National Park, Utah</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Hotel breakfast and checkout, campground setup, Emerald Pools Trail hike (3 miles), Virgin River swimming, camp dinner (hamburgers, hot dogs, s'mores), evening ranger program on night sky</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (hotel)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch & Dinner (camp)</span>
                      </div>
                    </div>

                    {/* Day 6 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 6
                        </div>
                        <h3 className="text-lg font-bold text-white">Zion to Bryce Canyon</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Morning Shuttle • Multiple Viewpoints • Sunset Photography</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">🏨 Best Western Plus Bryce Canyon Grand</div>
                        <div className="text-xs text-gray-400">📍 30 N 100 E, Bryce Canyon City, UT 84764</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Sunrise camp, breakfast, pack up, Zion shuttle ride, Red Canyon stop, hotel check-in, lunch at Ruby's buffet, afternoon exploration (Sunrise/Sunset/Inspiration Points), sunset photography, dinner at hotel</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (camp)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch & Dinner (hotel)</span>
                      </div>
                    </div>

                    {/* Day 7 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 7
                        </div>
                        <h3 className="text-lg font-bold text-white">Bryce to Sedona</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Sunrise Hike • Long Scenic Drive • Cathedral Rock Sunset</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">🏨 Residence Inn Sedona</div>
                        <div className="text-xs text-gray-400">📍 65 Hozoni Drive, Sedona, AZ 86336</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Pre-dawn departure, sunrise at Bryce Point, Navajo Loop Trail hike, hotel breakfast, long scenic drive with stops (Jacob Lake, Navajo Bridge, Oak Creek Canyon), hotel check-in, Cathedral Rock sunset and creek exploration, farewell dinner at Mariposa Latin Grill</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (hotel)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch (Jacob Lake)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Dinner (upscale)</span>
                      </div>
                    </div>

                    {/* Day 8 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 8
                        </div>
                        <h3 className="text-lg font-bold text-white">Sedona to Las Vegas & Departure</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Chapel Visit • Final Filming • Airport Transfer</p>
                      <p className="text-xs text-gray-400 mb-2">Chapel of the Holy Cross visit, final interviews, checkout, drive to Las Vegas with Flagstaff lunch stop, airport drop-off, certificate presentations</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (hotel)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch (en route)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Daily Itinerary - Only for Trucker's Culinary Road Trip */}
              {packageData.id === '2' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h2 className="text-xl font-bold mb-4 text-white">📋 Daily Itinerary</h2>
                  <div className="space-y-6">
                    {/* Day 1 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 1
                        </div>
                        <h3 className="text-lg font-bold text-white">Arrival in San Francisco</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Truck Orientation • Equipment Setup • Welcome Dinner</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">🏨 San Francisco Marriott Marquis</div>
                        <div className="text-xs text-gray-400 mb-1">Downtown Hotel</div>
                        <div className="text-xs text-gray-500">📍 780 Mission Street, San Francisco, CA 94103</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">39 Floors</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Starbucks</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Restaurants</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Fitness Center</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Airport arrival, truck rental and orientation (3 hours), equipment setup, welcome dinner at The View Lounge (39th floor)</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch (Fisherman's Wharf)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Dinner (hotel)</span>
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 2
                        </div>
                        <h3 className="text-lg font-bold text-white">San Francisco to Monterey</h3>
                        <span className="text-xs text-gray-400">75 miles</span>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Golden Gate Bridge • Half Moon Bay Cooking • Monterey Bay</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">🏨 Monterey Marriott</div>
                        <div className="text-xs text-gray-400 mb-1">Bay View Hotel</div>
                        <div className="text-xs text-gray-500">📍 350 Calle Principal, Monterey, CA 93940</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Bay Views</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Pool</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Restaurant</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Cannery Row Access</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Golden Gate Bridge departure filming, Half Moon Bay coastal cooking (seafood, ocean backdrop), drive to Monterey, Fisherman's Wharf market shopping, dinner at Schooners</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (hotel)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch (Half Moon Bay cook)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Dinner (Cannery Row)</span>
                      </div>
                    </div>

                    {/* Complete Details Note */}
                    <div className="bg-gray-800 rounded p-4 border border-gray-700">
                      <h4 className="text-white font-semibold mb-2">📖 Complete Day-by-Day Details</h4>
                      <p className="text-sm text-gray-300 mb-3">
                        This tour includes 10 days of culinary adventures along the Pacific Coast Highway and Route 66. Each day features:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Scenic highway driving in production truck</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Outdoor cooking demonstrations at spectacular locations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Visits to authentic truck stops and Route 66 landmarks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Premium Marriott accommodations nightly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Behind-the-scenes filming with Ilker</span>
                        </li>
                      </ul>
                      <p className="text-sm text-gray-400 mt-3">
                        <span className="font-semibold">Key Stops:</span> Big Sur, Santa Barbara, Malibu, Joshua Tree, Historic Route 66 towns, Grand Canyon area
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Daily Itinerary - Only for Jeep Wilderness Expedition */}
              {packageData.id === '3' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h2 className="text-xl font-bold mb-4 text-white">📋 Daily Itinerary</h2>
                  <div className="space-y-6">
                    {/* Day 1 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 1
                        </div>
                        <h3 className="text-lg font-bold text-white">Arrival in Salt Lake City</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Jeep Setup • 4x4 Training • Welcome Dinner</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">🏨 Salt Lake City Marriott Downtown</div>
                        <div className="text-xs text-gray-400 mb-1">Downtown Hotel</div>
                        <div className="text-xs text-gray-500">📍 75 S West Temple, Salt Lake City, UT 84101</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">City Creek Center</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Restaurant</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Fitness Center</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Airport arrival, Jeep rental and setup (3 hours: vehicles, rooftop tents, 4x4 training), welcome dinner at Spencer's Steakhouse, technical briefing</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch (facility)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Dinner (hotel)</span>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 3
                        </div>
                        <h3 className="text-lg font-bold text-white">Hell's Revenge Trail & Kane Creek Camping</h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Legendary Slickrock Trail • First Rooftop Tent Night • Riverside Camp</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">⛺ Kane Creek BLM Camping</div>
                        <div className="text-xs text-gray-400 mb-1">Rooftop Tent - Colorado River</div>
                        <div className="text-xs text-gray-500">📍 Kane Creek Road, Moab area</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Primitive</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">River Access</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Dark Skies</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Pack In/Out</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Hell's Revenge trail (moderate-difficult, slickrock, 6.5 miles, 3-4 hours off-road), trail lunch at overlook, complete trail, drive to Kane Creek, rooftop tent setup, riverside camp dinner (grilled steaks), stargazing</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (hotel)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch (trail)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Dinner (camp)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Daily Itinerary - Only for Motorcycle Foodie Journey */}
              {packageData.id === '4' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">📋 Daily Itinerary Highlights</h5>
                  <div className="space-y-6">
                    {/* Day 2 */}
                    <div className="border-l-2 border-[#f0425f] pl-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#f0425f] text-white px-3 py-1 rounded text-sm font-bold">
                          Day 2
                        </div>
                        <h3 className="text-lg font-bold text-white">San Francisco to Napa Valley</h3>
                        <span className="text-xs text-gray-400">50 miles</span>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">Golden Gate • Wine Country • Michelin Dinner</p>
                      <div className="bg-gray-800 rounded p-3 mb-2 border border-gray-700">
                        <div className="text-white font-semibold text-sm mb-1">🏨 Westin Verasa Napa</div>
                        <div className="text-xs text-gray-400 mb-1">Wine Country Hotel</div>
                        <div className="text-xs text-gray-500">📍 1314 McKinstry Street, Napa, CA 94559</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Downtown</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Pool</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Spa</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Restaurant</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Golden Gate Bridge departure, Oxbow Public Market lunch (artisan food hall), winery tasting (Domaine Carneros), hotel check-in, Silverado Trail ride (30-mile loop), Michelin dinner at La Toque with wine pairing</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#f0425f] font-semibold">🍽️ Breakfast (hotel)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Lunch (Oxbow)</span>
                        <span className="text-[#f0425f] font-semibold">🍽️ Dinner (Michelin★)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Culinary Highlights - Only for Motorcycle Foodie Journey */}
              {packageData.id === '4' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">🍷 Culinary Highlights</h5>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-3">3 Michelin-Star Restaurants:</h3>
                    <ul className="space-y-2 text-sm text-gray-300 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">La Toque</span> (Napa)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">Restaurant 301</span> (Eureka)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">Le Pigeon</span> (Portland)</span>
                      </li>
                    </ul>
                    <h3 className="text-lg font-semibold text-white mb-3">Wine & Beverage Experiences:</h3>
                    <ul className="space-y-2 text-sm text-gray-300 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span>Napa Valley & Sonoma wine tastings (Domaine Carneros, Sokol Blosser)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span>Oregon coast breweries (Rogue Ales)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span>Hood River cideries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span>Portland food cart culture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span>Pike Place Market Seattle</span>
                      </li>
                    </ul>
                    <h3 className="text-lg font-semibold text-white mb-3">Scenic Riding:</h3>
                    <p className="text-sm text-gray-300">
                      Pacific Coast Highway, Oregon Coast, Columbia River Gorge, Willamette Valley wine country
                    </p>
                  </div>
                </div>
              )}

              {/* Adventure Highlights - Only for Jeep Wilderness Expedition */}
              {packageData.id === '3' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">🏔️ Adventure Highlights</h5>
                  <div className="mb-4">
                    <p className="text-gray-300 mb-4">
                      <span className="font-semibold text-white">4 Nights Rooftop Tent Camping</span> in some of America's most spectacular remote locations
                    </p>
                    <h3 className="text-lg font-semibold text-white mb-3">Featured Trails & Locations:</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">Hell's Revenge</span> - Legendary Moab slickrock trail</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">Canyonlands Island in the Sky</span> - Mesa Arch & Grand View Point</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">Monument Valley</span> - Guided tour with Navajo guide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">Antelope Canyon</span> - Slot canyon photography</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">Cottonwood Canyon Road</span> - 46 miles of remote 4x4 driving</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-0.5">•</span>
                        <span><span className="font-semibold text-white">Capitol Reef National Park</span> - Fruita orchards & Hickman Bridge</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Filming Highlights - Only for Trucker's Culinary Road Trip */}
              {packageData.id === '2' && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h5 className="text-xl font-bold mb-4 text-white">🎬 Filming Highlights</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Coastal Segments</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Pacific Coast Highway driving footage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Beachside cooking demonstrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Seafood preparation tutorials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Ocean sunset time-lapses</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Route 66 Content</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Historic highway landmarks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Authentic truck stop culture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Classic American diner food</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f0425f] mt-0.5">•</span>
                          <span>Vintage Americana photography</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* What's Included */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h5 className="text-xl font-bold mb-4 text-white">✅ What's Included</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {packageData.id === '1' ? (
                    <>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">All accommodations (4 hotel + 3 camping nights)</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">All camping equipment provided</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">Most meals (breakfast daily + specified lunches/dinners)</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">Private coach transportation</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">All national park entrance fees</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">Guided hikes and ranger programs</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">Professional filming crew</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">English-Turkish coordinators</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">Airport transfers</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">24/7 emergency support</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">Travel insurance</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#f0425f] text-xl mt-0.5">✓</span>
                        <div className="text-gray-300">Tour certificates & merchandise</div>
                      </div>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-400 mb-1">From</div>
                  <div className="text-2xl font-bold text-[#f0425f]">{packageData.price}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold">
                    Book This Experience
                  </button>
                  <button className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all font-semibold border border-gray-700">
                    Contact Us
                  </button>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="text-sm font-bold mb-3 text-white uppercase tracking-wider">Quick Info</h3>
                  <div className="space-y-2 text-sm">
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

                <div className="border-t border-gray-800 pt-4 mt-4">
                  <Link
                    href="/tour"
                    className="flex items-center gap-2 text-sm text-[#f0425f] hover:text-[#ec4899] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
