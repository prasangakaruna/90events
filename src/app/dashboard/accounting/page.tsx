'use client';

export default function AccountingPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Accounting</h1>
        <p className="text-gray-400">Financial overview and transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-400 mb-2">$729.99</div>
          <div className="text-gray-400">Total Revenue</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-red-400 mb-2">$125.50</div>
          <div className="text-gray-400">Total Expenses</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-400 mb-2">$604.49</div>
          <div className="text-gray-400">Net Profit</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
          <div className="text-gray-400">Transactions</div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {[
            { id: 1, date: 'Dec 23, 2024', description: 'Ticket Sales', amount: '$146.00', type: 'income' },
            { id: 2, date: 'Dec 21, 2024', description: 'Venue Rental', amount: '$50.00', type: 'expense' },
            { id: 3, date: 'Dec 19, 2024', description: 'Ticket Sales', amount: '$225.00', type: 'income' },
          ].map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white font-medium">{transaction.description}</div>
                <div className="text-gray-400 text-sm">{transaction.date}</div>
              </div>
              <div className={`text-lg font-bold ${transaction.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                {transaction.type === 'income' ? '+' : '-'}{transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

