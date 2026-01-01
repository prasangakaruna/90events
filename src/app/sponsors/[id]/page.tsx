'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface SponsorDetails {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  price?: string;
  type?: 'title' | 'industry' | 'city';
  tier?: 'gold' | 'silver' | 'bronze' | 'platinum' | 'diamond' | 'custom';
  website?: string;
  contactEmail?: string;
  contactPhone?: string;
  benefits: string[];
  prizeValue?: string;
  location?: string;
  industry?: string;
}

// Mock data - In a real app, this would come from an API or database
const getAllSponsors = (): SponsorDetails[] => {
  return [
    {
      id: '1',
      name: 'Nike',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fullDescription: 'Nike is a global leader in athletic footwear, apparel, and equipment. As a title sponsor, Nike brings innovation and excellence to our events, providing premium products and experiences for our attendees.',
      image: '/img/photo-1554866585-cd94860890b7.jpg',
      price: '$2,500',
      type: 'title',
      website: 'https://www.nike.com',
      contactEmail: 'sponsors@nike.com',
      contactPhone: '+1 (555) 123-4567',
      benefits: [
        'Logo on all marketing materials',
        'VIP access to all shows',
        'Social media mentions',
        'Exclusive backstage access',
        'Product placement opportunities',
        'Branded merchandise',
        'Website recognition',
        'Email marketing inclusion'
      ],
      prizeValue: '$2,500',
      industry: 'Sports & Apparel'
    },
    {
      id: '2',
      name: 'Doğtaş Furniture',
      description: 'Premium Turkish furniture brand.',
      fullDescription: 'Doğtaş Furniture is a leading Turkish furniture manufacturer known for elegant and modern home furnishings. Their sponsorship brings style and comfort to our events.',
      image: '/img/photo-1555041469-a586c61ea9bc.jpg',
      price: '$8,500',
      type: 'title',
      website: 'https://www.dogtas.com',
      contactEmail: 'info@dogtas.com',
      contactPhone: '+90 (212) 555-0123',
      benefits: [
        'Logo on event materials',
        'VIP tickets for 10 shows',
        'Social media promotion',
        'Branded merchandise',
        'Furniture placement at venues',
        'Website listing',
        'Event program listing'
      ],
      prizeValue: '$8,500',
      industry: 'Furniture & Home'
    },
    {
      id: '3',
      name: 'Toyota Motors',
      description: 'Official automotive partner.',
      fullDescription: 'Toyota Motors provides luxury transportation for artists and crew, ensuring smooth operations and premium experiences throughout the tour.',
      image: '/img/toyoto.jpg',
      price: '$35,000',
      type: 'title',
      website: 'https://www.toyota.com',
      contactEmail: 'sponsorships@toyota.com',
      contactPhone: '+1 (800) 331-4331',
      benefits: [
        'Logo on all marketing materials',
        'Vehicle branding opportunities',
        'VIP transportation services',
        'Social media promotion',
        'Website recognition',
        'Event signage',
        'Press release mentions'
      ],
      prizeValue: '$35,000',
      industry: 'Automotive'
    },
    {
      id: '4',
      name: 'Coca-Cola Company',
      description: 'Exclusive beverage sponsor.',
      fullDescription: 'Coca-Cola Company is the exclusive beverage sponsor, refreshing fans at every venue with classic Coca-Cola products and creating memorable experiences.',
      image: '/img/photo-1581578731548-c64695cc6952.jpg',
      price: '$5,000',
      type: 'title',
      website: 'https://www.coca-cola.com',
      contactEmail: 'sponsorships@coca-cola.com',
      contactPhone: '+1 (404) 676-2121',
      benefits: [
        'Exclusive beverage rights',
        'Logo on all materials',
        'Product sampling opportunities',
        'Social media promotion',
        'VIP access',
        'Branded coolers and displays'
      ],
      prizeValue: '$5,000',
      industry: 'Beverages'
    },
    {
      id: '5',
      name: 'Samsung Electronics',
      description: 'Technology partner.',
      fullDescription: 'Samsung Electronics provides state-of-the-art displays and mobile devices for the tour experience, enhancing the visual and interactive elements of our shows.',
      image: '/img/photo-1610945265064-0e34e5519bbf.jpg',
      price: '$8,000',
      type: 'title',
      website: 'https://www.samsung.com',
      contactEmail: 'sponsorships@samsung.com',
      contactPhone: '+1 (800) 726-7864',
      benefits: [
        'Technology showcase opportunities',
        'Logo on all materials',
        'Product demonstrations',
        'Social media promotion',
        'VIP access',
        'Website recognition'
      ],
      prizeValue: '$8,000',
      industry: 'Technology'
    },
    {
      id: '6',
      name: 'Skin Pharmaceuticals',
      description: 'Leading skincare brand.',
      fullDescription: 'Skin Pharmaceuticals brings premium skincare solutions to our events, offering samples and exclusive products to our attendees.',
      image: '/img/photo-1554866585-cd94860890b7.jpg',
      type: 'industry',
      website: 'https://www.skinpharma.com',
      contactEmail: 'info@skinpharma.com',
      contactPhone: '+1 (555) 234-5678',
      benefits: [
        'Logo on select materials',
        'Product sampling',
        'Social media mentions',
        'Event program listing'
      ],
      industry: 'Healthcare & Beauty'
    },
    {
      id: '7',
      name: 'Bank Of America',
      description: 'Financial services partner.',
      fullDescription: 'Bank of America provides financial services and support, offering exclusive banking benefits to our event attendees.',
      image: '/img/photo-1555041469-a586c61ea9bc.jpg',
      type: 'industry',
      website: 'https://www.bankofamerica.com',
      contactEmail: 'sponsorships@bankofamerica.com',
      contactPhone: '+1 (800) 432-1000',
      benefits: [
        'Logo on select materials',
        'VIP banking services',
        'Social media mentions',
        'Event program listing'
      ],
      industry: 'Financial Services'
    },
    {
      id: '8',
      name: 'Meta Studio',
      description: 'Creative design studio.',
      fullDescription: 'Meta Studio is a local creative agency providing design and marketing services for our city-based events.',
      image: '/img/img16346_orig.webp',
      price: '$1,500',
      type: 'city',
      tier: 'gold',
      website: 'https://www.metastudio.com',
      contactEmail: 'hello@metastudio.com',
      contactPhone: '+1 (555) 345-6789',
      benefits: [
        'Logo on city-specific materials',
        'Local social media promotion',
        'Event program listing',
        'Local market recognition'
      ],
      location: 'New York, NY',
      industry: 'Creative Services'
    }
  ];
};

export default function SponsorDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const sponsorId = params.id as string;
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'contact'>('overview');

  const allSponsors = getAllSponsors();
  const sponsor = allSponsors.find(s => s.id === sponsorId);

  if (!sponsor) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sponsor Not Found</h1>
          <p className="text-gray-400 mb-8">The sponsor you're looking for doesn't exist.</p>
          <Link
            href="/sponsors"
            className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all"
          >
            Back to Sponsors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Link
            href="/sponsors"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"></path>
              <path d="m12 19-7-7 7-7"></path>
            </svg>
            Back to Sponsors
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Info */}
            <div>
              <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded mb-4">
                {sponsor.type === 'title' ? 'Title Sponsor' : sponsor.type === 'industry' ? 'Industry Sponsor' : 'City Sponsor'}
              </div>
              {sponsor.tier && (
                <div className="inline-block px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded mb-4 ml-2">
                  {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Tier
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{sponsor.name}</h1>
              <p className="text-xl text-gray-300 mb-6">{sponsor.description}</p>
              
              {sponsor.price && (
                <div className="mb-6">
                  <span className="text-3xl font-bold text-yellow-400">{sponsor.price}</span>
                  {sponsor.prizeValue && (
                    <span className="text-gray-400 ml-2">Prize Value: {sponsor.prizeValue}</span>
                  )}
                </div>
              )}

              {sponsor.industry && (
                <div className="mb-6">
                  <span className="text-gray-400">Industry: </span>
                  <span className="text-white font-semibold">{sponsor.industry}</span>
                </div>
              )}

              {sponsor.location && (
                <div className="mb-6">
                  <span className="text-gray-400">Location: </span>
                  <span className="text-white font-semibold">{sponsor.location}</span>
                </div>
              )}

              {sponsor.website && (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors mb-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <path d="m15 3 6 6"></path>
                    <path d="M10 14 21 3"></path>
                  </svg>
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'benefits'
                  ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              Benefits
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'contact'
                  ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">About {sponsor.name}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {sponsor.fullDescription}
                </p>
                {sponsor.industry && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2">Industry</h3>
                      <p className="text-gray-300">{sponsor.industry}</p>
                    </div>
                    {sponsor.location && (
                      <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Location</h3>
                        <p className="text-gray-300">{sponsor.location}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Sponsorship Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sponsor.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-800 rounded-lg p-4">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {sponsor.contactEmail && (
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        Email
                      </h3>
                      <a href={`mailto:${sponsor.contactEmail}`} className="text-[#f0425f] hover:text-[#ec4899]">
                        {sponsor.contactEmail}
                      </a>
                    </div>
                  )}
                  {sponsor.contactPhone && (
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        Phone
                      </h3>
                      <a href={`tel:${sponsor.contactPhone}`} className="text-[#f0425f] hover:text-[#ec4899]">
                        {sponsor.contactPhone}
                      </a>
                    </div>
                  )}
                  {sponsor.website && (
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M2 12h20"></path>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        Website
                      </h3>
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="text-[#f0425f] hover:text-[#ec4899]">
                        {sponsor.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Becoming a Sponsor?</h2>
          <p className="text-gray-400 mb-8">
            Join our network of sponsors and get your brand in front of thousands of event attendees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/sponsors"
              className="btn-gradient-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-lg border border-white/40 hover:border-white/60"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

