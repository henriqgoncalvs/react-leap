import { BaseEntity } from '@/types';

export type Expense = {
  id: string;
  value: number;
  description: string;
  date: string;
} & BaseEntity;
