import { Box, Card, CardContent, CardActions, Typography, Chip, Stack, Button, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StorefrontIcon from '@mui/icons-material/Storefront';

const RecommendationCard = ({ recommendation, onViewRestaurant }) => {
  // Normalize data in case it comes in different formats
  const similarCustomersCount = recommendation.similarCustomers?.low || recommendation.similarCustomers || 0;
  const matchingDishesCount = recommendation.matchingDishes?.low || 
                               (typeof recommendation.matchingDishes === 'number' ? recommendation.matchingDishes : 
                               (Array.isArray(recommendation.matchingDishes) ? recommendation.matchingDishes.length : 0));
  const matchingDishesArray = Array.isArray(recommendation.matchingDishes) ? recommendation.matchingDishes : [];

  return (
    <Card>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Box>
            <Typography variant="h6">{recommendation.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {recommendation.cuisine || 'Multi-Cuisine'} · {recommendation.area || 'Various'}
            </Typography>
          </Box>
          <StarIcon color="primary" />
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <Chip label={`Rating ${recommendation.rating?.toFixed(1) || recommendation.score || 'N/A'}`} color="secondary" size="small" />
          <Chip label={`${similarCustomersCount} similar customers`} size="small" />
          <Chip label={`${matchingDishesCount} matching dishes`} size="small" />
        </Stack>

        <Typography variant="body2" color="text.secondary" mb={1}>
          {recommendation.reason || recommendation.description || 'Customers with similar purchase patterns frequently order from this restaurant.'}
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2" gutterBottom>
          Recommendation Score: {recommendation.score || recommendation.recommendationScore || 0}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<StorefrontIcon />} onClick={() => onViewRestaurant(recommendation.restaurantId || recommendation.id)}>
          View Restaurant
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecommendationCard;
