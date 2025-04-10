import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import type { DateRange } from 'react-day-picker';
import type { Attraction, Hotel } from './types';
import { DestinationPicker } from './stages/DestinationPicker';
import { DatePicker } from './stages/DatePicker';
import { AttractionsPicker } from './stages/AttractionsPicker';
import { AccommodationPicker } from './stages/AccommodationPicker';
import { BioDataCollector } from './stages/BioDataCollector.tsx';
import { SummaryPage } from './stages/SummaryPage';
import { PaymentSuccessPage } from './stages/PaymentSuccessPage';
import { PaymentFailedPage } from './stages/PaymentFailedPage';
import { PaymentCancelledPage } from './stages/PaymentCancelledPage';
import { useFlutterwave } from './hooks/useFlutterwave';
import { sendWebhook } from './services/webhook';
import { useBookingState } from './hooks/useBookingState';
import { destinations } from './data/destinations';
import { differenceInDays } from 'date-fns';
import type { TravellerInfo } from './types';

function BookingFlow() {
  const navigate = useNavigate();
  const { config: getFlutterwaveConfig } = useFlutterwave();
  const {
    selectedDestination,
    dateRange,
    selectedAttractions,
    selectedHotel,
    travellerInfo,
    stage,
    updateState
  } = useBookingState();

  const selectedPackageType = React.useMemo(() => {
    if (!selectedAttractions.length) return 'regular';
    return selectedAttractions[0].type;
  }, [selectedAttractions]);

  const packageAccommodation = React.useMemo(() => {
    if (selectedPackageType === 'full_package') {
      return selectedAttractions[0].name;
    }
    return undefined;
  }, [selectedPackageType, selectedAttractions]);

  return (
    <div className="min-h-screen bg-gray-100">
      {stage === 'destination' ? (
        <DestinationPicker
          selectedDestination={selectedDestination}
          onSelect={(destination) => updateState({ selectedDestination: destination })}
          onNext={() => updateState({ stage: 'dates' })}
        />
      ) : stage === 'dates' ? (
        <DatePicker
          selectedDestination={selectedDestination}
          dateRange={dateRange}
          onDateSelect={(range) => updateState({ dateRange: range })}
          onBack={() => updateState({ stage: 'destination' })}
          onNext={() => updateState({ stage: 'attractions' })}
        />
      ) : stage === 'attractions' && selectedDestination ? (
        <AttractionsPicker
          selectedDestination={selectedDestination}
          onBack={() => updateState({ stage: 'dates' })}
          onNext={(attractions) => {
            updateState({
              selectedAttractions: attractions,
              stage: 'accommodation'
            });
          }}
        />
      ) : stage === 'accommodation' && selectedDestination ? (
        <AccommodationPicker
          selectedDestination={selectedDestination}
          selectedPackageType={selectedPackageType}
          packageAccommodation={packageAccommodation}
          onBack={() => updateState({ stage: 'attractions' })}
          onNext={(hotel) => {
            updateState({
              selectedHotel: hotel,
              stage: 'bio'
            });
          }}
        />
      ) : stage === 'bio' && selectedDestination ? (
        <BioDataCollector
          selectedDestination={selectedDestination}
          selectedAttractions={selectedAttractions}
          selectedHotel={selectedHotel}
          dateRange={dateRange}
          onBack={() => updateState({ stage: 'accommodation' })}
          onNext={(info) => {
            updateState({
              travellerInfo: info,
              stage: 'summary'
            });
          }}
        />
      ) : stage === 'summary' && selectedDestination && dateRange?.from && dateRange?.to && travellerInfo ? (
        <SummaryPage
          selectedDestination={selectedDestination}
          dateRange={{ from: dateRange.from, to: dateRange.to }}
          selectedAttractions={selectedAttractions}
          selectedHotel={selectedHotel!}
          travellerInfo={travellerInfo}
          onBack={() => updateState({ stage: 'bio' })}
          onNext={(amount) => {
            // Send webhook for payment initiation
            sendWebhook({
              customer: {
                firstName: travellerInfo.firstName,
                lastName: travellerInfo.lastName,
                email: travellerInfo.email,
                phone: travellerInfo.whatsapp,
                partySize: travellerInfo.partySize,
                location: {
                  needsTransport: travellerInfo.needsTransport,
                  originCity: travellerInfo.originCity,
                  wantsTransportQuote: travellerInfo.wantsTransportQuote,
                },
              },
              trip: {
                destination: {
                  id: selectedDestination,
                  name: destinations.find(d => d.id === selectedDestination)?.name || '',
                },
                dates: dateRange?.from && dateRange?.to ? {
                  startDate: dateRange.from.toISOString(),
                  endDate: dateRange.to.toISOString(),
                  duration: differenceInDays(dateRange.to, dateRange.from),
                } : undefined,
                package: {
                  type: selectedPackageType,
                  attractions: selectedAttractions.map(attraction => ({
                    id: attraction.id,
                    name: attraction.name,
                    price: attraction.price,
                  })),
                  accommodation: selectedHotel ? {
                    id: selectedHotel.id,
                    name: selectedHotel.name,
                    price: selectedHotel.price,
                  } : undefined,
                },
              },
              stage: 'payment_initiated',
            }).catch(console.error);

            const config = getFlutterwaveConfig({
              amount,
              customerEmail: travellerInfo.email,
              customerName: `${travellerInfo.firstName} ${travellerInfo.lastName}`,
              customerPhone: travellerInfo.whatsapp,
              meta: {
                customer: {
                  firstName: travellerInfo.firstName,
                  lastName: travellerInfo.lastName,
                  email: travellerInfo.email,
                  phone: travellerInfo.whatsapp,
                  partySize: travellerInfo.partySize,
                  location: {
                    needsTransport: travellerInfo.needsTransport,
                    originCity: travellerInfo.originCity,
                    wantsTransportQuote: travellerInfo.wantsTransportQuote,
                  },
                },
                trip: {
                  destination: {
                    id: selectedDestination,
                    name: destinations.find(d => d.id === selectedDestination)?.name || '',
                  },
                  dates: dateRange?.from && dateRange?.to ? {
                    startDate: dateRange.from.toISOString(),
                    endDate: dateRange.to.toISOString(),
                    duration: differenceInDays(dateRange.to, dateRange.from),
                  } : undefined,
                  package: {
                    type: selectedPackageType,
                    attractions: selectedAttractions.map(attraction => ({
                      id: attraction.id,
                      name: attraction.name,
                      price: attraction.price,
                    })),
                    accommodation: selectedHotel ? {
                      id: selectedHotel.id,
                      name: selectedHotel.name,
                      price: selectedHotel.price,
                    } : undefined,
                  },
                },
              },
            });

            // @ts-ignore - FlutterWave types are not up to date
            window.FlutterwaveCheckout(config);
          }}
        />
      ) : null}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/book" replace />} />
          <Route path="/book" element={<BookingFlow />} />
          <Route path="/payment/success" element={<PaymentSuccessPage />} />
          <Route path="/payment/failed" element={<PaymentFailedPage />} />
          <Route path="/payment/cancelled" element={<PaymentCancelledPage />} />
          <Route path="*" element={<Navigate to="/book" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
