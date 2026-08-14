import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingState = ({ message = 'Loading...' }) => (
  <Box sx={{ py: 10, textAlign: 'center' }}>
    <CircularProgress />
    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
      {message}
    </Typography>
  </Box>
);

export default LoadingState;
