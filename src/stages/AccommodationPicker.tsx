import React from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { hotels } from '../data/hotels';
import { attractions } from '../data/attractions';
import { HotelCard } from '../components/HotelCard';
import { useScrollToTop } from '../hooks/useScrollToTop';
import type { Hotel } from '../types';

interface AccommodationPickerProps {
  selectedDestination: string;
  selectedPackageType: 'regular' | 'full_package';
  packageAccommodation?: string;
  onBack: () => void;
  onNext: (hotel: Hotel) => void;
}

export function AccommodationPicker({
  selectedDestination,
  selectedPackageType,
  packageAccommodation,
  onBack,
  onNext
}: AccommodationPickerProps) {
  const [expandedSections, setExpandedSections] = React.useState<{
    rooms: boolean;
    amenities: boolean;
    activities: boolean;
    policies: boolean;
  }>({
    rooms: true,
    amenities: false,
    activities: false,
    policies: false
  });
  const [selectedHotel, setSelectedHotel] = React.useState<Hotel | null>(null);
  const [showDetails, setShowDetails] = React.useState(false);
  const [showOptions, setShowOptions] = React.useState(false);

  useScrollToTop(null);

  const destinationHotels = React.useMemo(() => {
    return hotels.filter(hotel => hotel.destinationId === selectedDestination);
  }, [selectedDestination]);

  const defaultHotel = React.useMemo(() => {
    if (selectedPackageType === 'full_package' && packageAccommodation) {
      return null;
    }
    return destinationHotels[0];
  }, [destinationHotels, selectedPackageType, packageAccommodation]);

  React.useEffect(() => {
    if (defaultHotel && !selectedHotel) {
      setSelectedHotel(defaultHotel);
    }
  }, [defaultHotel, selectedHotel]);

  if (selectedPackageType === 'full_package' && packageAccommodation) {
    const selectedAttraction = attractions.find(a => 
      a.type === 'full_package' && 
      a.name === packageAccommodation && 
      a.destinationId === selectedDestination
    );

    if (!selectedAttraction || !selectedAttraction.accommodation) return null;
    
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 text-center">
            Welcome to {packageAccommodation}
          </h1>
          <p className="text-lg text-gray-500 text-center max-w-2xl">
            Your luxury all-inclusive stay awaits
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-16">
          <div className="relative aspect-[21/9] overflow-hidden">
            <img
              src={selectedAttraction.image}
              alt={selectedAttraction.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-base text-white/90 max-w-3xl leading-relaxed">
                {selectedAttraction.description}
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {/* Room Preview */}
            <div className="p-6">
              <button
                onClick={() => setExpandedSections(prev => ({ ...prev, rooms: !prev.rooms }))}
                className="flex items-center justify-between w-full group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Destination Preview
                </h3>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform group-hover:text-blue-600
                  ${expandedSections.rooms ? 'rotate-90' : ''}`}
                />
              </button>
              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-300
                ${expandedSections.rooms ? 'mt-4 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                {selectedAttraction.accommodation.roomImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Room ${index + 1}`}
                    className="w-full aspect-video object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                  />
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="p-6">
              <button
                onClick={() => setExpandedSections(prev => ({ ...prev, amenities: !prev.amenities }))}
                className="flex items-center justify-between w-full group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Destination Amenities
                </h3>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform group-hover:text-blue-600
                  ${expandedSections.amenities ? 'rotate-90' : ''}`}
                />
              </button>
              <div className={`grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 transition-all duration-300
                ${expandedSections.amenities ? 'mt-4 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                {selectedAttraction.accommodation.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-sm hover:text-blue-600 transition-colors">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="p-6">
              <button
                onClick={() => setExpandedSections(prev => ({ ...prev, activities: !prev.activities }))}
                className="flex items-center justify-between w-full group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Package Activities
                </h3>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform group-hover:text-blue-600
                  ${expandedSections.activities ? 'rotate-90' : ''}`}
                />
              </button>
              <div className={`grid gap-3 transition-all duration-300
                ${expandedSections.activities ? 'mt-4 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                {selectedAttraction.accommodation.activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <div className={`w-2 h-2 mt-2 rounded-full ${
                      activity.included ? 'bg-green-500' : 'bg-gray-300'
                    }`} style={{ flexShrink: 0 }} />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{activity.name}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <span className={`text-xs font-medium mt-1 inline-block px-2 py-1 rounded-full ${
                        activity.included
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`} style={{ width: 'fit-content' }}>
                        {activity.included ? 'Included' : 'Available for Purchase'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="p-6">
              <button
                onClick={() => setExpandedSections(prev => ({ ...prev, policies: !prev.policies }))}
                className="flex items-center justify-between w-full group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Destination Policies
                </h3>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform group-hover:text-blue-600
                  ${expandedSections.policies ? 'rotate-90' : ''}`}
                />
              </button>
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-300
                ${expandedSections.policies ? 'mt-4 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="text-sm font-medium text-gray-900">Check-in Time</p>
                  <p className="text-sm text-gray-600">{selectedAttraction.accommodation.policies.checkIn}</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="text-sm font-medium text-gray-900">Check-out Time</p>
                  <p className="text-sm text-gray-600">{selectedAttraction.accommodation.policies.checkOut}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-6 mt-8 flex justify-center gap-4">
          <button
            className="bg-white text-gray-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            onClick={onBack}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <button
            className="bg-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            onClick={() => onNext(selectedAttraction)}
          >
            Continue to Payment
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  if (!selectedHotel) return null;
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 sm:px-6">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 text-center">
          We've Found Your Perfect Stay
        </h1>
        <p className="text-lg text-gray-500 text-center mb-2 max-w-2xl">
          Based on your preferences, we think you'll love this accommodation
        </p>
        <div className="relative w-full max-w-xs">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="w-full mt-8 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-between text-gray-600 hover:border-blue-200 hover:text-blue-500 transition-all group"
          >
            <span className="text-sm font-medium">
              {showOptions ? 'Hide other options' : 'See other options'}
            </span>
            <ChevronDown className={`w-5 h-5 transition-all group-hover:text-blue-500 ${
              showOptions ? 'rotate-180' : ''
            }`} />
          </button> 
          
          {showOptions && (
            <div className="absolute z-10 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2">
              {destinationHotels.map((hotel) => (
                <button
                  key={hotel.id}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors
                    ${hotel.id === selectedHotel.id 
                      ? 'text-blue-500 font-medium bg-blue-50/50' 
                      : 'text-gray-600'
                    }`}
                  onClick={() => {
                    setSelectedHotel(hotel);
                    setShowOptions(false);
                    setShowDetails(false);
                  }}
                >
                  {hotel.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <HotelCard
        hotel={selectedHotel}
        showDetails={showDetails}
        onToggleDetails={() => setShowDetails(!showDetails)}
      />
      
      <div className="sticky bottom-8 mt-16 flex justify-center gap-6">
        <button
          className="bg-white text-gray-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5" />
          Change Attractions
        </button>
        <button
          className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
          onClick={() => onNext(selectedHotel)}
        >
          Enter Your Details
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
