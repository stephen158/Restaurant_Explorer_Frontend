import { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PageHeader from '../../components/common/PageHeader';
import StatCard from '../../components/common/StatCard';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import EmptyState from '../../components/common/EmptyState';
import { getDashboard } from '../../services/dashboardService';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDashboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getDashboard();
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState onRetry={loadDashboard} message={error} />;
  if (!data) return <EmptyState title="No dashboard data available." />;

  return (
    <Box>
      <PageHeader title="Dashboard" subtitle="Review restaurant, customer and recommendation metrics." />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}><StatCard label="Restaurants" value={data.restaurantCount ?? '-'} /></Grid>
        <Grid item xs={12} md={3}><StatCard label="Customers" value={data.customerCount ?? '-'} /></Grid>
        <Grid item xs={12} md={3}><StatCard label="Dishes" value={data.dishCount ?? '-'} /></Grid>
        <Grid item xs={12} md={3}><StatCard label="Orders" value={data.orderCount ?? '-'} /></Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Popular Cuisines</Typography>
            {(data.popularCuisines || []).length ? (
              <Box sx={{ display: 'grid', gap: 1 }}>
                {data.popularCuisines.map((item) => (
                  <Box key={item.name} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>{item.name}</Typography>
                    <Typography color="text.secondary">{item.count}</Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <EmptyState title="No cuisines available." subtitle="Check back after data loads." />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Top Restaurants</Typography>
            {(data.topRestaurants || []).length ? (
              <Box sx={{ display: 'grid', gap: 1 }}>
                {data.topRestaurants.map((restaurant) => (
                  <Box key={restaurant.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>{restaurant.name}</Typography>
                    <Typography color="text.secondary">{restaurant.rating?.toFixed(1)}</Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <EmptyState title="No restaurants available." subtitle="No top restaurants could be loaded." />
            )}
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Popular Dishes</Typography>
            {(data.popularDishes || []).length ? (
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dish</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Orders</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.popularDishes.map((dish) => (
                      <TableRow key={dish.name}>
                        <TableCell>{dish.name}</TableCell>
                        <TableCell align="right">${dish.price?.toFixed(2) ?? 'N/A'}</TableCell>
                        <TableCell align="right">{dish.orders}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <EmptyState title="No dishes found." />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Recent Orders</Typography>
            {(data.recentOrders || []).length ? (
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Customer</TableCell>
                      <TableCell>Restaurant</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>{order.restaurantName}</TableCell>
                        <TableCell>${typeof order.total === 'string' ? order.total : order.total?.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <EmptyState title="No recent orders." />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
