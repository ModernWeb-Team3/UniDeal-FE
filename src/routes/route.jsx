import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import ProductDetail from '@/pages/productDetail';
import Signup from '@/pages/signup';
import ProductCreate from '@/pages/productCreate';
import ProductEdit from '@/pages/productEdit';
import SignupComplete from '@/pages/signupComplete';
import EntryPage from '@/pages/entryPage';
import LoginModal from '@/pages/login/LoginModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EntryPage />,
  },
  {
    path: '/login',
    element: <LoginModal />,
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
