import React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import type { DestinationCardProps } from '../types';

export function DestinationCard({ destination, isSelected, isExpanded, onSelect, onExpand }: DestinationCardProps) {
  const handleClick = () => {
    if (isExpanded) {
      onSelect(destination.id);
    } else {
      onExpand(destination.id);
    }
  };

  return (
    <div
      className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 group ${
        isExpanded ? 'h-[280px] sm:h-[320px]' : 'h-[200px] sm:h-[240px]'
      } ${
        isSelected ? 'ring-4 ring-blue-500' : isExpanded ? 'ring-2 ring-blue-300' : 'hover:ring-2 hover:ring-blue-300'
      }`}
      onClick={handleClick}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full transition-transform duration-700 object-cover group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-white">{destination.name}</h3>
          {!isExpanded && (
            <ChevronDown className={`w-5 h-5 text-white transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`} />
          )}
        </div>

        {isExpanded && (
          <div className="mt-3 space-y-3 transition-opacity duration-300">
            <p className="text-white/90 text-xs sm:text-sm">{destination.description}</p>
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-xs sm:text-sm"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(destination.id);
              }}
            >
              Choose Destination
            </button>
          </div>
        )}
      </div>
      {isSelected && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
          <Check className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}