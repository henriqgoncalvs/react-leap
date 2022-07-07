import { Expense } from '../types';

import { BaseEntity } from '@/types';

export type ExpenseBody = Omit<Expense, keyof BaseEntity | 'id'>;

export type GetExpenseOptions = {
  id: string;
};

export type GetExpensesParams = {
  take: number;
  skip: number;
};

export type CreateExpenseOptions = {
  data: ExpenseBody;
};

export type UpdateExpenseOptions = {
  id: string;
  data: ExpenseBody;
};

export type DeleteExpenseOptions = {
  id: string;
};
