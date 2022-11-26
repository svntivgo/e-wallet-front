import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '50yUn70qu3n',
    isAuth: true,
  },
  reducers: {
    setAuth(state, action: PayloadAction<string>) {
      state.isAuth = true;
    },
    unsetAuth(state, action: PayloadAction<string>) {
      state.isAuth = false;
    },
  },
});

export const { setAuth, unsetAuth } = authSlice.actions;
export default authSlice.reducer;
