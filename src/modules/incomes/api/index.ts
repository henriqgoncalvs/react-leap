import { Income } from '../types';

import {
  GetIncomeOptions,
  CreateIncomeOptions,
  UpdateIncomeOptions,
  DeleteIncomeOptions,
  GetIncome,
} from './types';

import axios from '@/lib/axios';

export const getIncomes = ({ take, skip }: GetIncomeOptions): Promise<Income[]> => {
  const params = new URLSearchParams();

  params.append('take', String(take));
  params.append('skip', String(skip));
  return axios.authorized({ mock: true }).get(`/income`, { params });
};

export const getIncome = ({ id }: GetIncome): Promise<Income> => {
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
