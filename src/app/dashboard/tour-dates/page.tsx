'use client';

export default function TourDatesPage() {
  const tourDates = [
    { id: 1, date: 'Nov 7, 2026', city: 'New York, NY', venue: 'The Town Hall', status: 'Completed', tickets: 1245 },
    { id: 2, date: 'Nov 15, 2026', city: 'Chicago, IL', venue: 'Copernicus Center', status: 'Completed', tickets: 852 },
    { id: 3, date: 'Nov 22, 2026', city: 'Palo Alto, CA', venue: 'Spangenberg Theater', status: 'Upcoming', tickets: 0 },
    { id: 4, date: 'Nov 28, 2026', city: 'Los Angeles, CA', venue: 'TBA', status: 'Upcoming', tickets: 0 },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Tour Dates</h1>
            <p className="text-gray-400">Manage tour schedule and dates</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all">
            + Add Tour Date
          </button>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">City</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Venue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Tickets Sold</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {tourDates.map((date) => (
              <tr key={date.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{date.date}</td>
                <td className="px-6 py-4 text-gray-300">{date.city}</td>
                <td className="px-6 py-4 text-gray-300">{date.venue}</td>
                <td className="px-6 py-4 text-gray-300">{date.tickets}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    date.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {date.status}
                  </span>
                </td>
                <td className="px-6 py-4">
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

