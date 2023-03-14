import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/auth.reducer";
import articlesReducer from "../features/articles/articles.reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articles: articlesReducer,
  },
});
