import { Agency } from '../types';

import { BaseEntity } from '@/types';

export type AgencyBody = Omit<Agency, keyof BaseEntity | 'id' | 'owner'>;

export type GetAgencyOptions = {
  id: string;
};

export type CreateAgencyOptions = {
  data: AgencyBody;
};

export type UpdateAgencyOptions = {
  id: string;
  data: AgencyBody;
};

export type DeleteAgencyOptions = {
  id: string;
};
