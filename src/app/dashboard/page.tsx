'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TicketBooking {
  id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  eventId: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  venue: string;
  ticketType: string;
  quantity: number;
  pricePerTicket: number;
  totalAmount: number;
  bookingDate: string;
  status: 'completed' | 'pending' | 'cancelled';
  paymentMethod: string;
}

interface EventSales {
  eventId: string;
  eventName: string;
  eventDate: string;
  location: string;
  ticketsSold: number;
  revenue: number;
  capacity: number;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'sales' | 'customers' | 'export'>('sales');
  const [timeRange, setTimeRange] = useState('Last 30 days');

  // Sample ticket booking data linked to shows/events
  const ticketBookings: TicketBooking[] = [
    {
      id: 'TB-001',
      orderId: '#ORD-001',
      customerName: 'John Doe',
      customerEmail: 'john.doe@example.com',
      eventId: '1',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 7, 2026',
      eventLocation: 'New York, NY',
      venue: 'The Town Hall',
      ticketType: 'General Admission',
      quantity: 2,
      pricePerTicket: 64,
      totalAmount: 128,
      bookingDate: 'Dec 9, 2024',
      status: 'completed',
      paymentMethod: 'Credit Card',
    },
    {
      id: 'TB-002',
      orderId: '#ORD-002',
      customerName: 'Jane Smith',
      customerEmail: 'jane.smith@example.com',
      eventId: '1',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 7, 2026',
      eventLocation: 'New York, NY',
      venue: 'The Town Hall',
      ticketType: 'VIP',
      quantity: 1,
      pricePerTicket: 149,
      totalAmount: 149,
      bookingDate: 'Dec 14, 2024',
      status: 'completed',
      paymentMethod: 'Credit Card',
    },
    {
      id: 'TB-003',
      orderId: '#ORD-003',
      customerName: 'Mike Johnson',
      customerEmail: 'mike.johnson@example.com',
      eventId: '3',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 15, 2026',
      eventLocation: 'Chicago, IL',
      venue: 'Copernicus Center',
      ticketType: 'General Admission',
      quantity: 3,
      pricePerTicket: 38,
      totalAmount: 114,
      bookingDate: 'Dec 19, 2024',
      status: 'completed',
      paymentMethod: 'PayPal',
    },
    {
      id: 'TB-004',
      orderId: '#ORD-004',
      customerName: 'Sarah Williams',
      customerEmail: 'sarah.williams@example.com',
      eventId: '4',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 22, 2026',
      eventLocation: 'Palo Alto, CA',
      venue: 'Spangenberg Theater',
      ticketType: 'Premium',
      quantity: 2,
      pricePerTicket: 89,
      totalAmount: 178,
      bookingDate: 'Dec 21, 2024',
      status: 'completed',
      paymentMethod: 'Credit Card',
    },
    {
      id: 'TB-005',
      orderId: '#ORD-005',
      customerName: 'David Chen',
      customerEmail: 'david.chen@example.com',
      eventId: '1',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 7, 2026',
      eventLocation: 'New York, NY',
      venue: 'The Town Hall',
      ticketType: 'General Admission',
      quantity: 1,
      pricePerTicket: 64,
      totalAmount: 64,
      bookingDate: 'Dec 23, 2024',
      status: 'completed',
      paymentMethod: 'Credit Card',
    },
    {
      id: 'TB-006',
      orderId: '#ORD-006',
      customerName: 'Emily Rodriguez',
      customerEmail: 'emily.rodriguez@example.com',
      eventId: '3',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 15, 2026',
      eventLocation: 'Chicago, IL',
      venue: 'Copernicus Center',
      ticketType: 'General Admission',
      quantity: 2,
      pricePerTicket: 38,
      totalAmount: 76,
      bookingDate: 'Dec 30, 2024',
      status: 'pending',
      paymentMethod: 'Credit Card',
    },
  ];

  // Event sales summary
  const eventSales: EventSales[] = [
    {
      eventId: '1',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 7, 2026',
      location: 'New York, NY - The Town Hall',
      ticketsSold: 341,
      revenue: 21824,
      capacity: 1495,
    },
    {
      eventId: '3',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 15, 2026',
      location: 'Chicago, IL - Copernicus Center',
      ticketsSold: 127,
      revenue: 4826,
      capacity: 1852,
    },
    {
      eventId: '4',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 22, 2026',
      location: 'Palo Alto, CA - Spangenberg Theater',
      ticketsSold: 89,
      revenue: 7921,
      capacity: 925,
    },
  ];

  // Calculate totals from ticket bookings
  const totalTicketRevenue = ticketBookings
    .filter(b => b.status === 'completed')
    .reduce((sum, booking) => sum + booking.totalAmount, 0);
  const totalTicketsSold = ticketBookings
    .filter(b => b.status === 'completed')
    .reduce((sum, booking) => sum + booking.quantity, 0);
  const totalBookings = ticketBookings.length;

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
              { title: 'Total Revenue', value: `$${totalTicketRevenue.toFixed(2)}`, icon: '💰', color: 'text-green-400' },
              { title: 'Total Bookings', value: totalBookings.toString(), icon: '🎫', color: 'text-blue-400' },
              { title: 'Tickets Sold', value: totalTicketsSold.toString(), icon: '📈', color: 'text-white' },
              { title: 'Avg. Booking Value', value: `$${(totalTicketRevenue / ticketBookings.filter(b => b.status === 'completed').length || 0).toFixed(2)}`, icon: '👥', color: 'text-orange-400' },
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

              {/* Ticket Sales by Event */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Ticket Sales by Event
                  </h2>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                    Export
                  </button>
                </div>
                <div className="space-y-4">
                  {eventSales.map((event) => {
                    const soldPercentage = (event.ticketsSold / event.capacity) * 100;
                    return (
                      <div key={event.eventId} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-1">{event.eventName}</h3>
                            <p className="text-sm text-gray-400 mb-1">{event.eventDate}</p>
                            <p className="text-sm text-gray-500">{event.location}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-green-400 mb-1">${event.revenue.toLocaleString()}</div>
                            <div className="text-sm text-gray-400">{event.ticketsSold} tickets</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span>Sales Progress</span>
                            <span>{event.ticketsSold} / {event.capacity} ({soldPercentage.toFixed(1)}%)</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#f0425f] to-[#ec4899] h-2 rounded-full transition-all"
                              style={{ width: `${Math.min(soldPercentage, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent Ticket Bookings */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Recent Ticket Bookings
                  </h2>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Order ID</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Customer</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Event</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Tickets</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Amount</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {ticketBookings.slice(0, 5).map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-700/50">
                          <td className="px-4 py-3 text-white font-medium text-sm">{booking.orderId}</td>
                          <td className="px-4 py-3">
                            <div className="text-white text-sm">{booking.customerName}</div>
                            <div className="text-gray-400 text-xs">{booking.customerEmail}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-white text-sm">{booking.eventLocation}</div>
                            <div className="text-gray-400 text-xs">{booking.eventDate}</div>
                          </td>
                          <td className="px-4 py-3 text-gray-300 text-sm">
                            {booking.quantity}x {booking.ticketType}
                          </td>
                          <td className="px-4 py-3 text-green-400 font-semibold text-sm">
                            ${booking.totalAmount.toFixed(2)}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              booking.status === 'completed'
                                ? 'bg-green-500/20 text-green-400'
                                : booking.status === 'pending'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="space-y-6">
              {/* Customer Overview */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6 text-white">
                  Customer Analytics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">
                      {new Set(ticketBookings.map(b => b.customerEmail)).size}
                    </div>
                    <div className="text-sm text-gray-400">Unique Customers</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">
                      {ticketBookings.filter(b => b.status === 'completed').length}
                    </div>
                    <div className="text-sm text-gray-400">Completed Bookings</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">
                      ${(totalTicketRevenue / new Set(ticketBookings.map(b => b.customerEmail)).size).toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-400">Avg. Customer Value</div>
                  </div>
                </div>
              </div>

              {/* All Ticket Bookings */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6 text-white">
                  All Ticket Bookings
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Order ID</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Customer</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Event</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Venue</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Ticket Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Quantity</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Amount</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Booking Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {ticketBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-700/50">
                          <td className="px-4 py-3 text-white font-medium text-sm">{booking.orderId}</td>
                          <td className="px-4 py-3">
                            <div className="text-white text-sm">{booking.customerName}</div>
                            <div className="text-gray-400 text-xs">{booking.customerEmail}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-white text-sm">{booking.eventLocation}</div>
                            <div className="text-gray-400 text-xs">{booking.eventDate}</div>
                          </td>
                          <td className="px-4 py-3 text-gray-300 text-sm">{booking.venue}</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">{booking.ticketType}</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">{booking.quantity}</td>
                          <td className="px-4 py-3 text-green-400 font-semibold text-sm">
                            ${booking.totalAmount.toFixed(2)}
                          </td>
                          <td className="px-4 py-3 text-gray-300 text-sm">{booking.bookingDate}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              booking.status === 'completed'
                                ? 'bg-green-500/20 text-green-400'
                                : booking.status === 'pending'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
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

