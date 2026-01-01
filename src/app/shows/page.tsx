'use client';

import Link from 'next/link';
import Image from 'next/image';
import EventCard from '@/components/EventCard';
import LiveShowsSlider from '@/components/LiveShowsSlider';
import YouTubeVideo from '@/components/YouTubeVideo';
import { useTranslation } from '@/contexts/TranslationContext';

// Shows data
const upcomingShows = [
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
    status: 'sold-out' as const,
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
    title: 'İlker Ayrık - Gerçekler Acıdır Adana',
    date: '19 Nisan 2025 • 20:30',
    location: 'Adana Büyükşehir Belediyesi Tiyatrosu, Adana',
    price: '₺190\'den başlayan fiyatlarla',
    image: '/img/img16346_orig.webp',
    category: 'Comedy',
    status: 'available' as const,
  },
];

const liveShows = [
  {
    id: '1',
    city: 'New York, NY',
    venue: 'Madison Square Garden',
    date: 'March 15, 2025',
    time: '8:00 PM',
    status: 'SOLD OUT',
    available: false,
  },
  {
    id: '2',
    city: 'Toronto, ON',
    venue: 'Scotiabank Arena',
    date: 'March 22, 2025',
    time: '8:30 PM',
    status: 'AVAILABLE',
    available: true,
  },
  {
    id: '3',
    city: 'Chicago, IL',
    venue: 'United Center',
    date: 'March 29, 2025',
    time: '9:00 PM',
    status: 'AVAILABLE',
    available: true,
  },
  {
    id: '4',
    city: 'Miami, FL',
    venue: 'American Airlines Arena',
    date: 'April 5, 2025',
    time: '8:00 PM',
    status: 'AVAILABLE',
    available: true,
  },
  {
    id: '5',
    city: 'Dallas, TX',
    venue: 'American Airlines Center',
    date: 'April 12, 2025',
    time: '8:30 PM',
    status: 'SOLD OUT',
    available: false,
  },
  {
    id: '6',
    city: 'Los Angeles, CA',
    venue: 'Staples Center',
    date: 'April 19, 2025',
    time: '9:00 PM',
    status: 'AVAILABLE',
    available: true,
  },
];

const showHighlights = [
  {
    icon: '🎭',
    title: 'Drama & Comedy',
    description: 'A perfect blend of drama and comedy that keeps you engaged from start to finish.',
  },
  {
    icon: '✨',
    title: 'Illusion & Magic',
    description: 'Mind-bending illusions that will leave you questioning reality.',
  },
  {
    icon: '💝',
    title: 'Emotional Journey',
    description: 'Experience a rollercoaster of emotions through authentic storytelling.',
  },
  {
    icon: '🏆',
    title: 'Award-Winning',
    description: 'Recognized performances that have captivated audiences worldwide.',
  },
];

export default function ShowsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/img/img16346_orig.webp"
            alt="Shows"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-6">
            {t.ourShows}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
            {t.experienceTheMagicTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t.showsPageDescription}
          </p>
          <Link
            href="/events"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-xl hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg shadow-2xl hover:shadow-[#f0425f]/50 transform hover:scale-105"
          >
            {t.viewAllEvents}
          </Link>
        </div>
      </section>

      {/* Show Highlights */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.whatMakesOurShowsSpecial}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t.showsSpecialDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {showHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
              <div className="relative glass-effect rounded-2xl p-8 text-center hover-lift">
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f0425f] transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.upcomingShows}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.upcomingShows}</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t.upcomingShowsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {upcomingShows.map((show) => (
              <EventCard key={show.id} {...show} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/events"
              className="inline-block px-10 py-4 border-2 border-[#f0425f] text-[#f0425f] rounded-xl hover:bg-[#f0425f] hover:text-white transition-all font-semibold text-lg transform hover:scale-105"
            >
              {t.viewAllShows}
            </Link>
          </div>
        </div>
      </section>

      {/* Live Shows Slider */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.liveShows}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.catchUsLive}</h2>
            <p className="text-lg text-gray-400">{t.liveShowsDescription}</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <LiveShowsSlider shows={liveShows} />
        </div>
      </section>

      {/* Past Shows Video */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.pastShows}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.pastShows}</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t.watchHighlights}
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <YouTubeVideo
              videoId="sW-tn_cUZEk"
              title="ILKER AYRIK - Past Shows Highlights"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Show Gallery */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.showGallery}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.showGallery}</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t.showGalleryDescription}
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { videoId: 'sW-tn_cUZEk', title: 'Show Highlights - Episode 1' },
            { videoId: 'sW-tn_cUZEk', title: 'Show Highlights - Episode 2' },
            { videoId: 'sW-tn_cUZEk', title: 'Show Highlights - Episode 3' },
            { videoId: 'sW-tn_cUZEk', title: 'Show Highlights - Episode 4' },
          ].map((video, idx) => (
            <YouTubeVideo
              key={idx}
              videoId={video.videoId}
              title={video.title}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.readyToExperience}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t.readyToExperienceDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="px-10 py-4 bg-white text-[#f0425f] rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-2xl"
            >
              Buy Tickets
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

