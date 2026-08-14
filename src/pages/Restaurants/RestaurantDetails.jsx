import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Card, Chip, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PageHeader from '../../components/common/PageHeader';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import EmptyState from '../../components/common/EmptyState';
import { getRestaurantById } from '../../services/restaurantService';

const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRestaurant = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getRestaurantById(id);
      setRestaurant(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRestaurant();
  }, [id]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} onRetry={loadRestaurant} />;
  if (!restaurant) return <EmptyState title="Restaurant not found." />;

  return (
    <Box>
      <PageHeader title={restaurant.name} subtitle="Restaurant profile and details." />
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        Back
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3, mb: 3 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Cuisine • Location • Rating
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {restaurant.cuisines && restaurant.cuisines.length > 0 ? (
                restaurant.cuisines.map((c) => (
                  <Chip key={c} label={c} />
                ))
              ) : (
                <Chip label={restaurant.cuisine || 'Multi-Cuisine'} />
              )}
              {restaurant.areas && restaurant.areas.length > 0 ? (
                restaurant.areas.map((a) => (
                  <Chip key={a} label={a} />
                ))
              ) : (
                <Chip label={restaurant.area || 'Various'} />
              )}
              <Chip label={restaurant.rating ? `★ ${restaurant.rating.toFixed(1)}` : 'No rating'} color="primary" />
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              {restaurant.description || 'This restaurant is known for its fresh dishes and loyal customer base.'}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Restaurant Details
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Address
              </Typography>
              <Typography variant="body2">
                {restaurant.address || 'N/A'}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Rating
              </Typography>
              <Typography variant="body2">
                {restaurant.rating ? `${restaurant.rating.toFixed(1)} / 5.0` : 'N/A'}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Cuisines
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                {restaurant.cuisines && restaurant.cuisines.length > 0 ? (
                  restaurant.cuisines.map((c) => (
                    <Chip key={c} label={c} size="small" />
                  ))
                ) : (
                  <Chip label={restaurant.cuisine || 'Multi-Cuisine'} size="small" />
                )}
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Areas Served
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                {restaurant.areas && restaurant.areas.length > 0 ? (
                  restaurant.areas.map((a) => (
                    <Chip key={a} label={a} size="small" />
                  ))
                ) : (
                  <Chip label={restaurant.area || 'Various'} size="small" />
                )}
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RestaurantDetails;
