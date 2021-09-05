import { UserCountry } from '../types';

import {
  GetUserCountryOptions,
  CreateUserCountryOptions,
  UpdateUserCountryOptions,
  DeleteUserCountryOptions,
  GetUserCountriesOptions,
} from './types';

import axios from '@/lib/axios';

export const getUserCountries = ({ userId }: GetUserCountriesOptions): Promise<UserCountry[]> => {
  return axios.authorized({}).get(`/${userId}/country`);
};

export const getUserCountry = ({
  userId,
  countryId,
}: GetUserCountryOptions): Promise<UserCountry> => {
  return axios.authorized({}).get(`/${userId}/country/${countryId}`);
};

export const createUserCountry = ({ data }: CreateUserCountryOptions): Promise<UserCountry> => {
  return axios.authorized({}).post(`/UserCountry`, data);
};

export const updateUserCountry = ({ id, data }: UpdateUserCountryOptions): Promise<UserCountry> => {
  return axios.authorized({}).patch(`/UserCountry/${id}`, data);
};

export const deleteUserCountry = ({ id }: DeleteUserCountryOptions) => {
  return axios.authorized({}).patch(`/UserCountry/${id}`);
};
