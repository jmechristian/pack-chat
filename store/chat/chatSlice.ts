import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PostFormState {
  value: boolean;
  channel?: string;
}

const initialState: PostFormState = {
  value: false,
  channel: 'packaging management',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openPostForm: (state) => {
      state.value = true;
    },
    closePostForm: (state) => {
      state.value = false;
    },
    setChannel: (state, action) => {
      state.channel = action.payload;
    },
  },
});

export const { openPostForm, closePostForm, setChannel } = chatSlice.actions;

export default chatSlice.reducer;
