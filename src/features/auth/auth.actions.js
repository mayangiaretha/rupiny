import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../config/client";

export const register = createAsyncThunk(
  "userAuth/register",
  async (credentials, thunkApi) => {
    try {
      const response = instance.post("userAuth/register", credentials);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);
export const login = createAsyncThunk(
  "api/v1/userAuth/signIn ",
  async (credentials, thunkAPI) => {
    try {
      const response = instance.post("userAuth/signIn", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/api/logout");
    return {};
  } catch (error) {
    return error.response.data;
  }
});
