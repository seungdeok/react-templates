import { configureStore } from '@reduxjs/toolkit';
import { popupReducer } from '@/redux/features/popupSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});
