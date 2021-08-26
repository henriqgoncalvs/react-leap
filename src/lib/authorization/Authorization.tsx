import { AuthorizationProps } from './types';
import { usePBAC } from './usePBAC';
import { useRBAC } from './useRBAC';

export const Authorization = ({
  policies,
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) => {
  const { checkAllowedRole } = useRBAC();
  const { checkAllowedPolicy } = usePBAC();

  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAllowedRole({ allowedRoles });
  }

  if (policies) {
    canAccess = checkAllowedPolicy({ policies });
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
};
