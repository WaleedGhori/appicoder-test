import { User } from '../types';

let API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export let fetchUsers = async (): Promise<{ data: User[] | null; error: string | null }> => {
  try {
    let response = await fetch(`${API_BASE_URL}/users`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    let data: User[] = await response.json();
    return { data, error: null };
  } catch (error) {
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
};

export let authenticateUser = async (email: string, password: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(email.includes('@') && password.length >= 6);
    }, 1000);
  });
};
