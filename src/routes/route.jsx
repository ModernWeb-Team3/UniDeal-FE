import Home from '@/pages/home';
import ProductDetail from '@/pages/productDetail';
import Signup from '@/pages/signup';
import ProductCreate from '@/pages/productCreate';
import ProductEdit from '@/pages/productEdit';
import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/login';
import SignupComplete from '@/pages/signupComplete';



const router = createBrowserRouter([
  {
    path: '/',               
    element: <Signup />,   
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signup/complete',
    element: <SignupComplete />,
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
    path: '/product/:id/edit',
    element: <ProductEdit />,
  },
  {
    path: '/product/detail',
    element: <ProductDetail />,
  },
]);

export default router;
