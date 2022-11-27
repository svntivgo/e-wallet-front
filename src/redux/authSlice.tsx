import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isAuth: false,
  },
  reducers: {
    setAuth(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuth = true;
    },
    unsetAuth(state) {
      state.token = '';
      state.isAuth = false;
    },
  },
});

export const { setAuth, unsetAuth } = authSlice.actions;
export default authSlice.reducer;
