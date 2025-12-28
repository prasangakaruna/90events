'use client';

import { useState } from 'react';
import { useColorCustomization } from '@/contexts/ColorCustomizationContext';

export default function ColorCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { backgroundColor, fontColor, setBackgroundColor, setFontColor, resetColors } = useColorCustomization();

  const presetColors = {
    backgrounds: [
      { name: 'Black', value: '#000000' },
      { name: 'Dark Gray', value: '#1a1a1a' },
      { name: 'Navy', value: '#0a0e27' },
      { name: 'Dark Blue', value: '#0f172a' },
      { name: 'Dark Purple', value: '#1a0a2e' },
      { name: 'Charcoal', value: '#2d2d2d' },
      { name: 'Dark Green', value: '#0a1f0a' },
      { name: 'Dark Brown', value: '#1a1612' },
    ],
    fonts: [
      { name: 'White', value: '#ffffff' },
      { name: 'Light Gray', value: '#e5e5e5' },
      { name: 'Cream', value: '#f5f5dc' },
      { name: 'Light Blue', value: '#e0f2fe' },
      { name: 'Light Pink', value: '#fce7f3' },
      { name: 'Yellow', value: '#fef3c7' },
      { name: 'Light Green', value: '#dcfce7' },
      { name: 'Lavender', value: '#f3e8ff' },
    ],
  };

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-full shadow-2xl hover:shadow-[#f0425f]/50 flex items-center justify-center transition-all transform hover:scale-110 group"
        aria-label="Color Customization"
      >
        <svg
          className="w-6 h-6 text-white group-hover:rotate-90 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>

      {/* Color Customizer Panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-gradient-to-br from-gray-900/98 to-black/98 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl animate-slideInUp max-h-[calc(100vh-8rem)] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Color Customization</h3>
                <p className="text-sm text-gray-400">Customize your viewing experience</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Background Color */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-3">
                Background Color
              </label>
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-16 h-16 rounded-lg cursor-pointer border-2 border-white/20 hover:border-[#f0425f] transition-colors"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex-1 px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white text-sm focus:border-[#f0425f] focus:outline-none"
                  placeholder="#000000"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {presetColors.backgrounds.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setBackgroundColor(color.value)}
                    className="h-10 rounded-lg border-2 transition-all hover:scale-110 relative group"
                    style={{
                      backgroundColor: color.value,
                      borderColor: backgroundColor === color.value ? '#f0425f' : 'rgba(255,255,255,0.2)',
                    }}
                    title={color.name}
                  >
                    {backgroundColor === color.value && (
                      <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Color */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-3">
                Font Color
              </label>
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="color"
                  value={fontColor}
                  onChange={(e) => setFontColor(e.target.value)}
                  className="w-16 h-16 rounded-lg cursor-pointer border-2 border-white/20 hover:border-[#f0425f] transition-colors"
                />
                <input
                  type="text"
                  value={fontColor}
                  onChange={(e) => setFontColor(e.target.value)}
                  className="flex-1 px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white text-sm focus:border-[#f0425f] focus:outline-none"
                  placeholder="#ffffff"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {presetColors.fonts.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setFontColor(color.value)}
                    className="h-10 rounded-lg border-2 transition-all hover:scale-110 relative group"
                    style={{
                      backgroundColor: color.value,
                      borderColor: fontColor === color.value ? '#f0425f' : 'rgba(255,255,255,0.2)',
                    }}
                    title={color.name}
                  >
                    {fontColor === color.value && (
                      <span className="absolute inset-0 flex items-center justify-center text-gray-800 text-xs font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview */}
            <div className="mb-6 p-4 rounded-lg border border-white/10" style={{ backgroundColor: backgroundColor }}>
              <p className="text-sm font-semibold mb-2" style={{ color: fontColor }}>
                Preview
              </p>
              <p className="text-sm mb-2" style={{ color: fontColor }}>
                This is how your text will look with your chosen colors.
              </p>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  Colors are saved automatically and will persist across sessions.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={resetColors}
                className="flex-1 px-4 py-2 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-sm"
              >
                Reset to Default
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-sm"
              >
                Done
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

