import Home from '@/pages/home';
import Signup from '@/pages/signup';
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
]);

export default router;
