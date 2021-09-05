import { v } from '@/lib/validator';

export default v.object().shape({
  email: v.string().email('Email is not valid').required('Email is required'),
  password: v.string().required('Password is required'),
});
