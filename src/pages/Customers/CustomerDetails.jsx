import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Card, Chip, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PageHeader from '../../components/common/PageHeader';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import EmptyState from '../../components/common/EmptyState';
import { getCustomerById, getCustomerPurchases } from '../../services/customerService';

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCustomer = async () => {
    setLoading(true);
    setError(null);
    try {
      const profile = await getCustomerById(id);
      const purchaseData = await getCustomerPurchases(id);
      setCustomer(profile);
      setPurchases(purchaseData || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomer();
  }, [id]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} onRetry={loadCustomer} />;
  if (!customer) return <EmptyState title="Customer not found." />;

  return (
    <Box>
      <PageHeader title={customer.name} subtitle="Customer profile, purchase history and recommendations." />
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        Back
      </Button>
      
      <Grid container spacing={3}>
        {/* Customer Profile Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Email
              </Typography>
              <Typography variant="body2">{customer.email || 'N/A'}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Phone
              </Typography>
              <Typography variant="body2">{customer.phone || 'N/A'}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Area
              </Typography>
              <Typography variant="body2">{customer.area || 'N/A'}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Orders
              </Typography>
              <Typography variant="body2">{customer.orderCount ?? purchases.length}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Favorite Cuisine
              </Typography>
              <Typography variant="body2">{customer.favoriteCuisine || 'N/A'}</Typography>
            </Box>
          </Card>
        </Grid>

        {/* Actions Card */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Actions & Preferences
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Cuisines
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {customer.cuisines && customer.cuisines.length > 0 ? (
                  customer.cuisines.map((c) => (
                    <Chip key={c} label={c} size="small" />
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">No cuisine preferences</Typography>
                )}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 3 }}>
              <Button 
                variant="contained" 
                onClick={() => navigate('/recommendations', { state: { customerId: id } })}
              >
                View Recommendations
              </Button>
              <Button 
                variant="outlined" 
                onClick={() => navigate('/graph-explorer', { state: { customerId: id } })}
              >
                Explore Graph
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Purchase History Section */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Purchase History
            </Typography>
            {purchases.length > 0 ? (
              <Box>
                {purchases.map((order, orderIdx) => (
                  <Box key={order.orderId || orderIdx} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Box>
                        <Typography variant="subtitle1">
                          Order #{orderIdx + 1}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(order.orderDate).toLocaleDateString()} • {order.status}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        ${order.totalAmount?.toFixed(2) || '0.00'}
                      </Typography>
                    </Box>
                    
                    {/* Order Dishes Table */}
                    {order.dishes && order.dishes.length > 0 ? (
                      <TableContainer sx={{ mb: 2 }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                              <TableCell>Dish Name</TableCell>
                              <TableCell align="right">Price</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {order.dishes.map((dish) => (
                              <TableRow key={dish.id} hover>
                                <TableCell>{dish.name}</TableCell>
                                <TableCell align="right">${dish.price?.toFixed(2) || 'N/A'}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    ) : null}
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography color="text.secondary">No orders found.</Typography>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerDetails;
