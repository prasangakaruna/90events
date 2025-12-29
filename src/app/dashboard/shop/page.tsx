'use client';

export default function ShopAdminPage() {
  const products = [
    { id: 1, name: 'T-Shirt', price: '$29.99', stock: 150, sales: 45, status: 'Active' },
    { id: 2, name: 'Coffee Mug', price: '$14.99', stock: 200, sales: 32, status: 'Active' },
    { id: 3, name: 'Poster', price: '$9.99', stock: 0, sales: 18, status: 'Out of Stock' },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Shop</h1>
            <p className="text-gray-400">Manage merchandise and products</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all">
            + Add Product
          </button>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Sales</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{product.name}</td>
                <td className="px-6 py-4 text-gray-300">{product.price}</td>
                <td className="px-6 py-4 text-gray-300">{product.stock}</td>
                <td className="px-6 py-4 text-blue-400">{product.sales}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    product.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {product.status}
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

