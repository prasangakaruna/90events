import EventCard from '@/components/EventCard';

// Mock events data
const events = [
  {
    id: '1',
    title: 'İlker Ayrık - Gerçekler Acıdır Stand-Up Show',
    date: '15 Mart 2025 • 20:00',
    location: 'Zorlu PSM, İstanbul',
    price: '₺250\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
  {
    id: '2',
    title: 'İlker Ayrık - Gerçekler Acıdır Ankara',
    date: '22 Mart 2025 • 20:30',
    location: 'Ankara Arena, Ankara',
    price: '₺200\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
  {
    id: '3',
    title: 'İlker Ayrık - Gerçekler Acıdır İzmir',
    date: '29 Mart 2025 • 21:00',
    location: 'İzmir Arena, İzmir',
    price: '₺220\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
  {
    id: '4',
    title: 'İlker Ayrık - Gerçekler Acıdır Bursa',
    date: '5 Nisan 2025 • 20:00',
    location: 'Merinos Atatürk Kongre ve Kültür Merkezi, Bursa',
    price: '₺180\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
  {
    id: '5',
    title: 'İlker Ayrık - Gerçekler Acıdır Antalya',
    date: '12 Nisan 2025 • 21:00',
    location: 'Antalya Expo Center, Antalya',
    price: '₺230\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
  {
    id: '6',
    title: 'İlker Ayrık - Gerçekler Acıdır Adana',
    date: '19 Nisan 2025 • 20:30',
    location: 'Adana Büyükşehir Belediyesi Tiyatrosu, Adana',
    price: '₺190\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
  {
    id: '7',
    title: 'İlker Ayrık - Gerçekler Acıdır Gaziantep',
    date: '26 Nisan 2025 • 20:00',
    location: 'Gaziantep Kültür Merkezi, Gaziantep',
    price: '₺170\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
  {
    id: '8',
    title: 'İlker Ayrık - Gerçekler Acıdır Konya',
    date: '3 Mayıs 2025 • 20:30',
    location: 'Konya Büyükşehir Belediyesi Kültür Merkezi, Konya',
    price: '₺175\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
  {
    id: '9',
    title: 'İlker Ayrık - Gerçekler Acıdır Trabzon',
    date: '10 Mayıs 2025 • 21:00',
    location: 'Trabzon Atatürk Kültür Sarayı, Trabzon',
    price: '₺185\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    category: 'Comedy',
  },
];

const categories = ['Tümü', 'Müzik', 'Spor', 'Tiyatro', 'Komedi', 'Konferans', 'Yemek & İçecek'];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tüm Etkinlikler</h1>
          <p className="text-gray-400 text-lg">
            Yakınınızdaki harika etkinlikleri keşfedin
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-800 text-white hover:border-[#f0425f] hover:bg-[#f0425f] transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#f0425f] text-[#f0425f] rounded-lg hover:bg-[#f0425f] hover:text-white transition-all font-semibold">
            Daha Fazla Etkinlik Yükle
          </button>
        </div>
      </div>
    </div>
  );
}

