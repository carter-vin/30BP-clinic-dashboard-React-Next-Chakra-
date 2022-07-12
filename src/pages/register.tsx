import {
  Stack,
  Box,
  Input,
  Link as ChakraLink,
  Flex,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import PasswordInput from 'components/PasswordInput'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import SEOHead from 'components/shared/SeoHead'
import Text from 'components/shared/Text'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Authlayout from 'layout/Authlayout'
import Link from 'next/link'
import { User } from 'types/User'

const Register = () => {
  const registerFormik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      clininc: '',
      title: '',
      role: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('Firstname is required'),
      lastname: Yup.string().required('Lastname is required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      clininc: Yup.string().required('Clininc is required'),
      title: Yup.string().required('Title is required'),
      role: Yup.string().required('Role is required'),
    }),
    onSubmit: (values: User) => {
      console.log(values)
    },
  })
  return (
    <Card>
      <Stack spacing={4}>
        <Box>
          <Text text="Let's create account" fontWeight="bold" />
        </Box>
        <Stack direction="row" spacing={6}>
          <FormControl
            isInvalid={Boolean(
              registerFormik.errors.firstname &&
                registerFormik.touched.firstname
            )}
          >
            <FormLabel htmlFor="firstname">First Name</FormLabel>
            <Input
              name="firstname"
              value={registerFormik.values.firstname}
              onChange={registerFormik.handleChange}
              errorBorderColor="red.300"
              id="firstname"
              variant="outline"
              placeholder="John"
            />
            {/* {Boolean(
              registerFormik.errors.firstname &&
                registerFormik.touched.firstname
            ) && (
              <FormErrorMessage>
                {registerFormik.errors.firstname}
              </FormErrorMessage>
            )} */}
          </FormControl>

          <FormControl
            isInvalid={Boolean(
              registerFormik.errors.lastname && registerFormik.touched.lastname
            )}
          >
            <FormLabel htmlFor="lastname">Last Name</FormLabel>
            <Input
              name="lastname"
              value={registerFormik.values.lastname}
              onChange={registerFormik.handleChange}
              errorBorderColor="red.300"
              id="lastname"
              variant="outline"
              placeholder="Doe"
            />
            {/* {Boolean(
              registerFormik.errors.lastname && registerFormik.touched.lastname
            ) && (
              <FormErrorMessage>
                {registerFormik.errors.lastname}
              </FormErrorMessage>
            )} */}
          </FormControl>
        </Stack>
        <FormControl
          isInvalid={Boolean(
            registerFormik.errors.clininc && registerFormik.touched.clininc
          )}
        >
          <FormLabel htmlFor="clininc">Clicnic</FormLabel>
          <Input
            name="clininc"
            value={registerFormik.values.clininc}
            onChange={registerFormik.handleChange}
            errorBorderColor="red.300"
            id="clininc"
            variant="outline"
            placeholder="Your clinic name"
          />
          {/* {Boolean(
            registerFormik.errors.clininc && registerFormik.touched.clininc
          ) && (
            <FormErrorMessage>{registerFormik.errors.clininc}</FormErrorMessage>
          )} */}
        </FormControl>
        <Stack direction="row" spacing={6}>
          <FormControl
            isInvalid={Boolean(
              registerFormik.errors.title && registerFormik.touched.title
            )}
          >
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              name="title"
              value={registerFormik.values.title}
              onChange={registerFormik.handleChange}
              errorBorderColor="red.300"
              id="title"
              variant="outline"
              placeholder="your title"
            />
            {/* {Boolean(
              registerFormik.errors.title && registerFormik.touched.title
            ) && (
              <FormErrorMessage>{registerFormik.errors.title}</FormErrorMessage>
            )} */}
          </FormControl>

          <FormControl
            isInvalid={Boolean(
              registerFormik.errors.role && registerFormik.touched.role
            )}
          >
            <FormLabel htmlFor="role">Role</FormLabel>
            <Input
              name="role"
              value={registerFormik.values.role}
              onChange={registerFormik.handleChange}
              errorBorderColor="red.300"
              id="role"
              variant="outline"
              placeholder="Your Role"
            />
            {/* {Boolean(
              registerFormik.errors.role && registerFormik.touched.role
            ) && (
              <FormErrorMessage>{registerFormik.errors.role}</FormErrorMessage>
            )} */}
          </FormControl>
        </Stack>
        <FormControl
          isInvalid={Boolean(
            registerFormik.errors.email && registerFormik.touched.email
          )}
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            value={registerFormik.values.email}
            onChange={registerFormik.handleChange}
            errorBorderColor="red.300"
            id="email"
            variant="outline"
            placeholder="johndoe@demo.com"
          />
          {Boolean(
            registerFormik.errors.email && registerFormik.touched.email
          ) && (
            <FormErrorMessage>{registerFormik.errors.email}</FormErrorMessage>
          )}
        </FormControl>
        <PasswordInput
          name="password"
          value={registerFormik.values.password}
          onChange={registerFormik.handleChange}
          isInvalid={Boolean(
            registerFormik.errors.password && registerFormik.touched.password
          )}
          errorMsg={registerFormik.errors.password}
        />
        <Flex gap={3}>
          <Text text="Already have account ? " />
          <Link href="/login" passHref>
            <ChakraLink>
              <Text
                text="Login"
                cursor="pointer"
                color="red.400"
                fontWeight="bold"
              />
            </ChakraLink>
          </Link>
        </Flex>
        <Button
          label="Sign Up"
          onButtonPressed={() => registerFormik.handleSubmit()}
        />
        <Flex justifyContent="flex-start" alignItems="flex-start" gap={4}>
          <Box mt={2}>
            <Checkbox defaultChecked color="gray.600" />
          </Box>
          <Box color="gray.500">
            <span color="gray.500">
              {`By clicking "Sign up", you agree to our`}{' '}
              <Link href="/term-conditions" passHref>
                <ChakraLink color="gray.500">Term and Conditions</ChakraLink>
              </Link>{' '}
              and that you have read out{' '}
              <Link href="/privacy-policy" passHref>
                <ChakraLink color="gray.500">Privacy Policy</ChakraLink>
              </Link>
            </span>
          </Box>
        </Flex>
      </Stack>
    </Card>
  )
}

Register.getLayout = function getLayout(
  page: React.ReactNode | React.ReactElement
) {
  return (
    <Authlayout>
      <>
        <SEOHead title="Sign Up" />
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

export default Register
