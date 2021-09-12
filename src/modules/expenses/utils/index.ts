import { Category } from '../types';

export const expensesCategoriesArray: Category[] = [
  'Food',
  'Mobility',
  'Rent',
  'Clothing',
  'Instruments',
  'Tools',
  'Workspace',
];

export const expenseCategories = expensesCategoriesArray.map((expense) => ({
  value: expense.toLowerCase(),
  label: expense,
}));

export const parseExpenseCategoryLabel = (category: Category): string =>
  expenseCategories.find((expense) => expense.value === category)?.label || 'Unknown';
