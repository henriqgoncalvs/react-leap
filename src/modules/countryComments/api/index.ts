import { CountryComment } from '../types';

import {
  CreateCountryCommentOptions,
  DeleteCountryCommentOptions,
  GetCountryCommentsOptions,
  UpdateCountryCommentOptions,
} from './types';

import axios from '@/lib/axios';

export const getCountryComments = ({
  id,
}: GetCountryCommentsOptions): Promise<CountryComment[]> => {
  return axios.authorized({}).get(`/country/${id}/comments`);
};

export const createCountryComment = ({
  id,
  data,
}: CreateCountryCommentOptions): Promise<CountryComment> => {
  return axios.authorized({}).post(`/country/${id}/comments`, data);
};

export const updateCountryComment = ({
  id,
  data,
}: UpdateCountryCommentOptions): Promise<CountryComment> => {
  return axios.authorized({}).patch(`/country/${id}/comments`, data);
};

export const deleteCountryComment = ({
  id,
}: DeleteCountryCommentOptions): Promise<CountryComment> => {
  return axios.authorized({}).delete(`/country/${id}/comments`);
};
