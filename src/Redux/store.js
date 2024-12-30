import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskslice';
import authReducer from './authslice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  },
});
