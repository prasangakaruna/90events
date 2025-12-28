'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ColorCustomizationContextType {
  backgroundColor: string;
  fontColor: string;
  setBackgroundColor: (color: string) => void;
  setFontColor: (color: string) => void;
  resetColors: () => void;
}

const ColorCustomizationContext = createContext<ColorCustomizationContextType | undefined>(undefined);

const DEFAULT_BACKGROUND = '#000000';
const DEFAULT_FONT = '#ffffff';

export function ColorCustomizationProvider({ children }: { children: ReactNode }) {
  const [backgroundColor, setBackgroundColorState] = useState<string>(DEFAULT_BACKGROUND);
  const [fontColor, setFontColorState] = useState<string>(DEFAULT_FONT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load colors from localStorage
    const savedBg = localStorage.getItem('customBackgroundColor');
    const savedFont = localStorage.getItem('customFontColor');
    
    if (savedBg) {
      setBackgroundColorState(savedBg);
    }
    if (savedFont) {
      setFontColorState(savedFont);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Apply colors to CSS variables
    document.documentElement.style.setProperty('--custom-background', backgroundColor);
    document.documentElement.style.setProperty('--custom-foreground', fontColor);
    document.documentElement.style.setProperty('--background', backgroundColor);
    document.documentElement.style.setProperty('--foreground', fontColor);
    
    // Update body background and text color
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = fontColor;
    
    // Update main content areas - more comprehensive
    const mainElements = document.querySelectorAll('main, section, div[class*="bg-black"], div[class*="bg-gray-900"]');
    mainElements.forEach((el) => {
      const element = el as HTMLElement;
      const classes = element.className;
      // Update elements with black or dark gray backgrounds
      if (classes.includes('bg-black') || classes.includes('bg-gray-900') || 
          classes.includes('bg-gradient-to-b') && classes.includes('from-black')) {
        // Only update if it's a solid background, not gradients
        if (!classes.includes('gradient') || classes.includes('bg-black') || classes.includes('bg-gray-900')) {
          const computedStyle = window.getComputedStyle(element);
          const bgColor = computedStyle.backgroundColor;
          // Only override if it's black or very dark
          if (bgColor === 'rgb(0, 0, 0)' || bgColor === 'rgba(0, 0, 0, 0)' || 
              bgColor.includes('rgb(17, 24, 39)') || bgColor.includes('rgb(31, 41, 55)')) {
            element.style.backgroundColor = backgroundColor;
          }
        }
      }
    });
    
    // Update text colors in main content - more comprehensive
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a, li, td, th, label');
    textElements.forEach((el) => {
      const element = el as HTMLElement;
      const classes = element.className;
      const computedStyle = window.getComputedStyle(element);
      const textColor = computedStyle.color;
      
      // Skip gradient text and special colored elements
      if (classes.includes('gradient-text') || 
          classes.includes('text-[#f0425f]') || 
          classes.includes('text-[#ec4899]') ||
          classes.includes('text-primary') ||
          textColor.includes('rgb(240, 66, 95)') ||
          textColor.includes('rgb(236, 72, 153)')) {
        return;
      }
      
      // Update white and light gray text
      if (classes.includes('text-white') || 
          classes.includes('text-gray-300') || 
          classes.includes('text-gray-400') ||
          textColor === 'rgb(255, 255, 255)' ||
          textColor.includes('rgb(229, 231, 235)') ||
          textColor.includes('rgb(156, 163, 175)')) {
        element.style.color = fontColor;
      }
    });
    
    // Save to localStorage
    localStorage.setItem('customBackgroundColor', backgroundColor);
    localStorage.setItem('customFontColor', fontColor);
  }, [backgroundColor, fontColor, mounted]);

  const setBackgroundColor = (color: string) => {
    setBackgroundColorState(color);
  };

  const setFontColor = (color: string) => {
    setFontColorState(color);
  };

  const resetColors = () => {
    // Clear localStorage first
    localStorage.removeItem('customBackgroundColor');
    localStorage.removeItem('customFontColor');
    
    // Clear all inline styles that were applied before resetting state
    // Reset body styles
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    
    // Reset CSS variables to empty (will use CSS defaults)
    document.documentElement.style.setProperty('--custom-background', '');
    document.documentElement.style.setProperty('--custom-foreground', '');
    document.documentElement.style.setProperty('--background', '');
    document.documentElement.style.setProperty('--foreground', '');
    
    // Remove inline styles from elements
    const mainElements = document.querySelectorAll('main, section, div[class*="bg-black"], div[class*="bg-gray-900"]');
    mainElements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.backgroundColor = '';
    });
    
    // Remove inline text colors
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a, li, td, th, label');
    textElements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.color = '';
    });
    
    // Reset state to defaults (this will trigger useEffect but with default values)
    setBackgroundColorState(DEFAULT_BACKGROUND);
    setFontColorState(DEFAULT_FONT);
  };

  return (
    <ColorCustomizationContext.Provider
      value={{
        backgroundColor,
        fontColor,
        setBackgroundColor,
        setFontColor,
        resetColors,
      }}
    >
      {children}
    </ColorCustomizationContext.Provider>
  );
}

export function useColorCustomization() {
  const context = useContext(ColorCustomizationContext);
  if (context === undefined) {
    throw new Error('useColorCustomization must be used within a ColorCustomizationProvider');
  }
  return context;
}

