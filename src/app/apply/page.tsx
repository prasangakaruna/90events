'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ApplyPage() {
  const [quizProgress, setQuizProgress] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    setQuizProgress(100);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pastWinners = [
    {
      id: 1,
      names: 'Sarah & James',
      location: 'New York, NY',
      prize: 'Grand Prize Winners',
      amount: '$15,000',
      rating: 5,
      quote: 'This was the most incredible experience of our lives! The show was amazing and winning was just the cherry on top.',
      image: 'https://images.unsplash.com/photo-1521119989659-a927310a3aae?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      names: 'Maria & David',
      location: 'Los Angeles, CA',
      prize: '2nd Place',
      amount: '$5,000',
      rating: 5,
      quote: 'We had so much fun competing! The energy on stage was electric and the prizes were incredible.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      names: 'Lisa & Michael',
      location: 'Chicago, IL',
      prize: '3rd Place',
      amount: '$2,500',
      rating: 5,
      quote: 'What an unforgettable night! Being on stage with İlker Ayrık was a dream come true.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
    }
  ];

  const faqs = [
    {
      question: 'Do I need to buy tickets to apply?',
      answer: 'Yes, you must purchase tickets for you and your partner to be eligible to compete. During checkout, you can opt-in to the competition.'
    },
    {
      question: 'How are couples selected?',
      answer: 'Couples are randomly selected from those who have purchased tickets and opted in during checkout. Selection is done fairly and transparently.'
    },
    {
      question: 'What if I\'m not selected?',
      answer: 'Even if you\'re not selected to compete, you\'ll still enjoy the amazing show and have a chance to win prizes through our ticket draw!'
    },
    {
      question: 'Is there an age requirement?',
      answer: 'Yes, both participants must be 18 years or older to compete. This is a legal requirement for participation.'
    },
    {
      question: 'When will I know if I\'m selected?',
      answer: 'Selected couples will be contacted via email and phone approximately 2-3 weeks before the show date.'
    },
    {
      question: 'What prizes can we win?',
      answer: 'Prizes include cash prizes up to $15,000, VIP treatment, exclusive merchandise, and the chance to be featured on stage during the show.'
    },
    {
      question: 'How should we prepare if selected?',
      answer: 'Just come ready to have fun! There\'s no special preparation needed. The show is designed to be entertaining and enjoyable for everyone.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Hero Section - Want to Compete? */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Want to <span className="text-[#ec4899]">Compete</span>?
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to test your love on stage? We select couples from our ticket holders to participate in the game show!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tickets"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get Tickets & Apply
              </Link>
              <Link
                href="#eligibility"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center border border-gray-700"
              >
                Check Eligibility
              </Link>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="space-y-4">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/img/event-stage-BBm4cEDz.webp"
                alt="Stage performance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-xl">İlker Ayrık</p>
                <p className="text-gray-300 text-sm">GERÇEKLER ACIDIR</p>
              </div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/img/event-stage-BBm4cEDz.webp"
                alt="Magic performance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                  <path d="M10 9H8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Buy Tickets</h3>
              <p className="text-gray-400">Purchase tickets for you and your partner</p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Opt In</h3>
              <p className="text-gray-400">During checkout, tell us you want to compete</p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Selected</h3>
              <p className="text-gray-400">We'll contact you if you're chosen</p>
            </div>
          </div>

          {/* Prizes Banner */}
          <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-red-900/50 rounded-xl p-8 border border-purple-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Prizes for Selected Couples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg mb-1">Win prizes worth $10,000+</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg mb-1">VIP treatment on show day</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg mb-1">Featured on stage</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg mb-1">Exclusive merchandise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Are You Eligible to Compete?</h2>
            <p className="text-gray-400 text-lg">Quick Check</p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Question 1 of 1</span>
                <span className="text-sm text-gray-400">{quizProgress}% complete</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#f0425f] to-[#ec4899] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${quizProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Are you and your partner both 18 years or older?</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                  <input
                    type="radio"
                    name="age"
                    value="yes"
                    checked={quizAnswers[0] === 'yes'}
                    onChange={() => handleQuizAnswer(0, 'yes')}
                    className="w-5 h-5 text-[#f0425f] focus:ring-[#f0425f] mr-3"
                  />
                  <span className="text-white">Yes</span>
                </label>
                <label className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                  <input
                    type="radio"
                    name="age"
                    value="no"
                    checked={quizAnswers[0] === 'no'}
                    onChange={() => handleQuizAnswer(0, 'no')}
                    className="w-5 h-5 text-[#f0425f] focus:ring-[#f0425f] mr-3"
                  />
                  <span className="text-white">No</span>
                </label>
              </div>
            </div>

            <p className="text-sm text-gray-400 italic">Both participants must be legal adults to compete.</p>
          </div>
        </div>
      </section>

      {/* Past Contestants & Winners Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Past Contestants & Winners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pastWinners.map((winner) => (
              <div key={winner.id} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={winner.image}
                      alt={winner.names}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{winner.names}</h3>
                    <p className="text-gray-400 text-sm">{winner.location}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-yellow-400 font-bold">{winner.prize}</span>
                  <span className="text-[#f0425f] font-bold ml-2">{winner.amount}</span>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(winner.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic">"{winner.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything you need to know about becoming a contestant</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-800/30 border-t border-gray-700/50">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-2">Still have questions?</p>
            <a href="mailto:contact@90events.com" className="text-[#f0425f] hover:text-[#ec4899] font-semibold">
              contact@90events.com
            </a>
          </div>
        </div>
      </section>

      {/* Ready to Take the Stage CTA */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-red-900/50 rounded-xl p-12 border border-purple-700/50 text-center">
              <div className="w-16 h-16 bg-[#f0425f] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Take the Stage?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Don't miss your chance to compete for amazing prizes and create unforgettable memories with your partner!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tickets"
                  className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Buy Tickets
                </Link>
                <Link
                  href="/tickets"
                  className="inline-block px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:border-white/50"
                >
                  Get Tickets & Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorships Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Become a Sponsor</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Partner with us and reach thousands of engaged audiences. Showcase your brand on stage and connect with our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Sponsor Tier 1 */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-[#f0425f]/50 transition-all">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tour Title Sponsor</h3>
                  <p className="text-gray-400 text-sm">Premium visibility and branding</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Logo on all promotional materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Stage mentions during shows</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Social media promotion</span>
                  </li>
                </ul>
                <Link
                  href="/sponsors"
                  className="block w-full text-center px-6 py-3 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-white/10 hover:border-[#f0425f] transition-all font-semibold"
                >
                  Learn More
                </Link>
              </div>

              {/* Sponsor Tier 2 */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-[#f0425f]/50 transition-all">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Industry Sponsor</h3>
                  <p className="text-gray-400 text-sm">Targeted industry exposure</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Logo on event materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Booth space at venues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Digital marketing inclusion</span>
                  </li>
                </ul>
                <Link
                  href="/sponsors"
                  className="block w-full text-center px-6 py-3 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-white/10 hover:border-[#f0425f] transition-all font-semibold"
                >
                  Learn More
                </Link>
              </div>

              {/* Sponsor Tier 3 */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-[#f0425f]/50 transition-all">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">City Sponsor</h3>
                  <p className="text-gray-400 text-sm">Local market presence</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>City-specific branding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Local event presence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f0425f] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Community engagement</span>
                  </li>
                </ul>
                <Link
                  href="/sponsors"
                  className="block w-full text-center px-6 py-3 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-white/10 hover:border-[#f0425f] transition-all font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/sponsors"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] hover:from-[#d63852] hover:to-[#db2777] text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Sponsorship Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

