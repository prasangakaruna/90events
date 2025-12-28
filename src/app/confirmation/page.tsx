'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');
  const orderId = searchParams.get('orderId');

  // Mock order data
  const orderData = {
    orderId: orderId || 'ORD-123456',
    eventName: 'Summer Music Festival 2024',
    eventDate: 'July 15, 2024',
    eventTime: '6:00 PM',
    location: 'Central Park, New York',
    tickets: [
      { type: 'General Admission', quantity: 2, price: 49 },
      { type: 'VIP Pass', quantity: 1, price: 149 },
    ],
    total: 347.00,
    customerEmail: 'customer@example.com',
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-[#f0425f] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-gray-400 text-lg">
              Thank you for your purchase. Your tickets are confirmed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
            <div className="mb-6 pb-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Order Details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Order ID</span>
                  <span className="font-semibold text-white">{orderData.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Event</span>
                  <span className="font-semibold text-white">{orderData.eventName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date & Time</span>
                  <span className="font-semibold text-white">{orderData.eventDate} at {orderData.eventTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="font-semibold text-white">{orderData.location}</span>
                </div>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-800">
              <h3 className="text-xl font-bold mb-4">Tickets</h3>
              <div className="space-y-3">
                {orderData.tickets.map((ticket, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-white">{ticket.type}</p>
                      <p className="text-sm text-gray-400">Quantity: {ticket.quantity}</p>
                    </div>
                    <p className="text-[#f0425f] font-semibold">
                      ${(ticket.price * ticket.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-xl">
              <span className="font-bold">Total</span>
              <span className="font-bold text-[#f0425f]">${orderData.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>📧</span>
              What's Next?
            </h3>
            <p className="text-gray-300 mb-4">
              A confirmation email has been sent to <span className="text-white font-semibold">{orderData.customerEmail}</span> with your ticket details and QR codes.
            </p>
            <p className="text-gray-300">
              Please bring a valid ID and your confirmation email (or QR code) to the event. Tickets will be available for download 24 hours before the event.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/events"
              className="flex-1 px-6 py-3 border-2 border-gray-800 text-white rounded-lg hover:border-gray-700 transition-colors text-center font-semibold"
            >
              Browse More Events
            </Link>
            <Link
              href="/"
              className="flex-1 px-6 py-3 bg-[#f0425f] text-white rounded-lg hover:bg-[#d63852] transition-colors text-center font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f0425f] mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}

