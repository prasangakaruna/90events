'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TicketSelector from '@/components/TicketSelector';
import SeatMap from '@/components/SeatMap';

// Mock event data - in a real app, this would come from an API
const getEventData = (id: string) => {
  const events: { [key: string]: any } = {
    '1': {
      id: '1',
      title: 'İlker Ayrık - Gerçekler Acıdır Stand-Up Show',
      date: '15 Mart 2025',
      time: '20:00',
      location: 'Zorlu PSM, İstanbul',
      address: 'Zorlu Center, Beşiktaş, İstanbul',
      description: 'Türkiye\'nin en sevilen komedyenlerinden İlker Ayrık, "Gerçekler Acıdır" stand-up gösterisiyle İstanbul\'da!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık İstanbul'da! 

Türkiye'nin en sevilen komedyenlerinden biri olan İlker Ayrık, günlük hayatımızdaki komik gerçekleri, toplumsal olayları ve yaşadığımız absürt durumları kendine özgü mizahi diliyle anlatıyor. 

Bu gösteride İlker Ayrık, hayatın acı gerçeklerini komediye dönüştürerek izleyicileri kahkahaya boğacak. Unutulmaz bir akşam için biletlerinizi kaçırmayın!

Not: Gösteri 18 yaş altı izleyiciler için uygun değildir.`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        {
          id: 'general',
          name: 'Genel Giriş',
          price: 250,
          available: 800,
          description: 'Genel koltuk alanı erişimi',
        },
        {
          id: 'vip',
          name: 'VIP Bölüm',
          price: 450,
          available: 150,
          description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı',
        },
        {
          id: 'premium',
          name: 'Premium VIP',
          price: 750,
          available: 50,
          description: 'En ön sıralar, özel lounge erişimi, içecek ikramı ve sanatçıyla fotoğraf fırsatı',
        },
      ],
    },
    '2': {
      id: '2',
      title: 'İlker Ayrık - Gerçekler Acıdır Ankara',
      date: '22 Mart 2025',
      time: '20:30',
      location: 'Ankara Arena, Ankara',
      address: 'Ankara Arena, Yenimahalle, Ankara',
      description: 'İlker Ayrık "Gerçekler Acıdır" stand-up gösterisiyle Ankara\'da!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık Ankara'da! 

Türkiye'nin en sevilen komedyenlerinden biri olan İlker Ayrık, günlük hayatımızdaki komik gerçekleri, toplumsal olayları ve yaşadığımız absürt durumları kendine özgü mizahi diliyle anlatıyor. 

Bu gösteride İlker Ayrık, hayatın acı gerçeklerini komediye dönüştürerek izleyicileri kahkahaya boğacak. Unutulmaz bir akşam için biletlerinizi kaçırmayın!`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        {
          id: 'general',
          name: 'Genel Giriş',
          price: 200,
          available: 1000,
          description: 'Genel koltuk alanı erişimi',
        },
        {
          id: 'vip',
          name: 'VIP Bölüm',
          price: 400,
          available: 200,
          description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı',
        },
      ],
    },
    '3': {
      id: '3',
      title: 'İlker Ayrık - Gerçekler Acıdır İzmir',
      date: '29 Mart 2025',
      time: '21:00',
      location: 'İzmir Arena, İzmir',
      address: 'İzmir Arena, Konak, İzmir',
      description: 'İlker Ayrık "Gerçekler Acıdır" stand-up gösterisiyle İzmir\'de!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık İzmir'de! 

Türkiye'nin en sevilen komedyenlerinden biri olan İlker Ayrık, günlük hayatımızdaki komik gerçekleri, toplumsal olayları ve yaşadığımız absürt durumları kendine özgü mizahi diliyle anlatıyor.`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        { id: 'general', name: 'Genel Giriş', price: 220, available: 900, description: 'Genel koltuk alanı erişimi' },
        { id: 'vip', name: 'VIP Bölüm', price: 420, available: 180, description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı' },
      ],
    },
    '4': {
      id: '4',
      title: 'İlker Ayrık - Gerçekler Acıdır Bursa',
      date: '5 Nisan 2025',
      time: '20:00',
      location: 'Merinos Atatürk Kongre ve Kültür Merkezi, Bursa',
      address: 'Merinos Atatürk Kongre ve Kültür Merkezi, Nilüfer, Bursa',
      description: 'İlker Ayrık "Gerçekler Acıdır" stand-up gösterisiyle Bursa\'da!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık Bursa'da!`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        { id: 'general', name: 'Genel Giriş', price: 180, available: 700, description: 'Genel koltuk alanı erişimi' },
        { id: 'vip', name: 'VIP Bölüm', price: 350, available: 120, description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı' },
      ],
    },
    '5': {
      id: '5',
      title: 'İlker Ayrık - Gerçekler Acıdır Antalya',
      date: '12 Nisan 2025',
      time: '21:00',
      location: 'Antalya Expo Center, Antalya',
      address: 'Antalya Expo Center, Muratpaşa, Antalya',
      description: 'İlker Ayrık "Gerçekler Acıdır" stand-up gösterisiyle Antalya\'da!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık Antalya'da!`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        { id: 'general', name: 'Genel Giriş', price: 230, available: 850, description: 'Genel koltuk alanı erişimi' },
        { id: 'vip', name: 'VIP Bölüm', price: 440, available: 160, description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı' },
      ],
    },
    '6': {
      id: '6',
      title: 'İlker Ayrık - Gerçekler Acıdır Adana',
      date: '19 Nisan 2025',
      time: '20:30',
      location: 'Adana Büyükşehir Belediyesi Tiyatrosu, Adana',
      address: 'Adana Büyükşehir Belediyesi Tiyatrosu, Seyhan, Adana',
      description: 'İlker Ayrık "Gerçekler Acıdır" stand-up gösterisiyle Adana\'da!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık Adana'da!`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        { id: 'general', name: 'Genel Giriş', price: 190, available: 750, description: 'Genel koltuk alanı erişimi' },
        { id: 'vip', name: 'VIP Bölüm', price: 380, available: 140, description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı' },
      ],
    },
    '7': {
      id: '7',
      title: 'İlker Ayrık - Gerçekler Acıdır Gaziantep',
      date: '26 Nisan 2025',
      time: '20:00',
      location: 'Gaziantep Kültür Merkezi, Gaziantep',
      address: 'Gaziantep Kültür Merkezi, Şahinbey, Gaziantep',
      description: 'İlker Ayrık "Gerçekler Acıdır" stand-up gösterisiyle Gaziantep\'te!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık Gaziantep'te!`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        { id: 'general', name: 'Genel Giriş', price: 170, available: 650, description: 'Genel koltuk alanı erişimi' },
        { id: 'vip', name: 'VIP Bölüm', price: 330, available: 100, description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı' },
      ],
    },
    '8': {
      id: '8',
      title: 'İlker Ayrık - Gerçekler Acıdır Konya',
      date: '3 Mayıs 2025',
      time: '20:30',
      location: 'Konya Büyükşehir Belediyesi Kültür Merkezi, Konya',
      address: 'Konya Büyükşehir Belediyesi Kültür Merkezi, Selçuklu, Konya',
      description: 'İlker Ayrık "Gerçekler Acıdır" stand-up gösterisiyle Konya\'da!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık Konya'da!`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        { id: 'general', name: 'Genel Giriş', price: 175, available: 680, description: 'Genel koltuk alanı erişimi' },
        { id: 'vip', name: 'VIP Bölüm', price: 340, available: 110, description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı' },
      ],
    },
    '9': {
      id: '9',
      title: 'İlker Ayrık - Gerçekler Acıdır Trabzon',
      date: '10 Mayıs 2025',
      time: '21:00',
      location: 'Trabzon Atatürk Kültür Sarayı, Trabzon',
      address: 'Trabzon Atatürk Kültür Sarayı, Ortahisar, Trabzon',
      description: 'İlker Ayrık "Gerçekler Acıdır" stand-up gösterisiyle Trabzon\'da!',
      longDescription: `İlker Ayrık'ın efsanevi "Gerçekler Acıdır" stand-up gösterisi artık Trabzon'da!`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      category: 'Comedy',
      artist: 'İlker Ayrık',
      tickets: [
        { id: 'general', name: 'Genel Giriş', price: 185, available: 720, description: 'Genel koltuk alanı erişimi' },
        { id: 'vip', name: 'VIP Bölüm', price: 360, available: 130, description: 'VIP bölüm erişimi, özel oturma alanı ve içecek ikramı' },
      ],
    },
  };

  return events[id] || events['1'];
};

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [ticketSelection, setTicketSelection] = useState<{ [key: string]: number }>({});
  const [selectedSeats, setSelectedSeats] = useState<any[]>([]);
  const [viewMode, setViewMode] = useState<'tickets' | 'seats'>('tickets');
  const eventData = getEventData(params.id);

  const handleCheckout = () => {
    if (viewMode === 'seats') {
      // Check if seats are selected
      if (selectedSeats.length === 0) {
        alert('Lütfen en az bir koltuk seçin');
        return;
      }
      // Store seat selection in sessionStorage
      sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    } else {
      // Check if tickets are selected
      const totalTickets = Object.values(ticketSelection).reduce((sum, qty) => sum + qty, 0);
      if (totalTickets === 0) {
        alert('Lütfen en az bir bilet seçin');
        return;
      }
      // Store ticket selection in sessionStorage
      sessionStorage.setItem('ticketSelection', JSON.stringify(ticketSelection));
    }
    router.push(`/checkout?eventId=${params.id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={eventData.image}
          alt={eventData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <span className="inline-block px-4 py-2 bg-[#f0425f] text-white text-sm font-semibold rounded-full mb-4">
            {eventData.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{eventData.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* View Mode Toggle */}
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex gap-4">
              <button
                onClick={() => setViewMode('tickets')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'tickets'
                    ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                Ticket Types
              </button>
              <button
                onClick={() => setViewMode('seats')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'seats'
                    ? 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                Select Seats
              </button>
            </div>

            {/* Seat Map View */}
            {viewMode === 'seats' && (
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <SeatMap
                  onSeatSelect={(seats) => setSelectedSeats(seats)}
                  initialSeats={selectedSeats}
                />
              </div>
            )}
            {/* Event Info */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h2 className="text-3xl font-bold mb-6">Etkinlik Hakkında</h2>
              {eventData.artist && (
                <div className="mb-4">
                  <p className="text-[#f0425f] font-semibold text-lg">Sanatçı: {eventData.artist}</p>
                </div>
              )}
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {eventData.description}
              </p>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {eventData.longDescription}
              </p>
            </div>

            {/* Event Details */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Etkinlik Detayları</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📅</span>
                  <div>
                    <p className="font-semibold text-white">Tarih ve Saat</p>
                    <p className="text-gray-400">{eventData.date} • {eventData.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-white">Konum</p>
                    <p className="text-gray-400">{eventData.location}</p>
                    <p className="text-gray-500 text-sm">{eventData.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {viewMode === 'tickets' ? (
                <>
                  <TicketSelector
                    tickets={eventData.tickets}
                    onSelectionChange={(selection) => setTicketSelection(selection)}
                  />
                </>
              ) : (
                <div className="bg-gradient-to-br from-gray-900/98 to-black/98 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Selected Seats</h3>
                  {selectedSeats.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-3">🎫</div>
                      <p className="text-gray-400 text-sm mb-2">No seats selected yet</p>
                      <p className="text-gray-500 text-xs">Click on seats in the map to select them</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="max-h-64 overflow-y-auto space-y-2 pr-2">
                        {selectedSeats.map((seat) => (
                          <div
                            key={seat.id}
                            className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#f0425f] transition-colors"
                          >
                            <div>
                              <span className="font-semibold text-white">{seat.row}{seat.number}</span>
                              <span className="text-gray-400 text-sm ml-2">{seat.section}</span>
                            </div>
                            <span className="text-[#f0425f] font-semibold">₺{seat.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-700 pt-4 mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">Seats ({selectedSeats.length})</span>
                          <span className="text-sm text-gray-400">
                            ₺{selectedSeats.reduce((sum, seat) => sum + seat.price, 0).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                          <span className="text-lg font-bold text-white">Total</span>
                          <span className="text-2xl font-bold text-[#f0425f]">
                            ₺{selectedSeats.reduce((sum, seat) => sum + seat.price, 0).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <button
                onClick={handleCheckout}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all font-semibold text-lg shadow-lg hover:shadow-[#f0425f]/50 transform hover:scale-105"
              >
                {viewMode === 'seats' && selectedSeats.length > 0
                  ? `Proceed with ${selectedSeats.length} Seat${selectedSeats.length > 1 ? 's' : ''}`
                  : 'Ödemeye Geç'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

