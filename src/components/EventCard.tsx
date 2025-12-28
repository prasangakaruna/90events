import Link from 'next/link';
import Image from 'next/image';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  price: string;
  image: string;
  category?: string;
}

export default function EventCard({ id, title, date, location, price, image, category }: EventCardProps) {
  return (
    <Link href={`/events/${id}`} className="group">
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-[#f0425f] transition-all duration-300 hover:shadow-lg hover:shadow-[#f0425f]/20">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-[#f0425f] text-white text-xs font-semibold rounded-full">
              {category}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f0425f] transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="space-y-2 text-sm text-gray-400 mb-4">
            <p className="flex items-center gap-2">
              <span>📅</span>
              {date}
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span>
              {location}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#f0425f]">{price}</span>
            <span className="text-white text-sm font-medium group-hover:text-[#f0425f] transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

