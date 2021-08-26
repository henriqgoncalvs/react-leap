import { useCallback } from 'react';

import { POLICIES } from './permissions/policies';
import { Policy } from './types';

export const usePBAC = () => {
  const checkAllowedPolicy = useCallback(({ policies }: { policies: Policy[] }) => {
    if (policies && policies.length > 0) {
      const policiesResponse = policies.map((policy) => POLICIES[Object.keys(policy)[0]](policy));

      return !policiesResponse.includes(false);
    }

    return true;
  }, []);

  return { checkAllowedPolicy };
};

// <Authorization policyCheck={[{'comment:delete': { user, comment }}]}>
