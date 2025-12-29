'use client';

import { useState } from 'react';

export default function ShowsPage() {
  const [shows] = useState([
    { id: 1, name: 'Gerçekler Acıdır - New York', date: 'Nov 7, 2026', venue: 'The Town Hall', status: 'Active', tickets: 1245, revenue: '$78,000' },
    { id: 2, name: 'Gerçekler Acıdır - Chicago', date: 'Nov 15, 2026', venue: 'Copernicus Center', status: 'Active', tickets: 852, revenue: '$38,340' },
    { id: 3, name: 'Gerçekler Acıdır - Los Angeles', date: 'Nov 22, 2026', venue: 'Spangenberg Theater', status: 'Upcoming', tickets: 0, revenue: '$0' },
  ]);

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Shows Management</h1>
            <p className="text-gray-400">Manage all your shows and events</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all">
            + Add New Show
          </button>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Show Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Venue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tickets Sold</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {shows.map((show) => (
              <tr key={show.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-white font-medium">{show.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{show.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{show.venue}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    show.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {show.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{show.tickets}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-400 font-semibold">{show.revenue}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-[#f0425f] hover:text-[#ec4899] mr-4">Edit</button>
                  <button className="text-gray-400 hover:text-gray-300">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

