import { Sources } from '../types';

const incomeSourceLabel = {
  salary: 'Salary',
  freelance: 'Freelance',
  investiment: 'Investiment',
};

export const parseIncomeSourceLabel = (source: Sources): string =>
  incomeSourceLabel[source] || 'Unknown';
