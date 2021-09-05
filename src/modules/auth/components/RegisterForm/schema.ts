import { v } from '@/lib/validator';

export default v.object().shape({
  email: v.string().required('Email is required'),
  firstName: v.string().required('First name is required'),
  lastName: v.string().required('Last name is required'),
  password: v.string().required('Password is required'),
  confirmPassword: v.string().oneOf([v.ref('password'), null], 'Password must match'),
  bio: v.string(),
  role: v.string().oneOf(['USER', 'ADMIN'], 'Select a valid role').required('Role is required'),
});
