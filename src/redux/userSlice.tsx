import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
    id: '',
    name: '',
    setting: {
      color: 'blue',
    },
    balance: 14450000,
    account: null,
    available: 0,
    lastMovements: [],
    // lastMovements: [
    //   {
    //     reason: 'Pal guaro',
    //     date: new Date().getTime(),
    //     amount: 45000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Lo de Doña Martha',
    //     date: new Date().getTime(),
    //     amount: 25000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Almuerzo Salento',
    //     date: new Date().getTime(),
    //     amount: 45000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Arriendo Don Coso',
    //     date: new Date().getTime(),
    //     amount: 1200000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Regalo para la pollita',
    //     date: new Date().getTime(),
    //     amount: 85000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Uber',
    //     date: new Date().getTime(),
    //     amount: 15000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Pago PSE',
    //     date: new Date().getTime(),
    //     amount: 350000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Cinemark',
    //     date: new Date().getTime(),
    //     amount: 50000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Almuerzo Señor Patata',
    //     date: new Date().getTime(),
    //     amount: 70000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    //   {
    //     reason: 'Pa las polas',
    //     date: new Date().getTime(),
    //     amount: 16000,
    //     user: {
    //       name: 'Ignacio',
    //     },
    //   },
    // ],
  },
  reducers: {
    setUser(state, action: PayloadAction<object>) {
      state.userData = action.payload;
    },
    unsetUser(state) {
      state.userData = {};
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setAccount(state, action: PayloadAction<any>) {
      state.account = action.payload.id;
      state.balance = Number(action.payload.balance);
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
    setLastMovements(state, action: PayloadAction<any>) {
      state.lastMovements = action.payload;
    },
  },
});

export const {
  setUser,
  unsetUser,
  setName,
  setId,
  setAvailable,
  setAccount,
  setSetting,
  setLastMovements,
} = userSlice.actions;
export default userSlice.reducer;
