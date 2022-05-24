import { createSlice } from "@reduxjs/toolkit";
import { authCreateToken } from "../../utils/services/auth";

const _authLogout = (state, action) => {
 state.token = undefined;
};

const authSlice = createSlice({
 name: "auth",
 initialState: {
  token: undefined
 },
 reducers: {
  authLogout: _authLogout
 },
 extraReducers: {
  [authCreateToken.fulfilled]: (state, action) => {
   state.token = action.payload;
  },
  [authCreateToken.rejected]: (state, action) => {
   state.token = undefined;
  }
 }
});

export const { authLogout } = authSlice.actions;

export default authSlice.reducer;