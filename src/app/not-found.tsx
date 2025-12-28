'use client';

import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg shadow-lg hover:shadow-[#f0425f]/50 transform hover:scale-105"
          >
            Go to Homepage
          </Link>
          <Link
            href="/events"
            className="px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg transform hover:scale-105"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </div>
  );
}

