import { Card, CardContent, Typography, Stack, Chip, Button, CardActions } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const CustomerCard = ({ customer, onView }) => (
  <Card>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <PersonIcon color="primary" />
        <Typography variant="h6">{customer.name}</Typography>
      </Stack>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {customer.email}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        <Chip label={customer.area} size="small" />
        <Chip label={`${customer.orders || 0} orders`} size="small" />
        <Chip label={customer.preferredCuisine || 'N/A'} size="small" />
      </Stack>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onView(customer.id)}>
        View Profile
      </Button>
    </CardActions>
  </Card>
);

export default CustomerCard;
