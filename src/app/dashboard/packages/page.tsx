'use client';

export default function PackagesPage() {
  const packages = [
    { id: 1, name: 'VIP Experience', price: '$299', includes: ['Front row seats', 'Meet & Greet', 'Merchandise'], sales: 45 },
    { id: 2, name: 'Premium Package', price: '$149', includes: ['Premium seats', 'Program booklet'], sales: 120 },
    { id: 3, name: 'Standard Package', price: '$75', includes: ['Standard seats'], sales: 350 },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Packages</h1>
            <p className="text-gray-400">Manage ticket packages and bundles</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all">
            + Add Package
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              <span className="text-2xl font-bold text-[#f0425f]">{pkg.price}</span>
            </div>
            <ul className="space-y-2 mb-4">
              {pkg.includes.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-gray-700">
              <div className="text-sm text-gray-400 mb-1">Sales</div>
              <div className="text-2xl font-bold text-white">{pkg.sales}</div>
            </div>
            <div className="mt-4 flex gap-2">
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

