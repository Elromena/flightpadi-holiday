import React from 'react';
import { differenceInDays } from 'date-fns';
import { MapPin, Calendar, Users, Hotel, Palmtree, CreditCard } from 'lucide-react';
import type { Attraction, Hotel as HotelType, TravellerInfo } from '../types';
import { destinations } from '../data/destinations';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { PRICING } from '../config/pricing';

interface SummaryPageProps {
  selectedDestination: string;
  dateRange: { from: Date; to: Date };
  selectedAttractions: Attraction[];
  selectedHotel: HotelType;
  travellerInfo: TravellerInfo;
  onBack: () => void;
  onNext: (amount: number) => void;
}

export function SummaryPage({
  selectedDestination,
  dateRange,
  selectedAttractions,
  selectedHotel,
  travellerInfo,
  onBack,
  onNext,
}: SummaryPageProps) {
  const destination = destinations.find(d => d.id === selectedDestination);
  const numDays = differenceInDays(dateRange.to, dateRange.from);
  const isFullPackage = selectedAttractions[0]?.type === 'full_package';

  useScrollToTop(null);

  const calculateTotal = React.useMemo(() => {
    if (isFullPackage) {
      const attraction = selectedAttractions[0];
      if (!attraction.accommodation) return 0;

      const baseAccommodationPrice = attraction.price * numDays;
      const accommodationTotal = travellerInfo.partySize === 'couple'
        ? baseAccommodationPrice + (baseAccommodationPrice * 0.5)
        : baseAccommodationPrice;

      const activitiesTotal = attraction.accommodation.activities
        .filter(activity => activity.included)
        .reduce((sum, activity) => sum + (activity.price || 0), 0);
      
      const partyMultiplier = travellerInfo.partySize === 'couple' ? 2 : 1;
      const total = accommodationTotal + (activitiesTotal * partyMultiplier);

      return total + PRICING.CURATION_FEE;
    }

    const multiplier = travellerInfo.partySize === 'couple' ? 2 : 1;
    const attractionsTotal = selectedAttractions.reduce((sum, attr) => sum + attr.price, 0) * multiplier;
    const accommodationTotal = selectedHotel.price * numDays;
    return attractionsTotal + accommodationTotal + PRICING.CURATION_FEE;
  }, [selectedAttractions, selectedHotel, numDays, travellerInfo.partySize, isFullPackage]);

  if (!destination) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 sm:px-6">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 text-center">
          Your Dream Vacation Awaits
        </h1>
        <p className="text-lg text-gray-500 text-center max-w-2xl">
          Review your personalized travel package
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 h-3/4 bg-gradient-to-b from-blue-50 to-transparent" />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Itinerary Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="aspect-[16/9] relative">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {destination.name} Adventure
                </h2>
                <p className="text-white/90">
                  {numDays} days of unforgettable experiences
                </p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Destination</h3>
                  <p className="text-gray-600">{destination.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Dates</h3>
                  <p className="text-gray-600">
                    {dateRange.from.toLocaleDateString()} - {dateRange.to.toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Travelers</h3>
                  <p className="text-gray-600">
                    {travellerInfo.partySize === 'single' ? '1 Person' : '2 People'}
                  </p>
                </div>
              </div>

              {!isFullPackage && (
                <div className="flex items-start gap-4">
                  <Hotel className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Accommodation</h3>
                    <p className="text-gray-600">{selectedHotel.name}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <Palmtree className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {isFullPackage ? 'Package' : 'Selected Attractions'}
                  </h3>
                  <div className="space-y-3 mt-2">
                    {selectedAttractions.map(attraction => (
                      <div key={attraction.id} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                        <div>
                          <p className="text-gray-600">{attraction.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 lg:sticky lg:top-6 h-fit">
            <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <h2 className="text-xl font-semibold mb-2">Package Summary</h2>
              <p className="text-white/90">
                {isFullPackage ? 'All-inclusive package' : 'Customized experience'} for{' '}
                {travellerInfo.partySize === 'single' ? '1 person' : '2 people'}
              </p>
            </div>

            <div className="p-6 space-y-6">
              {isFullPackage ? (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Fee</span>
                      <span className="font-medium text-gray-900">
                        ₦{(selectedAttractions[0].price * numDays * 
                           (travellerInfo.partySize === 'couple' ? 1.5 : 1)).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Activities</span>
                      <span className="font-medium text-gray-900">
                        ₦{(selectedAttractions[0].accommodation?.activities
                          .filter(activity => activity.included)
                          .reduce((sum, activity) => sum + (activity.price || 0), 0) * 
                          (travellerInfo.partySize === 'couple' ? 2 : 1)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Attractions Total</span>
                      <span className="font-medium text-gray-900">
                        ₦{(selectedAttractions.reduce((sum, attr) => sum + attr.price, 0) * 
                           (travellerInfo.partySize === 'couple' ? 2 : 1)).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accommodation ({numDays} nights)</span>
                      <span className="font-medium text-gray-900">
                        ₦{(selectedHotel.price * numDays).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-3 border-t">
                <span className="text-gray-600">Taxes & Service Charge</span>
                <span className="font-medium text-gray-900">
                  ₦{PRICING.CURATION_FEE.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between pt-4 border-t">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-lg font-bold text-blue-600">
                  ₦{calculateTotal.toLocaleString()}
                </span>
              </div>

              {travellerInfo.wantsTransportQuote && (
                <div className="bg-amber-50 rounded-xl p-4 mt-6">
                  <p className="text-sm text-amber-800">
                    Transportation options and pricing will be sent to you separately after booking.
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 bg-gray-50 flex flex-col gap-3">
              <button
                onClick={() => onNext(calculateTotal)}
                className="w-full bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Complete Booking
              </button>
              <button
                onClick={onBack}
                className="w-full bg-white text-gray-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Change Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
