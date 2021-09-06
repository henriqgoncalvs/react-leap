import { v } from '@/lib/validator';

export default v.object().shape({
  name: v.string().required('Name is required'),
  bio: v.string().required('Bio is required'),
  phone: v.string().required('Phone is required'),
  email: v.string().email('Email is required').required('Email is required'),
});
