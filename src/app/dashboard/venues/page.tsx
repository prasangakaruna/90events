'use client';

export default function VenuesPage() {
  const venues = [
    { id: 1, name: 'The Town Hall', location: 'New York, NY', capacity: 1495, status: 'Active' },
    { id: 2, name: 'Copernicus Center', location: 'Chicago, IL', capacity: 1852, status: 'Active' },
    { id: 3, name: 'Spangenberg Theater', location: 'Palo Alto, CA', capacity: 925, status: 'Active' },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Venues</h1>
            <p className="text-gray-400">Manage venue information and details</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all">
            + Add Venue
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <div key={venue.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">{venue.name}</h3>
            <p className="text-gray-400 mb-4">{venue.location}</p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-400">Capacity</div>
                <div className="text-lg font-semibold text-white">{venue.capacity.toLocaleString()}</div>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                {venue.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                Edit
              </button>
              <button className="flex-1 px-4 py-2 bg-[#f0425f] hover:bg-[#d63852] text-white rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

