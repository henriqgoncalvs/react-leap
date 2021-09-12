import { BaseEntity } from '@/types';

export type Expense = {
  id: string;
  value: number;
  description: string;
  date: string;
  category: Category | '';
} & BaseEntity;

export type Category =
  | 'Food'
  | 'Mobility'
  | 'Rent'
  | 'Clothing'
  | 'Instruments'
  | 'Tools'
  | 'Workspace';
