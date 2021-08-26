import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Register />} />
    </Routes>
  );
};
