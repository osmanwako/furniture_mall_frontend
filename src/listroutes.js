import { Navigate } from 'react-router-dom';
import Furnitures from './components/furniture/furnitures';
import Customer from './components/customer/customer';
import NotFound from './components/notfound/notfound';
import Login from './components/login/login';
import Signup from './components/login/signup';
import Home from './components/dashboard/home';
import Appointment from './components/appoint/appoint';

const ListRoutes = (isauthenticated) => [
  {
    path: '/',
    element: isauthenticated ? <Home /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Furnitures /> },
      { path: '/furnitures', element: <Furnitures /> },
      { path: '/appointments', element: <Appointment /> },
      { path: '/details', element: <Furnitures /> },
      { path: '/customers', element: <Customer /> },
      { path: '/', element: <Furnitures /> },
    ],
  },
  {
    path: '/login',
    element: !isauthenticated ? <Login /> : <Navigate to="/dashboard" />,
  },
  {
    path: '/signup',
    element: !isauthenticated ? <Signup /> : <Navigate to="/dashboard" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default ListRoutes;
