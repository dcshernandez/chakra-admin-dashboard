import { object, string } from 'yup'

const signInValidation = object({
  email: string()
    .email('Please enter a valid email address')
    .required('Please enter your email'),
  password: string()
    .min(8, 'Password should be at least 8 characters')
    .required('Please enter your password'),
})

const signInInitValues = {
  email: 'eve.holt@reqres.in',
  password: 'secret123',
}

export { signInInitValues, signInValidation }
