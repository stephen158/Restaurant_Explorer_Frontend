import { Card, CardContent, CardActions, Typography, Chip, Stack, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const RestaurantCard = ({ restaurant, onView }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>{restaurant.name}</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        <Chip label={restaurant.cuisine} size="small" />
        <Chip label={restaurant.area} size="small" />
        <Chip icon={<StarIcon fontSize="small" />} label={restaurant.rating?.toFixed(1)} size="small" />
      </Stack>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {restaurant.description || 'A popular restaurant with customer favorites and signature dishes.'}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
        {(restaurant.dishes || []).slice(0, 3).map((dish) => (
          <Chip key={dish} label={dish} size="small" />
        ))}
      </Stack>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onView(restaurant.id)}>
        View Restaurant
      </Button>
    </CardActions>
  </Card>
);

export default RestaurantCard;
