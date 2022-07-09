import { Box } from '@chakra-ui/react'

interface CardProps {
  size?: 'sm' | 'md'
  children: React.ReactNode
  [key: string]: string | boolean | number | React.ReactNode
}

const Card = (props: CardProps) => {
  const { children, size } = props
  return (
    <Box
      bg="white"
      boxShadow="md"
      rounded="lg"
      px={6}
      py={size === 'sm' ? '2' : '6'}
    >
      {children}
    </Box>
  )
}

export default Card
