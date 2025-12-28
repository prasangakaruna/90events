'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

export default function AboutPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🎭',
      title: 'Authentic Experiences',
      description: 'We bring you genuine cultural experiences that connect audiences with exceptional performances.',
    },
    {
      icon: '🌟',
      title: 'Premium Quality',
      description: 'Every event is carefully curated to ensure the highest standards of entertainment and production.',
    },
    {
      icon: '🎁',
      title: 'Amazing Prizes',
      description: 'Win incredible prizes worth over $50,000 at every show. Every ticket is a chance to win!',
    },
    {
      icon: '💎',
      title: 'Unforgettable Memories',
      description: 'Create lasting memories with world-class performances that leave a lasting impression.',
    },
  ];

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '70,000+', label: 'Happy Customers' },
    { value: '40,000+', label: 'Tickets Sold' },
    { value: '50+', label: 'Cities Covered' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/img/img16346_orig.webp"
            alt="About 90 Events"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            About 90 Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Connecting audiences with unforgettable entertainment experiences
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              OUR MISSION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          </div>

          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              At 90 Events, we're passionate about connecting people with unforgettable experiences. 
              Our platform makes it easy to discover, explore, and book tickets for events that matter to you.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We believe that entertainment has the power to bring people together, create lasting memories, 
              and inspire. Our mission is to make premium entertainment accessible to everyone while 
              maintaining the highest standards of quality and service.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We provide a seamless ticketing experience for concerts, sports events, theater shows, 
              conferences, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
                <div className="relative glass-effect rounded-2xl p-8 text-center hover-lift">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f0425f] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Secure & Reliable',
                description: 'Your transactions are protected with industry-standard security measures.',
                icon: '🔒',
              },
              {
                title: 'Wide Selection',
                description: 'Access to thousands of events across multiple categories and cities.',
                icon: '🎯',
              },
              {
                title: 'Easy Booking',
                description: 'Simple and intuitive booking process in just a few clicks.',
                icon: '✨',
              },
              {
                title: 'Great Support',
                description: 'Dedicated customer support team ready to help you 24/7.',
                icon: '💬',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-2xl p-8 hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#f0425f] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Magic?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of others who have experienced unforgettable moments with 90 Events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="px-10 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-xl hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg shadow-2xl hover:shadow-[#f0425f]/50 transform hover:scale-105"
              >
                Browse Events
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-white/40 text-white rounded-xl hover:bg-white/10 hover:border-white/60 transition-all font-semibold text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
