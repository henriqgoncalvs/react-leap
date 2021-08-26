import { v } from '@/lib/validator';

export default v.object().shape({
  email: v.string().email().required(),
  password: v.string().required(),
});
