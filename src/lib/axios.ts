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

unathenticatedInstance.interceptors.response.use(
  (response) => response?.data,
  (error: AxiosError) => Promise.reject(error),
);

authenticatedInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error: AxiosError) => {
    if (error.response) {
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      return axiosInstance
        .post('/api/refresh_token', {
          refresh_token: cookies.getRefresh(),
        })
        .then((response) => {
          cookies.setRefresh(response.data?.refreshToken);
          if (error.response) {
            error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
            return authenticatedInstance(error.response.config);
          }
        })
        .catch((error) => {
          cookies.clearAccess();
          cookies.clearRefresh();
          storage.clearUser();
          history.push('/');
          return Promise.reject(error);
        });
    }
  },
);

export default {
  unauthorized({ mock = false }: { mock?: boolean }) {
    if (mock) unathenticatedInstance.defaults.baseURL = MOCK_API_URL;
    else unathenticatedInstance.defaults.baseURL = API_URL;

    return unathenticatedInstance;
  },
  authorized({ mock = false }: { mock?: boolean }) {
    authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${cookies.getAccess()}`;

    authenticatedInstance.interceptors.request.use(
      function (config) {
        if (mock) config.baseURL = MOCK_API_URL;
        else config.baseURL = API_URL;

        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    return authenticatedInstance;
  },
};
