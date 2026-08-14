import { Paper, Typography } from '@mui/material';

const GraphNode = ({ label }) => (
  <Paper variant="outlined" sx={{ px: 2, py: 1, borderRadius: 2, display: 'inline-flex' }}>
    <Typography variant="body2" fontWeight={600}>
      {label}
    </Typography>
  </Paper>
);

export default GraphNode;
