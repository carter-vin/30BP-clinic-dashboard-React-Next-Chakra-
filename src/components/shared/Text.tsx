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
        return ['3xl', '3xl', '4xl', '5xl']
      case 'h2':
        return ['2xl', '2xl', '3xl', '4xl']
      case 'h3':
        return ['xl', 'xl', '2xl', '3xl']
      case 'h4':
        return ['lg', 'lg', 'xl', '2xl']
      case 'h5':
        return ['md', 'md', 'lg', 'xl']
      case 'h6':
        return ['sm', 'sm', 'md', 'lg']
      case 'p':
        return ['sm', 'md']
      default:
        return ['sm', 'md']
    }
  }

  return (
    <ChakraText fontSize={getFontSize()} {...props} as={variant}>
      {text}
    </ChakraText>
  )
}

export default Text
