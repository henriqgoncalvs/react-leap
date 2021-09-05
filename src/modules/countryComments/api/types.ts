import { CountryComment } from '../types';

import { BaseEntity } from '@/types';

export type CountryCommentBody = Omit<
  CountryComment,
  keyof BaseEntity | 'id' | 'countryId' | 'authorId'
>;

export type GetCountryCommentsOptions = {
  id: string;
};

export type CreateCountryCommentOptions = {
  id: string;
  data: CountryCommentBody;
};

export type UpdateCountryCommentOptions = {
  id: string;
  data: CountryCommentBody;
};

export type DeleteCountryCommentOptions = {
  id: string;
};
