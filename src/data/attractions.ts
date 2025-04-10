import { Attraction } from '../types';

export const attractions: Attraction[] = [
  // Ibadan Regular Attractions
{
id: 'horse-riding-ib',
name: 'Go Horse Riding in Nature',
description: 'Enjoy a peaceful ride through nature trails as you connect with these magnificent animals.',
image: 'https://pbs.twimg.com/media/EsmHH_XXUAAqHje?format=jpg&name=4096x4096',
type: 'regular',
destinationId: 'ibadan',
price: 2000
},
{
id: 'paintball-ib',
name: 'Action-Packed Paintball',
description: 'Beat the opposing team in this tactical paintball arena and come out victorious.',
image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/56/2f/f1/ready-for-some-paintball.jpg?w=900&h=500&s=1',
type: 'regular',
destinationId: 'ibadan',
price: 5000
},
{
id: 'archery-ib',
name: 'Fun Archery Session',
description: 'Test your aiming skills with 12 arrows and unleash your inner hunting spirits.',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4fSHhCX0X4QHZl3JKXKgFZFzyrQShqtCcA&s',
type: 'regular',
destinationId: 'ibadan',
price: 3500
},
{
id: 'go-karting-ib',
name: 'Go-Karting Arena',
description: 'Ready your helmet and accelerate down this driving course as you race against time and other opponents to see who reaches the finish line first.',
image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
type: 'regular',
destinationId: 'ibadan',
price: 10000
},
{
id: 'agodi-water-park',
name: 'Family Water Park',
description: 'Splash, slide and swim in this exciting water park perfect for hot days.',
image: 'https://articles.connectnigeria.com/wp-content/uploads/2021/06/Agodi-Gardens-Ibadan-visitnigerianow-1-1-670x440-1.jpg',
type: 'regular',
destinationId: 'ibadan',
price: 2500
},
{
id: 'obstacle-course-ib',
name: 'Obstacle Course (Gauntlet)',
description: 'Test your stamina on this thrilling obstacle course that\'s designed to test your limits and keep your adrenaline pumping.',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYQ8E1ofYPBNU_p8VX7HQOA_UA-JQCFL1SQ&s',
type: 'regular',
destinationId: 'ibadan',
price: 20000
},
{
id: 'bowers-tower',
name: 'Visit the Bowers Tower',
description: 'Climb this historic 60-foot tower for breathtaking views of Ibadan and fascinating stories of the building\'s past.',
image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/The_Iconic_Bowers_Tower_Monument_-_Layipo%2C_Ibadan%2C_Nigeria._02.jpg',
type: 'regular',
destinationId: 'ibadan',
price: 2000
},
{
id: 'boat-cruise-ib',
name: 'Relaxing Boat Cruise',
description: 'Go on a relaxing boat ride and soak up the cool wind as you ride along the Eleyele waterfront.',
image: 'https://pbs.twimg.com/media/GA94N8xW4AACDpF?format=jpg&name=large',
type: 'regular',
destinationId: 'ibadan',
price: 8000
},
{
id: 'kayaking-ib',
name: 'Leisure Kayaking',
description: 'Enjoy 30 minutes of leisure kayaking along the Eleyele waterfront.',
image: 'https://helloib.com/wp-content/uploads/2024/01/IMG_3380-scaled.jpeg',
type: 'regular',
destinationId: 'ibadan',
price: 6000
},
  // Ibadan Full Package Attractions
  {
    id: 'iita-ibadan',
    name: 'IITA Nature Experience',
    description: 'Experience a unique blend of luxury and nature at IITA\'s International House, complete with recreational activities and serene surroundings.',
    image: 'https://hospitality.iita.org/wp-content/uploads/2024/03/PENISULA-2048x1365.jpg',
    type: 'full_package',
    destinationId: 'ibadan',
    price: 150000,
    accommodation: {
      roomImages: [
        'https://flightpadi.com/wp-content/uploads/iita-compound.jpg',
        'https://flightpadi.com/wp-content/uploads/iita-golf-course-2.jpg',
        'https://hospitality.iita.org/wp-content/uploads/elementor/thumbs/DSC_8440-q98c1xodar2tfttmfucswux6iceb3u37qtnsgj3sm8.jpg'
      ],
      amenities: [
      'Complimentary breakfast',
      'Golf course walk',
      'Swimming pool',
      'Gym facilities',
      'Tennis courts',
      'Snooker room',
      'Campus walking trails'
      ],
      activities: [
      {
name: 'Cycling',
description: 'Explore the beautiful campus grounds on a bicycle',
included: true,
price: 6000
},
{
name: 'Forest Walk',
description: 'Guided nature walk through scenic forest paths',
included: true,
price: 8000
},
{
name: 'Fishing',
description: 'Peaceful fishing experience with equipment provided',
included: true,
price: 10000
},
{
name: 'Bird Watching',
description: 'Observe diverse bird species in their natural habitat',
included: true,
price: 10000
},
{
name: 'Gym Session',
description: 'Access to fully equipped modern gym facilities',
included: true,
price: 5000
},
{
name: 'Group Aerobics',
description: 'Join energetic group fitness sessions',
included: false,
price: 0
},
{
name: 'In-Room Massage',
description: 'Relaxing massage service in your room',
included: false,
price: 0
},
{
name: 'Camping',
description: 'Overnight camping experience in designated areas',
included: false,
price: 0
},
{
name: 'Golf Lesson',
description: 'Professional golf instruction for 9 holes',
included: false,
price: 0
}
],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
      }
    }
  },
   // Lagos Regular Attractions
{
  id: 'landmark-upside-down-house',
  name: 'Landmark Upside Down House',
  description: 'Experience Nigeria\'s first upside-down house with mind-bending photo opportunities in rooms where everything is inverted. Enjoy interactive exhibits and optical illusions throughout this unique venue.',
  image: 'https://www.upsidedownhouse.ng/assets/images/udh.jpeg',
  type: 'regular',
  destinationId: 'lagos',
  price: 8500
},
  {
  id: 'ceracerni-pottery',
  name: 'Pottery Session at CeraCerni',
  description: 'Enjoy a guided pottery session with expert craftspeople. Create your own pottery piece to take home as a unique souvenir while learning about different pottery techniques.',
  image: 'https://www.ceracerniarthub.com/images/our-services/pottery.png',
  type: 'regular',
  destinationId: 'lagos',
  price: 30000
},
{
  id: 'ceracerni-hand-casting',
  name: 'Hand Casting at CeraCerni',
  description: 'Create a beautiful 3D sculpture of your hand as a lasting memory. This guided session allows you to capture every detail while learning about the art of casting from professional artists.',
  image: 'https://www.ceracerniarthub.com/images/our-services/handinhand.png',
  type: 'regular',
  destinationId: 'lagos',
  price: 35000
},
{
  id: 'ceracerni-spin-art',
  name: 'Spin Art at CeraCerni',
  description: 'Experience the joy of creating vibrant, unique artwork using centrifugal force. This fun, engaging activity lets you experiment with colors while creating your own abstract masterpiece to take home.',
  image: 'https://www.ceracerniarthub.com/images/services/artcycle.jpg',
  type: 'regular',
  destinationId: 'lagos',
  price: 40000
},
{
  id: 'sip-and-paint',
  name: 'Sip and Paint Experience',
  description: 'Unwind with a glass of wine while expressing your creativity on canvas. This relaxing session combines art with refreshments as expert instructors guide you through creating your own painting.',
  image: 'https://www.ceracerniarthub.com/images/our-services/painting.png',
  type: 'regular',
  destinationId: 'lagos',
  price: 25000
},
{
  id: 'water-zorbing',
  name: 'Water Zorbing Adventure',
  description: 'Experience the thrill of walking on water inside a transparent inflatable sphere. This unique activity combines fun, excitement, and laughter as you roll, tumble, and attempt to stay upright on the water surface.',
  image: 'https://nevsailwatersports.ie/wp-content/uploads/2020/11/Zorbing-5.png',
  type: 'regular',
  destinationId: 'lagos',
  price: 15000
},
{
  id: 'nike-art-gallery',
  name: 'Nike Art Gallery',
  description: 'Explore one of West Africa\'s largest art collections featuring over 8,000 diverse Nigerian artworks. Meet local artists and learn about contemporary Nigerian artistic expressions in this stunning architectural space.',
  image: 'https://nikeartfoundation.com/wp-content/uploads/2023/12/nike-art-gallery-lagos.jpg',
  type: 'regular',
  destinationId: 'lagos',
  price: 0
},
{
  id: 'lagos-kayaking',
  name: 'Scenic Kayaking Experience',
  description: 'Paddle through the serene waters around Lagos in your own kayak. Enjoy the peaceful surroundings, spot local wildlife, and get a unique perspective of the coastline while getting a great upper-body workout.',
  image: 'https://www.travelstart.com.ng/blog/wp-content/uploads/2017/11/kayaking.jpg',
  type: 'regular',
  destinationId: 'lagos',
  price: 15000
},
{
  id: 'lekki-conservation-centre',
  name: 'Lekki Conservation Centre',
  description: 'Walk along Africa\'s longest canopy walkway (401m) suspended above the forest floor. Explore this natural oasis within Lagos while spotting monkeys, birds, and other wildlife in their protected habitat. A perfect blend of adventure and ecotourism.',
  image: 'https://flightpadi.com/wp-content/uploads/2024/09/Longest_Net_Canopy_Walkway_in_Lekki_Conservation_Center._Lagogs._Nigeria.webp',
  type: 'regular',
  destinationId: 'lagos',
  price: 7500
},
{
  id: 'rufus-and-bee',
  name: 'Rufus and Bee Arcade Experience',
  description: 'Dive into Lagos\' premium gaming and entertainment center featuring state-of-the-art arcade games, bowling, virtual reality experiences, and more. Perfect for friends and family looking for indoor fun and friendly competition.',
  image: 'https://flightpadi.com/wp-content/uploads/rufus-and-bee.webp',
  type: 'regular',
  destinationId: 'lagos',
  price: 20000
},
{
  id: 'badagry-heritage-museum',
  name: 'Badagry Heritage Museum',
  description: 'Explore Nigeria\'s powerful history at this significant museum showcasing artifacts and exhibitions on the transatlantic slave trade and local cultural heritage.',
  image: 'https://flightpadi.com/wp-content/uploads/badagry-heritage-museum-1267x1536.jpg',
  type: 'regular',
  destinationId: 'lagos',
  price: 10000
}
  // add new data before this and always add a comma immediately after the last closed bracket before adding new data
];
