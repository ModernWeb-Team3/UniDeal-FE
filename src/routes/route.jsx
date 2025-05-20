import Home from '@/pages/home';
import ProductDetail from '@/pages/productDetail';
import Signup from '@/pages/signup';
import ProductCreate from '@/pages/productCreate';
import ProductEdit from '@/pages/productEdit';
import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/login';
import SignupComplete from '@/pages/signupComplete';
import EntryPage from '@/pages/entryPage';
import ProductInquiry from '@/pages/productInquiry';


const router = createBrowserRouter([
  {
    path: '/',
    element: <EntryPage />, 
  },
  {
    path: '/login',
    element: <Login />, 
  },
  // {
  //   path: '/loginModal',
  //   element: <LoginModal />, 
  // },
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
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/product/:id/inquiry',
    element: <ProductInquiry />,
  },
]);

export default router;