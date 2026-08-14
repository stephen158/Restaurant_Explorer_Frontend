import api from './api';

const MOCK_DASHBOARD = {
  stats: {
    restaurantCount: { low: 25, high: 0 },
    customerCount: { low: 150, high: 0 },
    dishCount: { low: 33, high: 0 },
    orderCount: { low: 400, high: 0 },
    categoryCount: { low: 8, high: 0 },
    cuisineCount: { low: 22, high: 0 }
  },
  popularCuisines: [
    { "c.id": "id-qsjdwfcfe", "c.name": "North Indian", restaurantCount: { low: 8, high: 0 } },
    { "c.id": "id-5d0q3ub8i", "c.name": "South Indian", restaurantCount: { low: 4, high: 0 } },
    { "c.id": "id-8b2rrf8kb", "c.name": "Coastal", restaurantCount: { low: 4, high: 0 } },
    { "c.id": "id-nwjbfxbty", "c.name": "Punjabi", restaurantCount: { low: 4, high: 0 } },
    { "c.id": "id-umlyse9hi", "c.name": "Street Food", restaurantCount: { low: 4, high: 0 } }
  ],
  popularDishes: [
    { "d.id": "id-zu080uypz", "d.name": "Naan", "d.price": 3.99, orderCount: { low: 42, high: 0 } },
    { "d.id": "id-nl35pq62a", "d.name": "Paneer Tikka", "d.price": 11.99, orderCount: { low: 41, high: 0 } },
    { "d.id": "id-2l3ja66qz", "d.name": "Dosa", "d.price": 7.99, orderCount: { low: 41, high: 0 } },
    { "d.id": "id-02c2k2szf", "d.name": "Prawn Biryani", "d.price": 16.99, orderCount: { low: 38, high: 0 } },
    { "d.id": "id-0h551yrjj", "d.name": "Lassie", "d.price": 3.99, orderCount: { low: 36, high: 0 } },
    { "d.id": "id-0dq98h7g9", "d.name": "Rogan Josh", "d.price": 14.99, orderCount: { low: 36, high: 0 } },
    { "d.id": "id-8k9zbqwsf", "d.name": "Biryani (Mutton)", "d.price": 13.99, orderCount: { low: 36, high: 0 } },
    { "d.id": "id-ypmy6r9fz", "d.name": "Butter Chicken", "d.price": 15.99, orderCount: { low: 35, high: 0 } },
    { "d.id": "id-6plghogw2", "d.name": "Samosa", "d.price": 4.99, orderCount: { low: 35, high: 0 } },
    { "d.id": "id-ecx7rerra", "d.name": "Kheer", "d.price": 4.99, orderCount: { low: 34, high: 0 } }
  ],
  topRestaurants: [
    { "r.id": "id-a585w8c2o", "r.name": "Maharaja Palace", "r.rating": 4.8, total: { low: 1, high: 0 } },
    { "r.id": "id-2mup6fhje", "r.name": "Butter Chicken House", "r.rating": 4.8, total: { low: 1, high: 0 } },
    { "r.id": "id-cxt3mv2v0", "r.name": "Biryani House", "r.rating": 4.7, total: { low: 1, high: 0 } },
    { "r.id": "id-k4spdwi67", "r.name": "Dosa King", "r.rating": 4.7, total: { low: 1, high: 0 } },
    { "r.id": "id-qnqiz9aqn", "r.name": "Hyderabad Express", "r.rating": 4.7, total: { low: 1, high: 0 } },
    { "r.id": "id-k2skbda8r", "r.name": "Spice Route", "r.rating": 4.6, total: { low: 1, high: 0 } },
    { "r.id": "id-wqxaigs82", "r.name": "Coastal Kitchen", "r.rating": 4.6, total: { low: 1, high: 0 } },
    { "r.id": "id-f6ozr8ewn", "r.name": "Paneer Paradise", "r.rating": 4.6, total: { low: 1, high: 0 } },
    { "r.id": "id-30u4xeavt", "r.name": "Goan Paradise", "r.rating": 4.6, total: { low: 1, high: 0 } },
    { "r.id": "id-scmv7hfd2", "r.name": "Vegetarian Heaven", "r.rating": 4.6, total: { low: 1, high: 0 } }
  ],
  recentOrders: [
    { orderId: "id-qm5ik3ou8", customerId: "id-t9a8fw2ns", customerName: "Nikhil Iyer", orderDate: "2026-08-11T23:46:14.529Z", totalAmount: 72.94, status: "completed" },
    { orderId: "id-dovlovxrr", customerId: "id-ltfpsxczn", customerName: "Rajesh Iyer", orderDate: "2026-08-11T14:53:10.161Z", totalAmount: 55.93, status: "pending" },
    { orderId: "id-xnfkaisl9", customerId: "id-6sqxifw3h", customerName: "Sanjay Bhat", orderDate: "2026-08-11T13:25:24.311Z", totalAmount: 19.98, status: "completed" },
    { orderId: "id-v9lu7anak", customerId: "id-ltfpsxczn", customerName: "Rajesh Iyer", orderDate: "2026-08-11T09:23:31.201Z", totalAmount: 54.92, status: "cancelled" },
    { orderId: "id-l6rkoruec", customerId: "id-r3gupaccc", customerName: "Vikram Kumar", orderDate: "2026-08-10T19:40:06.098Z", totalAmount: 33.96, status: "cancelled" },
    { orderId: "id-nw60l00e9", customerId: "id-o6kqb59wp", customerName: "Arjun Bhat", orderDate: "2026-08-10T00:12:47.618Z", totalAmount: 7.98, status: "cancelled" },
    { orderId: "id-qexohrvcm", customerId: "id-292296rqj", customerName: "Sanjay Chopra", orderDate: "2026-08-09T14:24:25.225Z", totalAmount: 121.89, status: "pending" },
    { orderId: "id-ape2r29rc", customerId: "id-bing8tzv2", customerName: "Karthik Chopra", orderDate: "2026-08-09T08:47:49.754Z", totalAmount: 61.93, status: "completed" },
    { orderId: "id-mzat4d28r", customerId: "id-9d5fjpxnt", customerName: "Anjali Patel", orderDate: "2026-08-08T23:52:24.346Z", totalAmount: 80.94, status: "cancelled" },
    { orderId: "id-deqvh9lkn", customerId: "id-fj0wsku5o", customerName: "Karthik Sharma", orderDate: "2026-08-08T19:27:39.326Z", totalAmount: 45.93, status: "completed" }
  ]
};

const _val = (v) => {
  if (v == null) return undefined;
  if (typeof v === 'object') return v.low ?? v.value ?? undefined;
  return v;
};

const normalize = (raw) => {
  if (!raw) return null;
  const stats = raw.stats || raw;
  const out = {
    restaurantCount: _val(stats.restaurantCount),
    customerCount: _val(stats.customerCount),
    dishCount: _val(stats.dishCount),
    orderCount: _val(stats.orderCount),
    categoryCount: _val(stats.categoryCount),
    cuisineCount: _val(stats.cuisineCount),
    popularCuisines: (raw.popularCuisines || []).map((c) => ({ id: c['c.id'] || c.id, name: c['c.name'] || c['name'] || c.name, count: _val(c.restaurantCount) || _val(c.count) })),
    popularDishes: (raw.popularDishes || []).map((d) => ({ id: d['d.id'] || d.id, name: d['d.name'] || d['name'] || d.name, price: d['d.price'] ?? d.price, orders: _val(d.orderCount) || _val(d.orders) })),
    topRestaurants: (raw.topRestaurants || []).map((r) => ({ id: r['r.id'] || r.id, name: r['r.name'] || r['name'] || r.name, rating: r['r.rating'] ?? r.rating, total: _val(r.total) || undefined })),
    recentOrders: (raw.recentOrders || []).map((o) => ({ id: o.orderId || o.id, customerName: o.customerName || o['customerName'] || o['c.name'] || o['customer'], restaurantName: o.restaurantName || o['r.name'] || 'N/A', total: ((o.totalAmount ?? o.total) || 0).toFixed(2) })),
  };
  return out;
};

export const getDashboard = async () => {
  try {
    const response = await api.get('/dashboard');
    // Handle nested API response structure { success, message, data: {...} }
    const dashboardData = response.data?.data || response.data;
    return normalize(dashboardData);
  } catch (error) {
    // Fallback to mock data
    console.log('Using mock dashboard data');
    return normalize(MOCK_DASHBOARD);
  }
};

export const getDashboardStats = async () => {
  const response = await api.get('/dashboard/stats');
  return response.data;
};

export const getPopularCuisines = async () => {
  const response = await api.get('/dashboard/popular-cuisines');
  return response.data;
};

export const getPopularDishes = async () => {
  const response = await api.get('/dashboard/popular-dishes');
  return response.data;
};

export const getTopRestaurants = async () => {
  const response = await api.get('/dashboard/top-restaurants');
  return response.data;
};

export const getRecentOrders = async ({ skip = 0, limit = 10 } = {}) => {
  const params = { skip, limit };
  const response = await api.get('/dashboard/recent-orders', { params });
  return response.data;
};

export default {
  getDashboard,
  getDashboardStats,
  getPopularCuisines,
  getPopularDishes,
  getTopRestaurants,
  getRecentOrders,
};

