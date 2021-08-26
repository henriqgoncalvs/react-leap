import Cookies from 'js-cookie';

import { ACCESS_TOKEN_ID, REFRESH_TOKEN_ID } from '@/config';

export const cookies = {
  getAccess: () => Cookies.get(ACCESS_TOKEN_ID),
  setAccess: (accessToken: string) => Cookies.set(ACCESS_TOKEN_ID, accessToken),
  clearAccess: () => Cookies.remove(ACCESS_TOKEN_ID),
  getRefresh: () => Cookies.get(REFRESH_TOKEN_ID),
  setRefresh: (refreshToken: string) => Cookies.set(REFRESH_TOKEN_ID, refreshToken),
  clearRefresh: () => Cookies.remove(REFRESH_TOKEN_ID),
};
