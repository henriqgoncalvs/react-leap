import { AuthUser } from '@/modules/auth';
import { Income } from '@/modules/incomes';

export const POLICIES = {
  'income:delete': ({ user, income }: { user: AuthUser; income: Income }) => {
    if (user.role === 'ADMIN') {
      return true;
    }

    if (user.role === 'USER' && income.source === 'freelance') {
      return true;
    }

    return false;
  },
};

export type PoliciesTypes = keyof typeof POLICIES;
