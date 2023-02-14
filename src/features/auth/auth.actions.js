import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../config/client";

export const login = createAsyncThunk(
  "api/v1/userAuth/signIn ",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseURL}/api/v1/userAuth/signIn`,
        credentials
      );
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
