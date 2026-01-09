'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Sponsor {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  type?: 'title' | 'industry' | 'city';
  tier?: 'gold' | 'silver' | 'bronze' | 'platinum' | 'diamond' | 'custom';
}

const tourTitlePartners: Sponsor[] = [
  {
    id: '1',
    name: 'Nike',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/img/photo-1554866585-cd94860890b7.jpg',
    price: '$2,500',
  },
  {
    id: '2',
    name: 'Doğtaş Furniture',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/img/photo-1555041469-a586c61ea9bc.jpg',
    price: '$2,500',
  },
  {
    id: '3',
    name: 'Toyota Motors',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/img/toyoto.jpg',
    price: '$2,500',
  },
  {
    id: '4',
    name: 'Coca-Cola Company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/img/photo-1581578731548-c64695cc6952.jpg',
    price: '$2,500',
  },
  {
    id: '5',
    name: 'Samsung Electronics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/img/photo-1610945265064-0e34e5519bbf.jpg',
    price: '$2,500',
  },
];

const industrySponsors: Sponsor[] = [
  {
    id: '6',
    name: 'Skin Pharmaceuticals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/img/photo-1554866585-cd94860890b7.jpg',
  },
  {
    id: '7',
    name: 'Bank Of America',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/img/photo-1555041469-a586c61ea9bc.jpg',
  },
  {
    id: '8',
    name: 'Luxury Hotels',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/img/photo-1581578731548-c64695cc6952.jpg',
  },
  {
    id: '9',
    name: 'Live Nation Entertainment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/img/photo-1610945265064-0e34e5519bbf.jpg',
  },
];

const citySponsors: Sponsor[] = [
  { id: '10', name: 'Meta Studio', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'gold' },
  { id: '11', name: 'Prime Fitness', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'silver' },
  { id: '12', name: 'Saka Restaurant', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'bronze' },
  { id: '13', name: 'Dream Homes', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'platinum' },
  { id: '14', name: 'Tech Solutions', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'diamond' },
  { id: '15', name: 'Public Relations', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'gold' },
  { id: '16', name: 'Creative Agency', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'silver' },
  { id: '17', name: 'IT Solutions', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'bronze' },
  { id: '18', name: 'Marketing Firm', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'platinum' },
  { id: '19', name: 'Design Studio', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'diamond' },
  { id: '20', name: 'Media Group', price: '$1,500', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/img/img16346_orig.webp', tier: 'custom' },
];

const faqs = [
  {
    question: 'How can I apply as a sponsor?',
    answer: 'You can apply as a sponsor by filling out the sponsor application form on this page. Simply provide your company information, contact details, and sponsorship preferences.',
  },
  {
    question: 'What are the benefits of sponsorship?',
    answer: 'Sponsorship benefits include logo placement on marketing materials, social media promotion, VIP access to events, product placement opportunities, and brand recognition.',
  },
  {
    question: 'Can I customize my sponsorship package?',
    answer: 'Yes, we offer custom sponsorship packages tailored to your specific needs and budget. Contact our sponsorship team to discuss your requirements.',
  },
  {
    question: 'What is the duration of a sponsorship?',
    answer: 'Sponsorship durations vary depending on the package selected. Most sponsorships are for a single tour or event series, but multi-year agreements are available.',
  },
  {
    question: 'How are sponsors recognized?',
    answer: 'Sponsors are recognized through logo placement on event materials, social media mentions, website listings, email marketing, and on-site branding opportunities.',
  },
  {
    question: 'Is there a minimum budget for sponsorship?',
    answer: 'Yes, sponsorship packages start at $3,000 for Silver tier. However, we also offer custom packages that can be tailored to different budget levels.',
  },
  {
    question: 'How can I contact the sponsorship team?',
    answer: 'You can contact our sponsorship team by filling out the application form, emailing us at sponsors@90events.com, or calling +1 (123) 456-7890.',
  },
];

export default function SponsorsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    website: '',
    companyType: '',
    sponsorType: '',
    sponsorPackage: '',
    budget: '',
    message: '',
    contactName: '',
    jobTitle: '',
    contactPhone: '',
    contactEmail: '',
  });

  const filteredCitySponsors = selectedFilter === 'all' 
    ? citySponsors 
    : citySponsors.filter(sponsor => sponsor.tier === selectedFilter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Our Sponsors & Prize Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded mb-4">
                Sponsors
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Sponsors & Prize Partners
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">26</div>
                  <div className="text-gray-400">Sponsors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">$85,450</div>
                  <div className="text-gray-400">Prize Pool</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">7</div>
                  <div className="text-gray-400">Partners</div>
                </div>
              </div>
              <Link
                href="#tour-title-partners"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl"
              >
                <span>View More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/img/img16346_orig.webp"
                  alt="GERÇEKLER ACIDIR"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src="/img/img16346_orig.webp"
                  alt="GERÇEKLER ACIDIR"
            fill
            className="object-cover"
          />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Title Partners Section */}
      <section id="tour-title-partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Tour Title Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourTitlePartners.map((partner) => (
              <div key={partner.id} className="bg-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-yellow-500">{partner.price}</div>
                  <Link
                    href={`/sponsors/${partner.id}`}
                    className="btn-gradient"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sponsors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded mb-4">
            Our Sponsors
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Sponsors</h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-800">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-cover"
                  />
        </div>
                <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{sponsor.description}</p>
                <Link
                  href={`/sponsors/${sponsor.id}`}
                  className="btn-gradient block w-full text-center"
                >
                  View More
                </Link>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* City Based Sponsors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded mb-4">
            Our Sponsors
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">City Based Sponsors</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
          Our City-Based Sponsors are local businesses and organizations that help make our events possible in their respective cities. By partnering with us, these sponsors gain targeted exposure, connect directly with the local community, and showcase their commitment to supporting meaningful experiences. Explore the sponsors below to see the companies helping bring our events to life in your city.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {['all', 'gold', 'silver', 'bronze', 'platinum', 'diamond', 'custom'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white shadow-2xl hover:shadow-[#f0425f]/60'
                    : 'bg-transparent text-white hover:bg-white/10 border border-white/40 hover:border-white/60'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCitySponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{sponsor.name}</h3>
                    <div className="text-yellow-400 font-semibold">{sponsor.price}</div>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{sponsor.description}</p>
                <Link
                  href={`/sponsors/${sponsor.id}`}
                  className="btn-gradient block w-full text-center"
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Win These Prizes? Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t-4 border-yellow-400">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Win These Prizes?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60">
              Join Now
            </button>
            <button className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base border border-white/40 hover:border-white/60">
              Learn More
            </button>
            </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Partner</h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-yellow-500 mb-2">32K+</div>
                  <div className="text-gray-600">Audience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-500 mb-2">7</div>
                  <div className="text-gray-600">Events</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
                  <div className="text-gray-600">Partners</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60">
                  Apply Now
                </button>
                <button className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base border border-white/40 hover:border-white/60">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Application Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded mb-4">
            Apply Now
          </div>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">Sponsor Application</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-center" > Fill out the form below to express your interest in becoming a sponsor. Our partnership team will review your application and get back to you shortly.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2 font-semibold">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Company Type</label>
                <select
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                >
                  <option value="">Select Company Type</option>
                  <option value="corporate">Corporate</option>
                  <option value="small-business">Small Business</option>
                  <option value="startup">Startup</option>
                  <option value="non-profit">Non-Profit</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Sponsor Type</label>
                <select
                  name="sponsorType"
                  value={formData.sponsorType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                >
                  <option value="">Select Sponsor Type</option>
                  <option value="title">Title Sponsor</option>
                  <option value="platinum">Platinum</option>
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                  <option value="city">City Based</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Sponsor Package</label>
                <select
                  name="sponsorPackage"
                  value={formData.sponsorPackage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                >
                  <option value="">Select Package</option>
                  <option value="title">Title Sponsor - $50,000</option>
                  <option value="platinum">Platinum - $25,000</option>
                  <option value="gold">Gold - $10,000</option>
                  <option value="silver">Silver - $3,000</option>
                  <option value="custom">Custom Package</option>
                </select>
        </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  placeholder="$0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                placeholder="Tell us about your sponsorship goals..."
              />
            </div>
            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 font-semibold">Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">Phone</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn-gradient w-full"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Partner With 90 Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded mb-4">
            Our Sponsors
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With <span className="text-purple-400">90 Events</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="grid grid-cols-4 gap-6 mb-12">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">6K+</div>
              <div className="text-gray-400">Audience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">11K+</div>
              <div className="text-gray-400">Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">53K+</div>
              <div className="text-gray-400">Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">7</div>
              <div className="text-gray-400">Sponsors</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Title Sponsor', price: '$50,000', popular: true, buttonColor: 'bg-purple-500 hover:bg-purple-600' },
              { name: 'Platinum Sponsor', price: '$25,000', popular: true, buttonColor: 'bg-yellow-400 hover:bg-yellow-500 text-black' },
              { name: 'Gold Sponsor', price: '$10,000', popular: false, buttonColor: 'bg-gray-700 hover:bg-gray-600' },
              { name: 'Silver Sponsor', price: '$3,000', popular: false, buttonColor: 'bg-gray-700 hover:bg-gray-600' },
            ].map((tier, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 relative">
                {tier.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded">
                    Popular
                  </div>
                )}
                <div className="text-3xl font-bold text-yellow-400 mb-6">{tier.price}</div>
                <h3 className="text-xl font-bold mb-6">{tier.name}</h3>
                <ul className="space-y-3 mb-8 text-sm text-gray-400">
                  <li>✓ Logo on all marketing materials</li>
                  <li>✓ Dedicated social media posts</li>
                  <li>✓ Speaking opportunity</li>
                  <li>✓ VIP access to all events</li>
                  <li>✓ Product placement</li>
                  <li>✓ Branding on event signage</li>
                  <li>✓ Exhibition booth</li>
                  <li>✓ Media mentions</li>
                  <li>✓ Website recognition</li>
                  <li>✓ Email marketing inclusion</li>
                </ul>
                <button className={`w-full px-6 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-base ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white shadow-2xl hover:shadow-[#f0425f]/60 hover:from-[#d63852] hover:to-[#db2777]'
                    : 'bg-transparent text-white hover:bg-white/10 border border-white/40 hover:border-white/60'
                }`}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sponsorship Package Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Sponsorship Package Available</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60">
              Contact Us
            </button>
            <button className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base border border-white/40 hover:border-white/60">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="text-2xl text-yellow-400">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 text-gray-400 border-t border-gray-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base border border-white/40 hover:border-white/60">
              Still have questions? Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
