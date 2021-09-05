import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

import { Error404 } from '@/errors';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
