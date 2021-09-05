import { BaseEntity } from '@/types';

export type UserCountry = {
  id: string;
  userId: string;
  agencyId: string;
  countryId: string;
  arriveDate: string;
  leaveDate: string;
  amountSpent: number;
} & BaseEntity;
