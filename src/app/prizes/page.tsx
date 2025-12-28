'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/contexts/TranslationContext';

export default function PrizesPage() {
  const { t } = useTranslation();

  const prizeCategories = [
    {
      title: 'Luxury Cars',
      value: '$15,000+',
      description: 'Win premium vehicles from top manufacturers',
      image: '🚗',
    },
    {
      title: 'Smart Watches',
      value: '$12,000+',
      description: 'Latest technology in wearable devices',
      image: '⌚',
    },
    {
      title: 'Diamond Rings',
      value: '$9,000+',
      description: 'Exquisite jewelry pieces for special occasions',
      image: '💍',
    },
    {
      title: 'Fine Jewelry',
      value: '$15,000+',
      description: 'Premium jewelry collections',
      image: '💎',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Buy Your Ticket',
      description: 'Purchase any ticket to any of our shows',
    },
    {
      step: '02',
      title: 'Attend the Show',
      description: 'Enjoy the amazing performance',
    },
    {
      step: '03',
      title: 'Win Prizes',
      description: 'Every ticket holder is automatically entered to win',
    },
    {
      step: '04',
      title: 'Claim Your Prize',
      description: 'Winners are announced and prizes are distributed',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/img/img16346_orig.webp"
            alt="Prizes"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-6">
            PRIZES
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
            $50,000+ in Amazing Prizes
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Every ticket is a chance to win incredible prizes. From luxury cars to fine jewelry, 
            we're giving away over $50,000 in prizes at every show!
          </p>
          <Link
            href="/events"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-xl hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg shadow-2xl hover:shadow-[#f0425f]/50 transform hover:scale-105"
          >
            Get Your Ticket Now
          </Link>
        </div>
      </section>

      {/* Prize Categories */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prize Categories</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover the incredible prizes you could win at our shows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {prizeCategories.map((prize, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity blur-sm"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#f0425f]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f0425f]/30 text-center">
                <div className="text-6xl mb-4">{prize.image}</div>
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-3">
                  {prize.value}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f0425f] transition-colors">
                  {prize.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {prize.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Every Ticket Wins */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/98 to-black/98 backdrop-blur-xl rounded-2xl p-10 md:p-12 border border-white/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                        ✓
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">Every Ticket Wins</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Guaranteed prizes for all attendees. No matter which ticket you purchase, you're a winner! 
                      Every show features amazing prizes that make the experience even more exciting.
                    </p>
                  </div>
                  <Link
                    href="/events"
                    className="px-10 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-xl hover:from-[#d63852] hover:to-[#db2777] transition-all font-bold text-lg shadow-2xl hover:shadow-[#f0425f]/50 transform hover:scale-105 whitespace-nowrap"
                  >
                    Get Your Ticket
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Winning prizes is simple and automatic with every ticket purchase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {howItWorks.map((step, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
              <div className="relative glass-effect rounded-2xl p-8 text-center hover-lift">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-lg blur-md opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-extrabold text-white">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f0425f] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How do I win prizes?',
                  answer: 'Every ticket purchase automatically enters you into the prize drawing. Winners are selected randomly during or after each show.',
                },
                {
                  question: 'Do I need to be present to win?',
                  answer: 'Yes, you must be present at the show to be eligible for prizes. Winners are announced during the event.',
                },
                {
                  question: 'What types of prizes are available?',
                  answer: 'Prizes range from luxury cars, smart watches, diamond rings, fine jewelry, and more. Total prize value exceeds $50,000 per show.',
                },
                {
                  question: 'How are winners selected?',
                  answer: 'Winners are selected through a fair and random drawing process. Every ticket has an equal chance of winning.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

