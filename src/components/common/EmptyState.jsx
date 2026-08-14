import { Box, Typography } from '@mui/material';

const EmptyState = ({ title = 'No results found.', subtitle }) => (
  <Box sx={{ py: 10, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default EmptyState;
