import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slice/authSlice';
import usersReducer from '../store/slice/usersSlice';
import networkReducer from '../store/slice/networkSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    network: networkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
