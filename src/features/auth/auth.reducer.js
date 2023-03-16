import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./auth.actions";

const initialState = {
  isAuthenticated: false,
  error: "",
  currentUser: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        error: "",
      }))
      .addCase(login.rejected, (state, action) => ({
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload,
      }))
      .addCase(register.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        error: "",
      }))
      .addCase(register.rejected, (state, action) => ({
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload,
      }));
  },
});

export default authSlice.reducer;
