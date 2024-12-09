// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Import your reducer(s)
import userReducer from './slices/UserSlice'; // Import your reducer(s)

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your slice reducer(s) here
    userDetails: userReducer, // Add your slice reducer(s) here
  },
});

export default store;