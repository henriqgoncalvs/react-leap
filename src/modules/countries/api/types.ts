import { Country } from '../types';

import { BaseEntity } from '@/types';

export type CountryBody = Omit<Country, keyof BaseEntity | 'id'>;

export type GetCountryOptions = {
  id: string;
};

export type CreateCountryOptions = {
  data: CountryBody;
};

export type UpdateCountryOptions = {
  id: string;
  data: CountryBody;
};

export type DeleteCountryOptions = {
  id: string;
};
