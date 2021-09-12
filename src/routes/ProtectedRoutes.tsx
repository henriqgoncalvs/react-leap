import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { Dashboard } from '@/modules/dashboard';
import { ExpensesRoutes } from '@/modules/expenses';
import { IncomesRoutes } from '@/modules/incomes';
import { Landing, Users, About } from '@/modules/misc';

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/app" element={<App />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/expenses/*" element={<ExpensesRoutes />} />
        <Route path="/incomes/*" element={<IncomesRoutes />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element={<Navigate to="/app" />} />
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  );
};
