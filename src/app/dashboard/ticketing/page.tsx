'use client';

export default function TicketingPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Ticketing</h1>
        <p className="text-gray-400">Manage ticket sales, pricing, and availability</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">2,097</div>
          <div className="text-gray-400">Total Tickets Sold</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-400 mb-2">$116,340</div>
          <div className="text-gray-400">Total Revenue</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-yellow-400 mb-2">1,503</div>
          <div className="text-gray-400">Available Tickets</div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Ticket Pricing</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div>
              <div className="text-white font-medium">VIP</div>
              <div className="text-gray-400 text-sm">Best seats in the house</div>
            </div>
            <div className="text-2xl font-bold text-white">$150</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div>
              <div className="text-white font-medium">Premium</div>
              <div className="text-gray-400 text-sm">Great view, comfortable seating</div>
            </div>
            <div className="text-2xl font-bold text-white">$75</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div>
              <div className="text-white font-medium">Standard</div>
              <div className="text-gray-400 text-sm">General admission</div>
            </div>
            <div className="text-2xl font-bold text-white">$45</div>
          </div>
        </div>
      </div>
    </>
  );
}

