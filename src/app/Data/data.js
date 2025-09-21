import Facebook from '../assets/icons/facebook.jsx';
import Twitter from '../assets/icons/twitter.jsx';
import YouTube from '../assets/icons/Youtube.jsx';
import Instagram from '../assets/icons/Instagram.jsx';

export const Navlinks = [
  { name: 'Home', path: '/' },
  { name: 'Category', path: '/catergory' },
];
export const colorMap = {
  'Red': '#FF564F',
  'Apricot': '#FFB672',
  'Black': '#242B33',
  'Silver': '#CECECE',
  'Tan': '#FFC700',
  'Black & White': '#000000',
};
export const Currency = [
  { code: 'VND', name: 'VND', logo: '/icons/currency1.png' },
  { code: 'USD', name: 'United States Dollar', logo: '/icons/usd.png' },
  { code: 'EUR', name: 'Euro', logo: '/icons/eur.png' },
  { code: 'JPY', name: 'Japanese Yen', logo: '/icons/jpy.png' },
];
export const FilterGender = ["Male", "Female"];
export const FilterColor =["Red","Apricot","Black","Black & White","Silver","Tan"] ;
export const FilterBreed=["Small","Medium","Large"];
export const sortOptions = [
    "Popular",
    "Price: Low to High",
    "Price: High to Low",
];
export const SocialMediaIcons = [
  {
    name: 'Facebook',
    component: Facebook,
    url: 'https://facebook.com'
  },
  {
    name: 'Twitter',
    component: Twitter,
    url: 'https://twitter.com'
  },
  {
    name: 'YouTube',
    component: YouTube,
    url: 'https://youtube.com'
  },
  {
    name: 'Instagram',
    component: Instagram,
    url: 'https://instagram.com'
  }
];

export const PetFoodBrands = [
  { id: 1, name: 'Sheba', image: '/Images/Brands/Sheba.png' },
  { id: 2, name: 'Whiskas', image: '/Images/Brands/whiskas.png' },
  { id: 3, name: 'Pedigree', image: '/Images/Brands/Pedigree.png' },
  { id: 4, name: 'Good Day', image: '/Images/Brands/goodDay.png' },
  { id: 5, name: 'Felix', image: '/Images/Brands/felix.png' },
  { id: 6, name: 'Butcher', image: '/Images/Brands/butcher.png' },
  { id: 7, name: 'Bakers', image: '/Images/Brands/bakers.png' }
];
export const Dogs = [

  {
    "_id": 1,
    "SKU": 10001,
    "images": [
      "/Images/Dogs/pet1.png",
      "/Images/Dogs/GoldenRetriever/dog2.jpg",
      "/Images/Dogs/GoldenRetriever/dog3.jpg",
      "/Images/Dogs/GoldenRetriever/dog4.jpg"
    ],
    "age": "02 months",
    "size": "small",
    "color": ["white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "12-Oct-2022",
    "additionalInfo": "",
    "title": "MO231 - Pomeranian White",
    "price": 6900000,
    "gene": "Male"
  },
  {
    "_id": 2,
    "SKU": 10002,
    "images": [
      "/Images/Dogs/pet2.png",
      "/Images/Dogs/ShibaInu/dog2.png",
      "/Images/Dogs/ShibaInu/dog3.png",
      "/Images/Dogs/ShibaInu/dog4.png"
    ],
    "age": "03 months",
    "size": "medium",
    "color": ["tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "15-Oct-2022",
    "additionalInfo": "",
    "title": "MO502 - Poodle Tiny Yellow",
    "price": 4000000,
    "gene": "Male"
  },
  {
    "_id": 3,
    "SKU": 10003,
    "images": [
      "/Images/Dogs/pet3.png",
      "/Images/Dogs/GoldenRetriever/dog2.jpg",
      "/Images/Dogs/GoldenRetriever/dog3.jpg",
      "/Images/Dogs/GoldenRetriever/dog4.jpg"
    ],
    "age": "02 months",
    "size": "small",
    "color": ["silver"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "20-Oct-2022",
    "additionalInfo": "",
    "title": "MO512 - Alaskan Malamute Grey",
    "price": 8900000,
    "gene": "Male"
  },
  {
    "_id": 4,
    "SKU": 10004,
    "images": [
      "/Images/Dogs/pet5.png",
      "/Images/Dogs/ShibaInu/dog2.png",
      "/Images/Dogs/ShibaInu/dog3.png",
      "/Images/Dogs/ShibaInu/dog4.png"
    ],
    "age": "05 months",
    "size": "large",
    "color": ["Apricot"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "21-Oct-2022",
    "additionalInfo": "",
    "title": "MO231 - Pembroke Corgi Cream",
    "price": 8900000,
    "gene": "Female"
  },
  {
    "_id": 5,
    "SKU": 10005,
    "images": [
      "/Images/Dogs/pet4.png",
      "/Images/Dogs/GoldenRetriever/dog2.jpg",
      "/Images/Dogs/GoldenRetriever/dog3.jpg",
      "/Images/Dogs/GoldenRetriever/dog4.jpg"
    ],
    "age": "03 months",
    "size": "small",
    "color": ["silver"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "23-Oct-2022",
    "additionalInfo": "",
    "title": "MO512 - Alaskan Malamute Grey",
    "price": 7900000,
    "gene": "Female"
  },
  {
    "_id": 6,
    "SKU": 10006,
    "images": [
      "/Images/Dogs/pet7.png",
      "/Images/Dogs/ShibaInu/dog2.png",
      "/Images/Dogs/ShibaInu/dog3.png",
      "/Images/Dogs/ShibaInu/dog4.png"
    ],
    "age": "06 months",
    "size": "medium",
    "color": ["black"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "24-Oct-2022",
    "additionalInfo": "",
    "title": "MO502 - Pembroke Corgi Tricolor",
    "price": 9000000,
    "gene": "Female"
  },
  {
    "_id": 7,
    "SKU": 10007,
    "images": [
      "/Images/Dogs/pet6.png",
      "/Images/Dogs/GoldenRetriever/dog2.jpg",
      "/Images/Dogs/GoldenRetriever/dog3.jpg",
      "/Images/Dogs/GoldenRetriever/dog4.jpg"
    ],
    "age": "02 months",
    "size": "small",
    "color": ["white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "26-Oct-2022",
    "additionalInfo": "",
    "title": "MO231 - Pomeranian White",
    "price": 6500000,
    "gene": "Male"
  },
  {
    "_id": 8,
    "SKU": 10008,
    "images": [
      "/Images/Dogs/pet8.png",
      "/Images/Dogs/ShibaInu/dog2.png",
      "/Images/Dogs/ShibaInu/dog3.png",
      "/Images/Dogs/ShibaInu/dog4.png"
    ],
    "age": "02 months",
    "size": "medium",
    "color": ["apricot", "silver"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "27-Oct-2022",
    "additionalInfo": "",
    "title": "MO512 - Poodle Tiny Dairy Cow",
    "price": 5000000,
    "gene": "Male"
  },
  {
    "_id": 9,
    "SKU": 10009,
    "images": [
      "/Images/Dogs/pet8.png",
      "/Images/Dogs/GoldenRetriever/dog2.jpg",
      "/Images/Dogs/GoldenRetriever/dog3.jpg",
      "/Images/Dogs/GoldenRetriever/dog4.jpg"
    ],
    "age": "05 months",
    "size": "large",
    "color": ["black", "tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "28-Oct-2022",
    "additionalInfo": "",
    "title": "MO902 - German Shepherd Black/Tan",
    "price": 1400,
    "gene": "Male"
  }, {
 "_id": 10,
    "SKU": 10010,
    "images": [
      "/Images/Dogs/pet8.png",
      "/Images/Dogs/Husky/dog2.jpg",
      "/Images/Dogs/Husky/dog3.jpg",
      "/Images/Dogs/Husky/dog4.jpg"
    ],
    "age": "04 months",
    "size": "medium",
    "color": ["gray", "white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "30-Oct-2022",
    "additionalInfo": "",
    "title": "MO601 - Siberian Husky Gray/White",
    "price": 9500000,
    "gene": "Male"
  },
  {
    "_id": 11,
    "SKU": 10011,
    "images": [
      "/Images/Dogs/pet1.png",
      "/Images/Dogs/Poodle/dog2.jpg",
      "/Images/Dogs/Poodle/dog3.jpg",
      "/Images/Dogs/Poodle/dog4.jpg"
    ],
    "age": "03 months",
    "size": "small",
    "color": ["red"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "31-Oct-2022",
    "additionalInfo": "",
    "title": "MO620 - Toy Poodle Red",
    "price": 5600000,
    "gene": "Female"
  },
  {
    "_id": 12,
    "SKU": 10012,
    "images": [
      "/Images/Dogs/pet2.png",
      "/Images/Dogs/FrenchBulldog/dog2.jpg",
      "/Images/Dogs/FrenchBulldog/dog3.jpg",
      "/Images/Dogs/FrenchBulldog/dog4.jpg"
    ],
    "age": "05 months",
    "size": "medium",
    "color": ["apricot"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "01-Nov-2022",
    "additionalInfo": "",
    "title": "MO711 - French Bulldog Fawn",
    "price": 8700000,
    "gene": "Male"
  },
  {
    "_id": 13,
    "SKU": 10013,
    "images": [
      "/Images/Dogs/pet4.png",
      "/Images/Dogs/Beagle/dog2.jpg",
      "/Images/Dogs/Beagle/dog3.jpg",
      "/Images/Dogs/Beagle/dog4.jpg"
    ],
    "age": "02 months",
    "size": "small",
    "color": ["white", "tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "02-Nov-2022",
    "additionalInfo": "",
    "title": "MO830 - Beagle Tricolor",
    "price": 6200000,
    "gene": "Female"
  },
  {
    "_id": 14,
    "SKU": 10014,
    "images": [
      "/Images/Dogs/pet5.png",
      "/Images/Dogs/Dachshund/dog2.jpg",
      "/Images/Dogs/Dachshund/dog3.jpg",
      "/Images/Dogs/Dachshund/dog4.jpg"
    ],
    "age": "04 months",
    "size": "small",
    "color": ["black"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "03-Nov-2022",
    "additionalInfo": "",
    "title": "MO845 - Dachshund Chocolate",
    "price": 5800000,
    "gene": "Male"
  },
  {
    "_id": 15,
    "SKU": 10015,
    "images": [
      "/Images/Dogs/pet6.png",
      "/Images/Dogs/Corgi/dog2.jpg",
      "/Images/Dogs/Corgi/dog3.jpg",
      "/Images/Dogs/Corgi/dog4.jpg"
    ],
    "age": "06 months",
    "size": "medium",
    "color": ["red", "white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "04-Nov-2022",
    "additionalInfo": "",
    "title": "MO870 - Pembroke Welsh Corgi Red/White",
    "price": 9100000,
    "gene": "Female"
  },
  {
    "_id": 16,
    "SKU": 10016,
    "images": [
      "/Images/Dogs/pet9.png",
      "/Images/Dogs/GoldenRetriever/dog2.jpg",
      "/Images/Dogs/GoldenRetriever/dog3.jpg",
      "/Images/Dogs/GoldenRetriever/dog4.jpg"
    ],
    "age": "05 months",
    "size": "large",
    "color": ["tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "05-Nov-2022",
    "additionalInfo": "",
    "title": "MO900 - Golden Retriever",
    "price": 8800000,
    "gene": "Male"
  },
  {
    "_id": 17,
    "SKU": 10017,
    "images": [
      "/Images/Dogs/pet1.png",
      "/Images/Dogs/Samoyed/dog2.jpg",
      "/Images/Dogs/Samoyed/dog3.jpg",
      "/Images/Dogs/Samoyed/dog4.jpg"
    ],
    "age": "03 months",
    "size": "large",
    "color": ["white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "06-Nov-2022",
    "additionalInfo": "",
    "title": "MO915 - Samoyed White",
    "price": 9700000,
    "gene": "Female"
  },
  {
    "_id": 18,
    "SKU": 10018,
    "images": [
      "/Images/Dogs/pet2.png",
      "/Images/Dogs/ShibaInu/dog2.png",
      "/Images/Dogs/ShibaInu/dog3.png",
      "/Images/Dogs/ShibaInu/dog4.png"
    ],
    "age": "02 months",
    "size": "small",
    "color": ["white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "07-Nov-2022",
    "additionalInfo": "",
    "title": "MO930 - Shiba Inu Cream",
    "price": 7200000,
    "gene": "Male"
  },
  {
    "_id": 19,
    "SKU": 10019,
    "images": [
      "/Images/Dogs/pet13.png",
      "/Images/Dogs/Bulldog/dog2.jpg",
      "/Images/Dogs/Bulldog/dog3.jpg",
      "/Images/Dogs/Bulldog/dog4.jpg"
    ],
    "age": "06 months",
    "size": "large",
    "color": ["tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "08-Nov-2022",
    "additionalInfo": "",
    "title": "MO940 - English Bulldog Brindle",
    "price": 10500000,
    "gene": "Male"
  },
  {
    "_id": 20,
    "SKU": 10020,
    "images": [
      "/Images/Dogs/pet5.png",
      "/Images/Dogs/Chihuahua/dog2.jpg",
      "/Images/Dogs/Chihuahua/dog3.jpg",
      "/Images/Dogs/Chihuahua/dog4.jpg"
    ],
    "age": "02 months",
    "size": "small",
    "color": ["black", "tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "09-Nov-2022",
    "additionalInfo": "",
    "title": "MO950 - Chihuahua Black/Tan",
    "price": 4500000,
    "gene": "Female"
  },
  {
    "_id": 21,
    "SKU": 10021,
    "images": [
      "/Images/Dogs/pet4.png",
      "/Images/Dogs/BorderCollie/dog2.jpg",
      "/Images/Dogs/BorderCollie/dog3.jpg",
      "/Images/Dogs/BorderCollie/dog4.jpg"
    ],
    "age": "05 months",
    "size": "medium",
    "color": ["black", "white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "10-Nov-2022",
    "additionalInfo": "",
    "title": "MO960 - Border Collie Black/White",
    "price": 9300000,
    "gene": "Female"
  },
  {
    "_id": 22,
    "SKU": 10022,
    "images": [
      "/Images/Dogs/pet3.png",
      "/Images/Dogs/Pug/dog2.jpg",
      "/Images/Dogs/Pug/dog3.jpg",
      "/Images/Dogs/Pug/dog4.jpg"
    ],
    "age": "04 months",
    "size": "small",
    "color": ["black & white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "11-Nov-2022",
    "additionalInfo": "",
    "title": "MO970 - Pug Fawn",
    "price": 5200000,
    "gene": "Male"
  },
  {
    "_id": 23,
    "SKU": 10023,
    "images": [
      "/Images/Dogs/pet5.png",
      "/Images/Dogs/Maltese/dog2.jpg",
      "/Images/Dogs/Maltese/dog3.jpg",
      "/Images/Dogs/Maltese/dog4.jpg"
    ],
    "age": "03 months",
    "size": "small",
    "color": "white",
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "12-Nov-2022",
    "additionalInfo": "",
    "title": "MO980 - Maltese White",
    "price": 6400000,
    "gene": "Female"
  },
  {
    "_id": 24,
    "SKU": 10024,
    "images": [
      "/Images/Dogs/pet4.png",
      "/Images/Dogs/Akita/dog2.jpg",
      "/Images/Dogs/Akita/dog3.jpg",
      "/Images/Dogs/Akita/dog4.jpg"
    ],
    "age": "06 months",
    "size": "large",
    "color": ["red", "white"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "13-Nov-2022",
    "additionalInfo": "",
    "title": "MO990 - Akita Inu Red/White",
    "price": 10200000,
    "gene": "Male"
  },
  {
    "_id": 25,
    "SKU": 10025,
    "images": [
      "/Images/Dogs/pet9.png",
      "/Images/Dogs/Rottweiler/dog2.jpg",
      "/Images/Dogs/Rottweiler/dog3.jpg",
      "/Images/Dogs/Rottweiler/dog4.jpg"
    ],
    "age": "05 months",
    "size": "large",
    "color": ["black", "tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "14-Nov-2022",
    "additionalInfo": "",
    "title": "MO995 - Rottweiler Black/Tan",
    "price": 9800000,
    "gene": "Female"
  },
  {
    "_id": 26,
    "SKU": 10026,
    "images": [
      "/Images/Dogs/pet5.png",
      "/Images/Dogs/YorkshireTerrier/dog2.jpg",
      "/Images/Dogs/YorkshireTerrier/dog3.jpg",
      "/Images/Dogs/YorkshireTerrier/dog4.jpg"
    ],
    "age": "02 months",
    "size": "small",
    "color": ["black", "tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "15-Nov-2022",
    "additionalInfo": "",
    "title": "MO999 - Yorkshire Terrier Black/Gold",
    "price": 6000000,
    "gene": "Male"
  },
  {
    "_id": 27,
    "SKU": 10027,
    "images": [
      "/Images/Dogs/pet6.png",
      "/Images/Dogs/AustralianShepherd/dog2.jpg",
      "/Images/Dogs/AustralianShepherd/dog3.jpg",
      "/Images/Dogs/AustralianShepherd/dog4.jpg"
    ],
    "age": "04 months",
    "size": "medium",
    "color": ["black", "white", "tan"],
    "vaccinated": "Yes",
    "dewormed": "Yes",
    "cert": "Yes (MKA)",
    "microchip": "Yes",
    "location": "Vietnam",
    "published": "16-Nov-2022",
    "additionalInfo": "",
    "title": "MO1001 - Australian Shepherd Blue Merle",
    "price": 9400000,
    "gene": "Female"
  }
];

export const Products = [
  {
    "_id": 1,
    "SKU": 11001,
    "image": "/Images/Products/Zealand.png",
    "title": "Zealandia Deluxe Dog Salmon Pate",
    "product": "Dog Food",
    "size": "385gm",
    "price": 140,
    "present": "Free Toy & Free Shaker"
  },
  {
    "_id": 2,
    "SKU": 11002,
    "image": "/Images/Products/reflix.png",
    "title": "Reflex Plus Adult Cat Food Salmon",
    "product": "Cat Food",
    "size": "1.5kg",
    "price": 165,
    "present": "Free Toy & Free Shaker"
  },
  {
    "_id": 3,
    "SKU": 11003,
    "image": "/Images/Products/CatScratch.png",
    "title": "Cat scratching ball toy kitten sisal rope ball",
    "product": "Toy",
    "price": 1100,
    "present": "Free Cat Food"
  },
  {
    "_id": 4,
    "SKU": 11004,
    "image": "/Images/Products/cutePet.png",
    "title": "Cute Pet Cat Warm Nest",
    "product": "Toy",
    "price": 410,
    "present": "Free Cat Food"
  },
  {
    "_id": 5,
    "SKU": 11005,
    "image": "/Images/Products/omegagold.png",
    "title": "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    "product": "Dog Food",
    "size": "385mg",
    "price": 350,
    "present": "Free Toy & Free Shaker"
  },
  {
    "_id": 6,
    "SKU": 11006,
    "image": "/Images/Products/costumeFashion.png",
    "title": "Costumes Fashion Pet Clother Cowboy Rider",
    "product": "Costume",
    "size": "1.5kg",
    "price": 500
  },
  {
    "_id": 7,
    "SKU": 11007,
    "image": "/Images/Products/customeChicken.png",
    "title": "Costumes Chicken Drumstick Headband",
    "product": "Costume",
    "price": 400
  },
  {
    "_id": 8,
    "SKU": 11008,
    "image": "/Images/Products/PlushPetToy.png",
    "title": "Plush Pet Toy",
    "product": "Toy",
    "price": 300
  }
];

export const knowledge = [
  {
    "_id": 1,
    "image": "/Images/UsefullKnowledgeImages/usefulKnowledgeimg1.png",
    "tags": ["Pet knowledge"],
    "title": "What is a Pomeranian? How to Identify Pomeranian Dogs",
    "text": "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."
  },
  {
    "_id": 2,
    "image": "/Images/UsefullKnowledgeImages/usefulKnowledgeimg2.png",
    "tags": ["Pet knowledge"],
    "title": "Dog Diet You Need To Know",
    "text": "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
  },
  {
    "_id": 3,
    "image": "/Images/UsefullKnowledgeImages/usefulKnowledgeimg3.png",
    "tags": ["Pet knowledge"],
    "title": "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    "text": "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."
  }
];