import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../components/post/postSlice";
import userReducer from "../components/user/userSlice";

export const store = configureStore({
  reducer:{
    posts:postReducer,
    users:userReducer
  }
})