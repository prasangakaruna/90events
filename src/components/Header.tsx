'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-black/98 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="relative hover:scale-105 transition-transform">
            <Image
              src="/img/logo2.png"
              alt="90 Events Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.home}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.about}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/shows" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.shows}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/prizes" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.prizes}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/sponsors" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.sponsors}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.contact}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/events"
              className="px-6 py-2.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold shadow-lg hover:shadow-[#f0425f]/50 transform hover:scale-105"
            >
              {t.buyTickets}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

