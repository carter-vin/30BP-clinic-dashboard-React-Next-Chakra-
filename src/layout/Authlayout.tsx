import { Stack, Image, Box, Flex } from '@chakra-ui/react'
import Text from 'components/shared/Text'
import SplashScreen from 'components/SplashScreen'
import { useAuth } from 'context/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface AuthlayoutProps {
  children: React.ReactNode
}
const Authlayout = (props: AuthlayoutProps) => {
  const { children } = props
  const appInfo =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquid dolor quas ratione. Alias excepturi fuga, minus ducimus atque dicta consequuntur nobis numquam ab quo illum eveniet quam, ex aut'
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  if (isLoading) {
    return <SplashScreen />
  }

  if (isAuthenticated) {
    router.push('/')
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      height="100vh"
      position="relative"
      px={{ base: '4', sm: '8', md: '12', lg: '16', xl: '32' }}
      bg="red.50"
    >
      <Stack spacing={16} flex={3}>
        <Stack spacing={8}>
          <Box>
            <Link href="/" passHref>
              <Flex alignItems="center" cursor="pointer" gap={2}>
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="/logo.png"
                  alt="ABC Clini"
                />
                <Text text="ABC Clinic" variant="h6" fontWeight="bold" />
              </Flex>
            </Link>
          </Box>

          <Box width="50%">
            <Text
              text={appInfo}
              variant="h6"
              fontWeight="bold"
              letterSpacing={2}
            />
          </Box>
        </Stack>
        <Box width="500px">
          <Image src="/medical.svg" alt="Dan Abramov" />
        </Box>
      </Stack>
      <Box flex={2}>{children}</Box>
    </Box>
  )
}

export default Authlayout
