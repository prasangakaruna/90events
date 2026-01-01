'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/contexts/TranslationContext';
import SeatMap from '@/components/SeatMap';

interface Event {
  id: string;
  date: string;
  dateNumber: string;
  month: string;
  year: string;
  title: string;
  location: string;
  soldPercentage: number;
  isTrending: boolean;
  earlyBirdDiscount: number;
  earlyBirdTime: string;
  currentPrice: number;
  originalPrice: number;
  venue: {
    name: string;
    address: string;
    capacity: string;
  };
  eventDetails: {
    doorsOpen: string;
    showStarts: string;
    description: string;
  };
}

const events: Event[] = [
  {
    id: '1',
    date: 'November 7, 2026',
    dateNumber: '7',
    month: 'NOV',
    year: '2026',
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'New York, NY',
    soldPercentage: 75,
    isTrending: true,
    earlyBirdDiscount: 11,
    earlyBirdTime: '283d 12h 34m',
    currentPrice: 64,
    originalPrice: 75,
    venue: {
      name: 'The Town Hall',
      address: '123 West 43rd Street, New York, NY 10036',
      capacity: '1,495 seats',
    },
    eventDetails: {
      doorsOpen: '7:00 PM',
      showStarts: '8:00 PM',
      description: 'Experience the ultimate EDM night with DJ Thunder at the iconic Madison Square.',
    },
  },
  {
    id: '2',
    date: 'November 14, 2026',
    dateNumber: '14',
    month: 'NOV',
    year: '2026',
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'TBA',
    soldPercentage: 0,
    isTrending: false,
    earlyBirdDiscount: 8,
    earlyBirdTime: '290d 12h 34m',
    currentPrice: 47,
    originalPrice: 55,
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
  },
  {
    id: '3',
    date: 'November 15, 2026',
    dateNumber: '15',
    month: 'NOV',
    year: '2026',
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'Chicago, IL',
    soldPercentage: 0,
    isTrending: false,
    earlyBirdDiscount: 7,
    earlyBirdTime: '291d 12h 34m',
    currentPrice: 38,
    originalPrice: 45,
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
  },
  {
    id: '4',
    date: 'November 22, 2026',
    dateNumber: '22',
    month: 'NOV',
    year: '2026',
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'Palo Alto, CA',
    soldPercentage: 0,
    isTrending: false,
    earlyBirdDiscount: 6,
    earlyBirdTime: '298d 12h 34m',
    currentPrice: 34,
    originalPrice: 40,
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
  },
  {
    id: '5',
    date: 'November 28, 2026',
    dateNumber: '28',
    month: 'NOV',
    year: '2026',
    title: 'Gercekler Acidir by Ilker Ayrik',
    location: 'TBA',
    soldPercentage: 0,
    isTrending: false,
    earlyBirdDiscount: 14,
    earlyBirdTime: '304d 12h 34m',
    currentPrice: 81,
    originalPrice: 95,
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
  },
];

export default function TicketsPage() {
  const { language, setLanguage } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<any[]>([]);
  const [viewMode, setViewMode] = useState<'map' | 'section'>('map');
  const [showExtras, setShowExtras] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<any[]>([]);
  const [merchandise, setMerchandise] = useState({
    tshirt: { quantity: 0, size: 'M', color: 'Black' },
    mug: { quantity: 0, style: 'Classic' }
  });
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<any>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: '',
    phone: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [countdown, setCountdown] = useState({
    days: 313,
    hours: 12,
    minutes: 34,
    seconds: 25,
  });

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

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
    setSelectedSeats([]);
  };

  const handleSeatSelect = (seats: any[]) => {
    setSelectedSeats(seats);
  };

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + (seat.price || 0), 0);
  const extrasPrice = selectedExtras.reduce((sum, extra) => {
    // Ticket Protection is per ticket, so multiply by number of seats
    if (extra.id === '1') {
      return sum + (extra.price || 0) * selectedSeats.length;
    }
    return sum + (extra.price || 0);
  }, 0);
  const subtotal = totalPrice + extrasPrice;
  const discount = appliedPromo ? (subtotal * (appliedPromo.discountPercent || 0) / 100) : 0;
  const afterDiscount = subtotal - discount;
  const fees = afterDiscount * 0.1;
  const grandTotal = afterDiscount + fees;

  const handleApplyPromo = () => {
    // Sample promo codes
    const promoCodes: { [key: string]: any } = {
      'SAVE10': { discountPercent: 10, name: '10% Off' },
      'WELCOME20': { discountPercent: 20, name: '20% Off' },
      'EARLYBIRD': { discountPercent: 15, name: '15% Off' },
    };

    const code = promoCode.toUpperCase().trim();
    if (promoCodes[code]) {
      setAppliedPromo({ code, ...promoCodes[code] });
    } else {
      alert('Invalid promo code');
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };

  // Available extras
  const availableExtras = [
    { 
      id: '1', 
      name: 'Ticket Protection', 
      price: 12.00, 
      description: 'Get a full refund if you cannot attend due to illness, emergency, or travel issues.',
      benefits: [
        '100% refund for covered cancellations',
        'Medical emergencies',
        'Travel delays or cancellations',
        'Immediate family emergencies'
      ]
    },
    { id: '2', name: 'VIP Parking', price: 25.00, description: 'Reserved parking spot near the venue entrance' },
    { id: '3', name: 'Program Booklet', price: 15.00, description: 'Exclusive event program with artist information' },
    { id: '4', name: 'Merchandise Pack', price: 45.00, description: 'Official event t-shirt and souvenir items' },
    { id: '5', name: 'Photo Package', price: 35.00, description: 'Professional photos with the performers' },
    { id: '6', name: 'Meet & Greet', price: 99.00, description: 'Exclusive meet and greet session with Ilker Ayrık' },
    { id: '7', name: 'Food & Beverage Voucher', price: 30.00, description: '$30 voucher for venue concessions' },
  ];

  const handleExtraToggle = (extra: any) => {
    setSelectedExtras((prev) => {
      const exists = prev.find((e) => e.id === extra.id);
      if (exists) {
        return prev.filter((e) => e.id !== extra.id);
      } else {
        return [...prev, extra];
      }
    });
  };

  const handleProceedToExtras = () => {
    if (selectedSeats.length > 0) {
      setShowExtras(true);
    }
  };

  const handleBackToSeats = () => {
    setShowExtras(false);
  };

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };

  const handleBackToExtras = () => {
    setShowCheckout(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Professional */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/img16346_orig.webp"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f0425f]/10 via-transparent to-[#ec4899]/10"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center max-w-7xl">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              NOVEMBER 2026
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">Get Your Tickets</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Secure your seats for the ultimate couples game show experience.
          </p>
        </div>
      </section>

      {/* Buy Tickets Section - Professional */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Buy Tickets */}
              <div className="flex-1">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-xs font-bold rounded-full shadow-lg shadow-[#f0425f]/30 uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Ticket Selection
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold">Buy Tickets</h2>
              </div>
              
              {/* Progress Indicator - Professional */}
              <div className="flex items-center gap-2 mb-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-800 shadow-lg">
                {/* Step 1: Select Show */}
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm transition-all ${
                    !selectedEvent 
                      ? 'bg-gradient-to-br from-white to-gray-200 text-gray-900 shadow-lg' 
                      : 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                  }`}>
                    {!selectedEvent ? (
                      '1'
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    )}
                </div>
                  <span className={`text-sm font-semibold ${!selectedEvent ? 'text-white' : 'text-gray-400'}`}>Select Show</span>
                </div>
                <div className={`flex-1 h-1 rounded-full ${selectedEvent ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gray-800'}`}></div>
                
                {/* Step 2: Choose Seats */}
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm transition-all ${
                    selectedEvent && !showExtras
                      ? 'bg-gradient-to-br from-white to-gray-200 text-gray-900 shadow-lg'
                      : showExtras
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                      : 'bg-gray-800 text-gray-500 border border-gray-700'
                  }`}>
                    {selectedEvent && !showExtras ? (
                      '2'
                    ) : showExtras ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    ) : (
                      '2'
                    )}
                </div>
                  <span className={`text-sm font-semibold ${selectedEvent && !showExtras ? 'text-white' : 'text-gray-400'}`}>Choose Seats</span>
                </div>
                <div className={`flex-1 h-1 rounded-full ${showExtras ? 'bg-gradient-to-r from-green-500 to-emerald-600' : selectedEvent ? 'bg-gray-800' : 'bg-gray-800'}`}></div>
                
                {/* Step 3: Add Extras */}
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm transition-all ${
                    showExtras && !showCheckout
                      ? 'bg-gradient-to-br from-white to-gray-200 text-gray-900 shadow-lg'
                      : showCheckout
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                      : selectedEvent
                      ? 'bg-gray-800 text-gray-500 border border-gray-700'
                      : 'bg-gray-800 text-gray-500 border border-gray-700'
                  }`}>
                    {showExtras && !showCheckout ? (
                      '3'
                    ) : showCheckout ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    ) : (
                      '3'
                    )}
                </div>
                  <span className={`text-sm font-semibold ${showExtras && !showCheckout ? 'text-white' : 'text-gray-400'}`}>Add Extras</span>
                </div>
                <div className={`flex-1 h-1 rounded-full ${showCheckout ? 'bg-gradient-to-r from-green-500 to-emerald-600' : showExtras ? 'bg-gray-800' : 'bg-gray-800'}`}></div>
                
                {/* Step 4: Checkout */}
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm transition-all ${
                    showCheckout
                      ? 'bg-gradient-to-br from-white to-gray-200 text-gray-900 shadow-lg'
                      : 'bg-gray-800 text-gray-500 border border-gray-700'
                  }`}>4</div>
                  <span className={`text-sm font-semibold ${showCheckout ? 'text-white' : 'text-gray-400'}`}>Checkout</span>
                </div>
              </div>

              {/* Show Starts In - Professional */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 mb-6 border border-gray-800 shadow-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#f0425f]/20 to-[#ec4899]/20 text-[#f0425f] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-[#f0425f] rounded-full animate-pulse"></span>
                  SHOW STARTS IN
                </div>
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="text-center flex-1">
                    <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent mb-2">{String(countdown.days).padStart(3, '0')}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">DAYS</div>
                  </div>
                  <div className="text-3xl font-bold text-[#f0425f]">:</div>
                  <div className="text-center flex-1">
                    <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent mb-2">{String(countdown.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">HOURS</div>
                  </div>
                  <div className="text-3xl font-bold text-[#f0425f]">:</div>
                  <div className="text-center flex-1">
                    <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent mb-2">{String(countdown.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">MINS</div>
                  </div>
                  <div className="text-3xl font-bold text-[#f0425f]">:</div>
                  <div className="text-center flex-1">
                    <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent mb-2">{String(countdown.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">SECS</div>
                  </div>
                </div>
              </div>

              {/* Info Stats - Professional */}
              <div className="space-y-2 text-sm text-gray-400 pb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p>9 people viewing this show</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#f0425f] rounded-full"></div>
                  <p>6 tickets sold in the last hour</p>
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-row gap-8">
            {/* Right Side - Content Area */}
            <div className="flex-1">
              {selectedEvent ? (
                showCheckout ? (
                  /* Checkout View */
                  <div className="flex flex-row gap-8">
                    {/* Left Side - Payment Form */}
                    <div className="flex-1">
                      {/* Selected Event Card - Professional */}
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 shadow-xl mb-6">
                        <div className="p-6">
                          <div className="flex flex-row gap-6 items-start">
                            {/* Date Square - Professional */}
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-lg">
                                <div className="text-3xl font-extrabold text-white">{selectedEvent.dateNumber}</div>
                                <div className="text-xs text-gray-400 font-semibold uppercase">{selectedEvent.month} {selectedEvent.year}</div>
                              </div>
                            </div>

                            {/* Event Info */}
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h3 className="text-xl font-bold mb-1">{selectedEvent.title}</h3>
                                  <p className="text-gray-400 text-sm">{selectedEvent.date}</p>
                                </div>
                                <button
                                  onClick={handleBackToExtras}
                                  className="px-4 py-2 text-[#f0425f] hover:bg-[#f0425f]/10 rounded-lg transition-all text-sm font-medium"
                                >
                                  Back to Extras
                                </button>
                              </div>
                              <div className="space-y-2 text-sm">
                                <p className="text-gray-300 font-medium">{selectedEvent.venue.name}</p>
                                <p className="text-gray-400">{selectedEvent.venue.address}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Details Form - Professional */}
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-white">Payment Details</h2>

                        <div className="space-y-6">
                          {/* Card Information */}
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Card Information</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                                <input
                                  type="text"
                                  value={paymentDetails.cardNumber}
                                  onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                                  placeholder="1234 5678 9012 3456"
                                  maxLength={19}
                                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                                  <input
                                    type="text"
                                    value={paymentDetails.expiryDate}
                                    onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value})}
                                    placeholder="MM/YY"
                                    maxLength={5}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
                                  <input
                                    type="text"
                                    value={paymentDetails.cvv}
                                    onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
                                    placeholder="123"
                                    maxLength={4}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Cardholder Name</label>
                                <input
                                  type="text"
                                  value={paymentDetails.cardholderName}
                                  onChange={(e) => setPaymentDetails({...paymentDetails, cardholderName: e.target.value})}
                                  placeholder="John Doe"
                                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                  type="email"
                                  value={paymentDetails.email}
                                  onChange={(e) => setPaymentDetails({...paymentDetails, email: e.target.value})}
                                  placeholder="your.email@example.com"
                                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                <input
                                  type="tel"
                                  value={paymentDetails.phone}
                                  onChange={(e) => setPaymentDetails({...paymentDetails, phone: e.target.value})}
                                  placeholder="+1 (555) 123-4567"
                                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Billing Address */}
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                                <input
                                  type="text"
                                  value={paymentDetails.billingAddress}
                                  onChange={(e) => setPaymentDetails({...paymentDetails, billingAddress: e.target.value})}
                                  placeholder="123 Main Street"
                                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
                                  <input
                                    type="text"
                                    value={paymentDetails.city}
                                    onChange={(e) => setPaymentDetails({...paymentDetails, city: e.target.value})}
                                    placeholder="New York"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-300 mb-2">State</label>
                                  <input
                                    type="text"
                                    value={paymentDetails.state}
                                    onChange={(e) => setPaymentDetails({...paymentDetails, state: e.target.value})}
                                    placeholder="NY"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">ZIP Code</label>
                                <input
                                  type="text"
                                  value={paymentDetails.zipCode}
                                  onChange={(e) => setPaymentDetails({...paymentDetails, zipCode: e.target.value})}
                                  placeholder="10001"
                                  maxLength={10}
                                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] focus:ring-2 focus:ring-[#f0425f]/20 transition-all"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Complete Purchase Button */}
                          <div className="pt-6 border-t border-gray-800">
                            <button className="w-full btn-gradient-lg text-lg">
                              Complete Purchase
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-3">
                              By completing your purchase, you agree to our Terms of Service and Privacy Policy
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Order Summary - Professional */}
                    <div className="w-80">
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 shadow-xl sticky top-24">
                        <h3 className="text-xl font-bold mb-6 text-white">Order Summary</h3>
                        <div className="space-y-4">
                          {/* Selected Seats */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Selected Seats</h4>
                            <div className="space-y-2">
                              {selectedSeats.map((seat, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">{seat.row}{seat.number} - {seat.section}</span>
                                  <span className="text-white font-medium">${seat.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Selected Extras */}
                          {selectedExtras.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-2">Extras</h4>
                              <div className="space-y-2">
                                {selectedExtras.map((extra) => {
                                  const extraPrice = extra.id === '1' ? extra.price * selectedSeats.length : extra.price;
                                  return (
                                    <div key={extra.id} className="flex items-center justify-between text-sm">
                                      <span className="text-gray-400">
                                        {extra.name}
                                        {extra.id === '1' && selectedSeats.length > 1 && (
                                          <span className="text-gray-500 text-xs ml-1">({selectedSeats.length} tickets)</span>
                                        )}
                                      </span>
                                      <span className="text-white font-medium">${extraPrice.toFixed(2)}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Totals */}
                          <div className="border-t border-gray-700 pt-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-400">Subtotal</span>
                              <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                            </div>
                            {appliedPromo && (
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400">Promo ({appliedPromo.code})</span>
                                <span className="text-green-400 font-medium">-${discount.toFixed(2)}</span>
                              </div>
                            )}
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-gray-400">Fees</span>
                              <span className="text-white">${fees.toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between text-lg font-bold pt-4 border-t border-gray-700">
                              <span>Total</span>
                              <span>${grandTotal.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : showExtras && selectedEvent ? (
                  /* Add Extras View */
                  <div className="flex flex-row gap-8">
                    {/* Left Side - Extras Selection */}
                    <div className="flex-1">
                      {/* Selected Event Card - Professional */}
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 shadow-xl mb-6">
                        <div className="p-6">
                          <div className="flex flex-row gap-6 items-start">
                            {/* Date Square - Professional */}
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-lg">
                                <div className="text-3xl font-extrabold text-white">{selectedEvent.dateNumber}</div>
                                <div className="text-xs text-gray-400 font-semibold uppercase">{selectedEvent.month} {selectedEvent.year}</div>
                              </div>
                            </div>

                            {/* Event Info */}
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h3 className="text-xl font-bold mb-1">{selectedEvent.title}</h3>
                                  <p className="text-gray-400 text-sm">{selectedEvent.date}</p>
                                </div>
                                <button
                                  onClick={handleBackToSeats}
                                  className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-base border border-white/40 hover:border-white/60"
                                >
                                  Back to Seats
                                </button>
                              </div>
                              <div className="space-y-2 text-sm">
                                <p className="text-gray-300 font-medium">{selectedEvent.venue.name}</p>
                                <p className="text-gray-400">{selectedEvent.venue.address}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Add Extras Section - Professional */}
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-white">Add Extras</h2>
                        <p className="text-gray-400 mb-6">Enhance your experience with these optional add-ons</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {availableExtras.map((extra) => {
                            const isSelected = selectedExtras.find((e) => e.id === extra.id);
                            return (
                              <div
                                key={extra.id}
                                onClick={() => handleExtraToggle(extra)}
                                className={`bg-gray-900/50 rounded-xl p-4 border-2 cursor-pointer transition-all ${
                                  isSelected
                                    ? 'border-[#f0425f] bg-gradient-to-br from-[#f0425f]/20 to-[#ec4899]/20 shadow-lg shadow-[#f0425f]/20'
                                    : 'border-gray-800 hover:border-gray-700 hover:bg-gray-900/70'
                                }`}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-white mb-1">{extra.name}</h3>
                                    <p className="text-sm text-gray-400 mb-2">{extra.description}</p>
                                    {extra.benefits && (
                                      <ul className="text-xs text-gray-500 space-y-1 mt-2">
                                        {extra.benefits.map((benefit: string, idx: number) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <svg className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{benefit}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                  <div className="ml-4">
                                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                                      isSelected
                                        ? 'border-[#f0425f] bg-[#f0425f]'
                                        : 'border-gray-600'
                                    }`}>
                                      {isSelected && (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                  <span className="text-lg font-bold text-[#f0425f]">${extra.price.toFixed(2)} {extra.id === '1' && <span className="text-sm font-normal text-gray-400">per ticket</span>}</span>
                                  {extra.id === '1' && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleExtraToggle(extra);
                                      }}
                                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                                        isSelected
                                          ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white shadow-lg'
                                          : 'bg-transparent text-gray-300 hover:bg-white/10 border border-gray-700 hover:border-gray-600'
                                      }`}
                                    >
                                      {isSelected ? 'Remove Protection' : 'Add Protection'}
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-6">
                           <h2 className="text-2xl font-bold mb-6">Add To Cart</h2>
                           <p className="text-gray-400 mb-6">Add the selected extras to your cart and proceed to checkout.</p>
                           <div className="space-y-6">
                             {/* T-Shirt Options */}
                             <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                               <div className="flex items-start gap-6 mb-4">
                                 <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden flex-shrink-0">
                                   <Image
                                     src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
                                     alt="T-Shirt"
                                     fill
                                     className="object-cover"
                                   />
                                 </div>
                                 <div className="flex-1">
                                   <div className="flex items-start justify-between mb-2">
                                     <div>
                                       <h3 className="text-xl font-bold text-white mb-2">T-Shirt</h3>
                                       <p className="text-gray-400 text-sm mb-2">Official event t-shirt with exclusive design</p>
                                       <div className="text-[#f0425f] font-bold text-xl">$29.99</div>
                                     </div>
                                     <div className="w-6 h-6 rounded border-2 flex items-center justify-center border-gray-600 flex-shrink-0">
                                       {merchandise.tshirt.quantity > 0 && (
                                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                         </svg>
                                       )}
                                     </div>
                                   </div>
                                 </div>
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                 <div>
                                   <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
                                   <select
                                     value={merchandise.tshirt.size}
                                     onChange={(e) => setMerchandise(prev => ({
                                       ...prev,
                                       tshirt: { ...prev.tshirt, size: e.target.value }
                                     }))}
                                     className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#f0425f]"
                                   >
                                     <option value="S">Small (S)</option>
                                     <option value="M">Medium (M)</option>
                                     <option value="L">Large (L)</option>
                                     <option value="XL">Extra Large (XL)</option>
                                     <option value="XXL">2X Large (XXL)</option>
                                   </select>
                                 </div>
                                 <div>
                                   <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
                                   <select
                                     value={merchandise.tshirt.color}
                                     onChange={(e) => setMerchandise(prev => ({
                                       ...prev,
                                       tshirt: { ...prev.tshirt, color: e.target.value }
                                     }))}
                                     className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#f0425f]"
                                   >
                                     <option value="Black">Black</option>
                                     <option value="White">White</option>
                                     <option value="Red">Red</option>
                                     <option value="Navy">Navy</option>
                                   </select>
                                 </div>
                               </div>
                               <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                   <button
                                     onClick={() => setMerchandise(prev => ({
                                       ...prev,
                                       tshirt: { ...prev.tshirt, quantity: Math.max(0, prev.tshirt.quantity - 1) }
                                     }))}
                                     className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                                   >
                                     -
                                   </button>
                                   <span className="text-white font-semibold w-12 text-center">{merchandise.tshirt.quantity}</span>
                                   <button
                                     onClick={() => setMerchandise(prev => ({
                                       ...prev,
                                       tshirt: { ...prev.tshirt, quantity: prev.tshirt.quantity + 1 }
                                     }))}
                                     className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                                   >
                                     +
                                   </button>
                                 </div>
                                 <button
                                   onClick={() => setMerchandise(prev => ({
                                     ...prev,
                                     tshirt: { ...prev.tshirt, quantity: prev.tshirt.quantity + 1 }
                                   }))}
                                   className="px-6 py-2 border-2 border-red-500 text-white rounded-lg hover:bg-red-500 transition-colors text-sm font-semibold"
                                 >
                                   Add to Cart
                                 </button>
                               </div>
                             </div>

                             {/* Mug Options */}
                             <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                               <div className="flex items-start gap-6 mb-4">
                                 <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden flex-shrink-0">
                                   <Image
                                     src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop"
                                     alt="Mug"
                                     fill
                                     className="object-cover"
                                   />
                                 </div>
                                 <div className="flex-1">
                                   <div className="flex items-start justify-between mb-2">
                                     <div>
                                       <h3 className="text-xl font-bold text-white mb-2">Mug</h3>
                                       <p className="text-gray-400 text-sm mb-2">Collectible coffee mug with event branding</p>
                                       <div className="text-[#f0425f] font-bold text-xl">$14.99</div>
                                     </div>
                                     <div className="w-6 h-6 rounded border-2 flex items-center justify-center border-gray-600 flex-shrink-0">
                                       {merchandise.mug.quantity > 0 && (
                                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                         </svg>
                                       )}
                                     </div>
                                   </div>
                                 </div>
                               </div>
                               <div className="mb-4">
                                 <label className="block text-sm font-medium text-gray-300 mb-2">Style</label>
                                 <select
                                   value={merchandise.mug.style}
                                   onChange={(e) => setMerchandise(prev => ({
                                     ...prev,
                                     mug: { ...prev.mug, style: e.target.value }
                                   }))}
                                   className="w-full md:w-1/2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#f0425f]"
                                 >
                                   <option value="Classic">Classic</option>
                                   <option value="Travel">Travel Mug</option>
                                   <option value="Ceramic">Ceramic</option>
                                   <option value="Stainless Steel">Stainless Steel</option>
                                 </select>
                               </div>
                               <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                   <button
                                     onClick={() => setMerchandise(prev => ({
                                       ...prev,
                                       mug: { ...prev.mug, quantity: Math.max(0, prev.mug.quantity - 1) }
                                     }))}
                                     className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                                   >
                                     -
                                   </button>
                                   <span className="text-white font-semibold w-12 text-center">{merchandise.mug.quantity}</span>
                                   <button
                                     onClick={() => setMerchandise(prev => ({
                                       ...prev,
                                       mug: { ...prev.mug, quantity: prev.mug.quantity + 1 }
                                     }))}
                                     className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                                   >
                                     +
                                   </button>
                                 </div>
                                 <button
                                   onClick={() => setMerchandise(prev => ({
                                     ...prev,
                                     mug: { ...prev.mug, quantity: prev.mug.quantity + 1 }
                                   }))}
                                   className="px-6 py-2 border-2 border-red-500 text-white rounded-lg hover:bg-red-500 transition-colors text-sm font-semibold"
                                 >
                                   Add to Cart
                                 </button>
                               </div>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Order Summary - Professional */}
                    <div className="w-80">
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 shadow-xl sticky top-24">
                        <h3 className="text-xl font-bold mb-6 text-white">Order Summary</h3>
                        <div className="space-y-4">
                          {/* Selected Seats */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Selected Seats</h4>
                            <div className="space-y-2">
                              {selectedSeats.map((seat, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">{seat.row}{seat.number} - {seat.section}</span>
                                  <span className="text-white font-medium">${seat.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Selected Extras */}
                          {selectedExtras.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-2">Extras</h4>
                              <div className="space-y-2">
                                {selectedExtras.map((extra) => {
                                  const extraPrice = extra.id === '1' ? extra.price * selectedSeats.length : extra.price;
                                  return (
                                    <div key={extra.id} className="flex items-center justify-between text-sm">
                                      <span className="text-gray-400">
                                        {extra.name}
                                        {extra.id === '1' && selectedSeats.length > 1 && (
                                          <span className="text-gray-500 text-xs ml-1">({selectedSeats.length} tickets)</span>
                                        )}
                                      </span>
                                      <span className="text-white font-medium">${extraPrice.toFixed(2)}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Totals */}
                          <div className="border-t border-gray-700 pt-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-400">Subtotal</span>
                              <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                            </div>
                            {appliedPromo && (
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400">Promo ({appliedPromo.code})</span>
                                <span className="text-green-400 font-medium">-${discount.toFixed(2)}</span>
                              </div>
                            )}
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-gray-400">Fees</span>
                              <span className="text-white">${fees.toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between text-lg font-bold pt-4 border-t border-gray-700">
                              <span>Total</span>
                              <span>${grandTotal.toFixed(2)}</span>
                            </div>
                          </div>
                          
                          {/* Promotion Code Field */}
                          <div className="mb-4">
                            {appliedPromo ? (
                              <div className="bg-green-900/30 border border-green-600 rounded-lg p-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <div>
                                    <p className="text-sm text-green-400 font-medium">{appliedPromo.name} Applied</p>
                                    <p className="text-xs text-gray-400">Code: {appliedPromo.code}</p>
                                  </div>
                                </div>
                                <button
                                  onClick={handleRemovePromo}
                                  className="text-gray-400 hover:text-white transition-colors"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            ) : (
                              <div className="flex gap-2 items-center">
                                <input
                                  type="text"
                                  value={promoCode}
                                  onChange={(e) => setPromoCode(e.target.value)}
                                  onKeyPress={(e) => e.key === 'Enter' && handleApplyPromo()}
                                  placeholder="Enter promo code"
                                  className="w-48 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0425f] transition-colors"
                                />
                                <button
                                  onClick={handleApplyPromo}
                                  disabled={!promoCode.trim()}
                                  className="px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] disabled:from-gray-800 disabled:to-gray-800 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:transform-none font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60 disabled:shadow-none whitespace-nowrap"
                                >
                                  Apply
                                </button>
                              </div>
                            )}
                          </div>

                          <button
                            onClick={handleProceedToCheckout}
                            className="w-full px-6 py-3.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-full hover:from-[#d63852] hover:to-[#db2777] transition-all duration-300 transform hover:scale-105 font-semibold text-base shadow-2xl hover:shadow-[#f0425f]/60"
                          >
                            Proceed to Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Seat Selection View */
                  <div className="flex flex-row gap-8">
                  {/* Left Side - Seat Selection */}
                  <div className="flex-1">
                    {/* Selected Event Card - Professional */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 shadow-xl mb-6">
                      <div className="p-6">
                        <div className="flex flex-row gap-6 items-start">
                          {/* Date Square - Professional */}
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex flex-col items-center justify-center border border-gray-700 shadow-lg">
                              <div className="text-3xl font-extrabold text-white">{selectedEvent.dateNumber}</div>
                              <div className="text-xs text-gray-400 font-semibold uppercase">{selectedEvent.month} {selectedEvent.year}</div>
                            </div>
                          </div>

                          {/* Event Info */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold mb-1 text-white">{selectedEvent.title}</h3>
                                <p className="text-gray-400 text-sm">{selectedEvent.date}</p>
                              </div>
                              <button
                                onClick={() => setSelectedEvent(null)}
                                className="btn-secondary text-sm"
                              >
                                Change
                              </button>
                            </div>
                            <div className="space-y-2 text-sm">
                              <p className="text-gray-300 font-medium">{selectedEvent.venue.name}</p>
                              <p className="text-gray-400">{selectedEvent.venue.address}</p>
                              <div className="flex gap-4 mt-2">
                                <span className="text-gray-400">Show Starts: {selectedEvent.eventDetails.showStarts}</span>
                                <span className="text-gray-400">Doors Open: {selectedEvent.eventDetails.doorsOpen}</span>
                              </div>
                              <button className="text-[#f0425f] hover:underline text-sm mt-2">View on Map</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Select Your Tickets Section - Professional */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 mb-6 border border-gray-800 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-300">Available</span>
                            <span className="text-sm text-gray-400">1580 seats left</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">16 people viewing</span>
                          </div>
                        </div>
                      </div>

                      {/* View Mode Tabs - Professional */}
                      <div className="flex gap-2 mb-6">
                        <button
                          onClick={() => setViewMode('map')}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            viewMode === 'map'
                              ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white shadow-lg shadow-[#f0425f]/30'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                          }`}
                        >
                          Seat Map View
                        </button>
                        <button
                          onClick={() => setViewMode('section')}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            viewMode === 'section'
                              ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white shadow-lg shadow-[#f0425f]/30'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                          }`}
                        >
                          Section View
                        </button>
                      </div>

                      {/* Seat Map - Professional */}
                      {viewMode === 'map' && (
                        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 shadow-inner">
                          <SeatMap onSeatSelect={handleSeatSelect} initialSeats={selectedSeats} />
                        </div>
                      )}

                      {/* Price Tiers Legend - Professional */}
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                          <h4 className="text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Price Tiers</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-blue-900 rounded"></div>
                              <span className="text-gray-400">$248.76 VIP</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-blue-600 rounded"></div>
                              <span className="text-gray-400">$191.70 Premium</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-blue-800 rounded"></div>
                              <span className="text-gray-400">$131.23 Standard</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-green-600 rounded"></div>
                              <span className="text-gray-400">$96.99 Accessible</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-orange-500 rounded"></div>
                              <span className="text-gray-400">$93.57 General</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                          <h4 className="text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Seat Status</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-blue-600 rounded border border-blue-500"></div>
                              <span className="text-gray-400">Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-gray-600 rounded"></div>
                              <span className="text-gray-400">Sold</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-green-500 rounded"></div>
                              <span className="text-gray-400">Selected</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                              <span className="text-gray-400">Accessible</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* View Prizes Button */}
                      <div className="mt-6">
                        <Link
                          href="/prizes"
                          className="btn-primary-lg inline-flex items-center gap-2"
                        >
                          View Prizes
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Order Summary - Professional */}
                  <div className="w-80">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 shadow-xl sticky top-24">
                      <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                      {selectedSeats.length > 0 ? (
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Selected Seats</h4>
                            <div className="space-y-2">
                              {selectedSeats.map((seat, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">{seat.row}{seat.number} - {seat.section}</span>
                                  <span className="text-white font-medium">${seat.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="border-t border-gray-700 pt-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-400">Subtotal</span>
                              <span className="text-white font-bold">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-gray-400">Fees</span>
                              <span className="text-white">${(totalPrice * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between text-lg font-bold pt-4 border-t border-gray-700">
                              <span>Total</span>
                              <span>${(totalPrice * 1.1).toFixed(2)}</span>
                            </div>
                          </div>
                          <button
                            onClick={handleProceedToExtras}
                            disabled={selectedSeats.length === 0}
                            className="w-full btn-gradient-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Add Extras
                          </button>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-400 text-sm">No seats selected</p>
                          <p className="text-gray-500 text-xs mt-2">Click on seats in the map to select them</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                )
              ) : (
                /* Event Selection View - Professional & Compact */
                <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-[#f0425f]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f0425f]/10"
                >
                  {/* Early Bird Banner - Compact */}
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-1.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-bold">Early Bird - Save ${event.earlyBirdDiscount} per ticket</span>
                    </div>
                    <div className="text-white/95 font-medium">{event.earlyBirdTime}</div>
                  </div>

                  <div className="p-4">
                    <div className="flex flex-row gap-4">
                      {/* Date Square - Compact */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex flex-col items-center justify-center border border-gray-700 shadow-md">
                          <div className="text-2xl font-extrabold text-white">{event.dateNumber}</div>
                          <div className="text-[10px] text-gray-400 font-semibold uppercase leading-tight">{event.month} {event.year}</div>
                        </div>
                      </div>

                      {/* Main Content - Compact */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-white">{event.title}</h3>
                          {event.soldPercentage > 0 && (
                            <span className="px-2 py-0.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-[10px] font-bold rounded-full shadow-md">
                              {event.soldPercentage}% sold
                            </span>
                          )}
                          {event.isTrending && (
                            <span className="px-2 py-0.5 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white text-[10px] font-bold rounded-full shadow-md flex items-center gap-1">
                              <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
                              Trending
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{event.location}</p>

                        {/* Price and Button - Compact */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-xl font-extrabold text-white">From ${event.currentPrice}</div>
                            <div className="text-xs text-gray-500 line-through">${event.originalPrice}</div>
                          </div>
                          <button
                            onClick={() => handleEventSelect(event)}
                            className="btn-gradient-lg flex items-center gap-2 text-sm px-4 py-2"
                          >
                            Select Seats
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </button>
                        </div>

                        {/* Compact Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-gray-800">
                          {/* Venue Information - Compact */}
                          <div>
                            <h4 className="font-bold mb-1.5 text-gray-300 text-xs uppercase tracking-wider">Venue</h4>
                            <p className="text-gray-300 text-sm font-medium mb-1">{event.venue.name}</p>
                            <p className="text-xs text-gray-400 mb-1">{event.venue.address}</p>
                            <p className="text-xs text-gray-500 mb-2">Capacity: {event.venue.capacity}</p>
                            <div className="flex gap-3 text-xs">
                              <button className="text-[#f0425f] hover:underline font-medium">View Map</button>
                              <button className="text-[#f0425f] hover:underline font-medium">Directions</button>
                            </div>
                          </div>

                          {/* Event Details - Compact */}
                          <div>
                            <h4 className="font-bold mb-1.5 text-gray-300 text-xs uppercase tracking-wider">Event Details</h4>
                            <div className="space-y-1 text-xs text-gray-400 mb-2">
                              <p>Doors: <span className="text-gray-300 font-medium">{event.eventDetails.doorsOpen}</span></p>
                              <p>Show: <span className="text-gray-300 font-medium">{event.eventDetails.showStarts}</span></p>
                            </div>
                            <p className="text-xs text-gray-400 line-clamp-2">{event.eventDetails.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

