import { LoginCredentials, UserResponse, RegisterCredentials, AuthUser } from './types';

import axios from '@/lib/axios';

export const loginWithEmailAndPassword = (data: LoginCredentials): Promise<UserResponse> => {
  return axios.unauthorized({ mock: true }).post('/auth/login', data);
};

export const registerWithEmailAndPassword = (data: RegisterCredentials): Promise<UserResponse> => {
  return axios.unauthorized({ mock: true }).post('/auth/register', data);
};

export const getUserProfile = (): Promise<AuthUser> => {
  return axios.authorized({ mock: true }).get('/auth/me');
};
