import { useEffect, useState, useCallback } from 'react';
import { Box, Card, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import EmptyState from '../../components/common/EmptyState';
import RecommendationCard from '../../components/recommendations/RecommendationCard';
import { getCustomersForRecommendations, getRecommendationsByCustomer } from '../../services/recommendationService';

const Recommendations = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommendationLoading, setRecommendationLoading] = useState(false);
  const [recommendationError, setRecommendationError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const initialCustomerId = location.state?.customerId || '';

  const loadCustomers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCustomersForRecommendations();
      // Handle both array and object with data property
      const customerList = Array.isArray(response) ? response : (response?.data || []);
      setCustomers(customerList);
      setSelectedCustomer(initialCustomerId || (customerList?.[0]?.id ?? ''));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [initialCustomerId]);

  const loadRecommendations = useCallback(async (customerId) => {
    if (!customerId) return;
    setRecommendationLoading(true);
    setRecommendationError(null);
    try {
      const data = await getRecommendationsByCustomer(customerId);
      // Handle nested structure: data.data.recommendations or data.recommendations
      let recList = data?.data?.recommendations || data?.recommendations || data?.data || [];
      
      // Ensure it's an array and normalize data
      recList = Array.isArray(recList) ? recList : [];
      
      // Normalize recommendation data
      const normalized = recList.map(rec => ({
        ...rec,
        score: rec.recommendationScore || rec.score || 0,
        similarCustomers: rec.similarCustomers?.low || rec.similarCustomers || 0,
        matchingDishes: Array.isArray(rec.matchingDishes) ? rec.matchingDishes : [], // Default to empty array
      }));
      
      setRecommendations(normalized);
    } catch (err) {
      setRecommendationError(err.message);
    } finally {
      setRecommendationLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCustomers();
  }, [loadCustomers]);

  useEffect(() => {
    if (!selectedCustomer) return;
    loadRecommendations(selectedCustomer);
  }, [selectedCustomer, loadRecommendations]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} onRetry={loadCustomers} />;

  return (
    <Box>
      <PageHeader title="Restaurant Recommendations" subtitle="Discover restaurants recommended for a customer using graph relationships." />
      <Card sx={{ mb: 3, p: 3 }}>
        <FormControl fullWidth>
          <InputLabel>Select Customer</InputLabel>
          <Select value={selectedCustomer} label="Select Customer" onChange={(event) => setSelectedCustomer(event.target.value)}>
            {customers.map((customer) => (
              <MenuItem key={customer.id} value={customer.id}>{customer.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Card>
      {recommendationLoading && <LoadingState message="Loading recommendations..." />}
      {recommendationError && <ErrorState message={recommendationError} onRetry={() => loadRecommendations(selectedCustomer)} />}
      {!recommendationLoading && !recommendationError && !recommendations.length && (
        <EmptyState title="No recommendations found." subtitle="Try selecting another customer." />
      )}
      <Stack spacing={3}>
        {recommendations.map((recommendation) => (
          <RecommendationCard key={recommendation.restaurantId || recommendation.id} recommendation={recommendation} onViewRestaurant={(restaurantId) => navigate(`/restaurants/${restaurantId}`)} />
        ))}
      </Stack>
    </Box>
  );
};

export default Recommendations;
