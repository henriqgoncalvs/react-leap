import { Income } from '../types';

import { BaseEntity } from '@/types';

export type IncomeBody = Omit<Income, keyof BaseEntity | 'id'>;

export type GetIncomeOptions = {
  id: string;
};

export type CreateIncomeOptions = {
  data: IncomeBody;
};

export type UpdateIncomeOptions = {
  id: string;
  data: IncomeBody;
};

export type DeleteIncomeOptions = {
  id: string;
};
