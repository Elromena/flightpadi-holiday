export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export type AttractionType = 'regular' | 'full_package';

interface FullPackageAccommodation {
  roomImages: string[];
  amenities: string[];
  activities: {
    name: string;
    description: string;
    included: boolean;
    price?: number;
  }[];
  policies: {
    checkIn: string;
    checkOut: string;
  };
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  type: AttractionType;
  destinationId: string;
  price: number;
  accommodation?: FullPackageAccommodation;
}

export interface DestinationCardProps {
  destination: Destination;
  isSelected: boolean;
  isExpanded: boolean;
  onSelect: (id: string) => void;
  onExpand: (id: string) => void;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  image: string;
  roomImages: string[];
  price: number;
  destinationId: string;
  features: string[];
  rating: number;
}

export type TravelPartySize = 'single' | 'couple' | 'group';

export interface TravellerInfo {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  partySize: TravelPartySize;
  needsTransport: boolean;
  originCity: string;
  wantsTransportQuote: boolean;
}
