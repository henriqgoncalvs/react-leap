import axios from '@/lib/axios';

import { Income } from '../types';

import {
  GetIncomeOptions,
  CreateIncomeOptions,
  UpdateIncomeOptions,
  DeleteIncomeOptions,
} from './types';

export const getIncomes = (): Promise<Income[]> => {
  return axios.authorized().get(`/income`);
};

export const getIncome = ({ id }: GetIncomeOptions): Promise<Income> => {
  return axios.authorized().get(`/income/${id}`);
};

export const createIncome = ({ data }: CreateIncomeOptions): Promise<Income> => {
  return axios.authorized().post(`/income`, data);
};

export const updateIncome = ({ id, data }: UpdateIncomeOptions): Promise<Income> => {
  return axios.authorized().patch(`/income/${id}`, data);
};

export const deleteIncome = ({ id }: DeleteIncomeOptions) => {
  return axios.authorized().patch(`/income/${id}`);
};
