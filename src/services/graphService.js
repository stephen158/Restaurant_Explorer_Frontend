import api from './api';

export const getCustomerSubgraph = async (customerId) => {
  try {
    const response = await api.get(`/graph/customer/${customerId}`);
    return response.data;
  } catch (error) {
    console.log('Using fallback for customer subgraph');
    return { nodes: [], edges: [] };
  }
};

export const getCustomerSubgraphExpanded = async (customerId, { maxDepth = 3 } = {}) => {
  try {
    const params = { maxDepth };
    const response = await api.get(`/graph/customer/${customerId}/expanded`, { params });
    return response.data;
  } catch (error) {
    console.log('Using fallback for expanded subgraph');
    return { nodes: [], edges: [] };
  }
};

export const getCustomerGraphStatistics = async (customerId) => {
  try {
    const response = await api.get(`/graph/customer/${customerId}/statistics`);
    return response.data;
  } catch (error) {
    console.log('Using fallback for graph statistics');
    return { stats: {} };
  }
};

export const getCustomerExploration = async (customerId) => {
  try {
    const response = await api.get(`/graph/customer/${customerId}/exploration`);
    return response.data;
  } catch (error) {
    console.log('Using fallback for customer exploration');
    return { data: [] };
  }
};

export default {
  getCustomerSubgraph,
  getCustomerSubgraphExpanded,
  getCustomerGraphStatistics,
  getCustomerExploration,
};

export const getGraphForCustomer = async (customerId) => {
  try {
    const response = await api.get(`/graph/customer/${customerId}`);
    return response.data;
  } catch (error) {
    console.log('Using fallback for customer graph');
    return { nodes: [], edges: [] };
  }
};
