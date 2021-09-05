import { BaseEntity } from '@/types';

export type Country = {
  id: string;
  name: string;
  description: string;
} & BaseEntity;
