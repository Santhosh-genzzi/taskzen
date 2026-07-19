import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
};


const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {

    // Login / Register Success
    loginSuccess: (state, action) => {

      state.user = action.payload.user;

      state.accessToken =
        action.payload.accessToken;

      state.isAuthenticated = true;
    },


    // Update Access Token after Refresh



    // Logout
    logout: (state) => {

      state.user = null;

      state.accessToken = null;

      state.isAuthenticated = false;

    },

  },

});



export const {
  loginSuccess,
  updateToken,
  logout,

} = authSlice.actions;


export default authSlice.reducer;