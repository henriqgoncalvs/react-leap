import { Expense } from '../types';

import {
  GetExpenseOptions,
  CreateExpenseOptions,
  UpdateExpenseOptions,
  DeleteExpenseOptions,
  GetExpensesParams,
} from './types';

import axios from '@/lib/axios';

export const getExpenses = ({ take, skip }: GetExpensesParams): Promise<Expense[]> => {
  const params = new URLSearchParams();

  params.append('take', String(take));
  params.append('skip', String(skip));

  return axios.authorized({ mock: true }).get(`/expense`, { params });
};

export const getExpense = ({ id }: GetExpenseOptions): Promise<Expense> => {
  return axios.authorized().get(`/expense/${id}`);
};

export const createExpense = ({ data }: CreateExpenseOptions): Promise<Expense> => {
  return axios.authorized().post(`/expense`, data);
};

export const updateExpense = ({ id, data }: UpdateExpenseOptions): Promise<Expense> => {
  return axios.authorized().patch(`/expense/${id}`, data);
};

export const deleteExpense = ({ id }: DeleteExpenseOptions) => {
  return axios.authorized().patch(`/expense/${id}`);
};
