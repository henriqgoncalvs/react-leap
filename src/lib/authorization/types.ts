import { Arg1 } from 'tsargs';

import { Roles } from '@/types';

import { PoliciesTypes, POLICIES } from './permissions/policies';

export type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
} & (
  | {
      allowedRoles: Roles[];
      policies?: Policy[];
    }
  | {
      allowedRoles?: Roles[];
      policies: Policy[];
    }
);

export type Policy = {
  [key in PoliciesTypes]: Arg1<typeof POLICIES[key]>;
};
