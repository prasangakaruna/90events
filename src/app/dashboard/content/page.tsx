'use client';

export default function ContentPage() {
  const contentItems = [
    { id: 1, title: 'Homepage Hero', type: 'Page', status: 'Published', lastModified: 'Dec 24, 2024' },
    { id: 2, title: 'About Us', type: 'Page', status: 'Published', lastModified: 'Dec 20, 2024' },
    { id: 3, title: 'Event Description', type: 'Content', status: 'Draft', lastModified: 'Dec 23, 2024' },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Content</h1>
            <p className="text-gray-400">Manage website content and pages</p>
          </div>
          <button className="btn-gradient">
            + Add Content
          </button>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Last Modified</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {contentItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white font-medium">{item.title}</td>
                <td className="px-6 py-4 text-gray-300">{item.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.status === 'Published' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300">{item.lastModified}</td>
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

