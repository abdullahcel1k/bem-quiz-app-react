import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../helpers/requestHelpers";

export const authCreateToken = createAsyncThunk(
  "auth/login",
  async (loginModel, { dispatch }) => {
    const { data } = await Post("auth/login", loginModel);
    return data;
  }
);
