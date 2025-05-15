import Home from '@/pages/home';
import ProductDetail from '@/pages/productDetail';
import Signup from '@/pages/signup';
import ProductCreate from '@/pages/productCreate';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/product/new',
    element: <ProductCreate />,
  },
  {
    path: '/product/detail',
    element: <ProductDetail />,
  },
]);

export default router;
