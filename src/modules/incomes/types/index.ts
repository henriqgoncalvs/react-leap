import { BaseEntity } from '@/types';

export type Income = {
  id: string;
  value: number;
  description: string;
  date: string;
  source: Sources | '';
} & BaseEntity;

export type Sources = 'salary' | 'freelance' | 'investiment';
