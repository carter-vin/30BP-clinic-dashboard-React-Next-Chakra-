import {
  Stack,
  Box,
  Input,
  Flex,
  Link as ChakraLink,
  Checkbox,
  FormErrorMessage,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import PasswordInput from 'components/PasswordInput'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import SEOHead from 'components/shared/SeoHead'
import Text from 'components/shared/Text'
import { useAuth } from 'context/useAuth'
import Authlayout from 'layout/Authlayout'

import { LoginUser } from 'types/User'

const Login = () => {
  const { login } = useAuth()

  const loginFormik = useFormik({
    initialValues: {
      email: 'demo@abcclinic.com',
      password: 'demo123',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values: LoginUser) => {
      login(values)
    },
  })

  return (
    <Card>
      <Stack spacing={4}>
        <Box>
          <Text text="Welcome" fontWeight="bold" />
          <Text text="Please Login to continue" fontWeight="bold" />
        </Box>
        <FormControl
          isInvalid={Boolean(
            loginFormik.errors.email && loginFormik.touched.email
          )}
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            value={loginFormik.values.email}
            onChange={loginFormik.handleChange}
            errorBorderColor="red.300"
            id="email"
            variant="outline"
            placeholder="johndoe@demo.com"
          />
          {Boolean(loginFormik.errors.email && loginFormik.touched.email) && (
            <FormErrorMessage>{loginFormik.errors.email}</FormErrorMessage>
          )}
        </FormControl>
        <PasswordInput
          name="password"
          value={loginFormik.values.password}
          onChange={loginFormik.handleChange}
          isInvalid={Boolean(
            loginFormik.errors.password && loginFormik.touched.password
          )}
          errorMsg={loginFormik.errors.password}
        />
        <Flex gap={2}>
          <Text text="Don't have account? " />
          <Link href="/register" passHref>
            <ChakraLink>
              <Text
                text="Sign Up"
                cursor="pointer"
                color="red.400"
                fontWeight="bold"
              />
            </ChakraLink>
          </Link>
        </Flex>
        <Button
          label="Login"
          onButtonPressed={() => loginFormik.handleSubmit()}
        />
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox defaultChecked color="gray.600">
            <Text text="Remember Me" color="gray.600" />
          </Checkbox>
          <Link href="/forget-password" passHref>
            <ChakraLink>
              <Text text="Forgot Password?" color="gray.600" cursor="pointer" />
            </ChakraLink>
          </Link>
        </Flex>
      </Stack>
    </Card>
  )
}

Login.getLayout = function getLayout(
  page: React.ReactNode | React.ReactElement
) {
  return (
    <Authlayout>
      <>
        <SEOHead title="Login" />
        {page}
      </>
    </Authlayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      protected: false,
    },
  }
}

export default Login
