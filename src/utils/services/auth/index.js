import { createAsyncThunk } from "@reduxjs/toolkit";

export const authCreateToken = createAsyncThunk(
 'auth/login',
 async (loginModel, { dispatch }) => {
  console.log(loginModel);
  
  return "test-token";
 }
);