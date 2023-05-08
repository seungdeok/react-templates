import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Params {
  open: boolean;
  message: string;
}

const initialState: Params = {
  open: false,
  message: '',
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    open(state, action: PayloadAction<string>) {
      state.open = true;
      state.message = action.payload;
    },
    close(state) {
      state.open = false;
    },
  },
});

export const { open, close } = popupSlice.actions;
export const popupReducer = popupSlice.reducer;
