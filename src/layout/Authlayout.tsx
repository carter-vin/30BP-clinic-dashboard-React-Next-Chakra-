import { Stack, Image, Box, Flex } from '@chakra-ui/react'
import Text from 'components/shared/Text'
import SplashScreen from 'components/SplashScreen'
import { useAuth } from 'context/useAuth'
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
      flexDirection={['column', 'column', 'column', 'row']}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      position="relative"
      px={{ base: '4', sm: '8', md: '12', lg: '16', xl: '32' }}
      bg="red.50"
    >
      <Box display={['none', 'none', 'none', 'block']} flex={2}>
        <Stack spacing={16}>
          <Stack spacing={8}>
            <Box>
              <Flex alignItems="center" cursor="pointer" gap={2}>
                <Image
                  boxSize="80px"
                  objectFit="cover"
                  src="/logo.png"
                  alt="ABC Clini"
                />
                <Text text="ABC Clinic" variant="h3" fontWeight="bold" />
              </Flex>
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
      </Box>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        width="100%"
        gap={4}
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          gap={2}
          display={['flex', 'none']}
        >
          <Image
            boxSize="80px"
            objectFit="cover"
            src="/logo.png"
            alt="ABC Clini"
          />
          <Text text="ABC Clinic" variant="h1" fontWeight="bold" />
        </Flex>
        {children}
      </Box>
    </Box>
  )
}

export default Authlayout
