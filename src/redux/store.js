import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    tasks: taskReducer,
  },
});

export default store;
