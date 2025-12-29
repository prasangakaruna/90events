'use client';

export default function ArtistsPage() {
  const artists = [
    { id: 1, name: 'İlker Ayrık', role: 'Host', shows: 7, status: 'Active' },
    { id: 2, name: 'Guest Performer 1', role: 'Special Guest', shows: 3, status: 'Active' },
    { id: 3, name: 'Guest Performer 2', role: 'Opening Act', shows: 5, status: 'Active' },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Artists</h1>
            <p className="text-gray-400">Manage artists and performers</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all">
            + Add Artist
          </button>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Shows</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {artists.map((artist) => (
              <tr key={artist.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{artist.name}</td>
                <td className="px-6 py-4 text-gray-300">{artist.role}</td>
                <td className="px-6 py-4 text-gray-300">{artist.shows}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                    {artist.status}
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

