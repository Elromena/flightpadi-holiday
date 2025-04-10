import { Hotel } from '../types';

export const hotels: Hotel[] = [
   // Ibadan Hotels
  {
    id: 'bon-nest',
    name: 'Bon Hotel Nest',
    description: 'Premier 4-star hotel in the heart of Ibadan.',
    image: 'https://bonhotels.com/wp-content/uploads/2022/10/nest-bodija-ibadan-main.jpg',
    roomImages: [
      'https://bonhotels.com/wp-content/uploads/2022/10/lekki-standard-room-images-3.png',
      'https://bonhotels.com/wp-content/uploads/2022/10/lekki-standard-room-images-1.png',
      'https://bonhotels.com/wp-content/uploads/2022/10/lekki-standard-room-images-2.png'
    ],
    price: 100000,
    destinationId: 'ibadan',
    features: ['Complementary breakfast', 'Wifi', 'Gym', 'Pool', 'Bar'],
    rating: 4.7
  },
{
id: 'self-ibadan',
name: 'I\'ll handle my accommodation',
description: 'Skip accommodation booking - perfect if you reside in Ibadan or have your own arrangements.',
image: 'https://cf.bstatic.com/static/img/theme-index/bg_placestostay/723e0fca72a9e45222ea74a1df3d79b544d009e0.jpg',
roomImages: [],
price: 0,
destinationId: 'ibadan',
features: ['Choose your location', 'Personal arrangements'],
rating: 5
},
  // Lagos Hotels
     {
    id: 'tillz-lagos',
    name: 'Tillz Hotels',
    description: 'Strategically located in the heart of the city with close proximity to some of the best beaches and attraction in Lagos.',
    image: 'https://images.trvl-media.com/lodging/65000000/64670000/64665900/64665834/830344ca.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    roomImages: [
      'https://images.trvl-media.com/lodging/65000000/64670000/64665900/64665834/aee730ba.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
      'https://images.trvl-media.com/lodging/65000000/64670000/64665900/64665834/e952e37c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
      'https://images.trvl-media.com/lodging/65000000/64670000/64665900/64665834/a7074a8a.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    ],
    price: 50000,
    destinationId: 'lagos',
    features: ['City View Rooms', 'Pool', 'Restaurant and Lounge'],
    rating: 4.8
  },
  {
    id: 'rembrandt-lagos',
    name: 'De Rembrandt Hotel',
    description: 'Classic 4-star hotel in the heart of Ikeja, just beside the City Mall with breathtaking view of the city.',
    image: 'https://derembrandthotels.com/wp-content/uploads/2019/02/1-1-1.jpg',
    roomImages: [
      'https://derembrandthotels.com/wp-content/uploads/2019/02/Standard-2-1000x550.jpg',
      'https://derembrandthotels.com/wp-content/uploads/2019/02/Hotel-Image-5.jpg',
      'https://derembrandthotels.com/wp-content/uploads/2019/02/Hotel-Image-7.jpg'
    ],
    price: 105000,
    destinationId: 'lagos',
    features: ['City View Rooms', 'Pool', 'Restaurant and Lounge'],
    rating: 4.8
  },
{
id: 'self-lagos',
name: 'I\'ll handle my accommodation',
description: 'Skip accommodation booking - perfect if you reside in Lagos or have your own arrangements.',
image: 'https://cf.bstatic.com/static/img/theme-index/bg_placestostay/723e0fca72a9e45222ea74a1df3d79b544d009e0.jpg',
roomImages: [],
price: 0,
destinationId: 'lagos',
features: ['Choose your location', 'Personal arrangements'],
rating: 5
},

  // Abuja Hotels
  {
    id: 'transcorp-hilton',
    name: 'Transcorp Hilton Abuja',
    description: 'Premier 5-star hotel in the heart of Nigeria\'s capital city.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    roomImages: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42'
    ],
    price: 1600,
    destinationId: 'abuja',
    features: ['Premium Dining', 'Spa Services', 'Tennis Courts', 'Pool', 'Executive Lounge'],
    rating: 4.7
  },
  {
    id: 'fraser-suites',
    name: 'Fraser Suites Abuja',
    description: 'Modern luxury apartments with stunning city views and premium amenities.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
    roomImages: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457',
      'https://images.unsplash.com/photo-1594560913095-8cf34baf3b0d'
    ],
    price: 1400,
    destinationId: 'abuja',
    features: ['Fully Equipped Kitchen', 'City Views', 'Fitness Center', 'Business Center', 'Room Service'],
    rating: 4.6
  },

  // Calabar Hotels
  {
    id: 'channels-view',
    name: 'Channels View Hotel',
    description: 'Premium hotel offering stunning views of the Calabar River.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    roomImages: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427'
    ],
    price: 1200,
    destinationId: 'calabar',
    features: ['River Views', 'Outdoor Pool', 'Local Cuisine', 'Spa Services', 'Free Parking'],
    rating: 4.5
  },
  {
    id: 'axari-hotel',
    name: 'Axari Hotel & Suites',
    description: 'Contemporary hotel with excellent amenities and central location.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    roomImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42'
    ],
    price: 1000,
    destinationId: 'calabar',
    features: ['Modern Rooms', 'Restaurant', 'Business Center', 'Fitness Room', 'Conference Facilities'],
    rating: 4.4
  },

  // Jos Hotels
  {
    id: 'hill-station',
    name: 'Hill Station Hotel',
    description: 'Historic hotel with stunning views of Jos Plateau.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    roomImages: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843',
      'https://images.unsplash.com/photo-1594560913095-8cf34baf3b0d'
    ],
    price: 900,
    destinationId: 'jos',
    features: ['Mountain Views', 'Colonial Architecture', 'Restaurant', 'Bar', 'Gardens'],
    rating: 4.3
  },
  {
    id: 'crispan-suites',
    name: 'Crispan Suites & Events',
    description: 'Modern hotel offering comfortable accommodation in a serene environment.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    roomImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061'
    ],
    price: 80000,
    destinationId: 'jos',
    features: ['Event Center', 'Restaurant', 'Free WiFi', 'Security', 'Parking'],
    rating: 4.2
  },

  // Port Harcourt Hotels
  {
    id: 'novotel-phc',
    name: 'Novotel Port Harcourt',
    description: 'International standard hotel with excellent business facilities.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    roomImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427'
    ],
    price: 130000,
    destinationId: 'port-harcourt',
    features: ['Business Center', 'Swimming Pool', 'Fitness Center', 'Multiple Restaurants', 'Bar'],
    rating: 4.6
  },
  {
    id: 'swiss-spirit',
    name: 'Swiss Spirit Hotel',
    description: 'Luxury hotel offering premium services and modern amenities.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    roomImages: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843',
      'https://images.unsplash.com/photo-1594560913095-8cf34baf3b0d'
    ],
    price: 120000,
    destinationId: 'port-harcourt',
    features: ['Spa', 'Pool', 'Fine Dining', 'Business Facilities', 'Gym'],
    rating: 4.5
  },

  // Benin Hotels
  {
    id: 'wells-carlton',
    name: 'Wells Carlton Hotel',
    description: 'Luxury hotel combining modern comfort with traditional hospitality.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    roomImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061'
    ],
    price: 110000,
    destinationId: 'benin',
    features: ['Swimming Pool', 'Spa', 'Restaurant', 'Business Center', 'Fitness Center'],
    rating: 4.7
  },
  {
    id: 'protea-benin',
    name: 'Protea Hotel Benin',
    description: 'Contemporary hotel offering international standard accommodation.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    roomImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42'
    ],
    price: 100000,
    destinationId: 'benin',
    features: ['Modern Rooms', 'Conference Facilities', 'Restaurant', 'Bar', 'Free WiFi'],
    rating: 4.5
  },

  // Uyo Hotels
  {
    id: 'monty-suites',
    name: 'Monty Suites',
    description: 'Premium hotel in the heart of Uyo with excellent amenities.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
    roomImages: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843',
      'https://images.unsplash.com/photo-1594560913095-8cf34baf3b0d'
    ],
    price: 95000,
    destinationId: 'uyo',
    features: ['Restaurant', 'Pool', 'Gym', 'Business Center', 'Free Parking'],
    rating: 4.4
  },
  {
    id: 'le-meridien',
    name: 'Le Meridien Uyo',
    description: 'Upscale hotel offering luxury accommodation and premium services.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    roomImages: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061'
    ],
    price: 115000,
    destinationId: 'uyo',
    features: ['Spa', 'Multiple Restaurants', 'Pool', 'Fitness Center', 'Conference Facilities'],
    rating: 4.6
  }
];
