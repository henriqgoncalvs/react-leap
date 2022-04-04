import axios from '@/lib/axios';

import { Expense } from '../types';

import {
  GetExpenseOptions,
  CreateExpenseOptions,
  UpdateExpenseOptions,
  DeleteExpenseOptions,
} from './types';

export const getExpenses = (): Promise<Expense[]> => {
  return axios.authorized().get(`/expense`);
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
