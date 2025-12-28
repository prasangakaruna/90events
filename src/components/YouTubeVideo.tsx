'use client';

import { useState } from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  thumbnail?: string;
  className?: string;
}

export default function YouTubeVideo({ videoId, title, thumbnail, className = '' }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  if (isPlaying) {
    return (
      <div className={`relative aspect-video rounded-lg overflow-hidden ${className}`}>
        <iframe
          src={embedUrl}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video rounded-lg overflow-hidden glass-effect group cursor-pointer hover-lift ${className}`}
      onClick={() => setIsPlaying(true)}
    >
      <div 
        className="w-full h-full bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity"
        style={{
          backgroundImage: `url(${thumbnailUrl})`
        }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600/90 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <div className="w-0 h-0 border-l-[20px] md:border-l-[24px] border-l-white border-t-[12px] md:border-t-[14px] border-t-transparent border-b-[12px] md:border-b-[14px] border-b-transparent ml-1"></div>
          </div>
        </div>
        {title && (
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-semibold text-sm md:text-base line-clamp-2">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}

