import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../config/client";

export const getAllArticles = createAsyncThunk(
  "/articles",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.get("/articles", credentials);
      return response.data.articles;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getArticleWithId = createAsyncThunk(
  "/articles",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.get("/articles/:id", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updateAnArticle = createAsyncThunk(
  "/articles",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.put("/articles/:id", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteAnArticle = createAsyncThunk(
  "/articles",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.put("/articles/:id", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const postAnArticle = createAsyncThunk(
  "/articles",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post("/articles", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
