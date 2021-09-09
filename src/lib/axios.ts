import axiosInstance, { AxiosError } from 'axios';

import history from './history';

import { API_URL, MOCK_API_URL } from '@/config';
import { cookies, storage } from '@/utils';

const config = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const unathenticatedInstance = axiosInstance.create(config);
const authenticatedInstance = axiosInstance.create(config);

export default {
  unauthorized({ mock = false }: { mock?: boolean }) {
    if (mock) unathenticatedInstance.defaults.baseURL = MOCK_API_URL;

    const interceptor = unathenticatedInstance.interceptors.response.use(
      (response) => response?.data,
      (error: AxiosError) => Promise.reject(error),
    );

    unathenticatedInstance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        unathenticatedInstance.interceptors.response.eject(interceptor);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );

    return unathenticatedInstance;
  },
  authorized({ mock = false }: { mock?: boolean }) {
    authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${cookies.getAccess()}`;
    if (mock) authenticatedInstance.defaults.baseURL = MOCK_API_URL;

    const interceptor = authenticatedInstance.interceptors.response.use(
      (response) => {
        // authenticatedInstance.interceptors.response.eject(interceptor);
        return response.data;
      },
      async (error: AxiosError) => {
        // Reject promise if usual error
        if (error.response) {
          if (error.response.status !== 401) {
            cookies.clearAccess();
            cookies.clearRefresh();
            storage.clearUser();
            history.push('/');
            return Promise.reject(error);
          }

          /*
           * When response code is 401, try to refresh the token.
           * Eject the interceptor so it doesn't loop in case
           * token refresh causes the 401 response
           */
          authenticatedInstance.interceptors.response.eject(interceptor);

          return axiosInstance
            .post('/api/refresh_token', {
              refresh_token: cookies.getRefresh(),
            })
            .then((response) => {
              cookies.setRefresh(response.data?.refreshToken);
              if (error.response) {
                error.response.config.headers['Authorization'] =
                  'Bearer ' + response.data.access_token;
                return authenticatedInstance(error.response.config);
              }
            })
            .catch((error) => {
              cookies.clearAccess();
              cookies.clearRefresh();
              storage.clearUser();
              // TODO redirect to /entrar
              history.push('/');
              return Promise.reject(error);
            });
        }
      },
    );

    authenticatedInstance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        authenticatedInstance.interceptors.response.eject(interceptor);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );

    return authenticatedInstance;
  },
};
