import { Stack } from '@chakra-ui/react'
import Text from 'components/shared/Text'

interface NumberingCard {
  label: string
  value: string
  footer?: string
}

const NumberingCard = (props: NumberingCard) => {
  const { label, value, footer } = props

  return (
    <Stack
      spacing={0}
      alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
    >
      <Text text={label} color="black" variant="p" fontStyle="italic" />
      <Text text={value} fontWeight="400" variant="h1" />
      {footer && (
        <Text text={footer} color="black" variant="p" fontStyle="italic" />
      )}
    </Stack>
  )
}

export default NumberingCard
