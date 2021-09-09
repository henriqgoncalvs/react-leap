import { v } from '@/lib/validator';

export default v.object().shape({
  value: v.string().required('Value is required'),
  description: v.string().required('Description is required'),
  date: v.string().required('Date is required'),
  source: v.string().required('Source is required'),
});
