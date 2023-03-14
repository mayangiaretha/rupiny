import jwt_decode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../config/client";

export const register = createAsyncThunk(
  "userAuth/register",
  async (credentials, thunkApi) => {
    try {
      const response = await instance.post("userAuth/register", credentials);
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      decoded.token = token;
      return decoded;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);
export const login = createAsyncThunk(
  "userAuth/signIn ",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post("userAuth/signIn", credentials);
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      decoded.token = token;
      return decoded;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);
