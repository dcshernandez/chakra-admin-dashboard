import { Link, useNavigate } from 'react-router-dom'
import {
  Flex,
  Box,
  Stack,
  Heading,
  useColorModeValue,
  Link as ThemeLink,
  Button,
  VStack,
  Center,
} from '@chakra-ui/react'

import InputField from 'components/input-field/InputField'
import { Form, Formik, FormikHelpers } from 'formik'

import useForm from 'utility/hooks/useForm'
import { AuthValues, useAuth } from 'utility/AuthContext'
import { signInInitValues, signInValidation } from './sign-in-config'

const initState = {
  password: '',
  email: '',
}

const SignIn = () => {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const {
    values: { email, password },
    handleChange,
    // resetValues,
  } = useForm(handleSignIn, initState)

  function handleSignIn(values: AuthValues, actions: FormikHelpers<AuthValues>) {
    signIn(values)
      .then((res) => {
        actions.resetForm()
        navigate('/')
      })
      .catch((err) => {
        throw err
      })
      .finally(() => {
        actions.setSubmitting(false)
      })
  }

  return (
    <Flex
      minH="100vh"
      align="top"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={8}
        mx="auto"
        maxW="lg"
        py={12}
        px={6}
        mt={8}
      >
        <Box
          rounded="lg"
          bg={useColorModeValue('gray.100', 'gray.700')}
          boxShadow="lg"
          p={8}
          minW="md"
          minH="md"
        >
          <Stack align="center">
            <Heading fontSize="4xl">Sign in</Heading>
          </Stack>
          <Formik
            initialValues={signInInitValues}
            onSubmit={(values, actions) => {
              handleSignIn(values, actions)
            }}
            validationSchema={signInValidation}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <VStack mt={8} spacing={8} align="flex-start">
                  <InputField
                    onChange={handleChange}
                    name="email"
                    type="email"
                    value={email}
                    autoComplete="off"
                    label="Email"
                    required
                  />
                  <InputField
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={password}
                    autoComplete="off"
                    label="Password"
                    required
                  />
                  <Button
                    type="submit"
                    bg="purple.500"
                    color="white"
                    _hover={{
                      bg: 'brand.primaryHover',
                    }}
                    width="full"
                    disabled={isSubmitting}
                  >
                    Sign in
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
        <Center>
          <ThemeLink as={Link} to="/">Forgot Password</ThemeLink>
        </Center>
      </Stack>
    </Flex>
  )
}
export default SignIn
