import { Income } from '../types';

import {
  GetIncomeOptions,
  CreateIncomeOptions,
  UpdateIncomeOptions,
  DeleteIncomeOptions,
} from './types';

import axios from '@/lib/axios';

export const getIncomes = ({ queryKey }): Promise<Income[]> => {
  return axios.authorized({ mock: true }).get(`/income`, { params: queryKey });
};

export const getIncome = ({ id }: GetIncomeOptions): Promise<Income> => {
  return axios.authorized({ mock: true }).get(`/income/${id}`);
};

export const createIncome = ({ data }: CreateIncomeOptions): Promise<Income> => {
  return axios.authorized({ mock: true }).post(`/income`, data);
};

export const updateIncome = ({ id, data }: UpdateIncomeOptions): Promise<Income> => {
  return axios.authorized({}).patch(`/income/${id}`, data);
};

export const deleteIncome = ({ id }: DeleteIncomeOptions) => {
  return axios.authorized({}).patch(`/income/${id}`);
};
