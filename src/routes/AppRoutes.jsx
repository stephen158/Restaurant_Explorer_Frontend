import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Restaurants from '../pages/Restaurants/Restaurants';
import RestaurantDetails from '../pages/Restaurants/RestaurantDetails';
import Customers from '../pages/Customers/Customers';
import CustomerDetails from '../pages/Customers/CustomerDetails';
import Recommendations from '../pages/Recommendations/Recommendations';
import GraphExplorer from '../pages/GraphExplorer/GraphExplorer';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to="/dashboard" replace />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="restaurants" element={<Restaurants />} />
      <Route path="restaurants/:id" element={<RestaurantDetails />} />
      <Route path="customers" element={<Customers />} />
      <Route path="customers/:id" element={<CustomerDetails />} />
      <Route path="recommendations" element={<Recommendations />} />
      <Route path="graph-explorer" element={<GraphExplorer />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Route>
  </Routes>
);

export default AppRoutes;
