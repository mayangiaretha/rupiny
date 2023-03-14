import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "features/auth/login/login";
// eslint-disable-next-line import/no-named-as-default
import Registration from "features/auth/registration/registration";
import ViewArticles from "features/articles/viewArticles/viewArticles";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <ViewArticles />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Registration />,
        },
      ],
    },
  ]);
export default Routes;
