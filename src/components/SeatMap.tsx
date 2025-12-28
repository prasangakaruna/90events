'use client';

import { useState } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

interface Seat {
  id: string;
  row: string;
  number: number;
  section: string;
  price: number;
  status: 'available' | 'selected' | 'occupied' | 'reserved';
  type?: 'general' | 'vip' | 'premium';
}

interface SeatMapProps {
  onSeatSelect?: (seats: Seat[]) => void;
  initialSeats?: Seat[];
}

// Generate seat map data
const generateSeatMap = (): Seat[] => {
  const seats: Seat[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
  const sections = [
    { name: 'VIP', rows: ['A', 'B', 'C'], price: 450, type: 'vip' as const },
    { name: 'Premium', rows: ['D', 'E', 'F'], price: 350, type: 'premium' as const },
    { name: 'General', rows: ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'], price: 250, type: 'general' as const },
  ];

  sections.forEach((section) => {
    section.rows.forEach((row) => {
      for (let num = 1; num <= 20; num++) {
        const seatId = `${row}${num}`;
        const isOccupied = Math.random() < 0.15; // 15% chance of being occupied
        seats.push({
          id: seatId,
          row,
          number: num,
          section: section.name,
          price: section.price,
          status: isOccupied ? 'occupied' : 'available',
          type: section.type,
        });
      }
    });
  });

  return seats;
};

export default function SeatMap({ onSeatSelect, initialSeats = [] }: SeatMapProps) {
  const [seats, setSeats] = useState<Seat[]>(generateSeatMap());
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>(initialSeats);

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'occupied' || seat.status === 'reserved') {
      return; // Can't select occupied or reserved seats
    }

    const newSeats = seats.map((s) => {
      if (s.id === seat.id) {
        return {
          ...s,
          status: s.status === 'selected' ? 'available' : 'selected',
        };
      }
      return s;
    });

    setSeats(newSeats);

    const updatedSelectedSeats = newSeats.filter((s) => s.status === 'selected');
    setSelectedSeats(updatedSelectedSeats);
    onSeatSelect?.(updatedSelectedSeats);
  };

  const getSeatColor = (seat: Seat) => {
    switch (seat.status) {
      case 'selected':
        return 'bg-gradient-to-r from-[#f0425f] to-[#ec4899] border-[#f0425f]';
      case 'occupied':
        return 'bg-gray-700 border-gray-600 cursor-not-allowed opacity-50';
      case 'reserved':
        return 'bg-yellow-600 border-yellow-500 cursor-not-allowed';
      default:
        return 'bg-gray-800 border-gray-700 hover:border-[#f0425f] hover:bg-gray-700';
    }
  };

  const getSeatLabel = (seat: Seat) => {
    if (seat.status === 'occupied') return '✕';
    if (seat.status === 'selected') return '✓';
    return seat.number;
  };

  // Group seats by section
  const sections = ['VIP', 'Premium', 'General'];
  const groupedSeats = sections.map((sectionName) => ({
    name: sectionName,
    seats: seats.filter((s) => s.section === sectionName),
  }));

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-4">Select Your Seats</h3>
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-800 border border-gray-700 rounded"></div>
            <span className="text-gray-400">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#f0425f] to-[#ec4899] border border-[#f0425f] rounded"></div>
            <span className="text-gray-400">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-700 border-gray-600 rounded opacity-50"></div>
            <span className="text-gray-400">Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-600 border-yellow-500 rounded"></div>
            <span className="text-gray-400">Reserved</span>
          </div>
        </div>
      </div>

      {/* Stage Indicator */}
      <div className="mb-8 text-center">
        <div className="inline-block px-8 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] rounded-lg mb-2">
          <span className="text-white font-bold text-lg">STAGE</span>
        </div>
      </div>

      {/* Seat Map */}
      <div className="space-y-8 mb-8">
        {groupedSeats.map((section) => (
          <div key={section.name} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">{section.name} Section</h4>
              <span className="text-sm text-gray-400">
                ₺{section.seats.find((s) => s.section === section.name)?.price || 0} per seat
              </span>
            </div>
            
            {/* Row Labels and Seats */}
            <div className="space-y-2">
              {Array.from(new Set(section.seats.map((s) => s.row)))
                .sort()
                .map((row) => {
                  const rowSeats = section.seats.filter((s) => s.row === row);
                  return (
                    <div key={row} className="flex items-center gap-2">
                      <div className="w-8 text-center text-gray-400 font-semibold text-sm">{row}</div>
                      <div className="flex-1 flex gap-1 justify-center">
                        {rowSeats.map((seat) => (
                          <button
                            key={seat.id}
                            onClick={() => handleSeatClick(seat)}
                            disabled={seat.status === 'occupied' || seat.status === 'reserved'}
                            className={`
                              w-8 h-8 rounded border-2 transition-all text-xs font-semibold
                              ${getSeatColor(seat)}
                              ${seat.status === 'available' ? 'cursor-pointer hover:scale-110' : ''}
                              ${seat.status === 'selected' ? 'text-white' : 'text-gray-300'}
                            `}
                            title={`${seat.row}${seat.number} - ${seat.section} - ₺${seat.price}`}
                          >
                            {getSeatLabel(seat)}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

