import { LoginCredentials, UserResponse, RegisterCredentials, AuthUser } from './types';

import axios from '@/lib/axios';

export const loginWithEmailAndPassword = (data: LoginCredentials): Promise<UserResponse> => {
  return axios.unauthorized().post('/auth/login', data);
};

export const registerWithEmailAndPassword = (data: RegisterCredentials): Promise<UserResponse> => {
  return axios.unauthorized().post('/auth/register', data);
};

export const getUserProfile = (): Promise<AuthUser> => {
  return axios.authorized().get('/auth/me');
};
