import api from './api';

const MOCK_CUSTOMERS = [
  {
    "id": "id-cw1dokzkm",
    "name": "Anjali Chopra",
    "email": "anjali.chopra@email.com",
    "phone": "+918515986832",
    "areas": ["Tech Park"],
    "cuisines": ["North Indian", "Tandoori", "Biryani", "Multi-Cuisine"]
  },
  {
    "id": "id-x1aa7t9ym",
    "name": "Anjali Gupta",
    "email": "anjali.gupta@email.com",
    "phone": "+911903814247",
    "areas": ["Harbor"],
    "cuisines": ["Multi-Cuisine", "Street Food", "Asian Fusion"]
  },
  {
    "id": "id-74x3q8sws",
    "name": "Anjali Gupta",
    "email": "anjali.gupta@email.com",
    "phone": "+913788013287",
    "areas": ["Airport Road"],
    "cuisines": ["Breakfast", "East Indian"]
  },
  {
    "id": "id-hcr8gby6u",
    "name": "Anjali Nair",
    "email": "anjali.nair@email.com",
    "phone": "+913239294403",
    "areas": ["Marina"],
    "cuisines": ["South Indian", "Punjabi", "Asian Fusion"]
  },
  {
    "id": "id-9d5fjpxnt",
    "name": "Anjali Patel",
    "email": "anjali.patel@email.com",
    "phone": "+916831300033",
    "areas": ["Airport Road"],
    "cuisines": ["Mughlai", "Breakfast", "Vegetarian"]
  },
  {
    "id": "id-83y9mh21d",
    "name": "Anjali Reddy",
    "email": "anjali.reddy@email.com",
    "phone": "+919740827585",
    "areas": ["Business District"],
    "cuisines": ["Tandoori", "Hyderabadi", "Street Food"]
  },
  {
    "id": "id-yvna1ue5z",
    "name": "Anjali Reddy",
    "email": "anjali.reddy@email.com",
    "phone": "+914932025604",
    "areas": ["Marina"],
    "cuisines": ["Mughlai", "Telangana"]
  },
  {
    "id": "id-7hkpzflna",
    "name": "Anjali Singh",
    "email": "anjali.singh@email.com",
    "phone": "+912183599267",
    "areas": ["Business District"],
    "cuisines": ["Coastal", "Street Food"]
  },
  {
    "id": "id-b7pfwn07i",
    "name": "Anjali Singh",
    "email": "anjali.singh@email.com",
    "phone": "+911095805416",
    "areas": ["Marina"],
    "cuisines": ["East Indian", "Andhra"]
  },
  {
    "id": "id-5czakvu9r",
    "name": "Arjun Bhat",
    "email": "arjun.bhat@email.com",
    "phone": "+915358658888",
    "areas": ["Suburbs"],
    "cuisines": ["Coastal", "Bengali", "East Indian"]
  },
  {
    "id": "id-f5kjszxqc",
    "name": "Arjun Bhat",
    "email": "arjun.bhat@email.com",
    "phone": "+913030297912",
    "areas": ["Marina"],
    "cuisines": ["Punjabi", "Hyderabadi"]
  },
  {
    "id": "id-o6kqb59wp",
    "name": "Arjun Bhat",
    "email": "arjun.bhat@email.com",
    "phone": "+916495006644",
    "areas": ["Harbor"],
    "cuisines": ["Punjabi", "Hyderabadi", "Coastal", "Bengali", "Andhra"]
  },
  {
    "id": "id-s0kf541nj",
    "name": "Arjun Nair",
    "email": "arjun.nair@email.com",
    "phone": "+916711478933",
    "areas": ["Arts District"],
    "cuisines": ["Coastal", "Andhra"]
  },
  {
    "id": "id-sgjbtrowe",
    "name": "Arjun Patel",
    "email": "arjun.patel@email.com",
    "phone": "+914079182530",
    "areas": ["Harbor"],
    "cuisines": ["Vegetarian", "Andhra"]
  },
  {
    "id": "id-n6yg3ntcv",
    "name": "Arjun Reddy",
    "email": "arjun.reddy@email.com",
    "phone": "+911040103709",
    "areas": ["Arts District"],
    "cuisines": ["South Indian", "Mughlai", "Biryani"]
  },
  {
    "id": "id-1tompzvuw",
    "name": "Arjun Reddy",
    "email": "arjun.reddy@email.com",
    "phone": "+912309282165",
    "areas": ["Uptown"],
    "cuisines": ["Bengali", "Goan"]
  },
  {
    "id": "id-eighidcr7",
    "name": "Arjun Sharma",
    "email": "arjun.sharma@email.com",
    "phone": "+911468831021",
    "areas": ["Business District"],
    "cuisines": ["Street Food", "Asian Fusion"]
  },
  {
    "id": "id-iyf261i8r",
    "name": "Arjun Singh",
    "email": "arjun.singh@email.com",
    "phone": "+919594004339",
    "areas": ["Uptown"],
    "cuisines": ["Biryani", "Hyderabadi", "Coastal"]
  },
  {
    "id": "id-gxmklt3li",
    "name": "Arun Bhat",
    "email": "arun.bhat@email.com",
    "phone": "+914336767982",
    "areas": ["Tech Park"],
    "cuisines": ["Biryani", "Breakfast"]
  },
  {
    "id": "id-2kqkhqywq",
    "name": "Arun Gupta",
    "email": "arun.gupta@email.com",
    "phone": "+914574762777",
    "areas": ["Suburbs"],
    "cuisines": ["South Indian", "Tandoori", "Vegetarian", "Snacks"]
  }
];

const MOCK_CUSTOMER_DETAILS = {
  "id-cw1dokzkm": {
    profile: {
      id: "id-cw1dokzkm",
      name: "Anjali Chopra",
      email: "anjali.chopra@email.com",
      phone: "+918515986832",
      areas: ["Tech Park"],
      cuisines: ["North Indian", "Tandoori", "Biryani", "Multi-Cuisine"]
    },
    purchases: [
      {
        orderId: "id-9xy2mavyw",
        orderDate: "2026-07-27T19:48:03.039Z",
        totalAmount: 93.92,
        status: "completed",
        dishes: [
          {
            id: "id-ypmy6r9fz",
            name: "Butter Chicken",
            price: 15.99
          },
          {
            id: "id-pdok99n3y",
            name: "Biryani (Chicken)",
            price: 12.99
          },
          {
            id: "id-x6mz46b52",
            name: "Chicken Tikka Masala",
            price: 14.99
          },
          {
            id: "id-2l3ja66qz",
            name: "Dosa",
            price: 7.99
          }
        ]
      },
      {
        orderId: "id-1kj9uobdq",
        orderDate: "2026-06-03T21:08:19.802Z",
        totalAmount: 63.94,
        status: "pending",
        dishes: [
          {
            id: "id-nl35pq62a",
            name: "Paneer Tikka",
            price: 11.99
          },
          {
            id: "id-tkvfmjo52",
            name: "Chaat",
            price: 6.99
          },
          {
            id: "id-ofud0us5",
            name: "Gulab Jamun",
            price: 5.99
          },
          {
            id: "id-n38u8sqz4",
            name: "Haleem",
            price: 12.99
          }
        ]
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

const normalizeCustomer = (c) => {
  if (!c) return null;
  const id = _pluck(c, ['id', 'c.id', 'customerId', 'customer_id']);
  const name = _pluck(c, ['name', 'c.name', 'customerName', 'customer_name']);
  const email = _pluck(c, ['email', 'c.email', 'customerEmail', 'customer_email']);
  const phone = _pluck(c, ['phone', 'c.phone', 'customerPhone', 'customer_phone']);
  
  // Handle both single value and array for area
  let area = _pluck(c, ['area', 'c.area', 'location']);
  const areas = _pluck(c, ['areas', 'c.areas']);
  if (Array.isArray(areas) && areas.length > 0) {
    area = areas[0];
  }
  
  // Handle both single value and array for cuisine
  let favoriteCuisine = _pluck(c, ['favoriteCuisine', 'c.favoriteCuisine', 'preferred_cuisine', 'c.preferred_cuisine', 'cuisine']);
  const cuisines = _pluck(c, ['cuisines', 'c.cuisines']);
  if (Array.isArray(cuisines) && cuisines.length > 0) {
    favoriteCuisine = cuisines[0];
  }
  
  // Handle orderCount - can be number or {low, high} object
  let orderCount = _pluck(c, ['orderCount', 'c.orderCount', 'orders', 'c.orders', 'order_count']) ?? 0;
  if (typeof orderCount === 'object' && orderCount?.low !== undefined) {
    orderCount = orderCount.low;
  }
  
  return { id, name, email, phone, area, orderCount, favoriteCuisine, areas: Array.isArray(areas) ? areas : [], cuisines: Array.isArray(cuisines) ? cuisines : [] };
};

export const getCustomers = async (params = {}) => {
  try {
    const response = await api.get('/customers', { params });
    const raw = response.data || {};
    
    const listCandidates = [raw.data, raw.customers, raw.items, raw.results, raw.rows, raw];
    let rawList = [];
    for (const cand of listCandidates) {
      if (Array.isArray(cand)) {
        rawList = cand;
        break;
      }
    }
    
    const data = rawList.map(normalizeCustomer);
    const totalPages = raw.totalPages ?? raw.total_pages ?? Math.max(1, Math.ceil((raw.total ?? raw.count ?? data.length) / (params.limit || 20)));
    
    return { data, totalPages };
  } catch (error) {
    // Fallback to mock data if API fails
    console.log('Using mock customer data');
    
    const { search = '', skip = 0, limit = 20, page = 1 } = params;
    const actualSkip = page ? (Number(page) - 1) * limit : skip;
    
    // Filter mock data based on search
    let filtered = [...MOCK_CUSTOMERS];
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(c => 
        (c.name || '').toLowerCase().includes(searchLower) ||
        (c.email || '').toLowerCase().includes(searchLower) ||
        (c.phone || '').toLowerCase().includes(searchLower)
      );
    }
    
    // Apply pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / limit));
    const paginatedData = filtered.slice(actualSkip, actualSkip + limit);
    const data = paginatedData.map(normalizeCustomer);
    
    return { data, totalPages };
  }
};

export const getCustomerById = async (id) => {
  // Check if we have detailed customer data with purchase history
  if (MOCK_CUSTOMER_DETAILS[id]) {
    return normalizeCustomer(MOCK_CUSTOMER_DETAILS[id].profile);
  }
  
  try {
    const response = await api.get(`/customers/${id}`);
    return normalizeCustomer(response.data || response.data?.data || response.data?.customer);
  } catch (error) {
    // Fallback to mock data
    const mockCustomer = MOCK_CUSTOMERS.find(c => c.id === id);
    return normalizeCustomer(mockCustomer);
  }
};

export const getCustomerPurchases = async (id) => {
  // Check if we have detailed customer data with purchases in mock first
  if (MOCK_CUSTOMER_DETAILS[id]) {
    return MOCK_CUSTOMER_DETAILS[id].purchases || [];
  }
  
  try {
    const response = await api.get(`/customers/${id}/purchases`);
    const raw = response.data || {};
    
    // Handle both array and object responses
    if (Array.isArray(raw)) return raw;
    if (Array.isArray(raw.purchases)) return raw.purchases;
    if (Array.isArray(raw.data)) return raw.data;
    
    return [];
  } catch (error) {
    // Fallback to empty array
    console.log('Using mock customer purchases (empty)');
    return [];
  }
};

export const getCustomerOrders = async (id, { skip = 0, limit = 20 } = {}) => {
  const params = { skip, limit };
  const response = await api.get(`/customers/${id}/orders`, { params });
  return response.data;
};

export const getCustomerPreferences = async (id) => {
  const response = await api.get(`/customers/${id}/preferences`);
  return response.data;
};

export const getCustomerStats = async (id) => {
  const response = await api.get(`/customers/${id}/stats`);
  return response.data;
};

export const getCustomerRecommendations = async (id, { limit = 10 } = {}) => {
  const params = { limit };
  const response = await api.get(`/customers/${id}/recommendations`, { params });
  return response.data;
};

export const getCustomerRecommendationsDetailed = async (id, { limit = 10 } = {}) => {
  const params = { limit };
  const response = await api.get(`/customers/${id}/recommendations/detailed`, { params });
  return response.data;
};

export const getCustomerRecommendationsCuisineBased = async (id, { limit = 10 } = {}) => {
  const params = { limit };
  const response = await api.get(`/customers/${id}/recommendations/cuisine-based`, { params });
  return response.data;
};

export const getCustomerRecommendationsAreaBased = async (id, { limit = 10 } = {}) => {
  const params = { limit };
  const response = await api.get(`/customers/${id}/recommendations/area-based`, { params });
  return response.data;
};

export const getCustomerRecommendationsWithReasons = async (id, { limit = 10 } = {}) => {
  const params = { limit };
  const response = await api.get(`/customers/${id}/recommendations/with-reasons`, { params });
  return response.data;
};

export const getSimilarCustomers = async (id, { limit = 10 } = {}) => {
  const params = { limit };
  const response = await api.get(`/customers/${id}/similar-customers`, { params });
  return response.data;
};
