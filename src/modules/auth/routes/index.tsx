import { Route, Routes } from 'react-router-dom';

import { Error404 } from '@/errors';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
