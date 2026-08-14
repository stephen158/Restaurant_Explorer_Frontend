import api from './api';

const MOCK_RESTAURANTS = [
  {
    id: "id-a585w8c2o",
    name: "Maharaja Palace",
    description: "Premium North Indian cuisine",
    rating: 4.8,
    address: "155 Maharaja Palace Street, Downtown",
    cuisines: ["North Indian", "Mughlai"],
    areas: ["Downtown"]
  },
  {
    id: "id-2mup6fhje",
    name: "Butter Chicken House",
    description: "Famous for butter chicken",
    rating: 4.8,
    address: "201 Butter Chicken House Street, Downtown",
    cuisines: ["North Indian", "Mughlai"],
    areas: ["Downtown"]
  },
  {
    id: "id-5i95j04po",
    name: "Chaat House",
    description: "Indian street food",
    rating: 4.3,
    address: "116 Chaat House Street, Downtown",
    cuisines: ["Street Food", "Snacks"],
    areas: ["Downtown"]
  },
  {
    id: "id-cxt3mv2v0",
    name: "Biryani House",
    description: "Specialty biryani restaurant",
    rating: 4.7,
    address: "347 Biryani House Street, Downtown",
    cuisines: ["Biryani", "Hyderabadi"],
    areas: ["Downtown"]
  },
  {
    id: "id-k4spdwi67",
    name: "Dosa King",
    description: "Traditional dosas and idlis",
    rating: 4.7,
    address: "402 Dosa King Street, Marina",
    cuisines: ["South Indian", "Breakfast"],
    areas: ["Marina"]
  },
  {
    id: "id-qnqiz9aqn",
    name: "Hyderabad Express",
    description: "Authentic Hyderabadi biryani",
    rating: 4.7,
    address: "309 Hyderabad Express Street, Downtown",
    cuisines: ["Biryani", "Telangana"],
    areas: ["Downtown"]
  },
  {
    id: "id-k2skbda8r",
    name: "Spice Route",
    description: "Authentic South Indian flavors",
    rating: 4.6,
    address: "835 Spice Route Street, Marina",
    cuisines: ["South Indian", "Coastal"],
    areas: ["Marina"]
  },
  {
    id: "id-wqxaigs82",
    name: "Coastal Kitchen",
    description: "Fresh seafood preparations",
    rating: 4.6,
    address: "232 Coastal Kitchen Street, Marina",
    cuisines: ["Seafood", "Coastal"],
    areas: ["Marina"]
  },
  {
    id: "id-f6ozr8ewn",
    name: "Paneer Paradise",
    description: "Paneer specialties",
    rating: 4.6,
    address: "507 Paneer Paradise Street, Uptown",
    cuisines: ["North Indian", "Vegetarian"],
    areas: ["Uptown"]
  },
  {
    id: "id-30u4xeavt",
    name: "Goan Paradise",
    description: "Goan specialties",
    rating: 4.6,
    address: "269 Goan Paradise Street, Marina",
    cuisines: ["Seafood", "Coastal"],
    areas: ["Marina"]
  },
  {
    id: "id-scmv7hfd2",
    name: "Vegetarian Heaven",
    description: "Pure vegetarian cuisine",
    rating: 4.6,
    address: "263 Vegetarian Heaven Street, Marina",
    cuisines: ["Multi-Cuisine", "Vegetarian"],
    areas: ["Marina"]
  },
  {
    id: "id-krss3er3g",
    name: "Curry Corner",
    description: "Traditional Punjabi recipes",
    rating: 4.5,
    address: "885 Curry Corner Street, Uptown",
    cuisines: ["North Indian", "Punjabi"],
    areas: ["Uptown"]
  },
  {
    id: "id-hhpbgbjoz",
    name: "Kebab Paradise",
    description: "Grilled kebabs and more",
    rating: 4.5,
    address: "965 Kebab Paradise Street, Uptown",
    cuisines: ["Mughlai", "Kebabs"],
    areas: ["Uptown"]
  },
  {
    id: "id-28nmq0n41",
    name: "Kerala House",
    description: "Kerala backwater cuisine",
    rating: 4.5,
    address: "501 Kerala House Street, Marina",
    cuisines: ["South Indian", "Coastal"],
    areas: ["Marina"]
  },
  {
    id: "id-4vcy7l9ur",
    name: "Rajasthani Haveli",
    description: "Desert cuisine",
    rating: 4.5,
    address: "243 Rajasthani Haveli Street, Downtown",
    cuisines: ["North Indian", "Rajasthani"],
    areas: ["Downtown"]
  },
  {
    id: "id-jbcell2jy",
    name: "Andhra Spice",
    description: "Andhra cuisine",
    rating: 4.5,
    address: "682 Andhra Spice Street, Downtown",
    cuisines: ["South Indian", "Andhra"],
    areas: ["Downtown"]
  },
  {
    id: "id-iifajj6he",
    name: "Tandoor Express",
    description: "Tandoori specialties",
    rating: 4.4,
    address: "400 Tandoor Express Street, Midtown",
    cuisines: ["Tandoori", "Kebabs"],
    areas: ["Midtown"]
  },
  {
    id: "id-kbhuhvs5i",
    name: "Masala Kitchen",
    description: "Homestyle Indian cooking",
    rating: 4.4,
    address: "866 Masala Kitchen Street, Midtown",
    cuisines: ["North Indian", "Punjabi"],
    areas: ["Midtown"]
  },
  {
    id: "id-sjd7sqd2r",
    name: "Momos Master",
    description: "Momos and Asian street food",
    rating: 4.4,
    address: "73 Momos Master Street, Uptown",
    cuisines: ["Street Food", "Asian Fusion"],
    areas: ["Uptown"]
  },
  {
    id: "id-z5kt4mvee",
    name: "Bengali Kitchen",
    description: "Bengali cuisine",
    rating: 4.4,
    address: "89 Bengali Kitchen Street, Marina",
    cuisines: ["Bengali", "East Indian"],
    areas: ["Marina"]
  },
  {
    id: "id-ft3ttd9fh",
    name: "Punjab Junction",
    description: "Authentic Punjabi food",
    rating: 4.4,
    address: "191 Punjab Junction Street, Uptown",
    cuisines: ["North Indian", "Punjabi"],
    areas: ["Uptown"]
  }
];

const MOCK_RESTAURANT_DETAILS = {
  "id-5i95j04po": {
    id: "id-5i95j04po",
    name: "Chaat House",
    description: "Indian street food",
    rating: 4.3,
    address: "116 Chaat House Street, Downtown",
    cuisines: ["Street Food", "Snacks"],
    areas: ["Downtown"],
    dishes: [
      {
        id: "id-nl35pq62a",
        name: "Paneer Tikka",
        price: 11.99
      },
      {
        id: "id-6plghogw2",
        name: "Samosa",
        price: 4.99
      },
      {
        id: "id-m9nb5qurs",
        name: "Tandoori Chicken",
        price: 13.99
      },
      {
        id: "id-37hbxlan2",
        name: "Idli",
        price: 5.99
      },
      {
        id: "id-tkvfmjo52",
        name: "Chaat",
        price: 6.99
      },
      {
        id: "id-x6mz46b52",
        name: "Chicken Tikka Masala",
        price: 14.99
      },
      {
        id: "id-ms7ngvirw",
        name: "Pakora",
        price: 6.99
      },
      {
        id: "id-2l3ja66qz",
        name: "Dosa",
        price: 7.99
      },
      {
        id: "id-i2bm7gxpc",
        name: "Biryani (Vegetarian)",
        price: 10.99
      },
      {
        id: "id-ofud0us5",
        name: "Gulab Jamun",
        price: 5.99
      },
      {
        id: "id-ecx7rerra",
        name: "Kheer",
        price: 4.99
      },
      {
        id: "id-zpvug98us",
        name: "Biryani (Egg)",
        price: 11.99
      },
      {
        id: "id-n38u8sqz4",
        name: "Haleem",
        price: 12.99
      }
    ]
  }
};

const _pluck = (obj, keys) => {
  for (const k of keys) {
    if (obj == null) continue;
    if (Object.prototype.hasOwnProperty.call(obj, k) && obj[k] != null) return obj[k];
  }
  return undefined;
};

const normalizeRestaurant = (r) => {
  if (!r) return null;
  const id = _pluck(r, ['id', 'restaurantId', 'r.id', 'rId', 'rid', 'restaurant_id']);
  const name = _pluck(r, ['name', 'r.name', 'restaurantName', 'restaurant_name']);
  
  // Handle both single value and array for cuisine
  let cuisine = _pluck(r, ['cuisine', 'cuisineType', 'r.cuisine']);
  const cuisines = _pluck(r, ['cuisines', 'r.cuisines']);
  if (Array.isArray(cuisines) && cuisines.length > 0) {
    cuisine = cuisines[0];
  }
  
  // Handle both single value and array for area
  let area = _pluck(r, ['area', 'location', 'r.area']);
  const areas = _pluck(r, ['areas', 'r.areas']);
  if (Array.isArray(areas) && areas.length > 0) {
    area = areas[0];
  }
  
  const rating = _pluck(r, ['rating', 'r.rating', 'avgRating', 'averageRating']);
  const dishesRaw = _pluck(r, ['dishes', 'menu', 'items', 'r.dishes']) || [];
  
  // Handle both string array and object array for dishes
  let dishes = [];
  if (Array.isArray(dishesRaw)) {
    dishes = dishesRaw.map((d) => {
      if (typeof d === 'string') {
        return d;
      }
      // If it's an object, preserve it as is (with id, name, price)
      return d;
    });
  }
  
  const description = _pluck(r, ['description', 'desc', 'about']);
  const address = _pluck(r, ['address', 'restaurant_address', 'r.address']);
  
  return { id, name, cuisine, area, rating, dishes, description, address, cuisines: Array.isArray(cuisines) ? cuisines : [], areas: Array.isArray(areas) ? areas : [] };
};

export const getRestaurants = async ({ search, cuisine, area, skip = 0, limit = 20, page } = {}) => {
  if (page != null) {
    skip = (Number(page) - 1) * limit;
  }

  try {
    // Try to fetch from API first
    const params = { search, cuisine, area, skip, limit };
    Object.keys(params).forEach((k) => params[k] == null && delete params[k]);
    
    const response = await api.get('/restaurants', { params });
    const raw = response.data || {};

    const listCandidates = [raw.data, raw.restaurants, raw.items, raw.results, raw.rows, raw];
    let rawList = [];
    for (const cand of listCandidates) {
      if (Array.isArray(cand)) {
        rawList = cand;
        break;
      }
    }

    // If raw has a wrapper like { data: { restaurants: [...] } }
    if (!rawList.length && raw.data && Array.isArray(raw.data.restaurants)) rawList = raw.data.restaurants;

    const data = rawList.map(normalizeRestaurant);
    const totalPages = raw.totalPages ?? raw.total_pages ?? Math.max(1, Math.ceil((raw.total ?? raw.count ?? data.length) / limit));
    
    // Extract unique cuisines and areas from the restaurants data
    const cuisines = raw.cuisines || raw.availableCuisines || [...new Set(data.flatMap(r => r.cuisines || []))];
    const areas = raw.areas || raw.availableAreas || [...new Set(data.flatMap(r => r.areas || []))];

    return { data, totalPages, cuisines, areas };
  } catch (error) {
    // Fallback to mock data if API fails
    console.log('Using mock restaurant data');
    
    // Filter mock data based on search and filters
    let filtered = [...MOCK_RESTAURANTS];
    
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(searchLower) || 
        r.description.toLowerCase().includes(searchLower) ||
        r.address.toLowerCase().includes(searchLower)
      );
    }
    
    if (cuisine) {
      const cuisineLower = cuisine.toLowerCase();
      filtered = filtered.filter(r => 
        r.cuisines.some(c => c.toLowerCase().includes(cuisineLower))
      );
    }
    
    if (area) {
      const areaLower = area.toLowerCase();
      filtered = filtered.filter(r => 
        r.areas.some(a => a.toLowerCase().includes(areaLower))
      );
    }
    
    // Extract unique cuisines and areas from mock data
    const allCuisines = [...new Set(MOCK_RESTAURANTS.flatMap(r => r.cuisines))];
    const allAreas = [...new Set(MOCK_RESTAURANTS.flatMap(r => r.areas))];
    
    // Apply pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / limit));
    const paginatedData = filtered.slice(skip, skip + limit);
    const data = paginatedData.map(normalizeRestaurant);

    return { data, totalPages, cuisines: allCuisines, areas: allAreas };
  }
};

export const getRestaurantById = async (id) => {
  // Check if we have detailed restaurant data with dishes in mock first
  if (MOCK_RESTAURANT_DETAILS[id]) {
    return normalizeRestaurant(MOCK_RESTAURANT_DETAILS[id]);
  }
  
  try {
    const response = await api.get(`/restaurants/${id}`);
    const raw = response.data || {};
    
    // Handle nested API response structure
    const restaurantData = raw.data || raw?.restaurant || raw;
    return normalizeRestaurant(restaurantData);
  } catch (error) {
    // Fallback to basic restaurant info
    console.log('Using basic mock restaurant data');
    const mockRestaurant = MOCK_RESTAURANTS.find(r => r.id === id);
    return normalizeRestaurant(mockRestaurant);
  }
};

export const getRestaurantsServingDish = async (dishId, { skip = 0, limit = 20 } = {}) => {
  const params = { skip, limit };
  const response = await api.get(`/restaurants/serving/${dishId}`, { params });
  return response.data;
};

export const searchRestaurants = async (query, options = {}) => getRestaurants({ search: query, ...options });

