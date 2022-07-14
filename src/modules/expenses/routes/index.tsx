import { Route, Routes } from 'react-router-dom';

import { Error404 } from '@/errors';

import { Expenses } from '../pages/Expenses';

export const ExpensesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Expenses />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
