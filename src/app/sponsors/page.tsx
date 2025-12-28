'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/contexts/TranslationContext';

const sponsorshipTiers = [
  {
    name: 'Title Sponsor',
    price: '$50,000',
    icon: '🏆',
    benefits: [
      'Logo on all marketing materials',
      'VIP access to all shows',
      'Social media mentions',
      'Exclusive backstage access',
      'Branded merchandise distribution',
      'Speaking opportunity at events',
      'Custom sponsorship package',
    ],
    popular: false,
  },
  {
    name: 'Platinum Sponsor',
    price: '$25,000',
    icon: '⭐',
    benefits: [
      'Logo on event materials',
      'VIP tickets for 10 shows',
      'Social media promotion',
      'Branded merchandise',
      'Event program listing',
      'Press release mentions',
    ],
    popular: true,
  },
  {
    name: 'Gold Sponsor',
    price: '$15,000',
    icon: '🥇',
    benefits: [
      'Logo on select materials',
      'VIP tickets for 5 shows',
      'Social media mentions',
      'Event program listing',
      'Brand recognition',
    ],
    popular: false,
  },
  {
    name: 'Silver Sponsor',
    price: '$5,000',
    icon: '🎗️',
    benefits: [
      'Event program listing',
      'VIP tickets for 2 shows',
      'Social media mention',
      'Brand recognition',
    ],
    popular: false,
  },
];

const currentSponsors = [
  {
    name: 'TechCorp',
    tier: 'Title Sponsor',
    logo: '🏢',
    description: 'Leading technology solutions provider',
  },
  {
    name: 'Luxury Brands',
    tier: 'Platinum Sponsor',
    logo: '💎',
    description: 'Premium lifestyle brand',
  },
  {
    name: 'Media Group',
    tier: 'Gold Sponsor',
    logo: '📺',
    description: 'Digital media and entertainment',
  },
  {
    name: 'Fashion House',
    tier: 'Silver Sponsor',
    logo: '👔',
    description: 'High-end fashion brand',
  },
];

const sponsorshipBenefits = [
  {
    icon: '👥',
    title: 'Reach Thousands',
    description: 'Connect with engaged audiences across multiple cities and venues.',
  },
  {
    icon: '📱',
    title: 'Digital Presence',
    description: 'Amplify your brand through social media and digital marketing channels.',
  },
  {
    icon: '🎯',
    title: 'Targeted Audience',
    description: 'Reach your ideal demographic through our carefully curated events.',
  },
  {
    icon: '🤝',
    title: 'Partnership Value',
    description: 'Build meaningful relationships with our community and stakeholders.',
  },
];

export default function SponsorsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/img/img16346_orig.webp"
            alt="Sponsors"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-6">
            {t.sponsorshipTitle}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
            {t.partnerWith90EventsTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t.sponsorshipPageDescription}
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-xl hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg shadow-2xl hover:shadow-[#f0425f]/50 transform hover:scale-105"
          >
            {t.becomeSponsor}
          </Link>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.whyPartnerWithUs}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t.discoverBenefits}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sponsorshipBenefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
              <div className="relative glass-effect rounded-2xl p-8 text-center hover-lift">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f0425f] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.sponsorshipTiers}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.chooseYourTier}</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t.selectPackage}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
            {sponsorshipTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative group ${
                  tier.popular ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity blur-sm"></div>
                <div className={`relative glass-effect rounded-2xl p-8 hover-lift ${
                  tier.popular ? 'ring-2 ring-[#f0425f]' : ''
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-semibold rounded-full shadow-lg">
                      POPULAR
                    </div>
                  )}
                  <div className="text-5xl mb-4 text-center">{tier.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{tier.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-6 text-center">{tier.price}</div>
                  <ul className="space-y-3 mb-8 text-sm text-gray-400">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#f0425f] mt-1 font-bold">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-center transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-4">
              {t.ourPartners}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.currentSponsors}</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t.proudPartners}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {currentSponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
              <div className="relative glass-effect rounded-2xl p-8 text-center hover-lift">
                <div className="text-6xl mb-4">{sponsor.logo}</div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#f0425f] transition-colors">
                  {sponsor.name}
                </h3>
                <p className="text-sm text-[#f0425f] mb-3 font-semibold">{sponsor.tier}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl"></div>
              <div className="relative glass-effect rounded-2xl p-10 md:p-12 text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.customPackages}</h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {t.customPackagesDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg transform hover:scale-105"
                  >
                    {t.contactUsHere}
                  </Link>
                  <Link
                    href="/about"
                    className="px-10 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg transform hover:scale-105"
                  >
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from Sponsors */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.whatOurSponsorsSay}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="text-5xl text-[#f0425f] mb-6">"</div>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Partnering with 90 Events has been an incredible experience. The exposure and engagement 
              we've received has exceeded our expectations. The team is professional, creative, and truly 
              understands how to create value for sponsors.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">Sarah Johnson</p>
                <p className="text-gray-400 text-sm">Marketing Director, TechCorp</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.readyToPartner}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t.readyToPartnerDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-[#f0425f] rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-2xl"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/shows"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              {t.viewOurShows}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

