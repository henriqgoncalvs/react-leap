import { BaseEntity } from '@/types';

export type Agency = {
  id: string;
  name: string;
  owner: string;
  bio: string;
  phone: string;
  email: string;
} & BaseEntity;
