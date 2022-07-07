/* eslint-disable react/no-children-prop */
import {
  Flex,
  Stack,
  Box,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Text from './shared/Text'
import Button from './shared/Button'

const AppBar = () => {
  return (
    <Flex
      display="flex"
      justifyContent="space-between"
      bg="white"
      alignItems="center"
      py={3}
      px={16}
      boxShadow="base"
    >
      <Stack direction="row" spacing={8} alignItems="center">
        <Box>
          <Text text="ABC Clinic" variant="h6" fontWeight="bold" />
        </Box>
        <Box>
          <InputGroup
            size="md"
            borderColor="gray.200"
            width="40vw"
            _focus={{
              borderColor: 'none',
              outline: 'none',
            }}
          >
            <Input
              placeholder="Search by patient name or email address"
              _focus={{
                borderColor: 'none',
                outline: 'none',
              }}
            />
            <InputRightAddon children={<FiSearch size={25} />} />
          </InputGroup>
        </Box>
      </Stack>
      <Stack direction="row" spacing={16}>
        <Button label="Prepare Claim Docs" />
        <Box>
          <Image
            boxSize="40px"
            borderRadius="full"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
      </Stack>
    </Flex>
  )
}

export default AppBar
