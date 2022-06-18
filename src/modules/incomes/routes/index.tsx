import { Route, Routes } from 'react-router-dom';

import { Incomes } from '../pages/Incomes';

import { Error404 } from '@/errors';

export const IncomesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Incomes />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
