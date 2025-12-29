'use client';

export default function RefundsPage() {
  const refunds = [
    { id: '#REF-001', orderId: '#ORD-001', customer: 'John Doe', amount: '$75.00', reason: 'Cancelled', status: 'Approved', date: 'Dec 22, 2024' },
    { id: '#REF-002', orderId: '#ORD-003', customer: 'Mike Johnson', amount: '$146.00', reason: 'Refund Request', status: 'Pending', date: 'Dec 24, 2024' },
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Refunds</h1>
        <p className="text-gray-400">Manage refund requests and processing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">2</div>
          <div className="text-gray-400">Total Refunds</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
          <div className="text-gray-400">Pending</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-400 mb-2">$221.00</div>
          <div className="text-gray-400">Total Refunded</div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Refund ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Reason</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {refunds.map((refund) => (
              <tr key={refund.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{refund.id}</td>
                <td className="px-6 py-4 text-gray-300">{refund.orderId}</td>
                <td className="px-6 py-4 text-gray-300">{refund.customer}</td>
                <td className="px-6 py-4 text-red-400 font-semibold">{refund.amount}</td>
                <td className="px-6 py-4 text-gray-300">{refund.reason}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    refund.status === 'Approved' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {refund.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300">{refund.date}</td>
                <td className="px-6 py-4">
                  <button className="text-[#f0425f] hover:text-[#ec4899]">Process</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

