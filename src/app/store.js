import { configureStore } from '@reduxjs/toolkit';
import optionsReducer from '../features/options/optionsSlice';

export const store = configureStore({
  reducer: {
    options: optionsReducer,
  },
});
