import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "features/auth/login/login";
// eslint-disable-next-line import/no-named-as-default
import Registration from "./features/auth/registration/registration";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Registration />,
    },
  ]);
export default Routes;
