import React from 'react';
import { Check } from 'lucide-react';
import type { Attraction } from '../types';

interface AttractionCardProps {
  attraction: Attraction;
  isSelected: boolean;
  onSelect: (attraction: Attraction) => void;
  disabled?: boolean;
}

export function AttractionCard({ attraction, isSelected, onSelect, disabled }: AttractionCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 h-[280px] cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:ring-2 hover:ring-blue-300'}
        ${isSelected ? 'ring-4 ring-blue-500' : ''}`}
      onClick={() => !disabled && onSelect(attraction)}
    >
      <img
        src={attraction.image}
        alt={attraction.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white">{attraction.name}</h3>
          <span className="text-white font-medium">
            {attraction.price === 0 ? 'Free' : `₦${attraction.price.toLocaleString()}`}
          </span>
        </div>
        <p className="text-white/90 text-sm mb-2">{attraction.description}</p>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          attraction.type === 'full_package' 
            ? 'bg-purple-500 text-white' 
            : 'bg-blue-500 text-white'
        }`}>
          {attraction.type === 'full_package' ? 'Full Package' : 'Regular Attraction'}
        </span>
      </div>
      {isSelected && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
          <Check className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}
