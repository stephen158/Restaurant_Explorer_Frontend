import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import SearchField from '../../components/common/SearchField';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import EmptyState from '../../components/common/EmptyState';
import { getCustomers } from '../../services/customerService';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadCustomers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCustomers({ page, search });
      setCustomers(response.data ?? []);
      setTotalPages(response.totalPages ?? 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, [page, search]);

  return (
    <Box>
      <PageHeader title="Customers" subtitle="Browse customers and explore order preferences." />
      <Card sx={{ mb: 3, p: 3 }}>
        <SearchField value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search customers" />
      </Card>
      {loading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={loadCustomers} />}
      {!loading && !error && !customers.length && <EmptyState title="No customers found." subtitle="Try another search term." />}
      {!loading && !error && customers.length > 0 && (
        <Box>
          <TableContainer component={Card}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Area</TableCell>
                  <TableCell>Orders</TableCell>
                  <TableCell>Cuisine</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id} hover>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.area}</TableCell>
                    <TableCell>{customer.orderCount ?? 0}</TableCell>
                    <TableCell>{customer.favoriteCuisine ?? 'N/A'}</TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`/customers/${customer.id}`)}>
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

export default Customers;
