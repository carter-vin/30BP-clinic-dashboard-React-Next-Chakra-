import { Text as ChakraText } from '@chakra-ui/react'

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  text: string | number
  [key: string]: string | boolean | React.ReactNode
}

const Text = (props: TextProps) => {
  const { variant = 'p', text } = props

  const getFontSize = () => {
    switch (variant) {
      case 'h1':
        return '5xl'
      case 'h2':
        return '4xl'
      case 'h3':
        return '3xl'
      case 'h4':
        return '2xl'
      case 'h5':
        return 'xl'
      case 'h6':
        return 'lg'
      case 'p':
        return 'md'
      default:
        return 'md'
    }
  }

  return (
    <ChakraText fontSize={getFontSize()} {...props} as={variant} >
      {text}
    </ChakraText>
  )
}

export default Text
