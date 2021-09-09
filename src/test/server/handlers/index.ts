import { authHandlers } from './auth';
import { expenseHandlers } from './expense';
import { incomeHandlers } from './income';
import { usersHandlers } from './users';

export const handlers = [...authHandlers, ...usersHandlers, ...incomeHandlers, ...expenseHandlers];
