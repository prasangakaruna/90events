'use client';

export default function SponsorsAdminPage() {
  const sponsors = [
    { id: 1, name: 'Nike', tier: 'Title', value: '$2,500', status: 'Active' },
    { id: 2, name: 'Toyota Motors', tier: 'Title', value: '$35,000', status: 'Active' },
    { id: 3, name: 'Coca-Cola', tier: 'Title', value: '$5,000', status: 'Active' },
    { id: 4, name: 'Samsung', tier: 'Platinum', value: '$8,000', status: 'Active' },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Sponsors</h1>
            <p className="text-gray-400">Manage sponsors and partnerships</p>
          </div>
          <button className="btn-gradient">
            + Add Sponsor
          </button>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Sponsor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Tier</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {sponsors.map((sponsor) => (
              <tr key={sponsor.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{sponsor.name}</td>
                <td className="px-6 py-4 text-gray-300">{sponsor.tier}</td>
                <td className="px-6 py-4 text-green-400 font-semibold">{sponsor.value}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                    {sponsor.status}
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

