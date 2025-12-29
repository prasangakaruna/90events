'use client';

import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    { id: 1, name: 'Event Photo 1', url: '/img/img16346_orig.webp', category: 'Events', uploadDate: 'Dec 20, 2024' },
    { id: 2, name: 'Event Photo 2', url: '/img/event-stage-BBm4cEDz.webp', category: 'Events', uploadDate: 'Dec 18, 2024' },
    { id: 3, name: 'Artist Photo', url: '/img/img16346_orig.webp', category: 'Artists', uploadDate: 'Dec 15, 2024' },
  ];

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Gallery</h1>
            <p className="text-gray-400">Manage images and media</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#f0425f] to-[#ec4899] text-white rounded-lg hover:from-[#d63852] hover:to-[#db2777] transition-all">
            + Upload Image
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-700 relative">
              <Image src={image.url} alt={image.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-white font-medium mb-1">{image.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>{image.category}</span>
                <span>{image.uploadDate}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                  Edit
                </button>
                <button className="flex-1 px-4 py-2 bg-[#f0425f] hover:bg-[#d63852] text-white rounded-lg transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

