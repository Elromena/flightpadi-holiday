import React from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import type { Hotel } from '../types';

interface HotelCardProps {
  hotel: Hotel;
  isSelected?: boolean;
  showDetails?: boolean;
  onToggleDetails?: () => void;
}

export function HotelCard({ hotel, showDetails, onToggleDetails }: HotelCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-2xl font-bold mb-2 tracking-tight">{hotel.name}</h3>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium text-base">{hotel.rating}</span>
            </div>
            <span className="text-white/80">•</span>
            <span className="text-lg font-medium">
              ₦{hotel.price.toLocaleString()}<span className="text-sm font-normal">/night</span>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={onToggleDetails}
          className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
        >
          <span className="font-medium group-hover:text-blue-500 transition-colors">
            {showDetails ? 'Show less' : 'View hotel details'}
          </span>
          {showDetails ? (
            <ChevronUp className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
          ) : (
            <ChevronDown className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
          )}
        </button>

        <div className={`space-y-6 transition-all duration-500 overflow-hidden ${
          showDetails ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-base">About</h4>
            <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-base">Amenities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {hotel.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-base">Preview</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {hotel.roomImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${hotel.name} Room ${index + 1}`}
                className="rounded-xl aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer"
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
