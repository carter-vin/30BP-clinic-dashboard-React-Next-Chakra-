import { Stack, Box } from '@chakra-ui/react'
import Text from 'components/shared/Text'
import Button from 'components/shared/Button'
import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'

const HomeHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent={['flex-start', 'flex-end']}
    >
      <Stack
        alignItems={['center']}
        direction={['row']}
        spacing={[0, 0, 0, 6]}
        bg="white"
        boxShadow="md"
        rounded="lg"
        px={6}
        py={2}
      >
        <Stack alignItems={['center']} direction="row" color="red">
          <FiAlertCircle size={25} />
          <Text
            text="15 patients"
            textTransform="capitalize"
            fontWeight="bold"
          />
        </Stack>
        <Button label="View Patients" variant="ghost" />
      </Stack>
    </Box>
  )
}

export default HomeHeader
