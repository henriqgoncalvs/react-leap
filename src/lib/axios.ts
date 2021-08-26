import axiosInstance, { AxiosError } from 'axios';

import { API_URL } from '@/config';
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
  unauthorized() {
    unathenticatedInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => Promise.reject(error),
    );

    return unathenticatedInstance;
  },
  authorized() {
    authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${cookies.getAccess()}`;

    const interceptor = authenticatedInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        // Reject promise if usual error
        if (error.response) {
          if (error.response.status !== 401) {
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
              return Promise.reject(error);
            });
        }
      },
    );

    return authenticatedInstance;
  },
};
