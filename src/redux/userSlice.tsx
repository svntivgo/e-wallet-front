import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
    id: '',
    name: 'Jackson Francisco',
    setting: {
      color: 'blue',
    },
    balance: 14450000,
    available: 0,
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
    setUser(state, action: PayloadAction<object>) {
      state.userData = action.payload;
    },
    unsetUser(state) {
      state.userData = {};
    },
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setBalance(state, action: PayloadAction<number>) {
      state.balance = Number(action.payload);
    },
    setAvailable(state, action: PayloadAction<number>) {
      state.available = Number(action.payload);
    },
    setSetting(state, action: PayloadAction<any>) {
      state.setting =
        action.payload.color === 'default'
          ? { ...action.payload, color: 'blue' }
          : action.payload;
    },
  },
});

export const {
  setUser,
  unsetUser,
  setId,
  setAvailable,
  setBalance,
  setSetting,
} = userSlice.actions;
export default userSlice.reducer;
