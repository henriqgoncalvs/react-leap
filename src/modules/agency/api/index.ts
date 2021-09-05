import { Agency } from '../types';

import {
  GetAgencyOptions,
  CreateAgencyOptions,
  UpdateAgencyOptions,
  DeleteAgencyOptions,
} from './types';

import axios from '@/lib/axios';

export const getAgencies = (): Promise<Agency[]> => {
  return axios.authorized({}).get(`/agency`);
};

export const getAgency = ({ id }: GetAgencyOptions): Promise<Agency> => {
  return axios.authorized({}).get(`/agency/${id}`);
};

export const createAgency = ({ data }: CreateAgencyOptions): Promise<Agency> => {
  return axios.authorized({}).post(`/agency`, data);
};

export const updateAgency = ({ id, data }: UpdateAgencyOptions): Promise<Agency> => {
  return axios.authorized({}).patch(`/agency/${id}`, data);
};

export const deleteAgency = ({ id }: DeleteAgencyOptions) => {
  return axios.authorized({}).patch(`/agency/${id}`);
};
