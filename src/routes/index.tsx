import { useAuth } from '@/lib/auth/authentication';
import { lazyImport } from '@/utils/lazyImport';

const { ProtectedRoutes } = lazyImport(() => import('./ProtectedRoutes'), 'ProtectedRoutes');
const { PublicRoutes } = lazyImport(() => import('./PublicRoutes'), 'PublicRoutes');

export const AppRoutes = () => {
  const auth = useAuth();
  return auth.user ? <ProtectedRoutes /> : <PublicRoutes />;
};
