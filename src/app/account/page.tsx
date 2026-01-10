'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Ticket {
  id: string;
  orderId: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  location: string;
  venue: string;
  tickets: Array<{
    type: string;
    quantity: number;
    price: number;
    section?: string;
    row?: string;
    seat?: string;
  }>;
  extras?: Array<{
    name: string;
    price: number;
  }>;
  subtotal: number;
  fees: number;
  total: number;
  purchaseDate: string;
  status: 'confirmed' | 'cancelled' | 'refunded';
}

export default function AccountPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load tickets from localStorage
    const savedTickets = localStorage.getItem('userTickets');
    if (savedTickets) {
      try {
        const parsedTickets = JSON.parse(savedTickets);
        setTickets(parsedTickets);
      } catch (e) {
        console.error('Error loading tickets', e);
      }
    }
    setLoading(false);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f0425f] mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your tickets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center" style={{ marginTop: 0 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/98 to-black/95"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-red-600/20 to-transparent blur-3xl animate-pulse-glow"></div>
          
          <div className="absolute inset-0 opacity-50">
            <Image
              src="/img/baneer.jpg"
              alt="Hero banner"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              priority
              quality={95}
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            My Account
          </div>
          <h1 className="mb-6">My Tickets</h1>
          <p className="body-text-lg text-gray-300 max-w-2xl mx-auto">
            View and manage all your ticket purchases and upcoming events
          </p>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {tickets.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">No Tickets Yet</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                You haven't purchased any tickets yet. Browse our events and secure your spot!
              </p>
              <Link
                href="/tickets"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60"
              >
                <span>Browse Events</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-[#f0425f]/50 transition-all shadow-xl"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-gray-800">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-white">{ticket.eventName}</h2>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            ticket.status === 'confirmed'
                              ? 'bg-green-500/20 text-green-400'
                              : ticket.status === 'cancelled'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {ticket.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{ticket.eventDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{ticket.eventTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{ticket.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-xs text-gray-500 mb-1">Order ID</div>
                      <div className="text-sm font-mono text-gray-400">{ticket.orderId}</div>
                      <div className="text-xs text-gray-500 mt-2">Purchased</div>
                      <div className="text-sm text-gray-400">{formatDateTime(ticket.purchaseDate)}</div>
                    </div>
                  </div>

                  {/* Tickets Details */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-4 text-white">Ticket Details</h3>
                    <div className="space-y-3">
                      {ticket.tickets.map((t, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="font-semibold text-white mb-1">{t.type}</div>
                              <div className="text-sm text-gray-400">
                                Quantity: {t.quantity}
                                {t.section && ` • Section: ${t.section}`}
                                {t.row && ` • Row: ${t.row}`}
                                {t.seat && ` • Seat: ${t.seat}`}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-[#f0425f]">
                                ${(t.price * t.quantity).toFixed(2)}
                              </div>
                              <div className="text-xs text-gray-500">${t.price.toFixed(2)} each</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Extras */}
                  {ticket.extras && ticket.extras.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-4 text-white">Extras</h3>
                      <div className="space-y-2">
                        {ticket.extras.map((extra, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between text-sm bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                          >
                            <span className="text-gray-300">{extra.name}</span>
                            <span className="text-white font-semibold">${extra.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Order Summary */}
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-lg font-bold mb-4 text-white">Order Summary</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span className="text-white">${ticket.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Fees</span>
                        <span className="text-white">${ticket.fees.toFixed(2)}</span>
                      </div>
                      <div className="pt-3 border-t border-gray-700 flex justify-between text-xl font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-[#f0425f]">${ticket.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold">
                      Download Tickets
                    </button>
                    <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all font-semibold border border-gray-700">
                      View QR Code
                    </button>
                    <Link
                      href={`/events/${ticket.id}`}
                      className="px-6 py-3 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all font-semibold border border-gray-700"
                    >
                      View Event Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
