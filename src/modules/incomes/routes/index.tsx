import { Route, Routes } from 'react-router-dom';

import { Error404 } from '@/errors';

import { Incomes } from '../pages/Incomes';

export const IncomesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Incomes />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
