import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
// import { DiscussionsRoutes } from '@/modules/discussions';
import { AgenciesRoutes } from '@/modules/agency';
import { Landing, Dashboard, Users } from '@/modules/misc';
// import { Profile, Users } from '@/modules/users';

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
        <Route path="/agencies/*" element={<AgenciesRoutes />} />
        <Route path="/users/*" element={<Users />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="*" element={<Navigate to="/app" />} />
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  );
};
