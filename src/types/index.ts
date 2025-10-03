export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  userEmail: string | null;
  isLoading: boolean;
}

export interface NetworkState {
  isOnline: boolean;
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: { user: User };
};
