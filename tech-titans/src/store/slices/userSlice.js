import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: {},
  role: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.role = action.payload.user.role;
      state.isLoggedIn = true;
    },
    editUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = {};
      state.role = null;
      state.isLoggedIn = false;
    },
  },
});

export const selectUserRole = (state) => state.session.role;
export const selectIsLoggedIn = (state) => state.session.isLoggedIn;
export const {signUp, editUser, logOut} = userSlice.actions;
export default userSlice.reducer;