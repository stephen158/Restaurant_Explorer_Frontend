import { Card, CardContent, Typography, Box } from '@mui/material';

const StatCard = ({ label, value, suffix, subtitle }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {label}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
        {suffix && (
          <Typography variant="body2" color="text.secondary">
            {suffix}
          </Typography>
        )}
      </Box>
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default StatCard;
