import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setNetworkStatus } from '../store/slice/networkSlice';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

const NetworkStatusBanner: React.FC = () => {
  const isOnline = useNetworkStatus();
  const networkState = useSelector((state: RootState): RootState['network'] => state.network);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setNetworkStatus(isOnline));
  }, [isOnline, dispatch]);

  if (networkState.isOnline) {
    return (
      <View style={styles.onlineBanner}>
        <Text style={styles.onlineText}>🟢 Online</Text>
      </View>
    );
  }

  return (
    <View style={styles.offlineBanner}>
      <Text style={styles.offlineText}>🔴 Offline</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  onlineBanner: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  offlineBanner: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  onlineText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  offlineText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default NetworkStatusBanner;
