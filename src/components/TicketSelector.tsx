'use client';

import { useState } from 'react';

interface TicketType {
  id: string;
  name: string;
  price: number;
  available: number;
  description?: string;
}

interface TicketSelectorProps {
  tickets: TicketType[];
  onSelectionChange?: (selection: { [key: string]: number }) => void;
}

export default function TicketSelector({ tickets, onSelectionChange }: TicketSelectorProps) {
  const [selection, setSelection] = useState<{ [key: string]: number }>({});

  const updateSelection = (ticketId: string, quantity: number) => {
    const newSelection = { ...selection };
    if (quantity === 0) {
      delete newSelection[ticketId];
    } else {
      newSelection[ticketId] = quantity;
    }
    setSelection(newSelection);
    onSelectionChange?.(newSelection);
  };

  const getTotal = () => {
    return tickets.reduce((total, ticket) => {
      const quantity = selection[ticket.id] || 0;
      return total + ticket.price * quantity;
    }, 0);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6">Bilet Seçin</h3>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#f0425f] transition-colors"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-1">{ticket.name}</h4>
              {ticket.description && (
                <p className="text-gray-400 text-sm mb-2">{ticket.description}</p>
              )}
              <p className="text-2xl font-bold text-[#f0425f]">${ticket.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">
                {ticket.available} bilet mevcut
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateSelection(ticket.id, Math.max(0, (selection[ticket.id] || 0) - 1))}
                disabled={!selection[ticket.id] || selection[ticket.id] === 0}
                className="w-10 h-10 rounded-lg bg-gray-800 text-white hover:bg-[#f0425f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center font-bold"
              >
                −
              </button>
              <span className="w-12 text-center text-white font-semibold text-lg">
                {selection[ticket.id] || 0}
              </span>
              <button
                onClick={() => updateSelection(ticket.id, (selection[ticket.id] || 0) + 1)}
                disabled={(selection[ticket.id] || 0) >= ticket.available}
                className="w-10 h-10 rounded-lg bg-gray-800 text-white hover:bg-[#f0425f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      {Object.keys(selection).length > 0 && (
        <div className="mt-6 p-6 bg-gray-900 border border-[#f0425f] rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-white">Toplam</span>
            <span className="text-3xl font-bold text-[#f0425f]">₺{getTotal().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

