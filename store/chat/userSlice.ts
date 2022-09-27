import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  currentUser: {
    given_name?: string;
    family_name?: string;
    nickname?: string;
    name?: string;
    picture?: string;
    updated_at?: string;
    email?: string;
    email_verified: string;
    sub: string;
  };
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
