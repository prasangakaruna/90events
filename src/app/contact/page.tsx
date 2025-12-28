'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'support@90events.com',
      link: 'mailto:support@90events.com',
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '1-800-90EVENTS',
      link: 'tel:1-800-90EVENTS',
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Event Street, New York, NY 10001',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/img/img16346_orig.webp"
            alt="Contact"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-sm font-semibold rounded-full mb-6">
            {t.contactUs}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
            {t.getInTouch}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t.contactPageDescription}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {contactMethods.map((method, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
              <div className="relative glass-effect rounded-2xl p-8 text-center hover-lift">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f0425f] transition-colors">
                  {method.title}
                </h3>
                <a
                  href={method.link}
                  className="text-gray-400 hover:text-[#f0425f] transition-colors block"
                >
                  {method.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
                <div className="relative glass-effect rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">{t.contactInformation}</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#f0425f] mb-2 text-lg">{t.businessHours}</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-300">Saturday - Sunday: 10:00 AM - 4:00 PM EST</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#f0425f] mb-2 text-lg">{t.responseTime}</h3>
                      <p className="text-gray-300">{t.typicallyRespond}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
                <div className="relative glass-effect rounded-2xl p-8">
                  <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#f0425f] hover:bg-[#f0425f]/10 transition-all">
                      <span className="text-xl">📘</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#f0425f] hover:bg-[#f0425f]/10 transition-all">
                      <span className="text-xl">📷</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#f0425f] hover:bg-[#f0425f]/10 transition-all">
                      <span className="text-xl">🐦</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#f0425f] hover:bg-[#f0425f]/10 transition-all">
                      <span className="text-xl">💼</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
              <div className="relative glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">{t.sendUsMessage}</h2>
                {submitted ? (
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl opacity-30 blur-sm"></div>
                    <div className="relative bg-green-900/30 border border-green-700 rounded-xl p-6 text-green-400">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">✓</span>
                        <h3 className="font-bold text-lg">Message Sent!</h3>
                      </div>
                      <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#f0425f] focus:outline-none focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#f0425f] focus:outline-none focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#f0425f] focus:outline-none focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="refund">Refund Request</option>
                        <option value="partnership">Partnership/Sponsorship</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#f0425f] focus:outline-none focus:ring-2 focus:ring-[#f0425f]/20 resize-none transition-all"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg shadow-lg hover:shadow-[#f0425f]/50 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.quickLinks}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/shows"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
                <div className="relative glass-effect rounded-xl p-6 hover-lift">
                  <div className="text-4xl mb-3">🎭</div>
                  <h3 className="font-bold text-lg mb-2">{t.viewShows}</h3>
                  <p className="text-gray-400 text-sm">{t.explorePerformances}</p>
                </div>
              </Link>
              <Link
                href="/sponsors"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
                <div className="relative glass-effect rounded-xl p-6 hover-lift">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-bold text-lg mb-2">{t.becomeSponsor}</h3>
                  <p className="text-gray-400 text-sm">{t.partnerToday}</p>
                </div>
              </Link>
              <Link
                href="/prizes"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0425f] via-[#ec4899] to-[#a855f7] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
                <div className="relative glass-effect rounded-xl p-6 hover-lift">
                  <div className="text-4xl mb-3">🎁</div>
                  <h3 className="font-bold text-lg mb-2">{t.winPrizes}</h3>
                  <p className="text-gray-400 text-sm">{t.learnAboutPrizes}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

