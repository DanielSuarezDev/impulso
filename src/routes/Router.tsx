import { FC, useEffect, lazy, useState } from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import { Route as RouteType, ROUTES } from "./types";
import { Layout } from "../Components/Template/Layout/Layout";
import { useAuth } from "../Context/Auth/AuthContext";

export enum StatusAuth {
  CHECKING = "checking",
  NOT_AUTHENTICATED = "not-authenticated",
  AUTHENTICATED = "authenticated",
}
// eslint-disable-next-line no-restricted-globals
const width = innerWidth;
let isLayout = false;
if (width > 768) {
  isLayout = true;
} else {
  isLayout = false;
}
const Home = lazy(() => import(/*webpackChunkName: "Home"*/ "../Pages/Home"));

const About = lazy(
  () => import(/*webpackChunkName: "About"*/ "../Pages/About")
);
const BeSave = lazy(
  () => import(/*webpackChunkName: "About"*/ "../Pages/BeSave")
);

const Blog = lazy(() => import(/*webpackChunkName: "Blog"*/ "../Pages/Blog"));
const BlogDetail = lazy(() => import(/*webpackChunkName: "Blog"*/ "../Components/Molecules/Markdown/MarkdownDetail"));
const ResourceDetail = lazy(() => import(/*webpackChunkName: "Blog"*/ "../Components/Molecules/ResourceForm/ResourceDetail"));

const Resources = lazy(
  () => import(/*webpackChunkName: "Resources"*/ "../Pages/Resources")
);

const Login = lazy(
  () => import(/*webpackChunkName: "Login"*/ "../Pages/Login")
);

export const RoutesRoute: RouteType[] = [
  {
    isPrivate: false,
    path: ROUTES.HOME,
    element: <Home />,
    isLayout: true,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
    isLayout: true,
  },
  {
    path: ROUTES.BESAVE,
    element: <BeSave />,
    isLayout: true,
  },
  {
    isPrivate: true,
    path: ROUTES.RESOURCES,
    element: <Resources />,
    isLayout: true,
  },
  {
    isPrivate: true,
    path: ROUTES.BLOG,
    element: <Blog />,
    isLayout: true,
  },
  {
    isPrivate: true,
    path: ROUTES.BLOG_DETAIL,
    element: <BlogDetail />,
    isLayout: false,
  },
  {
    isPrivate: true,
    path: ROUTES.RESOURCE_DETAIL,
    element: <ResourceDetail />,
    isLayout: false,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export const Router: FC = () => {
  const { userConfig } = useAuth();
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
      {RoutesRoute.map((route, index) => (
        <Route
          path={route.path}
          element={
            route.isLayout ? (
              <Layout userConfig={userConfig}>{route.element}</Layout>
            ) : (
              route.element
            )
          }
          key={index}
        />
      ))}
    </Routes>
  );
};
