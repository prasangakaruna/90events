'use client';

import { useTranslation } from '@/contexts/TranslationContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
          language === 'es'
            ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        ES
      </button>
    </div>
  );
}

