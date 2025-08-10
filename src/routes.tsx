import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Customer pages
import Home from './pages/customer/Home';
import ProductList from './pages/customer/ProductList';
import ProductDetail from './pages/customer/ProductDetail';
import Cart from './pages/customer/Cart';
import Checkout from './pages/customer/Checkout';
import OrderHistory from './pages/customer/OrderHistory';

// Admin pages
import Dashboard from './pages/admin/Dashboard';
import ProductManagement from './pages/admin/ProductManagement';
import OrderManagement from './pages/admin/OrderManagement';
import Analytics from './pages/admin/Analytics';

const router = createBrowserRouter([
  // Customer routes
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <ProductList />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/orders',
    element: <OrderHistory />,
  },

  // Admin routes
  {
    path: '/admin',
    element: <Dashboard />,
  },
  {
    path: '/admin/products',
    element: <ProductManagement />,
  },
  {
    path: '/admin/orders',
    element: <OrderManagement />,
  },
  {
    path: '/admin/analytics',
    element: <Analytics />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
