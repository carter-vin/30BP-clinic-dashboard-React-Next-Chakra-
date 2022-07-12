import { Button as ChakraButton } from '@chakra-ui/react'

type functionType = {
  (): void
}

interface ButtonProps {
  color?: 'primary' | 'secondary'
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  label: string
  onButtonPressed?: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  [key: string]: string | boolean | functionType | React.ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    color = 'primary',
    label,
    size = 'md',
    variant = 'solid',
    onButtonPressed,
  } = props

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
      onClick={onButtonPressed && onButtonPressed}
      {...props}
    >
      {label}
    </ChakraButton>
  )
}

export default Button
