const Places = [
  {
    id: 1,
    name: "Manali",
    state: "Himachal Pradesh",
    img: "/images/destinations/manali/hero.jpg",
    rating: 4.8,
    weather: "15°C",
    budget: "₹15,000",
    description: "Manali is a high-altitude Himalayan resort town famous for snow-capped mountains, pine forests, river rafting, and adventure sports.",
    images: [
      "/images/destinations/manali/hero.jpg",
      "/images/destinations/manali/1.jpg",
      "/images/destinations/manali/2.jpg",
      "/images/destinations/manali/3.jpg",
      "/images/destinations/manali/4.jpg"
    ],
    hotels: ["The Himalayan", "Snow Valley Resort", "ManuAllaya Resort", "Solang Valley Resort"],
    food: ["Siddu", "Himachali Dham", "Babru", "Fresh Trout Fish", "Apple Pie"],
    attractions: ["Solang Valley", "Hadimba Temple", "Rohtang Pass", "Jogini Waterfalls"],
    hiddenGems: ["Sethan Valley (Igloo Village)", "Sajla Waterfalls", "Old Manali Bohemian Alley"],
    reviews: [
      { author: "Aditya Sharma", rating: 5, date: "August 12, 2026", comment: "Visiting Manali was breathtaking. Solang Valley paragliding is a must-do!", tag: "Family Trip" },
      { author: "Priya Patel", rating: 4.8, date: "July 24, 2026", comment: "The local Siddu with ghee was divine. Old Manali cafes have fantastic live music vibes.", tag: "Solo Traveler" }
    ],
    bestTime: "October - June"
  },
  {
    id: 2,
    name: "Goa",
    state: "Goa",
    img: "/images/destinations/goa/hero.jpg",
    rating: 4.7,
    weather: "30°C",
    budget: "₹18,000",
    description: "Goa is India's premier beach paradise renowned for golden sands, vibrant nightlife, Portuguese colonial architecture, and fresh seafood.",
    images: [
      "/images/destinations/goa/hero.jpg",
      "/images/destinations/goa/1.jpg",
      "/images/destinations/goa/2.jpg",
      "/images/destinations/goa/3.jpg",
      "/images/destinations/goa/4.jpg"
    ],
    hotels: ["Taj Fort Aguada", "W Goa", "Holiday Inn Resort", "Alila Diwa Goa"],
    food: ["Goan Fish Curry", "Prawn Balchao", "Bebinca", "Pork Vindaloo", "Feni"],
    attractions: ["Baga Beach", "Aguada Fort", "Basilica of Bom Jesus", "Dudhsagar Falls"],
    hiddenGems: ["Butterfly Beach", "Cola Beach Lagoon", "Fontainhas Latin Quarter"],
    reviews: [
      { author: "Rohan Kapoor", rating: 4.9, date: "August 5, 2026", comment: "Sunset at Chapora Fort and dining at beach shacks made this trip unforgettable.", tag: "Friends Trip" },
      { author: "Ananya Roy", rating: 4.6, date: "July 15, 2026", comment: "The Portuguese lanes of Fontainhas are pure postcard material.", tag: "Couple Trip" }
    ],
    bestTime: "November - March"
  },
  {
    id: 3,
    name: "Jaipur",
    state: "Rajasthan",
    img: "/images/destinations/jaipur/hero.jpg",
    rating: 4.6,
    weather: "32°C",
    budget: "₹12,000",
    description: "Jaipur, the Pink City, boasts magnificent royal palaces, grand hill forts, bustling bazaars, and vibrant Rajasthani heritage.",
    images: [
      "/images/destinations/jaipur/hero.jpg",
      "/images/destinations/jaipur/1.jpg",
      "/images/destinations/jaipur/2.jpg",
      "/images/destinations/jaipur/3.jpg",
      "/images/destinations/jaipur/4.jpg"
    ],
    hotels: ["Rambagh Palace", "ITC Rajputana", "Trident Jaipur", "Samode Haveli"],
    food: ["Dal Baati Churma", "Ghewar", "Pyaaz Kachori", "Laal Maas", "Mawa Kachori"],
    attractions: ["Hawa Mahal", "Amer Fort", "City Palace", "Jantar Mantar"],
    hiddenGems: ["Panna Meena Ka Kund Stepwell", "Galtaji Monkey Temple", "Nahargarh Sunset Point"],
    reviews: [
      { author: "Kavita Rao", rating: 4.7, date: "August 1, 2026", comment: "Amer fort sound and light show is majestic. Don't miss Rawat's Pyaaz Kachori!", tag: "Family Trip" },
      { author: "David Miller", rating: 4.5, date: "June 20, 2026", comment: "Rich history and incredible architecture at every corner of the old city.", tag: "Solo Traveler" }
    ],
    bestTime: "October - March"
  },
  {
    id: 4,
    name: "Shimla",
    state: "Himachal Pradesh",
    img: "/images/destinations/shimla/hero.jpg",
    rating: 4.5,
    weather: "16°C",
    budget: "₹14,000",
    description: "Shimla, the Queen of Hills, is famous for its colonial-era Ridge, historic toy train, neo-Gothic Christ Church, and scenic mountain views.",
    images: [
      "/images/destinations/shimla/hero.jpg",
      "/images/destinations/shimla/1.jpg",
      "/images/destinations/shimla/2.jpg",
      "/images/destinations/shimla/3.jpg",
      "/images/destinations/shimla/4.jpg"
    ],
    hotels: ["The Oberoi Cecil", "Wildflower Hall", "Radisson Hotel Shimla", "Woodville Palace"],
    food: ["Chha Gosht", "Madra", "Himachali Thali", "Kullu Trout", "Sidu"],
    attractions: ["The Mall Road", "Jakhu Temple", "Kalka-Shimla Toy Train", "Christ Church"],
    hiddenGems: ["Summer Hill", "Mashobra Green Valley", "Chadwick Falls"],
    reviews: [
      { author: "Simran Kaur", rating: 4.6, date: "July 29, 2026", comment: "Toy train ride through pine forests is a memory of a lifetime.", tag: "Family Trip" }
    ],
    bestTime: "March - June & Dec - Jan"
  },
  {
    id: 5,
    name: "Kasol",
    state: "Himachal Pradesh",
    img: "/images/destinations/kasol/hero.jpg",
    rating: 4.7,
    weather: "14°C",
    budget: "₹10,000",
    description: "Nestled along the pristine Parvati River, Kasol is a haven for trekkers, nature lovers, backpackers, and Israeli cafe culture enthusiasts.",
    images: [
      "/images/destinations/kasol/hero.jpg",
      "/images/destinations/kasol/1.jpg",
      "/images/destinations/kasol/2.jpg",
      "/images/destinations/kasol/3.jpg",
      "/images/destinations/kasol/4.jpg"
    ],
    hotels: ["The Hosteller Kasol", "Parvati Kuteer", "Echor Palm Bliss", "River View Resort"],
    food: ["Shakshuka", "Falafel Hummus Platter", "Apple Crumble", "Thukpa", "Nutella Crepes"],
    attractions: ["Parvati River Trail", "Manikaran Sahib Gurudwara", "Chalal Trek", "Tosh Village"],
    hiddenGems: ["Rasol Village Trek", "Kheer Ganga Hot Springs", "Grahan Village"],
    reviews: [
      { author: "Kabir Mehta", rating: 4.8, date: "August 10, 2026", comment: "The peaceful sounds of the Parvati River and incredible mountain cafes.", tag: "Solo Traveler" }
    ],
    bestTime: "April - June & Sept - Nov"
  },
  {
    id: 6,
    name: "Dharamshala",
    state: "Himachal Pradesh",
    img: "/images/destinations/dharamshala/hero.jpg",
    rating: 4.7,
    weather: "18°C",
    budget: "₹13,000",
    description: "The spiritual abode of the Dalai Lama, Dharamshala and McLeod Ganj blend Tibetan Buddhist traditions, serene cedar hills, and scenic mountain treks.",
    images: [
      "/images/destinations/dharamshala/hero.jpg",
      "/images/destinations/dharamshala/1.jpg",
      "/images/destinations/dharamshala/2.jpg",
      "/images/destinations/dharamshala/3.jpg",
      "/images/destinations/dharamshala/4.jpg"
    ],
    hotels: ["Hyatt Regency Dharamshala", "Fortune Park Moksha", "Norling Guest House", "D's Casa"],
    food: ["Momos & Tingmo", "Tibetan Butter Tea", "Bhagsu Cake", "Laphing", "Thukpa"],
    attractions: ["Namgyal Monastery", "Triund Trek", "Bhagsunag Waterfall", "HPCA Cricket Stadium"],
    hiddenGems: ["St. John in the Wilderness", "Naddi Sunset Point", "Norbulingka Institute"],
    reviews: [
      { author: "Neha Sen", rating: 4.9, date: "July 18, 2026", comment: "Triund trek offers panoramic views of the Dhauladhar range. Bhagsu cake was delicious.", tag: "Friends Trip" }
    ],
    bestTime: "March - June & Sept - Dec"
  },
  {
    id: 7,
    name: "Dalhousie",
    state: "Himachal Pradesh",
    img: "/images/destinations/dalhousie/hero.jpg",
    rating: 4.5,
    weather: "16°C",
    budget: "₹12,500",
    description: "A tranquil colonial hill town built across five hills, surrounded by dense deodar pine forests and snow-dusted Dhauladhar panoramas.",
    images: [
      "/images/destinations/dalhousie/hero.jpg",
      "/images/destinations/dalhousie/1.jpg",
      "/images/destinations/dalhousie/2.jpg",
      "/images/destinations/dalhousie/3.jpg",
      "/images/destinations/dalhousie/4.jpg"
    ],
    hotels: ["Grand View Hotel", "JK Clarks Exotica", "Elgin Hall", "Fortune Park Dalhousie"],
    food: ["Himachali Madra", "Chha Gosht", "Fresh Apple Jams", "Kullu Trout"],
    attractions: ["Khajjiar (Mini Switzerland)", "Dainkund Peak", "Panchpula", "St. John's Church"],
    hiddenGems: ["Kalatop Wildlife Sanctuary", "Ganji Pahari", "Subhash Baoli"],
    reviews: [
      { author: "Sunil Verma", rating: 4.6, date: "August 3, 2026", comment: "Khajjiar meadow feels right out of a fairy tale. Very peaceful atmosphere.", tag: "Family Trip" }
    ],
    bestTime: "March - June"
  },
  {
    id: 8,
    name: "Leh",
    state: "Ladakh",
    img: "/images/destinations/leh/hero.jpg",
    rating: 4.9,
    weather: "10°C",
    budget: "₹28,000",
    description: "Leh Ladakh is a dramatic high-altitude desert world of turquoise glacial lakes, rugged passes, centuries-old monasteries, and stupas.",
    images: [
      "/images/destinations/leh/hero.jpg",
      "/images/destinations/leh/1.jpg",
      "/images/destinations/leh/2.jpg",
      "/images/destinations/leh/3.jpg",
      "/images/destinations/leh/4.jpg"
    ],
    hotels: ["The Grand Dragon Ladakh", "Stok Palace Heritage", "Gomang Boutique Hotel", "Chamba Camp"],
    food: ["Skyu", "Chhurpi Cheese", "Butter Tea", "Momo Platter", "Thukpa Soup"],
    attractions: ["Pangong Tso Lake", "Nubra Valley & Hunder Dunes", "Khardung La Pass", "Thiksey Monastery"],
    hiddenGems: ["Tso Moriri Lake", "Turtuk Village", "Magnetic Hill", "Alchi Monastery"],
    reviews: [
      { author: "Vikram Malhotra", rating: 5, date: "August 14, 2026", comment: "Pangong Lake colors changing through the day is mind blowing. Best road trip on earth.", tag: "Adventure Trip" }
    ],
    bestTime: "May - September"
  },
  {
    id: 9,
    name: "Srinagar",
    state: "Jammu & Kashmir",
    img: "/images/destinations/srinagar/hero.jpg",
    rating: 4.8,
    weather: "17°C",
    budget: "₹20,000",
    description: "The summer capital of Kashmir, Srinagar mesmerizes travelers with wooden houseboats on Dal Lake, Shikara boat rides, Mughal gardens, and saffron valleys.",
    images: [
      "/images/destinations/srinagar/hero.jpg",
      "/images/destinations/srinagar/1.jpg",
      "/images/destinations/srinagar/2.jpg",
      "/images/destinations/srinagar/3.jpg",
      "/images/destinations/srinagar/4.jpg"
    ],
    hotels: ["The Lalit Grand Palace", "Vivanta Dal View", "Wangnoo Houseboats", "Radisson Srinagar"],
    food: ["Kashmiri Wazwan", "Rogan Josh", "Kahwa Tea", "Modur Pulao", "Gushtaba"],
    attractions: ["Dal Lake Shikara", "Shalimar Bagh", "Nishat Garden", "Shankaracharya Temple"],
    hiddenGems: ["Nigeen Lake Quiet Houseboats", "Pari Mahal Sunset", "Dachigam National Park"],
    reviews: [
      { author: "Zoya Khan", rating: 5, date: "August 2, 2026", comment: "Staying on a wooden houseboat and sipping hot Kahwa was magical.", tag: "Family Trip" }
    ],
    bestTime: "April - October"
  },
  {
    id: 10,
    name: "Gulmarg",
    state: "Jammu & Kashmir",
    img: "/images/destinations/gulmarg/hero.jpg",
    rating: 4.8,
    weather: "8°C",
    budget: "₹22,000",
    description: "Known as the Meadow of Flowers and India's winter wonderland, Gulmarg features the world's second-highest operating cable car and premier ski slopes.",
    images: [
      "/images/destinations/gulmarg/hero.jpg",
      "/images/destinations/gulmarg/1.jpg",
      "/images/destinations/gulmarg/2.jpg",
      "/images/destinations/gulmarg/3.jpg",
      "/images/destinations/gulmarg/4.jpg"
    ],
    hotels: ["The Khyber Himalayan Resort", "Hotel Highlands Park", "Nedous Hotel", "Grand Mumtaz"],
    food: ["Dum Aloo Kashmiri", "Rista", "Yakhni", "Sheermal", "Noon Chai"],
    attractions: ["Gulmarg Gondola", "Apharwat Peak", "St. Mary's Church", "Strawberry Valley"],
    hiddenGems: ["Alpather Frozen Lake", "Drung Waterfall", "Ferozepur Nallah"],
    reviews: [
      { author: "Arjun Das", rating: 4.9, date: "July 28, 2026", comment: "The Gondola Phase 2 view of snow peaks is supreme. Winter snow is pure bliss.", tag: "Couple Trip" }
    ],
    bestTime: "December - March (Snow) & May - Sept"
  },
  {
    id: 11,
    name: "Rishikesh",
    state: "Uttarakhand",
    img: "/images/destinations/rishikesh/hero.jpg",
    rating: 4.7,
    weather: "24°C",
    budget: "₹9,000",
    description: "The Yoga Capital of the World, situated along the sacred Ganges river, offering white-water rafting, ashrams, evening aartis, and cliff bungee jumps.",
    images: [
      "/images/destinations/rishikesh/hero.jpg",
      "/images/destinations/rishikesh/1.jpg",
      "/images/destinations/rishikesh/2.jpg",
      "/images/destinations/rishikesh/3.jpg",
      "/images/destinations/rishikesh/4.jpg"
    ],
    hotels: ["Taj Rishikesh Resort", "Aloha on the Ganges", "The Roseate Ganges", "Zostel Rishikesh"],
    food: ["Ayurvedic Satvik Meals", "Aloo Poori", "Masala Chai", "Lassi", "Woodfired Pizzas"],
    attractions: ["Triveni Ghat Evening Aarti", "Laxman Jhula & Ram Jhula", "White Water River Rafting", "Beatles Ashram"],
    hiddenGems: ["Neer Garh Waterfall", "Vashishta Gufa Cave", "Kunjapuri Sunrise Temple"],
    reviews: [
      { author: "Tanvi Joshi", rating: 4.8, date: "August 8, 2026", comment: "The spiritual evening Aarti and thrilling 16km rafting down the rapids were unmatched.", tag: "Friends Trip" }
    ],
    bestTime: "September - May"
  },
  {
    id: 12,
    name: "Mussoorie",
    state: "Uttarakhand",
    img: "/images/destinations/mussoorie/hero.jpg",
    rating: 4.5,
    weather: "17°C",
    budget: "₹13,000",
    description: "Mussoorie, the Queen of the Hills in Garhwal, features green rolling slopes, dramatic Doon valley viewpoints, waterfalls, and colonial libraries.",
    images: [
      "/images/destinations/mussoorie/hero.jpg",
      "/images/destinations/mussoorie/1.jpg",
      "/images/destinations/mussoorie/2.jpg",
      "/images/destinations/mussoorie/3.jpg",
      "/images/destinations/mussoorie/4.jpg"
    ],
    hotels: ["JW Marriott Walnut Grove", "Welcomhotel The Savoy", "Fortune Resort Grace", "Rokeby Manor"],
    food: ["Garhwali Kafuli", "Singhori", "Tibetan Dumplings", "Warm Hot Chocolate"],
    attractions: ["Kempty Falls", "Gun Hill Ropeway", "Camel's Back Road", "Mall Road"],
    hiddenGems: ["Landour Bakehouse & Char Dukan", "George Everest Peak", "Jharipani Falls"],
    reviews: [
      { author: "Deepak Rawat", rating: 4.6, date: "August 11, 2026", comment: "Landour feels so quiet and charming. George Everest peak sunset is magical.", tag: "Couple Trip" }
    ],
    bestTime: "March - June & Sept - Nov"
  },
  {
    id: 13,
    name: "Nainital",
    state: "Uttarakhand",
    img: "/images/destinations/nainital/hero.jpg",
    rating: 4.6,
    weather: "16°C",
    budget: "₹12,000",
    description: "A charming hill resort centered around the eye-shaped emerald Naini Lake, enveloped by seven verdant mountain peaks and colonial charm.",
    images: [
      "/images/destinations/nainital/hero.jpg",
      "/images/destinations/nainital/1.jpg",
      "/images/destinations/nainital/2.jpg",
      "/images/destinations/nainital/3.jpg",
      "/images/destinations/nainital/4.jpg"
    ],
    hotels: ["The Naini Retreat", "Manu Maharani", "Shervani Hilltop", "The Pavilion"],
    food: ["Baadi & Bhatt ki Churkani", "Kumaoni Raita", "Bal Mithai", "Ras", "Momos"],
    attractions: ["Naini Lake Boating", "Naina Devi Temple", "Snow View Point Cable Car", "Mall Road"],
    hiddenGems: ["Tiffin Top (Dorothy's Seat)", "Pangot Bird Sanctuary", "Kilbury Forest View"],
    reviews: [
      { author: "Ritu Garg", rating: 4.7, date: "July 20, 2026", comment: "Evening boat ride on Naini lake with glistening city lights was serene.", tag: "Family Trip" }
    ],
    bestTime: "March - June & Sept - Dec"
  },
  {
    id: 14,
    name: "Auli",
    state: "Uttarakhand",
    img: "/images/destinations/auli/hero.jpg",
    rating: 4.8,
    weather: "6°C",
    budget: "₹22,000",
    description: "India's premier skiing destination surrounded by majestic coniferous forests and commanding uninterrupted views of Nanda Devi peak.",
    images: [
      "/images/destinations/auli/hero.jpg",
      "/images/destinations/auli/1.jpg",
      "/images/destinations/auli/2.jpg",
      "/images/destinations/auli/3.jpg",
      "/images/destinations/auli/4.jpg"
    ],
    hotels: ["The Royal Village Auli", "Cliff Top Club", "Blue Poppy Resort", "GMVN Ski Resort"],
    food: ["Garhwali Fannah", "Chainsoo", "Singal", "Warm Maggi & Tea on slopes"],
    attractions: ["Auli Ski Resort Slopes", "Auli Ropeway (Cable Car)", "Auli Artificial Lake", "Joshimath"],
    hiddenGems: ["Gorson Bugyal Trek", "Kwani Bugyal Meadow", "Chenab Lake"],
    reviews: [
      { author: "Manish Negi", rating: 4.9, date: "July 12, 2026", comment: "The views of Nanda Devi and Trishul peaks from the cable car are unforgettable.", tag: "Adventure Trip" }
    ],
    bestTime: "December - March (Skiing) & May - Oct"
  },
  {
    id: 15,
    name: "Jim Corbett",
    state: "Uttarakhand",
    img: "/images/destinations/jim-corbett/hero.jpg",
    rating: 4.7,
    weather: "25°C",
    budget: "₹18,000",
    description: "India's oldest national park, famed for Bengal tiger safaris, wild elephant herds, lush Sal riverine forests, and luxury jungle lodges.",
    images: [
      "/images/destinations/jim-corbett/hero.jpg",
      "/images/destinations/jim-corbett/1.jpg",
      "/images/destinations/jim-corbett/2.jpg",
      "/images/destinations/jim-corbett/3.jpg",
      "/images/destinations/jim-corbett/4.jpg"
    ],
    hotels: ["Taj Corbett Resort & Spa", "The Den Corbett", "Aahana Wilderness Resort", "Namah Resort"],
    food: ["Kumaoni Thali", "Bhaang ki Chutney", "Jungle BBQ", "Kafli"],
    attractions: ["Dhikala Safari Zone", "Bijrani Tiger Trail", "Corbett Falls", "Garjiya Devi Temple"],
    hiddenGems: ["Sitabani Forest Reserve", "Koshi Riverbank Picnic", "Corbett Museum Heritage"],
    reviews: [
      { author: "Sanjay Singhal", rating: 4.8, date: "August 6, 2026", comment: "Spotted a Royal Bengal tiger on our early morning Dhikala safari! Thrilling experience.", tag: "Family Trip" }
    ],
    bestTime: "November - June"
  },
  {
    id: 16,
    name: "Varanasi",
    state: "Uttar Pradesh",
    img: "/images/destinations/varanasi/hero.jpg",
    rating: 4.8,
    weather: "29°C",
    budget: "₹9,000",
    description: "One of the world's oldest continually inhabited cities, Varanasi is the spiritual core of India with mesmerizing Ghats, Ganga Aarti ceremonies, and ancient lanes.",
    images: [
      "/images/destinations/varanasi/hero.jpg",
      "/images/destinations/varanasi/1.jpg",
      "/images/destinations/varanasi/2.jpg",
      "/images/destinations/varanasi/3.jpg",
      "/images/destinations/varanasi/4.jpg"
    ],
    hotels: ["BrijRama Palace", "Taj Ganges", "Radisson Hotel Varanasi", "Amritara Suryauday Haveli"],
    food: ["Banarasi Paan", "Kachori Jalebi", "Malaiyo (Winter sweet)", "Tamatar Chaat", "Lassi in Kulhad"],
    attractions: ["Dashashwamedh Ghat Aarti", "Kashi Vishwanath Temple", "Sunrise Ganga Boat Ride", "Assi Ghat"],
    hiddenGems: ["Sarnath Buddhist Heritage", "Manikarnika Ghat Sunset View", "Ramnagar Fort"],
    reviews: [
      { author: "Aakash Tripathi", rating: 5, date: "August 13, 2026", comment: "The Grand Ganga Aarti at Dashashwamedh Ghat gives goosebumps. Tamatar chaat is delicious.", tag: "Solo Traveler" }
    ],
    bestTime: "October - March"
  },
  {
    id: 17,
    name: "Agra",
    state: "Uttar Pradesh",
    img: "/images/destinations/agra/hero.jpg",
    rating: 4.8,
    weather: "31°C",
    budget: "₹10,000",
    description: "Home to the monumental Taj Mahal, Agra captures the zenith of Mughal architectural grandeur, royal gardens, and marble craftsmanship.",
    images: [
      "/images/destinations/agra/hero.jpg",
      "/images/destinations/agra/1.jpg",
      "/images/destinations/agra/2.jpg",
      "/images/destinations/agra/3.jpg",
      "/images/destinations/agra/4.jpg"
    ],
    hotels: ["The Oberoi Amarvilas", "ITC Mughal", "Taj Hotel & Convention Centre", "Courtyard by Marriott"],
    food: ["Agra Petha", "Bedmi Poori & Aloo Sabzi", "Mughlai Biryani", "Jalebi Rabri"],
    attractions: ["Taj Mahal at Sunrise", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh Viewpoint"],
    hiddenGems: ["Tomb of I'timad-ud-Daulah (Baby Taj)", "Akbar's Tomb Sikandra", "Kinari Bazaar"],
    reviews: [
      { author: "Elena Rostova", rating: 5, date: "July 22, 2026", comment: "The symmetry and white marble glow of the Taj Mahal at dawn is utterly breathtaking.", tag: "Couple Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 18,
    name: "Lucknow",
    state: "Uttar Pradesh",
    img: "/images/destinations/lucknow/hero.jpg",
    rating: 4.6,
    weather: "28°C",
    budget: "₹11,000",
    description: "The city of Nawabs, known for its refined etiquette, grand architectural marvels like the Bhool Bhulaiya, Chikankari textiles, and royal Awadhi cuisine.",
    images: [
      "/images/destinations/lucknow/hero.jpg",
      "/images/destinations/lucknow/1.jpg",
      "/images/destinations/lucknow/2.jpg",
      "/images/destinations/lucknow/3.jpg",
      "/images/destinations/lucknow/4.jpg"
    ],
    hotels: ["Taj Mahal Lucknow", "Hyatt Regency Lucknow", "Renaissance Lucknow Hotel", "Lebua Lucknow"],
    food: ["Galouti Kebabs (Tunday)", "Awadhi Dum Biryani", "Sheermal", "Shahi Tukda", "Kulfi Falooda"],
    attractions: ["Bara Imambara & Bhool Bhulaiya", "Rumi Darwaza", "Chota Imambara", "Hazratganj Market"],
    hiddenGems: ["Dilkusha Kothi Ruins", "Ambedkar Memorial Park", "Chowk Food Alley"],
    reviews: [
      { author: "Mohit Srivastava", rating: 4.8, date: "August 3, 2026", comment: "Tunday Kababi's Galouti kebabs melt in your mouth. The maze at Bara Imambara is incredible.", tag: "Foodie Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 19,
    name: "Udaipur",
    state: "Rajasthan",
    img: "/images/destinations/udaipur/hero.jpg",
    rating: 4.9,
    weather: "27°C",
    budget: "₹18,000",
    description: "The City of Lakes and Venice of the East, Udaipur is a romantic wonderland of white marble palaces shimmering over Lake Pichola and the Aravallis.",
    images: [
      "/images/destinations/udaipur/hero.jpg",
      "/images/destinations/udaipur/1.jpg",
      "/images/destinations/udaipur/2.jpg",
      "/images/destinations/udaipur/3.jpg",
      "/images/destinations/udaipur/4.jpg"
    ],
    hotels: ["Taj Lake Palace", "The Leela Palace Udaipur", "The Oberoi Udaivilas", "Fateh Prakash Palace"],
    food: ["Dal Baati Churma", "Gatte ki Sabzi", "Ker Sangri", "Mirchi Vada", "Kulhad Chai"],
    attractions: ["City Palace Complex", "Lake Pichola Boat Cruise", "Jag Mandir", "Saheliyon-ki-Bari"],
    hiddenGems: ["Monsoon Palace (Sajjangarh) Sunset", "Ambrai Ghat Evening View", "Bagore Ki Haveli Folk Show"],
    reviews: [
      { author: "Siddharth Sen", rating: 5, date: "August 15, 2026", comment: "Dine on the rooftop overlooking Lake Pichola illuminated at night. Pure magic.", tag: "Couple Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 20,
    name: "Jaisalmer",
    state: "Rajasthan",
    img: "/images/destinations/jaisalmer/hero.jpg",
    rating: 4.8,
    weather: "30°C",
    budget: "₹15,000",
    description: "The Golden City of Rajasthan, famous for its living yellow sandstone fort, golden sand dunes, camel safaris, and desert starlit camping.",
    images: [
      "/images/destinations/jaisalmer/hero.jpg",
      "/images/destinations/jaisalmer/1.jpg",
      "/images/destinations/jaisalmer/2.jpg",
      "/images/destinations/jaisalmer/3.jpg",
      "/images/destinations/jaisalmer/4.jpg"
    ],
    hotels: ["Suryagarh Jaisalmer", "Jaisalmer Marriott Resort", "Desert Luxury Camp", "Hotel Rang Mahal"],
    food: ["Rajasthani Ker Sangri", "Pyaaz Kachori", "Ghotua Ladoo", "Lal Maas", "Bajre ki Roti"],
    attractions: ["Jaisalmer Fort (Sonar Qila)", "Sam Sand Dunes Safari", "Patwon Ki Haveli", "Gadisar Lake"],
    hiddenGems: ["Kuldhara Abandoned Ghost Village", "Khaba Fort Desert View", "Tanot Mata Temple"],
    reviews: [
      { author: "Varun Bajaj", rating: 4.9, date: "August 9, 2026", comment: "Glamping under the Thar desert stars with Rajasthani folk music was extraordinary.", tag: "Adventure Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 21,
    name: "Jodhpur",
    state: "Rajasthan",
    img: "/images/destinations/jodhpur/hero.jpg",
    rating: 4.7,
    weather: "31°C",
    budget: "₹13,000",
    description: "The Blue City, dominated by the towering Mehrangarh Fort that overlooks an ocean of blue-painted houses, stepwells, and royal cenotaphs.",
    images: [
      "/images/destinations/jodhpur/hero.jpg",
      "/images/destinations/jodhpur/1.jpg",
      "/images/destinations/jodhpur/2.jpg",
      "/images/destinations/jodhpur/3.jpg",
      "/images/destinations/jodhpur/4.jpg"
    ],
    hotels: ["Umaid Bhawan Palace", "RAAS Jodhpur", "Taj Hari Mahal", "Welcomhotel Jodhpur"],
    food: ["Mawa Kachori", "Mirchi Bada", "Makhaniya Lassi", "Dal Bati", "Ghevar"],
    attractions: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace Museum", "Clock Tower Market"],
    hiddenGems: ["Toorji Ka Jhalra Stepwell", "Mandore Gardens", "Flying Fox Zipline at Fort"],
    reviews: [
      { author: "Pooja Hegde", rating: 4.8, date: "July 31, 2026", comment: "Mehrangarh Fort is the best preserved fort in India. Ziplining across the ramparts was thrilling.", tag: "Friends Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 22,
    name: "Mount Abu",
    state: "Rajasthan",
    img: "/images/destinations/mount-abu/hero.jpg",
    rating: 4.4,
    weather: "20°C",
    budget: "₹11,000",
    description: "The only hill station in Rajasthan, Mount Abu is situated among forested Aravalli hills, housing ancient carved marble Dilwara Jain temples.",
    images: [
      "/images/destinations/mount-abu/hero.jpg",
      "/images/destinations/mount-abu/1.jpg",
      "/images/destinations/mount-abu/2.jpg",
      "/images/destinations/mount-abu/3.jpg",
      "/images/destinations/mount-abu/4.jpg"
    ],
    hotels: ["WelcomHeritage Connaught House", "Cama Rajputana Club Resort", "Hotel Hillock", "Sterling Mount Abu"],
    food: ["Dal Baati", "Rabri", "Ghewar", "Gujarati Thali"],
    attractions: ["Dilwara Jain Temples", "Nakki Lake Boating", "Guru Shikhar Peak", "Sunset Point"],
    hiddenGems: ["Achalgarh Fort", "Trevor's Crocodile Tank", "Toad Rock View"],
    reviews: [
      { author: "Karan Patel", rating: 4.5, date: "August 4, 2026", comment: "The intricate marble carvings of Dilwara temples are unrivaled anywhere in the world.", tag: "Family Trip" }
    ],
    bestTime: "Year-Round (Best Oct - March)"
  },
  {
    id: 23,
    name: "Mumbai",
    state: "Maharashtra",
    img: "/images/destinations/mumbai/hero.jpg",
    rating: 4.7,
    weather: "29°C",
    budget: "₹20,000",
    description: "The City of Dreams, Mumbai blends colonial Victorian Gothic architecture with sea-facing promenades, Bollywood culture, and energetic street life.",
    images: [
      "/images/destinations/mumbai/hero.jpg",
      "/images/destinations/mumbai/1.jpg",
      "/images/destinations/mumbai/2.jpg",
      "/images/destinations/mumbai/3.jpg",
      "/images/destinations/mumbai/4.jpg"
    ],
    hotels: ["The Taj Mahal Palace", "The St. Regis Mumbai", "Trident Nariman Point", "JW Marriott Juhu"],
    food: ["Vada Pav", "Pav Bhaji", "Bombil Fry (Bombay Duck)", "Bun Maska Chai", "Pani Puri"],
    attractions: ["Gateway of India", "Marine Drive (Queen's Necklace)", "Elephanta Caves", "Chhatrapati Shivaji Maharaj Terminus"],
    hiddenGems: ["Bandra Bandstand Fort", "Kala Ghoda Arts District", "Sassoon Docks Morning Market"],
    reviews: [
      { author: "Rajesh Kulkarni", rating: 4.8, date: "August 16, 2026", comment: "Sitting by Marine Drive watching the waves and enjoying a fresh Vada Pav is pure emotion.", tag: "Solo Traveler" }
    ],
    bestTime: "October - March"
  },
  {
    id: 24,
    name: "Lonavala",
    state: "Maharashtra",
    img: "/images/destinations/lonavala/hero.jpg",
    rating: 4.5,
    weather: "22°C",
    budget: "₹10,000",
    description: "A beloved weekend getaway nestled in the Sahyadri mountains, famous for lush green waterfalls during monsoons, ancient caves, and chikki confectioneries.",
    images: [
      "/images/destinations/lonavala/hero.jpg",
      "/images/destinations/lonavala/1.jpg",
      "/images/destinations/lonavala/2.jpg",
      "/images/destinations/lonavala/3.jpg",
      "/images/destinations/lonavala/4.jpg"
    ],
    hotels: ["The Machan Eco Resort", "Fariyas Resort Lonavala", "Della Resorts", "Radisson Resort & Spa"],
    food: ["Lonavala Chikki", "Fudge", "Hot Corn Poha & Pakoras", "Misal Pav", "Vada Pav"],
    attractions: ["Tiger's Leap Viewpoint", "Bhushi Dam", "Karla & Bhaja Caves", "Lohagad Fort"],
    hiddenGems: ["Pawna Lake Camping", "Korigad Fort Trek", "Rajmachi Fort Panoramas"],
    reviews: [
      { author: "Swati Deshmukh", rating: 4.6, date: "July 26, 2026", comment: "Monsoon trek to Lohagad Fort with clouds floating through the walls was surreal.", tag: "Friends Trip" }
    ],
    bestTime: "July - September (Monsoon) & Oct - March"
  },
  {
    id: 25,
    name: "Mahabaleshwar",
    state: "Maharashtra",
    img: "/images/destinations/mahabaleshwar/hero.jpg",
    rating: 4.6,
    weather: "20°C",
    budget: "₹13,000",
    description: "Famous for strawberry farms, misty valleys, cascading waterfalls, and colonial hill station charm atop the Western Ghats.",
    images: [
      "/images/destinations/mahabaleshwar/hero.jpg",
      "/images/destinations/mahabaleshwar/1.jpg",
      "/images/destinations/mahabaleshwar/2.jpg",
      "/images/destinations/mahabaleshwar/3.jpg",
      "/images/destinations/mahabaleshwar/4.jpg"
    ],
    hotels: ["Le Méridien Mahabaleshwar", "Brightland Resort & Spa", "Evershine Resort", "Citrus Chambers"],
    food: ["Fresh Strawberries with Cream", "Corn Frankies", "Mulberry Ice Cream", "Pithla Bhakri"],
    attractions: ["Arthur's Seat Point", "Venna Lake Boating", "Mapro Garden", "Pratapgad Fort"],
    hiddenGems: ["Lingmala Waterfall", "Elephant's Head Point", "Old Mahabaleshwar Temple"],
    reviews: [
      { author: "Abhishek More", rating: 4.7, date: "August 7, 2026", comment: "Mapro garden strawberry with whipped cream is legendary. Great cool weather.", tag: "Family Trip" }
    ],
    bestTime: "October - June"
  },
  {
    id: 26,
    name: "Pune",
    state: "Maharashtra",
    img: "/images/destinations/pune/hero.jpg",
    rating: 4.5,
    weather: "26°C",
    budget: "₹12,000",
    description: "The cultural capital of Maharashtra and an educational hub, featuring Peshwa heritage forts, Osho ashram tranquility, and thriving cafe culture.",
    images: [
      "/images/destinations/pune/hero.jpg",
      "/images/destinations/pune/1.jpg",
      "/images/destinations/pune/2.jpg",
      "/images/destinations/pune/3.jpg",
      "/images/destinations/pune/4.jpg"
    ],
    hotels: ["JW Marriott Hotel Pune", "The Ritz-Carlton Pune", "Conrad Pune", "Sheraton Grand"],
    food: ["Puneri Misal Pav", "Bakharwadi", "Mango Mastani", "Pithla Bhakri", "Kayani Bakery Shrewsbury Biscuits"],
    attractions: ["Aga Khan Palace", "Shaniwar Wada", "Sinhagad Fort", "Dagdusheth Ganpati Temple"],
    hiddenGems: ["Vetal Tekdi Morning Walk", "Pashan Lake", "Raja Dinkar Kelkar Museum"],
    reviews: [
      { author: "Chinmay Gokhale", rating: 4.6, date: "August 11, 2026", comment: "Katta Misal and a glass of Sujata Mastani after visiting Sinhagad fort is the quintessential Pune day.", tag: "Solo Traveler" }
    ],
    bestTime: "July - February"
  },
  {
    id: 27,
    name: "Munnar",
    state: "Kerala",
    img: "/images/destinations/munnar/hero.jpg",
    rating: 4.8,
    weather: "18°C",
    budget: "₹16,000",
    description: "Famous for endless rolling hills of manicured emerald tea plantations, cool misty air, exotic flora like the Neelakurinji, and mountain waterfalls.",
    images: [
      "/images/destinations/munnar/hero.jpg",
      "/images/destinations/munnar/1.jpg",
      "/images/destinations/munnar/2.jpg",
      "/images/destinations/munnar/3.jpg",
      "/images/destinations/munnar/4.jpg"
    ],
    hotels: ["Fragrant Nature Munnar", "The Panoramic Getaway", "Windermere Estate", "Tea County Munnar"],
    food: ["Kerala Sadya Feast", "Appam with Ishtu", "Malabar Parotta & Curry", "Spiced Tea"],
    attractions: ["Eravikulam National Park (Nilgiri Tahr)", "Mattupetty Dam", "Kolukkumalai Tea Estate", "Attukal Waterfalls"],
    hiddenGems: ["Top Station Cloud View", "Marayoor Sandalwood Forest", "Anamudi Peak Base"],
    reviews: [
      { author: "Karthik Nair", rating: 5, date: "August 14, 2026", comment: "The sunrise at Kolukkumalai with tea overlooking a blanket of clouds was the best view in India.", tag: "Couple Trip" }
    ],
    bestTime: "September - May"
  },
  {
    id: 28,
    name: "Alleppey",
    state: "Kerala",
    img: "/images/destinations/alleppey/hero.jpg",
    rating: 4.8,
    weather: "28°C",
    budget: "₹18,000",
    description: "The Venice of the East, famous for tranquil overnight houseboat cruises navigating serene palm-fringed backwaters, lagoons, and paddy fields.",
    images: [
      "/images/destinations/alleppey/hero.jpg",
      "/images/destinations/alleppey/1.jpg",
      "/images/destinations/alleppey/2.jpg",
      "/images/destinations/alleppey/3.jpg",
      "/images/destinations/alleppey/4.jpg"
    ],
    hotels: ["Kumarakom Lake Resort", "Spice Coast Cruises Houseboat", "Punnamada Resort", "Uday Backwater Resort"],
    food: ["Karimeen Pollichathu (Pearl Spot Fish)", "Duck Roast", "Kappa & Fish Curry", "Appam", "Payasam"],
    attractions: ["Alleppey Backwaters Cruise", "Alappuzha Beach & Lighthouse", "Vembanad Lake", "Marari Beach"],
    hiddenGems: ["Kuttanad Below-Sea Farming", "Pathiramanal Island Bird Haven", "Champakulam Kalloorkadu Church"],
    reviews: [
      { author: "Reshma Varghese", rating: 4.9, date: "August 2, 2026", comment: "Gliding through backwaters on a traditional wooden houseboat eating Karimeen fish was heavenly.", tag: "Family Trip" }
    ],
    bestTime: "November - February"
  },
  {
    id: 29,
    name: "Kochi",
    state: "Kerala",
    img: "/images/destinations/kochi/hero.jpg",
    rating: 4.7,
    weather: "29°C",
    budget: "₹15,000",
    description: "A historic coastal port blending Portuguese, Dutch, British colonial history, iconic Chinese fishing nets, spice bazaars, and contemporary art biennales.",
    images: [
      "/images/destinations/kochi/hero.jpg",
      "/images/destinations/kochi/1.jpg",
      "/images/destinations/kochi/2.jpg",
      "/images/destinations/kochi/3.jpg",
      "/images/destinations/kochi/4.jpg"
    ],
    hotels: ["Brunton Boatyard", "Grand Hyatt Kochi Bolgatty", "Fragrant Nature Fort Kochi", "Old Harbour Hotel"],
    food: ["Kerala Prawn Roast", "Fish Moilee", "Beef Fry with Malabar Parotta", "Puttu and Kadala Curry"],
    attractions: ["Fort Kochi Chinese Fishing Nets", "Mattancherry Jewish Synagogue", "Santa Cruz Cathedral Basilica", "Marine Drive Kochi"],
    hiddenGems: ["Jew Town Antique Alley", "Kochi-Muziris Biennale Pavilions", "Kumbalangi Model Tourism Village"],
    reviews: [
      { author: "Luke Henderson", rating: 4.8, date: "July 19, 2026", comment: "Walking down Jew Town and watching the fishermen operate Chinese nets at sunset is wonderful.", tag: "Solo Traveler" }
    ],
    bestTime: "October - March"
  },
  {
    id: 30,
    name: "Wayanad",
    state: "Kerala",
    img: "/images/destinations/wayanad/hero.jpg",
    rating: 4.7,
    weather: "21°C",
    budget: "₹14,000",
    description: "A green highland district in Kerala with prehistoric rock caves, spice and coffee plantations, wildlife sanctuaries, and heart-shaped mountain lakes.",
    images: [
      "/images/destinations/wayanad/hero.jpg",
      "/images/destinations/wayanad/1.jpg",
      "/images/destinations/wayanad/2.jpg",
      "/images/destinations/wayanad/3.jpg",
      "/images/destinations/wayanad/4.jpg"
    ],
    hotels: ["Vythiri Resort", "Arayal Resorts", "Mountain Shadows Resort", "Tranquil Resort"],
    food: ["Malabar Biryani", "Bamboo Rice Payasam", "Spiced Tapioca (Kappa)", "Kerala Porotta"],
    attractions: ["Banasura Sagar Dam", "Edakkal Prehistoric Caves", "Chembra Peak Heart Lake Trek", "Soochipara Falls"],
    hiddenGems: ["Kuruva Island River Bamboo Raft", "Muthanga Wildlife Jungle Trail", "Neelimala Viewpoint"],
    reviews: [
      { author: "Deepu Thomas", rating: 4.8, date: "August 12, 2026", comment: "Chembra peak trek to the heart-shaped lake surrounded by mist is incredible.", tag: "Adventure Trip" }
    ],
    bestTime: "October - May"
  },
  {
    id: 31,
    name: "Ooty",
    state: "Tamil Nadu",
    img: "/images/destinations/ooty/hero.jpg",
    rating: 4.6,
    weather: "15°C",
    budget: "₹14,000",
    description: "The Queen of Hill Stations in the Nilgiris, celebrated for tea gardens, the UNESCO heritage Nilgiri Mountain Toy Train, botanical gardens, and pine woods.",
    images: [
      "/images/destinations/ooty/hero.jpg",
      "/images/destinations/ooty/1.jpg",
      "/images/destinations/ooty/2.jpg",
      "/images/destinations/ooty/3.jpg",
      "/images/destinations/ooty/4.jpg"
    ],
    hotels: ["Savoy - IHCL SeleQtions", "Sterling Ooty Fern Hill", "Fortune Resort Sullivan Court", "Sinclairs Retreat"],
    food: ["Homemade Ooty Chocolates", "Nilgiri Tea", "South Indian Thali", "Fresh Strawberry Pastries", "Varkey Biscuit"],
    attractions: ["Nilgiri Toy Train Ride", "Ooty Botanical Gardens", "Doddabetta Peak", "Ooty Lake Boating"],
    hiddenGems: ["Pykara Lake & Waterfalls", "Avalanche Lake Sanctuary", "Needle Rock View Point"],
    reviews: [
      { author: "Anitha Raman", rating: 4.7, date: "August 1, 2026", comment: "Toy train ride through tunnels and tea valleys is magical. Don't forget to buy handmade chocolates.", tag: "Family Trip" }
    ],
    bestTime: "March - June & Oct - Feb"
  },
  {
    id: 32,
    name: "Kodaikanal",
    state: "Tamil Nadu",
    img: "/images/destinations/kodaikanal/hero.jpg",
    rating: 4.6,
    weather: "16°C",
    budget: "₹13,000",
    description: "The Princess of Hill Stations, renowned for its star-shaped lake, misty cliff walks, eucalyptus forests, and Kurunji flowers.",
    images: [
      "/images/destinations/kodaikanal/hero.jpg",
      "/images/destinations/kodaikanal/1.jpg",
      "/images/destinations/kodaikanal/2.jpg",
      "/images/destinations/kodaikanal/3.jpg",
      "/images/destinations/kodaikanal/4.jpg"
    ],
    hotels: ["The Tamara Kodai", "Carlton Hotel Kodaikanal", "Sterling Kodai Lake", "Villa Retreat"],
    food: ["Homemade Truffles", "Masala Chai", "Chettinad Pepper Chicken", "Tibetan Dumplings"],
    attractions: ["Kodaikanal Star Lake", "Coaker's Walk", "Pillar Rocks", "Bryant Park"],
    hiddenGems: ["Vattakanal Dolphin's Nose", "Berijam Lake Forest", "Pine Forest Mist Walk"],
    reviews: [
      { author: "Pradeep Chandran", rating: 4.8, date: "July 25, 2026", comment: "Coaker's walk covered in mist and chilling at Dolphin's nose in Vattakanal was awesome.", tag: "Solo Traveler" }
    ],
    bestTime: "September - May"
  },
  {
    id: 33,
    name: "Chennai",
    state: "Tamil Nadu",
    img: "/images/destinations/chennai/hero.jpg",
    rating: 4.5,
    weather: "31°C",
    budget: "₹14,000",
    description: "The cultural gateway of South India, famous for the world's second-longest urban beach (Marina Beach), Carnatic music, Dravidian temples, and filter coffee.",
    images: [
      "/images/destinations/chennai/hero.jpg",
      "/images/destinations/chennai/1.jpg",
      "/images/destinations/chennai/2.jpg",
      "/images/destinations/chennai/3.jpg",
      "/images/destinations/chennai/4.jpg"
    ],
    hotels: ["The Leela Palace Chennai", "Taj Coromandel", "ITC Grand Chola", "Park Hyatt Chennai"],
    food: ["Authentic Filter Coffee", "Crispy Masala Dosa", "Chettinad Seafood", "Idli Sambar Podi", "Murukku Sandwich"],
    attractions: ["Kapaleeshwarar Temple (Mylapore)", "Marina Beach Promenade", "San Thome Basilica", "Government Museum Egmore"],
    hiddenGems: ["DakshinaChitra Heritage Village", "Theosophical Society Banyan Tree", "Mahabalipuram Shore Temple Day Trip"],
    reviews: [
      { author: "Meera Sundaram", rating: 4.6, date: "August 5, 2026", comment: "Morning filter coffee in Mylapore followed by temple bells is pure tranquility.", tag: "Family Trip" }
    ],
    bestTime: "November - February"
  },
  {
    id: 34,
    name: "Mysore",
    state: "Karnataka",
    img: "/images/destinations/mysore/hero.jpg",
    rating: 4.7,
    weather: "25°C",
    budget: "₹11,000",
    description: "The Heritage City of Karnataka, renowned for the lavish illuminated Mysore Palace, sandalwood craft, silk sarees, and royal Dasara celebrations.",
    images: [
      "/images/destinations/mysore/hero.jpg",
      "/images/destinations/mysore/1.jpg",
      "/images/destinations/mysore/2.jpg",
      "/images/destinations/mysore/3.jpg",
      "/images/destinations/mysore/4.jpg"
    ],
    hotels: ["Grand Mercure Mysore", "Radisson Blu Plaza Hotel Mysore", "Royal Orchid Metropole", "Lalitha Mahal Palace"],
    food: ["Mysore Pak Sweet", "Mysore Masala Dosa", "Mylari Butter Dosa", "Bisi Bele Bath", "Filter Kaapi"],
    attractions: ["Mysore Palace Illumination", "Chamundeshwari Temple", "Brindavan Gardens Musical Fountain", "St. Philomena's Church"],
    hiddenGems: ["Karanji Lake Butterfly Park", "Srirangapatna Tipu Sultan Fort", "Ranganathittu Bird Sanctuary"],
    reviews: [
      { author: "Harish Gowda", rating: 4.9, date: "August 10, 2026", comment: "Seeing 100,000 bulbs light up Mysore Palace on Sunday evening left us speechless.", tag: "Family Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 35,
    name: "Coorg",
    state: "Karnataka",
    img: "/images/destinations/coorg/hero.jpg",
    rating: 4.7,
    weather: "20°C",
    budget: "₹15,000",
    description: "Scotland of India, celebrated for aromatic arabica coffee and cardamom plantations, waterfalls, misty Brahmagiri hills, and Kodava hospitality.",
    images: [
      "/images/destinations/coorg/hero.jpg",
      "/images/destinations/coorg/1.jpg",
      "/images/destinations/coorg/2.jpg",
      "/images/destinations/coorg/3.jpg",
      "/images/destinations/coorg/4.jpg"
    ],
    hotels: ["The Tamara Coorg", "Taj Madikeri Resort & Spa", "Evolve Back Coorg", "Heritage Resort Coorg"],
    food: ["Pandi Curry (Coorgi Pork)", "Kadambuttu (Rice Dumplings)", "Akki Roti", "Fresh Roasted Coffee", "Bamboo Shoot Curry"],
    attractions: ["Abbey Falls", "Raja's Seat Sunset Point", "Namdroling Golden Temple (Bylakuppe)", "Dubare Elephant Camp"],
    hiddenGems: ["Mandalpatti 4x4 Jeep Safari", "Tadiandamol Peak Trek", "Honnamana Kere Sacred Lake"],
    reviews: [
      { author: "Divya Nambiar", rating: 4.9, date: "July 27, 2026", comment: "Mandalpatti jeep ride through foggy green hills and staying inside a coffee plantation was heavenly.", tag: "Couple Trip" }
    ],
    bestTime: "October - April"
  },
  {
    id: 36,
    name: "Hampi",
    state: "Karnataka",
    img: "/images/destinations/hampi/hero.jpg",
    rating: 4.9,
    weather: "28°C",
    budget: "₹11,000",
    description: "A UNESCO World Heritage marvel of boulder-strewn landscapes and magnificent ruins of the Vijayanagara Empire, stone chariots, and sacred temples.",
    images: [
      "/images/destinations/hampi/hero.jpg",
      "/images/destinations/hampi/1.jpg",
      "/images/destinations/hampi/2.jpg",
      "/images/destinations/hampi/3.jpg",
      "/images/destinations/hampi/4.jpg"
    ],
    hotels: ["Evolve Back Kamalapura Palace", "Heritage Resort Hampi", "Hampi's Boulders Resort", "Hyatt Place Hampi"],
    food: ["South Indian Banana Leaf Thali", "Nutella Banana Pancakes", "Falafel Rolls", "Coconut Water"],
    attractions: ["Vijaya Vittala Temple & Stone Chariot", "Virupaksha Temple", "Matanga Hill Sunrise", "Lotus Mahal & Elephant Stables"],
    hiddenGems: ["Sanapur Lake Coracle Boat Ride", "Hippie Island Sunset Point", "Anjaneya Hill (Monkey Temple)"],
    reviews: [
      { author: "Girish Kulkarni", rating: 5, date: "August 8, 2026", comment: "Watching the golden sunrise from Matanga Hill overlooking ancient stone temples is magical.", tag: "Solo Traveler" }
    ],
    bestTime: "October - March"
  },
  {
    id: 37,
    name: "Bengaluru",
    state: "Karnataka",
    img: "/images/destinations/bengaluru/hero.jpg",
    rating: 4.6,
    weather: "24°C",
    budget: "₹16,000",
    description: "The Garden City and Silicon Valley of India, famed for pleasant year-round weather, lush parks, craft microbreweries, and technological innovation.",
    images: [
      "/images/destinations/bengaluru/hero.jpg",
      "/images/destinations/bengaluru/1.jpg",
      "/images/destinations/bengaluru/2.jpg",
      "/images/destinations/bengaluru/3.jpg",
      "/images/destinations/bengaluru/4.jpg"
    ],
    hotels: ["The Ritz-Carlton Bangalore", "The Leela Palace Bengaluru", "Taj West End", "ITC Gardenia"],
    food: ["Benne Masala Dosa (CTR/Vidyarthi Bhavan)", "Filter Coffee", "Craft Beers & Wings", "Bisi Bele Bath", "Mangalore Buns"],
    attractions: ["Lalbagh Botanical Garden Glass House", "Bangalore Palace", "Cubbon Park", "Vidhana Soudha"],
    hiddenGems: ["Nandi Hills Sunrise Drive", "National Gallery of Modern Art", "Church Street Bookstores & Cafes"],
    reviews: [
      { author: "Arun Balaji", rating: 4.7, date: "August 13, 2026", comment: "Morning walk in Cubbon park followed by crisp butter dosa at CTR is unmatched.", tag: "Solo Traveler" }
    ],
    bestTime: "Year-Round (Best Oct - March)"
  },
  {
    id: 38,
    name: "Hyderabad",
    state: "Telangana",
    img: "/images/destinations/hyderabad/hero.jpg",
    rating: 4.7,
    weather: "28°C",
    budget: "₹14,000",
    description: "The City of Pearls and Nizams, renowned worldwide for Dum Biryani, the iconic 16th-century Charminar, Golconda Fort echoes, and high-tech corridors.",
    images: [
      "/images/destinations/hyderabad/hero.jpg",
      "/images/destinations/hyderabad/1.jpg",
      "/images/destinations/hyderabad/2.jpg",
      "/images/destinations/hyderabad/3.jpg",
      "/images/destinations/hyderabad/4.jpg"
    ],
    hotels: ["Taj Falaknuma Palace", "ITC Kohenur", "Park Hyatt Hyderabad", "The Westin Hyderabad Mindspace"],
    food: ["Hyderabadi Dum Biryani", "Haleem", "Mirchi ka Salan", "Irani Chai & Osmania Biscuits", "Double Ka Meetha"],
    attractions: ["Charminar & Laad Bazaar", "Golconda Fort Sound & Light Show", "Hussain Sagar Giant Buddha", "Ramoji Film City"],
    hiddenGems: ["Qutb Shahi Tombs", "Chowmahalla Palace", "Nimrah Cafe Irani Chai at Charminar"],
    reviews: [
      { author: "Faisal Qureshi", rating: 5, date: "July 28, 2026", comment: "Authentic Hyderabadi biryani at Paradise and sunset view from Golconda Fort are unforgettable.", tag: "Foodie Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 39,
    name: "Darjeeling",
    state: "West Bengal",
    img: "/images/destinations/darjeeling/hero.jpg",
    rating: 4.7,
    weather: "14°C",
    budget: "₹15,000",
    description: "The Queen of the Himalayas, offering world-famous champagne tea gardens, breathtaking views of Mount Kanchenjunga, and the historic Darjeeling Toy Train.",
    images: [
      "/images/destinations/darjeeling/hero.jpg",
      "/images/destinations/darjeeling/1.jpg",
      "/images/destinations/darjeeling/2.jpg",
      "/images/destinations/darjeeling/3.jpg",
      "/images/destinations/darjeeling/4.jpg"
    ],
    hotels: ["Glenburn Tea Estate", "The Elgin Darjeeling", "Windamere Hotel", "Mayfair Darjeeling"],
    food: ["Darjeeling First Flush Tea", "Steamed Tibetan Momos", "Thukpa Noodle Soup", "Churpee Snack", "Chhang"],
    attractions: ["Tiger Hill Sunrise (Kanchenjunga Glow)", "Darjeeling Himalayan Railway Toy Train", "Batasia Loop", "Happy Valley Tea Estate"],
    hiddenGems: ["Peace Pagoda & Japanese Temple", "Himalayan Mountaineering Institute", "Rock Garden & Ganga Maya Park"],
    reviews: [
      { author: "Anirban Mukherjee", rating: 4.9, date: "August 11, 2026", comment: "Watching the sun paint Kanchenjunga in golden orange at Tiger hill is pure magic.", tag: "Family Trip" }
    ],
    bestTime: "March - May & Oct - Dec"
  },
  {
    id: 40,
    name: "Kolkata",
    state: "West Bengal",
    img: "/images/destinations/kolkata/hero.jpg",
    rating: 4.7,
    weather: "29°C",
    budget: "₹10,000",
    description: "The City of Joy and cultural soul of India, famous for grand colonial marble edifices, yellow ambassador cabs, iconic Howrah Bridge, and Durga Puja festival.",
    images: [
      "/images/destinations/kolkata/hero.jpg",
      "/images/destinations/kolkata/1.jpg",
      "/images/destinations/kolkata/2.jpg",
      "/images/destinations/kolkata/3.jpg",
      "/images/destinations/kolkata/4.jpg"
    ],
    hotels: ["The Oberoi Grand Kolkata", "ITC Sonar & Royal Bengal", "Taj City Centre New Town", "The Lalit Great Eastern"],
    food: ["Kolkata Biryani with Aloo", "Rosogolla & Mishti Doi", "Kathi Rolls", "Fish Paturi (Bhetki)", "Puchka"],
    attractions: ["Victoria Memorial Hall", "Howrah Bridge & Hooghly Ferry", "Dakshineswar Kali Temple", "Park Street Heritage Dining"],
    hiddenGems: ["Kumartuli Idol-Making Clay Alley", "College Street Boi Para (Book Market)", "Princep Ghat River Promenade"],
    reviews: [
      { author: "Debolina Bose", rating: 4.8, date: "August 4, 2026", comment: "Puchkas at Vivekananda park and a heritage tram ride will make you fall in love with Kolkata.", tag: "Solo Traveler" }
    ],
    bestTime: "October - March"
  },
  {
    id: 41,
    name: "Gangtok",
    state: "Sikkim",
    img: "/images/destinations/gangtok/hero.jpg",
    rating: 4.8,
    weather: "15°C",
    budget: "₹17,000",
    description: "The cleanest Himalayan capital, offering panoramic vistas of Mount Kanchenjunga, ancient Tibetan monasteries, clean pedestrian promenades, and orchid sanctuaries.",
    images: [
      "/images/destinations/gangtok/hero.jpg",
      "/images/destinations/gangtok/1.jpg",
      "/images/destinations/gangtok/2.jpg",
      "/images/destinations/gangtok/3.jpg",
      "/images/destinations/gangtok/4.jpg"
    ],
    hotels: ["Mayfair Spa Resort & Casino", "The Elgin Nor-Khill", "Denzong Regency", "Lemon Tree Hotel Gangtok"],
    food: ["Momos with spicy Dalle Chilli Chutney", "Thukpa & Gyathuk", "Sel Roti", "Sha Phaley", "Chhurpi Soup"],
    attractions: ["MG Marg Pedestrian Walk", "Tsomgo (Changu) Glacial Lake", "Rumtek Monastery", "Nathula Pass Border"],
    hiddenGems: ["Baba Harbhajan Mandir", "Ban Jhakri Falls & Energy Park", "Ganesh Tok Sunset View"],
    reviews: [
      { author: "Sangeeta Rai", rating: 4.9, date: "July 30, 2026", comment: "Tsomgo lake surrounded by snow with yak rides was a dream experience. MG Marg is super clean.", tag: "Family Trip" }
    ],
    bestTime: "March - June & Sept - Dec"
  },
  {
    id: 42,
    name: "Shillong",
    state: "Meghalaya",
    img: "/images/destinations/shillong/hero.jpg",
    rating: 4.8,
    weather: "16°C",
    budget: "₹16,000",
    description: "The Scotland of the East, Shillong boasts pine-covered rolling hills, cascading multi-tier waterfalls, rock music culture, and nearby living root bridges.",
    images: [
      "/images/destinations/shillong/hero.jpg",
      "/images/destinations/shillong/1.jpg",
      "/images/destinations/shillong/2.jpg",
      "/images/destinations/shillong/3.jpg",
      "/images/destinations/shillong/4.jpg"
    ],
    hotels: ["Ri Kynjai - Serenity by the Lake", "Courtyard by Marriott Shillong", "Vivanta Meghalaya Shillong", "The Heritage Club - Tripura Castle"],
    food: ["Jadoh (Khasi Rice Dish)", "Dohneiiong (Pork with Black Sesame)", "Tungrymbai", "Momos & Local Berries"],
    attractions: ["Umiam Lake Boating", "Elephant Falls", "Shillong Peak Viewpoint", "Police Bazar Market"],
    hiddenGems: ["Cherrapunji Living Root Bridges Day Trip", "Dawki Transparent Umngot River", "Laitlum Canyons"],
    reviews: [
      { author: "Bikram Thapa", rating: 5, date: "August 9, 2026", comment: "Boating on the crystal-clear waters of Dawki and trekking the double-decker root bridge was unforgettable.", tag: "Adventure Trip" }
    ],
    bestTime: "September - May"
  },
  {
    id: 43,
    name: "Kaziranga",
    state: "Assam",
    img: "/images/destinations/kaziranga/hero.jpg",
    rating: 4.8,
    weather: "24°C",
    budget: "₹17,000",
    description: "A world-famous UNESCO World Heritage Site along the Brahmaputra River, housing two-thirds of the planet's great one-horned rhinoceros population.",
    images: [
      "/images/destinations/kaziranga/hero.jpg",
      "/images/destinations/kaziranga/1.jpg",
      "/images/destinations/kaziranga/2.jpg",
      "/images/destinations/kaziranga/3.jpg",
      "/images/destinations/kaziranga/4.jpg"
    ],
    hotels: ["Diphlu River Lodge", "Borgos Resort", "Infinity Resort Kaziranga", "IORA - The Retreat"],
    food: ["Assamese Thali with Khar & Tenga", "Masor Tenga (Sour Fish Curry)", "Pitha Rice Cakes", "Assam Tea"],
    attractions: ["Central Range Kohora Safari", "Elephant Safari at Dawn", "Kaziranga National Orchid Park", "Brahmaputra River Boat Cruise"],
    hiddenGems: ["Kakochang Waterfalls", "Hoollongapar Gibbon Sanctuary", "Tea Garden Village Walk"],
    reviews: [
      { author: "Rahul Baruah", rating: 4.9, date: "August 2, 2026", comment: "Saw over a dozen one-horned rhinos, wild buffaloes, and majestic hornbills on our morning safari.", tag: "Wildlife Lovers" }
    ],
    bestTime: "November - April"
  },
  {
    id: 44,
    name: "Puri",
    state: "Odisha",
    img: "/images/destinations/puri/hero.jpg",
    rating: 4.6,
    weather: "29°C",
    budget: "₹10,000",
    description: "A sacred seaside pilgrimage hub famed for the 12th-century Jagannath Temple, the world-renowned Rath Yatra chariot festival, and wide golden beaches.",
    images: [
      "/images/destinations/puri/hero.jpg",
      "/images/destinations/puri/1.jpg",
      "/images/destinations/puri/2.jpg",
      "/images/destinations/puri/3.jpg",
      "/images/destinations/puri/4.jpg"
    ],
    hotels: ["Mayfair Waves Puri", "The Hans Coco Palms", "Sterling Puri", "Pramod Convention & Beach Resort"],
    food: ["Mahaprasad (Chappan Bhog)", "Chhena Poda (Baked Cheese Dessert)", "Crab & Prawn Curry", "Khaja Sweet", "Dalma"],
    attractions: ["Shree Jagannath Temple", "Golden Beach (Blue Flag certified)", "Puri Beach Market", "Chilika Lake Dolphin Sanctuary Day Trip"],
    hiddenGems: ["Konark Sun Temple (UNESCO)", "Raghurajpur Pattachitra Heritage Village", "Balighai Beach"],
    reviews: [
      { author: "Manoj Mohanty", rating: 4.7, date: "August 6, 2026", comment: "Chhena Poda sweet is out of this world, and the architecture of nearby Konark Sun Temple is stunning.", tag: "Family Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 45,
    name: "Amritsar",
    state: "Punjab",
    img: "/images/destinations/amritsar/hero.jpg",
    rating: 4.9,
    weather: "26°C",
    budget: "₹10,000",
    description: "The spiritual home of Sikhism, Amritsar inspires millions with the illuminated Golden Temple, open community kitchens (Langar), and Wagah border ceremony.",
    images: [
      "/images/destinations/amritsar/hero.jpg",
      "/images/destinations/amritsar/1.jpg",
      "/images/destinations/amritsar/2.jpg",
      "/images/destinations/amritsar/3.jpg",
      "/images/destinations/amritsar/4.jpg"
    ],
    hotels: ["Taj Swarna Amritsar", "Hyatt Regency Amritsar", "Radisson Blu Amritsar", "Courtyard by Marriott"],
    food: ["Amritsari Kulcha with Chole", "Makki di Roti & Sarson da Saag", "Creamy Lassi in Giant Glasses", "Guru Ka Langar", "Amritsari Fish Fry"],
    attractions: ["Harmandir Sahib (Golden Temple)", "Wagah Border Beating Retreat Ceremony", "Jallianwala Bagh Memorial", "Partition Museum"],
    hiddenGems: ["Gobindgarh Fort Light Show", "Heritage Street Night Walk", "Pul Kanjri Historical Site"],
    reviews: [
      { author: "Harpreet Singh", rating: 5, date: "August 14, 2026", comment: "The serenity of Golden Temple at night and having Langar served with love was the most humbling experience.", tag: "Family Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 46,
    name: "Chandigarh",
    state: "Chandigarh",
    img: "/images/destinations/chandigarh/hero.jpg",
    rating: 4.6,
    weather: "25°C",
    budget: "₹12,000",
    description: "India's first planned modernist city designed by Le Corbusier, famous for the creative Rock Garden made of recycled ceramics, Sukhna Lake, and wide tree-lined boulevards.",
    images: [
      "/images/destinations/chandigarh/hero.jpg",
      "/images/destinations/chandigarh/1.jpg",
      "/images/destinations/chandigarh/2.jpg",
      "/images/destinations/chandigarh/3.jpg",
      "/images/destinations/chandigarh/4.jpg"
    ],
    hotels: ["The Lalit Chandigarh", "JW Marriott Hotel Chandigarh", "Hyatt Regency Chandigarh", "Taj Chandigarh"],
    food: ["Butter Chicken & Naan", "Chhole Bhature", "Lassi", "Amritsari Naan", "Kulfi"],
    attractions: ["Nek Chand Rock Garden", "Sukhna Lake Boating & Promenade", "Zakir Hussain Rose Garden", "Capitol Complex (UNESCO)"],
    hiddenGems: ["Sector 17 Shopping Plaza", "Timber Trail Cable Car (Parwanoo)", "Butterfly Park"],
    reviews: [
      { author: "Gurpreet Gill", rating: 4.7, date: "August 1, 2026", comment: "The Rock Garden sculptures made from scrap porcelain are an artistic triumph. Sukhna Lake sunset is peaceful.", tag: "Solo Traveler" }
    ],
    bestTime: "October - March"
  },
  {
    id: 47,
    name: "Ahmedabad",
    state: "Gujarat",
    img: "/images/destinations/ahmedabad/hero.jpg",
    rating: 4.6,
    weather: "30°C",
    budget: "₹11,000",
    description: "India's first UNESCO World Heritage City, offering centuries-old Pols, intricately carved stepwells, Mahatma Gandhi's Sabarmati Ashram, and vibrant night food markets.",
    images: [
      "/images/destinations/ahmedabad/hero.jpg",
      "/images/destinations/ahmedabad/1.jpg",
      "/images/destinations/ahmedabad/2.jpg",
      "/images/destinations/ahmedabad/3.jpg",
      "/images/destinations/ahmedabad/4.jpg"
    ],
    hotels: ["The House of MG (Heritage)", "Courtyard by Marriott Ahmedabad", "ITC Narmada", "Hyatt Regency Ahmedabad"],
    food: ["Unlimited Gujarati Thali", "Khaman & Dhokla", "Fafda Jalebi", "Handvo", "Manek Chowk Street Delicacies"],
    attractions: ["Sabarmati Ashram", "Adalaj Stepwell (Vav)", "Sidi Saiyyed Mosque (Tree of Life)", "Sabarmati Riverfront Walk"],
    hiddenGems: ["Manek Chowk Night Food Market", "Hutheesing Jain Temple", "Heritage Walk through Old Pols"],
    reviews: [
      { author: "Bhavik Shah", rating: 4.8, date: "August 10, 2026", comment: "Adalaj Stepwell's stone carvings are sensational. The midnight chocolate sandwich at Manek Chowk is legendary.", tag: "Foodie Trip" }
    ],
    bestTime: "October - March"
  },
  {
    id: 48,
    name: "Rann of Kutch",
    state: "Gujarat",
    img: "/images/destinations/rann-of-kutch/hero.jpg",
    rating: 4.8,
    weather: "24°C",
    budget: "₹18,000",
    description: "The Great Rann of Kutch is one of the largest salt deserts on earth, coming alive under moonlight during the vibrant Rann Utsav cultural festival.",
    images: [
      "/images/destinations/rann-of-kutch/hero.jpg",
      "/images/destinations/rann-of-kutch/1.jpg",
      "/images/destinations/rann-of-kutch/2.jpg",
      "/images/destinations/rann-of-kutch/3.jpg",
      "/images/destinations/rann-of-kutch/4.jpg"
    ],
    hotels: ["Tent City Dhordo (Rann Utsav)", "White Rann Resort", "Gateway Hotel Vijay Vilas", "Regenta Resort Bhuj"],
    food: ["Kutchi Dabeli", "Bajra no Rotlo with Ringan Bharta", "Gulab Pak", "Khichdi & Kadhi", "Mawa Sweet"],
    attractions: ["White Salt Desert Moonlight Walk", "Rann Utsav Cultural Village", "Kalo Dungar (Black Hill Viewpoint)", "Kutch Desert Wildlife Sanctuary"],
    hiddenGems: ["Nirona Artisan Village (Rogan Art)", "Dholavira Harappan Indus Valley Ruins", "Mandvi Beach & Vijay Vilas Palace"],
    reviews: [
      { author: "Jinal Mehta", rating: 5, date: "August 7, 2026", comment: "Walking on the endless white salt desert on a full moon night is a surreal experience you never forget.", tag: "Family Trip" }
    ],
    bestTime: "November - February (Rann Utsav)"
  },
  {
    id: 49,
    name: "Pondicherry",
    state: "Puducherry",
    img: "/images/destinations/pondicherry/hero.jpg",
    rating: 4.7,
    weather: "29°C",
    budget: "₹14,000",
    description: "A tranquil French Riviera of the East, boasting pastel yellow colonial villas in White Town, cycling avenues by the sea, French bakeries, and Auroville spiritual community.",
    images: [
      "/images/destinations/pondicherry/hero.jpg",
      "/images/destinations/pondicherry/1.jpg",
      "/images/destinations/pondicherry/2.jpg",
      "/images/destinations/pondicherry/3.jpg",
      "/images/destinations/pondicherry/4.jpg"
    ],
    hotels: ["Palais de Mahe - CGH Earth", "Le Dupleix", "The Promenade", "La Villa Pondicherry"],
    food: ["Croissants & Baguettes", "Crepes & French Quiche", "Creole Curry", "Wood-fired Sourdough Pizzas", "Filter Coffee"],
    attractions: ["Promenade Beach Rock Beach", "White Town French Quarter", "Auroville Matrimandir", "Sri Aurobindo Ashram"],
    hiddenGems: ["Paradise Beach Island Ferry", "Serenity Beach Surfing", "Goubert Market Flower Stalls"],
    reviews: [
      { author: "Camille Dupont", rating: 4.8, date: "August 3, 2026", comment: "Renting a vintage bicycle in White Town, sipping espresso, and watching the waves crash at Promenade beach.", tag: "Solo Traveler" }
    ],
    bestTime: "October - March"
  },
  {
    id: 50,
    name: "Andaman Islands",
    state: "Andaman & Nicobar Islands",
    img: "/images/destinations/andaman-islands/hero.jpg",
    rating: 4.9,
    weather: "28°C",
    budget: "₹35,000",
    description: "An archipelago of tropical islands with powdery white beaches, crystal clear turquoise waters, pristine coral reefs for scuba diving, and historical colonial landmarks.",
    images: [
      "/images/destinations/andaman-islands/hero.jpg",
      "/images/destinations/andaman-islands/1.jpg",
      "/images/destinations/andaman-islands/2.jpg",
      "/images/destinations/andaman-islands/3.jpg",
      "/images/destinations/andaman-islands/4.jpg"
    ],
    hotels: ["Taj Exotica Resort & Spa Havelock", "Barefoot at Havelock", "Symphony Palms Beach Resort", "SeaShell Neil Island"],
    food: ["Fresh Grilled Lobster & Crab", "Coconut Prawn Curry", "Fish Amritsari", "Tropical Fruit Platters"],
    attractions: ["Radhanagar Beach (Asia's Top Beach)", "Cellular Jail National Memorial", "Elephant Beach Scuba Diving", "Havelock Island Ferry"],
    hiddenGems: ["Neil Island Natural Coral Bridge", "Baratang Limestone Caves & Mangrove Boat", "Chidiya Tapu Sunset Point"],
    reviews: [
      { author: "Rahul Sen", rating: 5, date: "August 12, 2026", comment: "Radhanagar beach sunset is paradise on earth. Scuba diving at Havelock reef had crystal clear visibility.", tag: "Couple Trip" }
    ],
    bestTime: "October - May"
  }
];

export default Places;