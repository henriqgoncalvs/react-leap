import { v } from '@/lib/validator';

export default v.object().shape({
  date: v.string().required('Date is required'),
  description: v.string().required('Description is required'),
  value: v.number().required('Value is required'),
  category: v.string().required('Category is required'),
});
