'use client';

export default function CRMPage() {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', tickets: 3, totalSpent: '$225', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', tickets: 2, totalSpent: '$150', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', tickets: 1, totalSpent: '$75', status: 'Active' },
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">CRM</h1>
        <p className="text-gray-400">Customer relationship management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">18</div>
          <div className="text-gray-400">Total Customers</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-400 mb-2">12</div>
          <div className="text-gray-400">Active Customers</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
          <div className="text-gray-400">New This Month</div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Tickets</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Total Spent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{customer.name}</td>
                <td className="px-6 py-4 text-gray-300">{customer.email}</td>
                <td className="px-6 py-4 text-gray-300">{customer.tickets}</td>
                <td className="px-6 py-4 text-green-400 font-semibold">{customer.totalSpent}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-[#f0425f] hover:text-[#ec4899]">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

