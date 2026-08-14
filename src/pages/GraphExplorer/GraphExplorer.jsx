import { useEffect, useState, useCallback } from 'react';
import { Box, Card, FormControl, InputLabel, MenuItem, Select, Stack, Typography, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import EmptyState from '../../components/common/EmptyState';
import GraphNode from '../../components/graph/GraphNode';
import { getCustomersForRecommendations } from '../../services/recommendationService';
import { getGraphForCustomer } from '../../services/graphService';

const GraphExplorer = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [graphData, setGraphData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [graphLoading, setGraphLoading] = useState(false);
  const [error, setError] = useState(null);
  const [graphError, setGraphError] = useState(null);
  const location = useLocation();
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

  const loadGraph = useCallback(async (customerId) => {
    setGraphLoading(true);
    setGraphError(null);
    try {
      const response = await getGraphForCustomer(customerId);
      setGraphData(response);
    } catch (err) {
      setGraphError(err.message);
    } finally {
      setGraphLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCustomers();
  }, [loadCustomers]);

  useEffect(() => {
    if (!selectedCustomer) return;
    loadGraph(selectedCustomer);
  }, [selectedCustomer, loadGraph]);

  return (
    <Box>
      <PageHeader title="Graph Explorer" subtitle="Visualize customer relationships across orders, dishes and restaurants." />
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

      {loading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={loadCustomers} />}
      {graphLoading && <LoadingState message="Loading graph relationships..." />}
      {graphError && <ErrorState message={graphError} onRetry={() => loadGraph(selectedCustomer)} />}
      {!graphLoading && !graphError && graphData && !graphData.nodes?.length && (
        <EmptyState title="No graph relationships available." />
      )}
      {!graphLoading && !graphError && graphData?.nodes?.length > 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Customer Relationship Map
              </Typography>
              <Stack spacing={2}>
                <Typography variant="body2" color="text.secondary">
                  Each node represents a graph entity and the arrows represent relationships between customer activity, orders, dishes, categories, restaurants and areas.
                </Typography>
                <Grid container spacing={2}>
                  {(graphData.nodes || []).map((node) => (
                    <Grid key={node.id} item xs={12} md={6}>
                      <Card sx={{ p: 2, bgcolor: '#f9fbff' }}>
                        <Stack spacing={1}>
                          <GraphNode label={node.label} />
                          <Typography variant="body2" color="text.secondary">Type: {node.type}</Typography>
                          <Typography variant="body2" color="text.secondary">Value: {node.value}</Typography>
                        </Stack>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Graph Relationships
              </Typography>
              <Stack spacing={2}>
                {(graphData.relationships || []).map((relationship) => (
                  <Card key={`${relationship.source}-${relationship.target}-${relationship.type}`} variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="body2" fontWeight={600}>{relationship.type}</Typography>
                    <Typography variant="body2" color="text.secondary">{relationship.source} → {relationship.target}</Typography>
                  </Card>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default GraphExplorer;
