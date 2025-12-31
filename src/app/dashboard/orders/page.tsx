'use client';

interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  items: number;
  total: string;
  status: string;
  eventName?: string;
  eventDate?: string;
  eventLocation?: string;
  venue?: string;
  ticketType?: string;
  quantity?: number;
}

export default function OrdersPage() {
  const orders: Order[] = [
    { 
      id: '#ORD-001', 
      customer: 'John Doe', 
      email: 'john.doe@example.com',
      date: 'Dec 9, 2024', 
      items: 2, 
      total: '$128.00', 
      status: 'Completed',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 7, 2026',
      eventLocation: 'New York, NY',
      venue: 'The Town Hall',
      ticketType: 'General Admission',
      quantity: 2,
    },
    { 
      id: '#ORD-002', 
      customer: 'Jane Smith', 
      email: 'jane.smith@example.com',
      date: 'Dec 14, 2024', 
      items: 1, 
      total: '$149.00', 
      status: 'Completed',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 7, 2026',
      eventLocation: 'New York, NY',
      venue: 'The Town Hall',
      ticketType: 'VIP',
      quantity: 1,
    },
    { 
      id: '#ORD-003', 
      customer: 'Mike Johnson', 
      email: 'mike.johnson@example.com',
      date: 'Dec 19, 2024', 
      items: 3, 
      total: '$114.00', 
      status: 'Completed',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 15, 2026',
      eventLocation: 'Chicago, IL',
      venue: 'Copernicus Center',
      ticketType: 'General Admission',
      quantity: 3,
    },
    { 
      id: '#ORD-004', 
      customer: 'Sarah Williams', 
      email: 'sarah.williams@example.com',
      date: 'Dec 21, 2024', 
      items: 2, 
      total: '$178.00', 
      status: 'Completed',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 22, 2026',
      eventLocation: 'Palo Alto, CA',
      venue: 'Spangenberg Theater',
      ticketType: 'Premium',
      quantity: 2,
    },
    { 
      id: '#ORD-005', 
      customer: 'David Chen', 
      email: 'david.chen@example.com',
      date: 'Dec 23, 2024', 
      items: 1, 
      total: '$64.00', 
      status: 'Completed',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 7, 2026',
      eventLocation: 'New York, NY',
      venue: 'The Town Hall',
      ticketType: 'General Admission',
      quantity: 1,
    },
    { 
      id: '#ORD-006', 
      customer: 'Emily Rodriguez', 
      email: 'emily.rodriguez@example.com',
      date: 'Dec 30, 2024', 
      items: 2, 
      total: '$76.00', 
      status: 'Pending',
      eventName: 'Gercekler Acidir by Ilker Ayrik',
      eventDate: 'November 15, 2026',
      eventLocation: 'Chicago, IL',
      venue: 'Copernicus Center',
      ticketType: 'General Admission',
      quantity: 2,
    },
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Orders</h1>
        <p className="text-gray-400">View and manage customer orders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">{orders.length}</div>
          <div className="text-gray-400">Total Orders</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-400 mb-2">{orders.filter(o => o.status === 'Completed').length}</div>
          <div className="text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-yellow-400 mb-2">{orders.filter(o => o.status === 'Pending').length}</div>
          <div className="text-gray-400">Pending</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-400 mb-2">${orders.filter(o => o.status === 'Completed').reduce((sum, o) => sum + parseFloat(o.total.replace('$', '')), 0).toFixed(2)}</div>
          <div className="text-gray-400">Total Revenue</div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Tickets</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{order.id}</td>
                <td className="px-6 py-4">
                  <div className="text-gray-300">{order.customer}</div>
                  <div className="text-gray-500 text-xs">{order.email}</div>
                </td>
                <td className="px-6 py-4">
                  {order.eventLocation && (
                    <>
                      <div className="text-gray-300 text-sm">{order.eventLocation}</div>
                      <div className="text-gray-500 text-xs">{order.venue}</div>
                      <div className="text-gray-500 text-xs">{order.eventDate}</div>
                    </>
                  )}
                </td>
                <td className="px-6 py-4">
                  {order.ticketType && (
                    <>
                      <div className="text-gray-300 text-sm">{order.quantity}x {order.ticketType}</div>
                      <div className="text-gray-500 text-xs">{order.items} items</div>
                    </>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-300">{order.date}</td>
                <td className="px-6 py-4 text-green-400 font-semibold">{order.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : order.status === 'Pending'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
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

