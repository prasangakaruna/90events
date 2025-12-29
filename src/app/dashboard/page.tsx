'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'sales' | 'customers' | 'export'>('sales');
  const [timeRange, setTimeRange] = useState('Last 30 days');

  // Mock data for charts
  const revenueData = [
    { date: 'Nov 30', value: 0 },
    { date: 'Dec 5', value: 50 },
    { date: 'Dec 9', value: 250 },
    { date: 'Dec 14', value: 280 },
    { date: 'Dec 19', value: 200 },
    { date: 'Dec 22', value: 150 },
    { date: 'Dec 24', value: 100 },
    { date: 'Dec 25', value: 0 },
    { date: 'Dec 30', value: 75 },
  ];

  const ordersData = [
    { date: 'Nov 30', value: 0 },
    { date: 'Dec 5', value: 0 },
    { date: 'Dec 9', value: 1 },
    { date: 'Dec 14', value: 1 },
    { date: 'Dec 19', value: 1 },
    { date: 'Dec 21', value: 1 },
    { date: 'Dec 23', value: 1 },
    { date: 'Dec 25', value: 0 },
    { date: 'Dec 30', value: 0 },
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.value));
  const maxOrders = Math.max(...ordersData.map(d => d.value));

  return (
    <>
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-white">
                  Reports & Analytics
                </h1>
                <p className="text-gray-400">
                  View sales dashboards, customer analytics, and export reports
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <select
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="bg-transparent text-white border-none outline-none cursor-pointer"
                  >
                    <option value="Last 7 days">Last 7 days</option>
                    <option value="Last 30 days">Last 30 days</option>
                    <option value="Last 90 days">Last 90 days</option>
                    <option value="Last year">Last year</option>
                  </select>
                </div>
                <button className="px-6 py-2 bg-[#f0425f] text-white rounded-lg hover:bg-[#d63852] transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                  Export All
                </button>
              </div>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Revenue', value: '$729.99', icon: '💰', color: 'text-green-400' },
              { title: 'Total Orders', value: '5', icon: '📄', color: 'text-blue-400' },
              { title: 'Avg. Order Value', value: '$146.00', icon: '📈', color: 'text-white' },
              { title: 'New Customers', value: '18', icon: '👥', color: 'text-orange-400' },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl ${metric.color}`}>{metric.icon}</span>
                </div>
                <div className="text-2xl font-bold mb-1 text-white">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.title}
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex gap-2 border-b border-gray-700">
              {[
                { id: 'sales', label: 'Sales Dashboard' },
                { id: 'customers', label: 'Customer Analytics' },
                { id: 'export', label: 'Export Reports' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-b-2 border-yellow-500 text-yellow-500'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Charts */}
          {activeTab === 'sales' && (
            <div className="space-y-6">
              {/* Revenue Over Time Chart */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Revenue Over Time
                  </h2>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                    Export
                  </button>
                </div>
                <div className="h-64 relative">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-400">
                    {[300, 225, 150, 75, 0].map((val) => (
                      <span key={val}>{val}</span>
                    ))}
                  </div>
                  {/* Chart area */}
                  <div className="ml-12 h-full relative">
                    <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                      {/* Grid lines */}
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line
                          key={i}
                          x1="0"
                          y1={i * 50}
                          x2="800"
                          y2={i * 50}
                          stroke="#374151"
                          strokeWidth="1"
                        />
                      ))}
                      {/* Revenue line */}
                      <polyline
                        points={revenueData
                          .map((d, i) => {
                            const x = (i / (revenueData.length - 1)) * 800;
                            const y = 200 - (d.value / maxRevenue) * 200;
                            return `${x},${y}`;
                          })
                          .join(' ')}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="3"
                      />
                      {/* Data points */}
                      {revenueData.map((d, i) => {
                        const x = (i / (revenueData.length - 1)) * 800;
                        const y = 200 - (d.value / maxRevenue) * 200;
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#fbbf24"
                          />
                        );
                      })}
                    </svg>
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 mt-2">
                      {revenueData.map((d, i) => (
                        <span key={i}>{d.date}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Orders by Day Chart */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Orders by Day
                  </h2>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                    Export
                  </button>
                </div>
                <div className="h-64 relative">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-400">
                    {[1, 0.75, 0.5, 0.25, 0].map((val) => (
                      <span key={val}>{val}</span>
                    ))}
                  </div>
                  {/* Chart area */}
                  <div className="ml-12 h-full relative">
                    <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                      {/* Grid lines */}
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line
                          key={i}
                          x1="0"
                          y1={i * 50}
                          x2="800"
                          y2={i * 50}
                          stroke="#374151"
                          strokeWidth="1"
                        />
                      ))}
                      {/* Bars */}
                      {ordersData.map((d, i) => {
                        const x = (i / (ordersData.length - 1)) * 800;
                        const barWidth = 800 / ordersData.length * 0.6;
                        const barHeight = (d.value / maxOrders) * 200;
                        return (
                          <rect
                            key={i}
                            x={x - barWidth / 2}
                            y={200 - barHeight}
                            width={barWidth}
                            height={barHeight}
                            fill="#fbbf24"
                          />
                        );
                      })}
                    </svg>
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 mt-2">
                      {ordersData.map((d, i) => (
                        <span key={i}>{d.date}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-white">
                Customer Analytics
              </h2>
              <p className="text-gray-400">
                Customer analytics content will be displayed here.
              </p>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-white">
                Export Reports
              </h2>
              <p className="text-gray-400">
                Export reports functionality will be displayed here.
              </p>
            </div>
          )}
    </>
  );
}

