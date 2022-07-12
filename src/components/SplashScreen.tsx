import { Box, CircularProgress, Stack, Flex, Image } from '@chakra-ui/react'
import Text from 'components/shared/Text'

const SplashScreen = () => {
  return (
    <Box
      bg="red.50"
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={8} justifyContent="center" alignItems="center">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          gap={2}
        >
          <Image
            boxSize="40px"
            objectFit="cover"
            src="/logo.png"
            alt="ABC Clini"
          />
          <Text text="ABC Clinic" variant="h6" fontWeight="bold" />
        </Flex>
        <Stack textAlign="center" alignItems="center" justifyContent="center">
          <Text
            text="At ABC Clinic you can constantly monitor your health."
            variant="p"
            fontWeight="bold"
            color="gray.500"
          />
          <Text
            text="Content Loading"
            variant="p"
            fontWeight="bold"
            color="gray.500"
          />
        </Stack>
        <CircularProgress isIndeterminate color="red.300" size="100px" />
      </Stack>
    </Box>
  )
}

export default SplashScreen
