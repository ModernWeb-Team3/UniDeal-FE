import Home from '@/pages/home';
import Signup from '@/pages/signup';
import ProductCreate from '@/pages/ProductCreate';
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
]);

export default router;
