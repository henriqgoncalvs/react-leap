import { AxiosResponse } from 'axios';

import { LoginCredentials, UserResponse, RegisterCredentials, AuthUser } from './types';

import axios from '@/lib/axios';

export const loginWithEmailAndPassword = (
  data: LoginCredentials,
): Promise<AxiosResponse<UserResponse>> => {
  return axios.unauthorized({ mock: true }).post('/auth/login', data);
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentials,
): Promise<AxiosResponse<UserResponse>> => {
  return axios.unauthorized({ mock: true }).post('/auth/register', data);
};

export const getUserProfile = (): Promise<AxiosResponse<AuthUser>> => {
  return axios.authorized({ mock: true }).get('/auth/me');
};
