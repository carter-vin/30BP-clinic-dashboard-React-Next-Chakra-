import { Button as ChakraButton } from '@chakra-ui/react'

interface ButtonProps {
  color?: 'primary' | 'secondary'
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  label: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  [key: string]: string | boolean | React.ReactNode
}

const Button = (props: ButtonProps) => {
  const { color = 'primary', label, size = 'md', variant = 'solid' } = props

  const getButtonColor = () => {
    switch (color) {
      case 'primary':
        return 'red'
      case 'secondary':
        return 'blue'
    }
  }

  return (
    <ChakraButton
      colorScheme={getButtonColor()}
      variant={variant}
      size={size}
      borderRadius="3xl"
      textTransform="capitalize"
      fontWeight="bold"
      {...props}
    >
      {label}
    </ChakraButton>
  )
}

export default Button
