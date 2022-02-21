import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
  password: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
})
