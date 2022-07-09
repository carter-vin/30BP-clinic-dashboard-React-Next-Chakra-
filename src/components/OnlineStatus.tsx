import { Box } from '@chakra-ui/react'

interface OnlineStatusProps {
  online: boolean
}
const OnlineStatus = (props: OnlineStatusProps) => {
  const { online } = props
  return (
    <Box
      width={5}
      height={5}
      bg={online ? 'green' : 'gray.400'}
      rounded="full"
    />
  )
}

export default OnlineStatus
