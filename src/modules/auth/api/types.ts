import { Roles } from '@/types';

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  bio?: string;
  role?: Roles;
};

export type UpdateCredentials = {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
};

export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bio?: string;
  role: Roles;
};

export type UserResponse = {
  accessToken: string;
  user: AuthUser;
};
