import axiosInstance, { AxiosError, AxiosResponse } from 'axios';

import { API_MOCKING, API_URL, MOCK_API_URL } from '@/config';
import { cookies } from '@/utils';

const config = {
  baseURL: API_MOCKING ? MOCK_API_URL : API_URL,

  headers: {
    'Content-Type': 'application/json',
  },
};

const unathenticatedInstance = axiosInstance.create(config);

const authenticatedInstance = axiosInstance.create(config);

const setupInterceptors = (logout, toast) => {
  unathenticatedInstance.interceptors.response.use(
    (response: AxiosResponse) => response?.data,

    (error: AxiosError) => Promise.reject(error),
  );

  authenticatedInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data;
    },

    async (error: AxiosError) => {
      if (error.response) {
        if (error.response.status !== 401) {
          return Promise.reject(error);
        }

        return unathenticatedInstance
          .post('/auth/refresh-token', {
            refreshToken: cookies.getRefresh(),
          })
          .then((response) => {
            const result = response as unknown as { accessToken: string };

            cookies.setAccess(result.accessToken);

            if (error.response) {
              error.response.config.headers['Authorization'] = 'Bearer ' + result.accessToken;

              return authenticatedInstance(error.response.config);
            }
          })
          .catch(() => {
            logout();
            cookies.clearRefresh();
            const tokenToastId = 'refresh-error';

            if (!toast.isActive(tokenToastId)) {
              toast({
                id: tokenToastId,
                title: 'Token expirado!',
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            }

            return;
          });
      }
    },
  );
};

export default {
  unauthorized() {
    return unathenticatedInstance;
  },

  authorized() {
    authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${cookies.getAccess()}`;

    return authenticatedInstance;
  },

  setupInterceptors,
};
