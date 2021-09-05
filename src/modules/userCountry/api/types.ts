import { UserCountry } from '../types';

import { BaseEntity } from '@/types';

export type UserCountryBody = Omit<UserCountry, keyof BaseEntity | 'id' | 'userId'>;

export type GetUserCountryOptions = {
  userId: string;
  countryId: string;
};

export type GetUserCountriesOptions = {
  userId: string;
};

export type CreateUserCountryOptions = {
  data: UserCountryBody;
};

export type UpdateUserCountryOptions = {
  id: string;
  data: UserCountryBody;
};

export type DeleteUserCountryOptions = {
  id: string;
};
