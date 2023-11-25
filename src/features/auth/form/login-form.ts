import * as yup from 'yup';

export type TLoginForm = {
  email: string;
  password: string;
};
export const loginFormSchema = yup.object({
  email: yup.string().email('Invalid Email.').required('Email is required'),

  password: yup.string().required('Password is required'),
});
