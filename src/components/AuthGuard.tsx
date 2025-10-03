import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type AuthGuardNavigationProp = StackNavigationProp<RootStackParamList>;

interface Props {
  children: React.ReactNode;
  navigation: AuthGuardNavigationProp;
}

const AuthGuard: React.FC<Props> = ({ children, navigation }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigation.replace('Login');
    }
  }, [isAuthenticated, navigation]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
