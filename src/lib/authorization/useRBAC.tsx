import { useCallback } from 'react';

import { RoleTypes } from './permissions/roles';

import { useAuth } from '@/lib/authentication';

export const useRBAC = () => {
  const { user } = useAuth();

  if (!user) {
    throw Error('User does not exist!');
  }

  const checkAllowedRole = useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles?.includes(user.role);
      }

      return true;
    },
    [user.role],
  );

  return { checkAllowedRole, role: user.role };
};
