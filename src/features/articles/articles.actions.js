import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../config/client";

export const getAllArticles = createAsyncThunk(
  "/articles",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.get("/articles", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getArticleWithId = createAsyncThunk(
  "getAnarticle",
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
  "/updateArticles",
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
  "deleteAnArticle",
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
  "postAnArticle",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post("/articles", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
