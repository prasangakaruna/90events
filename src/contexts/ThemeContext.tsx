'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    
    // Update CSS variables based on theme
    if (theme === 'light') {
      // Light theme: white background, black text, red primary
      document.documentElement.style.setProperty('--primary', '#dc2626');
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#000000');
      document.documentElement.style.setProperty('--custom-background', '#ffffff');
      document.documentElement.style.setProperty('--custom-foreground', '#000000');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
    } else {
      // Dark theme: black background, white text, pink/red gradient primary
      document.documentElement.style.setProperty('--primary', '#f0425f');
      document.documentElement.style.setProperty('--background', '#000000');
      document.documentElement.style.setProperty('--foreground', '#ffffff');
      document.documentElement.style.setProperty('--custom-background', '#000000');
      document.documentElement.style.setProperty('--custom-foreground', '#ffffff');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

