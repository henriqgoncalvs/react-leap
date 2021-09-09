import { Route, Routes } from 'react-router-dom';

import { Expenses } from '../pages/Expenses';

import { Error404 } from '@/errors';

export const ExpensesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Expenses />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
