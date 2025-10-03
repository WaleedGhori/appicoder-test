import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NetworkState } from '../../types';

const initialState: NetworkState = {
  isOnline: true,
};

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setNetworkStatus: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

export const { setNetworkStatus } = networkSlice.actions;
export default networkSlice.reducer;
