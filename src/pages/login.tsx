import { Stack, Box, Input, Divider } from '@chakra-ui/react'
import PasswordInput from 'components/PasswordInput'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import SEOHead from 'components/shared/SeoHead'
import Text from 'components/shared/Text'
import Authlayout from 'layout/Authlayout'

const Login = () => {
  return (
    <Card>
      <Stack spacing={8}>
        <Box>
          <Text text="Welcome" fontWeight="bold" />
          <Text text="Please Login to continue" fontWeight="bold" />
        </Box>
        <Stack spacing={2}>
          <label htmlFor="email">
            <Text text="Email" fontWeight="bold" />
          </label>
          <Input id="email" variant="outline" placeholder="Email" />
        </Stack>
        <PasswordInput />
        <Button label="Login" />
        <Box display="flex" alignItems="center" gap={4}>
          <Divider />
          <Text text="OR" fontWeight="bold" />
          <Divider />
        </Box>

        <Button label="Login With Google" variant="outline" />
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

export default Login
