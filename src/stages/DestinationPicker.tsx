import React from 'react';
import { MapPin, Search, ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface DestinationPickerProps {
  selectedDestination: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}

export function DestinationPicker({ selectedDestination, onSelect, onNext }: DestinationPickerProps) {
  const [expandedDestination, setExpandedDestination] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  useScrollToTop(null);

  const filteredDestinations = React.useMemo(() => {
    const query = searchQuery.toLowerCase();
    return destinations.filter(
      (destination) =>
        destination.name.toLowerCase().includes(query) || destination.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
          Your Next Vacation is Three Clicks Away
        </h1>
        <p className="text-lg text-gray-500 text-center mb-8 max-w-2xl">
          Choose your destination and start planning your unforgettable journey
        </p>
        <div className="w-full max-w-xl relative">
          <input
            type="text"
            placeholder="Search cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-start">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                isSelected={selectedDestination === destination.id}
                isExpanded={expandedDestination === destination.id}
                onSelect={onSelect}
                onExpand={setExpandedDestination}
              />
            ))}
          </div>
        )}
      </div>

      {selectedDestination && (
        <div className="sticky bottom-8 mt-12 flex justify-center">
          <button
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            onClick={onNext}
          >
            Select Travel Dates
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
