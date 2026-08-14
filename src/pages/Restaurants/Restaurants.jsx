import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Card, CardContent, Chip, FormControl, InputLabel, MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import SearchField from '../../components/common/SearchField';
import FilterBar from '../../components/common/FilterBar';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import EmptyState from '../../components/common/EmptyState';
import { getRestaurants } from '../../services/restaurantService';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filters, setFilters] = useState({ search: '', cuisine: '', area: '' });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [availableCuisines, setAvailableCuisines] = useState([]);
  const [availableAreas, setAvailableAreas] = useState([]);
  const navigate = useNavigate();

  const loadRestaurants = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getRestaurants({ page, search: filters.search, cuisine: filters.cuisine, area: filters.area });
      setRestaurants(response.data ?? []);
      setTotalPages(response.totalPages ?? 1);
      setAvailableCuisines(response.cuisines || []);
      setAvailableAreas(response.areas || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  const handleSearchChange = (event) => {
    setFilters((prev) => ({ ...prev, search: event.target.value }));
    setPage(1);
  };

  const handleFilterChange = (field) => (event) => {
    setFilters((prev) => ({ ...prev, [field]: event.target.value }));
    setPage(1);
  };

  const empty = !loading && !restaurants.length;

  return (
    <Box>
      <PageHeader title="Restaurants" subtitle="Search restaurants by cuisine and area." />
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <FilterBar>
            <SearchField value={filters.search} onChange={handleSearchChange} placeholder="Search restaurants" />
            <FormControl fullWidth size="small">
              <InputLabel>Cuisine</InputLabel>
              <Select value={filters.cuisine} label="Cuisine" onChange={handleFilterChange('cuisine')}>
                <MenuItem value="">All</MenuItem>
                {availableCuisines.map((cuisine) => (
                  <MenuItem key={cuisine} value={cuisine}>{cuisine}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Area</InputLabel>
              <Select value={filters.area} label="Area" onChange={handleFilterChange('area')}>
                <MenuItem value="">All</MenuItem>
                {availableAreas.map((area) => (
                  <MenuItem key={area} value={area}>{area}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </FilterBar>
        </CardContent>
      </Card>

      {loading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={loadRestaurants} />}
      {empty && <EmptyState title="No restaurants found." subtitle="Try adjusting your search or filters." />}

      {!loading && !error && restaurants.length > 0 && (
        <Box>
          <TableContainer component={Card} sx={{ overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Restaurant</TableCell>
                  <TableCell>Cuisine</TableCell>
                  <TableCell>Area</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {restaurants.map((restaurant) => (
                  <TableRow key={restaurant.id} hover>
                    <TableCell>{restaurant.name}</TableCell>
                    <TableCell>{restaurant.cuisine}</TableCell>
                    <TableCell>{restaurant.area}</TableCell>
                    <TableCell>{restaurant.rating?.toFixed(1) ?? '-'}</TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`/restaurants/${restaurant.id}`)}>
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination count={totalPages} page={page} onChange={(_, value) => setPage(value)} color="primary" />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Restaurants;
