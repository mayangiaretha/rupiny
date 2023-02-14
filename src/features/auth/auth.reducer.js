import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  error: "",
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => ({
      ...state,
      isAuthenticated: true,
      currentUser: action.payload,
    }),
    loginFailure: (state, action) => ({
      ...state,
      isAuthenticated: false,
      error: action.payload,
    }),
    logoutSuccess: (state) => ({
      ...state,
      isAuthenticated: false,
      currentUser: {},
    }),
  },
});

export default authSlice.reducer;
