import { Box } from '@mui/material';

const FilterBar = ({ children }) => (
  <Box sx={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', mb: 3 }}>
    {children}
  </Box>
);

export default FilterBar;
