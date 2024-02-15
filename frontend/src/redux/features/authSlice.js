import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  username: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    username: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { login, logout, username } = userSlice.actions;
export default userSlice.reducer;
