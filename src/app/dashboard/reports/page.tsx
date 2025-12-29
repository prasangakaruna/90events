'use client';

export default function ReportsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Reports</h1>
        <p className="text-gray-400">Generate and view detailed reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Sales Reports</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Daily Sales Report
            </button>
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Monthly Sales Report
            </button>
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Yearly Sales Report
            </button>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Customer Reports</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Customer Acquisition Report
            </button>
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Customer Retention Report
            </button>
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Customer Lifetime Value
            </button>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Event Reports</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Event Performance Report
            </button>
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Venue Utilization Report
            </button>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Financial Reports</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Revenue Report
            </button>
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Expense Report
            </button>
            <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-left transition-colors">
              Profit & Loss Statement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

