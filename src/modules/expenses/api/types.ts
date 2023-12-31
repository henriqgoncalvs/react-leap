import { Expense } from '../types';

import { BaseEntity } from '@/types';

export type ExpenseBody = Omit<Expense, keyof BaseEntity | 'id'>;

export type GetExpenseOptions = {
  id: string;
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
