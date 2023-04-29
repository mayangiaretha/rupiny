import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "features/auth/login/login";
// eslint-disable-next-line import/no-named-as-default
import Registration from "features/auth/registration/registration";
import ViewArticles from "features/articles/viewArticles/viewArticles";
import ViewArticle from "./features/articles/viewArticle/viewArticle";
import CreateArticle from "./features/articles/createArticle/createArticle";

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
        {
          path: "/article/:id",
          element: <ViewArticle />,
        },
        {
          path: "/article/create",
          element: <CreateArticle />,
        },
      ],
    },
  ]);
export default Routes;
