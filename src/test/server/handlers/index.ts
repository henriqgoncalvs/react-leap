import { agencyHandlers } from './agency';
import { authHandlers } from './auth';
import { countryHandlers } from './country';
import { countryCommentHandlers } from './countryComment';
import { userCountryHandlers } from './userCountry';
import { usersHandlers } from './users';

export const handlers = [
  ...authHandlers,
  ...usersHandlers,
  ...agencyHandlers,
  ...userCountryHandlers,
  ...countryHandlers,
  ...countryCommentHandlers,
];
