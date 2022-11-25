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
        amount: 45000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Lo de Doña Martha',
        date: new Date().getTime(),
        amount: 25000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Almuerzo Salento',
        date: new Date().getTime(),
        amount: 45000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Arriendo Don Coso',
        date: new Date().getTime(),
        amount: 1200000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Regalo para la pollita',
        date: new Date().getTime(),
        amount: 85000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Uber',
        date: new Date().getTime(),
        amount: 15000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pago PSE',
        date: new Date().getTime(),
        amount: 350000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Cinemark',
        date: new Date().getTime(),
        amount: 50000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Almuerzo Señor Patata',
        date: new Date().getTime(),
        amount: 70000,
        user: {
          name: 'Ignacio',
        },
      },
      {
        reason: 'Pa las polas',
        date: new Date().getTime(),
        amount: 16000,
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
