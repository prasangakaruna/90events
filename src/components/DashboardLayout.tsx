'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLightMode, setIsLightMode] = useState(false);

  const showManagementItems = [
    { name: 'Shows', icon: '🎭', path: '/dashboard/shows' },
    { name: 'Ticketing', icon: '🎫', path: '/dashboard/ticketing' },
    { name: 'Venues', icon: '🏛️', path: '/dashboard/venues' },
    { name: 'Artists', icon: '👤', path: '/dashboard/artists' },
    { name: 'Sponsors', icon: '⭐', path: '/dashboard/sponsors' },
    { name: 'Packages', icon: '📦', path: '/dashboard/packages' },
    { name: 'Tour Dates', icon: '📅', path: '/dashboard/tour-dates' },
  ];

  const generalItems = [
    { name: 'Dashboard', icon: '📊', path: '/dashboard' },
    { name: 'Accounting', icon: '💰', path: '/dashboard/accounting' },
    { name: 'CRM', icon: '📇', path: '/dashboard/crm' },
    { name: 'Campaigns', icon: '📢', path: '/dashboard/campaigns' },
    { name: 'Reports', icon: '📈', path: '/dashboard/reports' },
    { name: 'Content', icon: '📝', path: '/dashboard/content' },
    { name: 'Gallery', icon: '🖼️', path: '/dashboard/gallery' },
    { name: 'Users', icon: '👥', path: '/dashboard/users' },
    { name: 'Orders', icon: '🛒', path: '/dashboard/orders' },
    { name: 'Shop', icon: '🛍️', path: '/dashboard/shop' },
    { name: 'Refunds', icon: '↩️', path: '/dashboard/refunds' },
    { name: 'Settings', icon: '⚙️', path: '/dashboard/settings' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className={`min-h-screen flex ${isLightMode ? 'bg-gray-100' : 'bg-gray-900'}`}>
      {/* Sidebar */}
      <aside className={`w-64 ${isLightMode ? 'bg-white border-r border-gray-200' : 'bg-gray-800 border-r border-gray-700'} flex flex-col h-screen sticky top-0`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#f0425f] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">90</span>
            </div>
            <div>
              <div className={`font-bold ${isLightMode ? 'text-gray-900' : 'text-white'}`}>Admin Panel</div>
              <div className="text-xs text-gray-400">90events.org</div>
            </div>
          </div>
        </div>

        {/* Event Selector */}
        <div className="p-4 border-b border-gray-700">
          <button className={`w-full px-4 py-2 ${isLightMode ? 'bg-gray-100 text-gray-900' : 'bg-[#f0425f] text-white'} rounded-full flex items-center justify-between text-sm font-medium`}>
            <span>90 Events - Ger...</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          {/* Show Management */}
          <div className="mb-6">
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
              SHOW MANAGEMENT
            </h3>
            <ul className="space-y-1">
              {showManagementItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(item.path)
                        ? 'bg-yellow-500 text-black font-semibold'
                        : isLightMode
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* General */}
          <div>
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
              GENERAL
            </h3>
            <ul className="space-y-1">
              {generalItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(item.path)
                        ? 'bg-yellow-500 text-black font-semibold'
                        : isLightMode
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className={`p-4 border-t ${isLightMode ? 'border-gray-200' : 'border-gray-700'} space-y-2`}>
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className={`w-full px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${
              isLightMode
                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            } transition-colors`}
          >
            <span>🌓</span>
            <span>Light Mode</span>
          </button>
          <Link
            href="/"
            className={`block w-full px-3 py-2 rounded-lg text-sm text-center ${
              isLightMode
                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            } transition-colors`}
          >
            View Site
          </Link>
          <button
            onClick={() => router.push('/login')}
            className={`w-full px-3 py-2 rounded-lg text-sm ${
              isLightMode
                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            } transition-colors`}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className={`${isLightMode ? 'bg-gray-50' : 'bg-gray-900'} min-h-screen p-8`}>
          {children}
        </div>
      </main>
    </div>
  );
}

