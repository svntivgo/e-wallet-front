import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Jackson Francisco',
    color: 'azulito',
    balance: 14450000,
    available: 50000000,
    lastMovements: [
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pal guaro',
        date: new Date().getTime(),
        amount: 3500000,
        user: {
          name: 'Ignacio',
        },
      },
    ],
  },
  reducers: {
    // setAuth(state, action: PayloadAction<string>) {
    //   state.isAuth = true;
    // },
    // unsetAuth(state, action: PayloadAction<string>) {
    //   state.isAuth = false;
    // },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
