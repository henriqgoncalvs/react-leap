import { Route, Routes } from 'react-router-dom';

import { Error404 } from '@/errors';
import { AuthRoutes } from '@/modules/auth';
import { Landing } from '@/modules/misc';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
