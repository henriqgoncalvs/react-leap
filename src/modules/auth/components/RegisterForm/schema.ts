import { v } from '@/lib/validator';

export default v.object().shape({
  email: v.string().min(1, 'Required'),
  firstName: v.string().min(1, 'Required'),
  lastName: v.string().min(1, 'Required'),
  password: v.string().min(1, 'Required'),
});
