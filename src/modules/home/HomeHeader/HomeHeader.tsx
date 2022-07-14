import { Flex, Stack } from '@chakra-ui/react'
import Card from 'components/shared/Card'
import Text from 'components/shared/Text'
import Button from 'components/shared/Button'
import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'

const HomeHeader = () => {
  return (
    <Card size="sm">
      <Flex justifyContent={['flex-start', 'flex-end']}>
        <Stack
          alignItems={['center']}
          justifyContent={['center']}
          direction={['row']}
          spacing={[0, 0, 0, 6]}
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
      </Flex>
    </Card>
  )
}

export default HomeHeader
