import api from './api';
import { getCustomers } from './customerService';

const MOCK_RECOMMENDATIONS = {
  "id-cw1dokzkm": [
    {
      "id": "id-k4spdwi67",
      "name": "Dosa King",
      "rating": 4.7,
      "description": "Traditional dosas and idlis",
      "similarCustomers": 104,
      "matchingDishes": 14,
      "recommendationScore": 208,
      "reason": "Highly recommended - 104 similar customers ordered here"
    },
    {
      "id": "id-5i95j04po",
      "name": "Chaat House",
      "rating": 4.3,
      "description": "Indian street food",
      "similarCustomers": 104,
      "matchingDishes": 13,
      "recommendationScore": 208,
      "reason": "Highly recommended - 104 similar customers ordered here"
    },
    {
      "id": "id-krss3er3g",
      "name": "Curry Corner",
      "rating": 4.5,
      "description": "Traditional Punjabi recipes",
      "similarCustomers": 103,
      "matchingDishes": 15,
      "recommendationScore": 206,
      "reason": "Highly recommended - 103 similar customers ordered here"
    },
    {
      "id": "id-wqxaigs82",
      "name": "Coastal Kitchen",
      "rating": 4.6,
      "description": "Fresh seafood preparations",
      "similarCustomers": 102,
      "matchingDishes": 15,
      "recommendationScore": 204,
      "reason": "Highly recommended - 102 similar customers ordered here"
    },
    {
      "id": "id-30u4xeavt",
      "name": "Goan Paradise",
      "rating": 4.6,
      "description": "Goan specialties",
      "similarCustomers": 102,
      "matchingDishes": 15,
      "recommendationScore": 204,
      "reason": "Highly recommended - 102 similar customers ordered here"
    },
    {
      "id": "id-a585w8c2o",
      "name": "Maharaja Palace",
      "rating": 4.8,
      "description": "Premium North Indian cuisine",
      "similarCustomers": 101,
      "matchingDishes": 15,
      "recommendationScore": 202,
      "reason": "Highly recommended - 101 similar customers ordered here"
    },
    {
      "id": "id-k2skbda8r",
      "name": "Spice Route",
      "rating": 4.6,
      "description": "Authentic South Indian flavors",
      "similarCustomers": 101,
      "matchingDishes": 13,
      "recommendationScore": 202,
      "reason": "Highly recommended - 101 similar customers ordered here"
    },
    {
      "id": "id-z5kt4mvee",
      "name": "Bengali Kitchen",
      "rating": 4.4,
      "description": "Bengali cuisine",
      "similarCustomers": 101,
      "matchingDishes": 14,
      "recommendationScore": 202,
      "reason": "Highly recommended - 101 similar customers ordered here"
    },
    {
      "id": "id-2mup6fhje",
      "name": "Butter Chicken House",
      "rating": 4.8,
      "description": "Famous for butter chicken",
      "similarCustomers": 100,
      "matchingDishes": 15,
      "recommendationScore": 200,
      "reason": "Highly recommended - 100 similar customers ordered here"
    },
    {
      "id": "id-scmv7hfd2",
      "name": "Vegetarian Heaven",
      "rating": 4.6,
      "description": "Pure vegetarian cuisine",
      "similarCustomers": 100,
      "matchingDishes": 15,
      "recommendationScore": 200,
      "reason": "Highly recommended - 100 similar customers ordered here"
    }
  ]
};

export const getBasicRecommendations = async (customerId, { limit = 10 } = {}) => {
  try {
    const params = { limit };
    const response = await api.get(`/customers/${customerId}/recommendations`, { params });
    return response.data;
  } catch (error) {
    console.log('Using fallback for basic recommendations');
    return { data: [] };
  }
};

export const getDetailedRecommendations = async (customerId, { limit = 10 } = {}) => {
  try {
    const params = { limit };
    const response = await api.get(`/customers/${customerId}/recommendations/detailed`, { params });
    return response.data;
  } catch (error) {
    console.log('Using fallback for detailed recommendations');
    return { data: [] };
  }
};

export const getCuisineBasedRecommendations = async (customerId, { limit = 10 } = {}) => {
  try {
    const params = { limit };
    const response = await api.get(`/customers/${customerId}/recommendations/cuisine-based`, { params });
    return response.data;
  } catch (error) {
    console.log('Using fallback for cuisine-based recommendations');
    return { data: [] };
  }
};

export const getAreaBasedRecommendations = async (customerId, { limit = 10 } = {}) => {
  try {
    const params = { limit };
    const response = await api.get(`/customers/${customerId}/recommendations/area-based`, { params });
    return response.data;
  } catch (error) {
    console.log('Using fallback for area-based recommendations');
    return { data: [] };
  }
};

export const getRecommendationsWithReasons = async (customerId, { limit = 10 } = {}) => {
  try {
    const params = { limit };
    const response = await api.get(`/customers/${customerId}/recommendations/with-reasons`, { params });
    return response.data;
  } catch (error) {
    console.log('Using fallback for recommendations with reasons');
    return { data: [] };
  }
};

export default {
  getBasicRecommendations,
  getDetailedRecommendations,
  getCuisineBasedRecommendations,
  getAreaBasedRecommendations,
  getRecommendationsWithReasons,
};

export const getCustomersForRecommendations = async () => {
  try {
    const response = await api.get('/customers');
    // Ensure we return proper structure with data array
    if (response.data?.data) {
      return response.data;
    }
    if (Array.isArray(response.data)) {
      return { data: response.data };
    }
    return response.data;
  } catch (error) {
    // Fallback to mock data using customerService
    console.log('Using mock customers for recommendations dropdown');
    const customerData = await getCustomers();
    return customerData;
  }
};

export const getRecommendationsByCustomer = async (customerId) => {
  try {
    const response = await api.get(`/customers/${customerId}/recommendations`);
    // Handle different response formats
    const data = response.data || {};
    if (data.data?.recommendations) {
      return { data: data.data.recommendations };
    }
    if (data.recommendations) {
      return { data: data.recommendations };
    }
    if (Array.isArray(data)) {
      return { data };
    }
    return { data: [] };
  } catch (error) {
    console.log('Using fallback for customer recommendations');
    // Return mock recommendations for the customer
    const mockRecs = MOCK_RECOMMENDATIONS[customerId] || MOCK_RECOMMENDATIONS['id-cw1dokzkm'] || [];
    return { data: mockRecs };
  }
};
