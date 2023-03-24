import { createSlice } from "@reduxjs/toolkit";
import {
  getAllArticles,
  // postAnArticle,
  getArticleWithId,
  // updateAnArticle,
  // deleteAnArticle,
} from "./articles.actions";

const initialState = {
  articles: [],
  article: {},
  error: "",
  delete: false,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.fulfilled, (state, action) => ({
        ...state,
        articles: action.payload,
        error: "",
        delete: false,
        article: {},
      }))
      .addCase(getAllArticles.rejected, (state, action) => ({
        ...state,
        articles: [],
        error: action.payload,
        delete: false,
        article: {},
      }))
      .addCase(getArticleWithId.fulfilled, (state, action) => ({
        ...state,
        articles: [],
        error: "",
        delete: false,
        article: action.payload,
      }))
      .addCase(getArticleWithId.rejected, (state, action) => ({
        ...state,
        articles: [],
        error: action.payload,
        delete: false,
        article: {},
      }));
    // .addCase(updateAnArticle.fulfilled, (state, action) => {
    //   state.article = action.payload;
    // })
    // .addCase(deleteAnArticle.fulfilled, (state, action) => {
    //   state.articles = state.articles.filter(
    //     (article) => article._id !== action.payload._id
    //   );
    //   state.delete = true;
    // })
    // .addCase(postAnArticle.fulfilled, (state, action) => {
    //   state.articles.push(action.payload);
    // });
  },
});

export const { setArticle, setError, setDelete } = articleSlice.actions;

export default articleSlice.reducer;
