import { BaseEntity } from '@/types';

export type CountryComment = {
  id: string;
  countryId: string;
  message: string;
  authorId: string;
} & BaseEntity;
