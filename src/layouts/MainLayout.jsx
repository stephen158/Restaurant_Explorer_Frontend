import { useMemo, useState } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  Breadcrumbs,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleIcon from '@mui/icons-material/People';
import StarRateIcon from '@mui/icons-material/StarRate';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const drawerWidth = 280;

const navigationItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Restaurants', path: '/restaurants', icon: <RestaurantIcon /> },
  { label: 'Customers', path: '/customers', icon: <PeopleIcon /> },
  { label: 'Recommendations', path: '/recommendations', icon: <StarRateIcon /> },
  { label: 'Graph Explorer', path: '/graph-explorer', icon: <GraphicEqIcon /> },
];

const MainLayout = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const activeLabel = useMemo(() => {
    const matched = navigationItems.find((item) => location.pathname.startsWith(item.path));
    return matched ? matched.label : 'Dashboard';
  }, [location.pathname]);

  const drawer = (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Restaurant Explorer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore customers, orders, recommendations and graph relationships.
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              selected={location.pathname.startsWith(item.path)}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: '#fff', color: '#1f2a3d', borderBottom: '1px solid rgba(145, 158, 171, 0.16)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isSmall && (
            <IconButton edge="start" color="inherit" aria-label="open navigation" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            {activeLabel}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} aria-label="main navigation">
        {isSmall ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            open
            sx={{ display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 0, borderRight: '1px solid rgba(145, 158, 171, 0.16)' } }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, width: { md: `calc(100% - ${drawerWidth}px)` }, bgcolor: '#f4f6fb' }}>
        <Toolbar />
        <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ mb: 3 }}>
          <Link component={RouterLink} variant="body2" color="text.secondary" to="/dashboard">
            Home
          </Link>
          <Typography variant="body2" color="text.primary">
            {activeLabel}
          </Typography>
        </Breadcrumbs>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
