import { Stack, Box, Input, Divider } from '@chakra-ui/react'
import PasswordInput from 'components/PasswordInput'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import SEOHead from 'components/shared/SeoHead'
import Text from 'components/shared/Text'
import Authlayout from 'layout/Authlayout'

const Register = () => {
  return (
    <Card>
      <Stack spacing={6}>
        <Box>
          <Text text="Let's create account" fontWeight="bold" />
        </Box>
        <Stack direction="row" spacing={6}>
          <Stack spacing={2}>
            <label htmlFor="email">
              <Text text="First Name" fontWeight="bold" />
            </label>
            <Input id="first_name" variant="outline" placeholder="John" />
          </Stack>
          <Stack spacing={2}>
            <label htmlFor="email">
              <Text text="Last Name" fontWeight="bold" />
            </label>
            <Input id="last_name" variant="outline" placeholder="Doe" />
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <label htmlFor="email">
            <Text text="Email" fontWeight="bold" />
          </label>
          <Input id="email" variant="outline" placeholder="Email" />
        </Stack>
        <PasswordInput />
        <Button label="Sign Up" />
        <Box display="flex" alignItems="center" gap={4}>
          <Divider />
          <Text text="OR" fontWeight="bold" />
          <Divider />
        </Box>

        <Button label="Sign Up With Google" variant="outline" />
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

export default Register
