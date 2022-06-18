import { useCallback } from 'react';

import { useAuth } from '@/lib/auth/authentication';
import { Roles } from '@/types';

export const useRBAC = () => {
  const { user } = useAuth();

  if (!user) {
    throw Error('User does not exist!');
  }

  const checkAllowedRole = useCallback(
    ({ allowedRoles }: { allowedRoles: Roles[] }) => {
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles?.includes(user.role);
      }

      return true;
    },
    [user.role],
  );

  return { checkAllowedRole, role: user.role };
};
