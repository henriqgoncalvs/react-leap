import { Arg1 } from 'tsargs';

import { PoliciesTypes, POLICIES } from './permissions/policies';
import { RoleTypes } from './permissions/roles';

export type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
} & (
  | {
      allowedRoles: RoleTypes[];
      policies?: never;
    }
  | {
      allowedRoles?: never;
      policies: Policy[];
    }
);

export type Policy = {
  [key in PoliciesTypes]: Arg1<typeof POLICIES[key]>;
};
