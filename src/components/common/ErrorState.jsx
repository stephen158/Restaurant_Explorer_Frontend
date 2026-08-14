import { Box, Button, Typography } from '@mui/material';

const ErrorState = ({ message = 'Unable to load data. Please try again.', onRetry }) => (
  <Box sx={{ py: 10, textAlign: 'center' }}>
    <Typography variant="h6" gutterBottom>
      {message}
    </Typography>
    {onRetry && (
      <Button variant="contained" onClick={onRetry} sx={{ mt: 2 }}>
        Retry
      </Button>
    )}
  </Box>
);

export default ErrorState;
