import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '../components/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout title="Log in to your account">
      <RegisterForm onSuccess={() => navigate('/auth/login')} />
    </AuthLayout>
  );
};
