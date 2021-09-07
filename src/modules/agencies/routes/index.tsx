import { Route, Routes } from 'react-router-dom';

import { Agencies } from '../pages/Agencies';

import { Error404 } from '@/errors';

export const AgenciesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Agencies />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
