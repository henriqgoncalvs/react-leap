import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '../components/AuthLayout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout title="Log in to your account">
      <LoginForm onSuccess={() => navigate('/app')} />
    </AuthLayout>
  );
};
