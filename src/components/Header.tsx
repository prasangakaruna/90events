'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/contexts/TranslationContext';
import LanguageSwitcher from './LanguageSwitcher';

interface CartItem {
  id: string;
  quantity: number;
}

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load cart count from localStorage
  useEffect(() => {
    const loadCartCount = () => {
      const savedCart = localStorage.getItem('shopCart');
      if (savedCart) {
        try {
          const cart: CartItem[] = JSON.parse(savedCart);
          const count = cart.reduce((total, item) => total + item.quantity, 0);
          setCartCount(count);
        } catch (e) {
          console.error('Error loading cart', e);
        }
      }
    };

    loadCartCount();

    // Listen for storage changes (when cart is updated from other tabs/components)
    const handleStorageChange = () => {
      loadCartCount();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom event for same-tab updates
    window.addEventListener('cartUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
    };
  }, []);

  const handleCartClick = () => {
    router.push('/checkout?type=shop');
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-black/98 backdrop-blur-md shadow-lg text-white' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.home}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/tickets" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.tickets || 'Tickets'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/shop" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.shop || 'Shop'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/sponsors" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.sponsors}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/tour" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.tour || 'Tour'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/apply" className="text-white hover:text-[#f0425f] transition-colors font-medium relative group">
              {t.apply || 'Apply'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0425f] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Cart Icon */}
            <button
              onClick={handleCartClick}
              className="relative p-2 text-white hover:text-[#f0425f] transition-colors group"
              aria-label="Shopping cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f0425f] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
              <div className="absolute -bottom-10 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {cartCount > 0 ? `${cartCount} item${cartCount !== 1 ? 's' : ''} in cart` : 'View cart'}
              </div>
            </button>
            <Link
              href="/login"
              className="hidden md:block btn-secondary flex items-center justify-center gap-2"
            >
              {t.login || 'Login'}
            </Link>
            <Link
              href="/apply"
              className="hidden md:block btn-gradient flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {t.beAContestant || 'Be a Contestant'}
            </Link>
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#f0425f] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 animate-slideInUp">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f0425f] transition-colors font-medium py-2"
              >
                {t.home}
              </Link>
              <Link 
                href="/tickets" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f0425f] transition-colors font-medium py-2"
              >
                {t.tickets || 'Tickets'}
              </Link>
              <Link 
                href="/shop" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f0425f] transition-colors font-medium py-2"
              >
                {t.shop || 'Shop'}
              </Link>
              <Link 
                href="/sponsors" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f0425f] transition-colors font-medium py-2"
              >
                {t.sponsors}
              </Link>
              <Link 
                href="/tour" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f0425f] transition-colors font-medium py-2"
              >
                {t.tour || 'Tour'}
              </Link>
              <Link 
                href="/apply" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#f0425f] transition-colors font-medium py-2"
              >
                {t.apply || 'Apply'}
              </Link>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                {/* Mobile Cart Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleCartClick();
                  }}
                  className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base flex items-center justify-center gap-2 border border-white/40 hover:border-white/60 relative"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Cart {cartCount > 0 && `(${cartCount})`}
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#f0425f] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount > 99 ? '99+' : cartCount}
                    </span>
                  )}
                </button>
                <div className="px-2">
                  <LanguageSwitcher />
                </div>
                <Link 
                  href="/login" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base flex items-center justify-center gap-2 border border-white/40 hover:border-white/60"
                >
                  {t.login || 'Login'}
                </Link>
                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60 flex items-center justify-center gap-2 text-center"
                >
                  {t.beAContestant || 'Be a Contestant'}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

