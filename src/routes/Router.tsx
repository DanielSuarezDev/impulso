import {FC, useEffect, lazy, useState} from 'react';
import {Routes, Route} from 'react-router';
import {Navigate, BrowserRouter} from 'react-router-dom';
import {Route as RouteType, ROUTES} from './types';
import { Layout } from '../Components/Template/Layout/Layout';
import { useAuth } from '../Context/Auth/AuthContext';


export enum StatusAuth {
    CHECKING = 'checking',
    NOT_AUTHENTICATED = 'not-authenticated',
    AUTHENTICATED = 'authenticated',
  }
// eslint-disable-next-line no-restricted-globals
const width = innerWidth;
let isLayout = false;
if (width > 768) {
  isLayout = true;
} else {
  isLayout = false;
}
const Home = lazy(
  () => import(/*webpackChunkName: "Home"*/ '../Pages/Home'),
);
const Login = lazy(
  () => import(/*webpackChunkName: "Login"*/ '../Pages/Login'),
);

export const RoutesPublic: RouteType[] = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.LOGIN} replace />,
  },
];

export const RoutesPrivate: RouteType[] = [
  {
    isPrivate: true,
    path: ROUTES.HOME,
    element: <Home />,
    isLayout: true,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export const Router: FC = () => {
  const {userConfig} = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userConfig) {
      setLoading(true);
    }
      setLoading(false);
    
  }, [userConfig]);

  if (loading) {
    return <p>loading pending .....</p>;
  }
  return (
    <Routes>
      {userConfig
        ? RoutesPrivate.map((route, index) => (
            <Route
              path={route.path}
              element={
                route.isLayout ? (
                  <Layout>{route.element}</Layout>
                ) : (
                  route.element
                )
              }
              key={index}
            />
          ))
        : RoutesPublic.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
    </Routes>
  );
};
