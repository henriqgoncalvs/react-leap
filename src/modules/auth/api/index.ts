import axios from '@/lib/axios';

import { LoginCredentials, UserResponse, RegisterCredentials, AuthUser } from './types';

export const loginWithEmailAndPassword = (data: LoginCredentials): Promise<UserResponse> => {
  return axios.authorized({ mock: false }).post('/login', data);
};

export const registerWithEmailAndPassword = (data: RegisterCredentials): Promise<UserResponse> => {
  return axios.authorized({ mock: true }).post('/auth/register', data);
};

export const getUserProfile = (): Promise<AuthUser> => {
  return axios.authorized({ mock: true }).get('/auth/me');
};
