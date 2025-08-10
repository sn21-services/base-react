import { object, string } from 'yup';

// TODO: demo
export const formSchema = object({
  name: string().required('Bạn chưa nhập tên'),
  email: string().email('Email không hợp lệ').required('Bạn chưa nhập email'),
});
