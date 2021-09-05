import { Country } from '../types';

import {
  GetCountryOptions,
  CreateCountryOptions,
  UpdateCountryOptions,
  DeleteCountryOptions,
} from './types';

import axios from '@/lib/axios';

export const getCountries = (): Promise<Country[]> => {
  return axios.authorized({}).get(`/country`);
};

export const getCountry = ({ id }: GetCountryOptions): Promise<Country> => {
  return axios.authorized({}).get(`/country/${id}`);
};

export const createCountry = ({ data }: CreateCountryOptions): Promise<Country> => {
  return axios.authorized({}).post(`/country`, data);
};

export const updateCountry = ({ id, data }: UpdateCountryOptions): Promise<Country> => {
  return axios.authorized({}).patch(`/country/${id}`, data);
};

export const deleteCountry = ({ id }: DeleteCountryOptions) => {
  return axios.authorized({}).patch(`/country/${id}`);
};
