import { Spinner } from '@chakra-ui/react';
import { initReactQueryAuth } from 'react-query-auth';

import {
  loginWithEmailAndPassword,
  getUserProfile,
  registerWithEmailAndPassword,
  UserResponse,
  LoginCredentials,
  RegisterCredentials,
  AuthUser,
} from '@/modules/auth';
import { storage, cookies } from '@/utils';

async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data;
  storage.setUser(user);
  cookies.setAccess(jwt);
  return user;
}

async function loadUser() {
  const user = storage.getUser();

  if (user) {
    return user;
  }

  if (cookies.getAccess()) {
    const data = await getUserProfile();
    return data;
  }

  return null;
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearUser();
  cookies.clearAccess();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return <Spinner size="xl" />;
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentials,
  RegisterCredentials
>(authConfig);
