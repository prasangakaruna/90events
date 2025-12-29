'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

// Event data matching the image description
const events = [
  {
    id: '1',
    date: { day: 7, month: 'NOV', year: 2026 },
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'New York, NY',
    venue: {
      name: 'The Town Hall',
      address: '123 West 43rd Street, New York, NY 10036',
      capacity: '1,495 seats',
    },
    eventDetails: {
      doorsOpen: '7:00 PM',
      showStarts: '8:00 PM',
      description: 'Experience the ultimate EDM night with DJ Thunder at the iconic Madison Square...',
    },
    pricing: {
      from: 64,
      original: 75,
      save: 11,
    },
    status: {
      sold: '75% sold',
      trending: true,
    },
    earlyBird: {
      active: true,
      save: 11,
      timeLeft: { days: 283, hours: 12, minutes: 34 },
    },
  },
  {
    id: '2',
    date: { day: 14, month: 'NOV', year: 2026 },
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'TBA',
    venue: {
      name: 'TBA',
      address: 'TBA',
      capacity: 'TBA',
    },
    eventDetails: {
      doorsOpen: '7:00 PM',
      showStarts: '8:00 PM',
      description: 'A smooth evening of R&B classics and new hits under the LA stars.',
    },
    pricing: {
      from: 47,
      original: 55,
      save: 8,
    },
    status: {
      sold: '60% sold',
      trending: false,
    },
    earlyBird: {
      active: true,
      save: 8,
      timeLeft: { days: 290, hours: 12, minutes: 34 },
    },
  },
  {
    id: '3',
    date: { day: 15, month: 'NOV', year: 2026 },
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'Chicago, IL',
    venue: {
      name: 'Copernicus Center',
      address: '5216 W Lawrence Avenue, Chicago, IL 60630',
      capacity: '1,852 seats',
    },
    eventDetails: {
      doorsOpen: '7:00 PM',
      showStarts: '8:00 PM',
      description: 'Hot Latin rhythms and dancing all night long!',
    },
    pricing: {
      from: 38,
      original: 45,
      save: 7,
    },
    status: {
      sold: '50% sold',
      trending: false,
    },
    earlyBird: {
      active: true,
      save: 7,
      timeLeft: { days: 291, hours: 12, minutes: 34 },
    },
  },
  {
    id: '4',
    date: { day: 22, month: 'NOV', year: 2026 },
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'Palo Alto, CA',
    venue: {
      name: 'Spangenberg Theater',
      address: '780 Arastradero Road, Palo Alto, CA 94306',
      capacity: '925 seats',
    },
    eventDetails: {
      doorsOpen: '7:00 PM',
      showStarts: '8:00 PM',
      description: 'An immersive electronic experience that will transport you to another world.',
    },
    pricing: {
      from: 34,
      original: 40,
      save: 6,
    },
    status: {
      sold: '45% sold',
      trending: false,
    },
    earlyBird: {
      active: true,
      save: 6,
      timeLeft: { days: 298, hours: 12, minutes: 34 },
    },
  },
  {
    id: '5',
    date: { day: 28, month: 'NOV', year: 2026 },
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'TBA',
    venue: {
      name: 'TBA',
      address: 'TBA',
      capacity: 'TBA',
    },
    eventDetails: {
      doorsOpen: '7:00 PM',
      showStarts: '8:00 PM',
      description: 'The biggest summer EDM festival featuring DJ Thunder and special guests!',
    },
    pricing: {
      from: 81,
      original: 95,
      save: 14,
    },
    status: {
      sold: '80% sold',
      trending: true,
    },
    earlyBird: {
      active: true,
      save: 14,
      timeLeft: { days: 304, hours: 12, minutes: 34 },
    },
  },
];

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { language, setLanguage } = useTranslation();
  const [countdown, setCountdown] = useState({ days: 313, hours: 12, minutes: 34, seconds: 25 });
  const [viewers, setViewers] = useState(9);
  const [ticketsSold, setTicketsSold] = useState(6);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate activity indicators
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 10000);
    const ticketInterval = setInterval(() => {
      setTicketsSold((prev) => prev + Math.floor(Math.random() * 2));
    }, 15000);
    return () => {
      clearInterval(viewerInterval);
      clearInterval(ticketInterval);
    };
  }, []);

  const selectedEvent = events.find((e) => e.id === params.id) || events[0];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=1080&fit=crop"
            alt="Event stage"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              onClick={() => setLanguage('en')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                language === 'en'
                  ? 'bg-[#f0425f] text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('tr')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                language === 'tr'
                  ? 'bg-[#f0425f] text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Türkçe
            </button>
          </div>

          {/* Date */}
          <p className="text-lg md:text-xl text-gray-300 mb-4 font-medium tracking-wider">
            NOVEMBER 2026
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Get Your Tickets
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Secure your seats for the ultimate couples game show experience
          </p>
        </div>
      </section>

      {/* Buy Tickets Section */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#f0425f]"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
            <path d="M13 5v2"></path>
            <path d="M13 17v2"></path>
            <path d="M13 11v2"></path>
          </svg>
          <h2 className="text-3xl md:text-4xl font-bold">Buy Tickets</h2>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl">
            {[
              { step: 1, label: 'Select Show' },
              { step: 2, label: 'Choose Seats' },
              { step: 3, label: 'Add Extras' },
              { step: 4, label: 'Checkout' },
            ].map((item, index, array) => (
              <div key={item.step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
                      item.step === 1
                        ? 'bg-[#f0425f] text-white border-[#f0425f]'
                        : 'bg-transparent text-gray-400 border-gray-600'
                    }`}
                  >
                    {item.step}
                  </div>
                  <span
                    className={`text-sm mt-2 ${
                      item.step === 1 ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                {index < array.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      item.step === 1 ? 'bg-gray-600' : 'bg-gray-800'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Countdown Timer & Activity Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Countdown Timer */}
          <div className="md:col-span-2 bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
              SHOW STARTS IN
            </p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {String(countdown.days).padStart(3, '0')}
                </div>
                <div className="text-xs text-gray-400 uppercase">Days</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-600">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {String(countdown.hours).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-400 uppercase">Hours</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-600">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {String(countdown.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-400 uppercase">Mins</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-600">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {String(countdown.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-400 uppercase">Secs</div>
              </div>
            </div>
          </div>

          {/* Activity Indicators */}
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#f0425f]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="text-white text-sm">
                {viewers} people viewing this show
              </span>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#f0425f]"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
              </svg>
              <span className="text-white text-sm">
                {ticketsSold} tickets sold in the last hour
              </span>
            </div>
          </div>
        </div>

        {/* Event Listings */}
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden"
            >
              {/* Early Bird Banner */}
              {event.earlyBird.active && (
                <div className="bg-green-600 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">
                      Early Bird - Save ${event.earlyBird.save} per ticket
                    </span>
                  </div>
                  <div className="text-white text-sm">
                    Early Bird Save ${event.earlyBird.save}{' '}
                    {event.earlyBird.timeLeft.days}d {event.earlyBird.timeLeft.hours}h{' '}
                    {event.earlyBird.timeLeft.minutes}m
                  </div>
                </div>
              )}

              {/* Event Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Date Card & Performer */}
                  <div className="lg:col-span-3 flex flex-col md:flex-row lg:flex-col gap-4">
                    {/* Date Card */}
                    <div className="bg-gray-800 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center border border-gray-700">
                      <div className="text-4xl font-bold text-white">
                        {event.date.day}
                      </div>
                      <div className="text-sm text-gray-400 uppercase">
                        {event.date.month}
                      </div>
                      <div className="text-xs text-gray-500">{event.date.year}</div>
                    </div>

                    {/* Performer Image */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#f0425f] flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                        alt="Ilker Ayrik"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Middle: Event Info */}
                  <div className="lg:col-span-6 space-y-4">
                    {/* Title & Status */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="text-[#f0425f] font-semibold">
                          {event.status.sold}
                        </span>
                        {event.status.trending && (
                          <span className="text-[#f0425f] font-semibold flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                              <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                            Trending
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <p className="text-gray-300 font-medium">{event.location}</p>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">
                        From ${event.pricing.from}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${event.pricing.original}
                      </span>
                    </div>

                    {/* Select Seats Button */}
                    <Link
                      href={`/events/${event.id}/seats`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold"
                    >
                      Select Seats
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>

                  {/* Right: Venue & Event Details */}
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                    {/* Venue Information */}
                    <div>
                      <h4 className="text-white font-bold mb-3">Venue Information</h4>
                      <p className="text-gray-300 font-medium mb-2">{event.venue.name}</p>
                      <p className="text-gray-400 text-sm mb-2">{event.venue.address}</p>
                      <p className="text-gray-400 text-sm mb-4">
                        Capacity: {event.venue.capacity}
                      </p>
                      <div className="flex flex-col gap-2">
                        <button className="text-[#f0425f] text-sm font-medium hover:underline flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          View on Map
                        </button>
                        <button className="text-[#f0425f] text-sm font-medium hover:underline flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                          Get Directions
                        </button>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div>
                      <h4 className="text-white font-bold mb-3">Event Details</h4>
                      <p className="text-gray-300 text-sm mb-1">
                        Doors Open: {event.eventDetails.doorsOpen}
                      </p>
                      <p className="text-gray-300 text-sm mb-3">
                        Show Starts: {event.eventDetails.showStarts}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {event.eventDetails.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
