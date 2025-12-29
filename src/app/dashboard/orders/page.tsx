'use client';

export default function OrdersPage() {
  const orders = [
    { id: '#ORD-001', customer: 'John Doe', date: 'Dec 23, 2024', items: 2, total: '$146.00', status: 'Completed' },
    { id: '#ORD-002', customer: 'Jane Smith', date: 'Dec 21, 2024', items: 1, total: '$75.00', status: 'Completed' },
    { id: '#ORD-003', customer: 'Mike Johnson', date: 'Dec 19, 2024', items: 3, total: '$225.00', status: 'Processing' },
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Orders</h1>
        <p className="text-gray-400">View and manage customer orders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">5</div>
          <div className="text-gray-400">Total Orders</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-400 mb-2">3</div>
          <div className="text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
          <div className="text-gray-400">Processing</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
          <div className="text-gray-400">Pending</div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{order.id}</td>
                <td className="px-6 py-4 text-gray-300">{order.customer}</td>
                <td className="px-6 py-4 text-gray-300">{order.date}</td>
                <td className="px-6 py-4 text-gray-300">{order.items}</td>
                <td className="px-6 py-4 text-green-400 font-semibold">{order.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {order.status}
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

