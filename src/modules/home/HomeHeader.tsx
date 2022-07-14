import { Stack, Box } from '@chakra-ui/react'
import Text from 'components/shared/Text'
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
        justifyContent={'space-between'}
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
        <Box cursor="pointer">
          <Text
            text="View Patients"
            color="red.500"
            textTransform="capitalize"
            fontWeight="bold"
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default HomeHeader
