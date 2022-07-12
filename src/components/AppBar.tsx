/* eslint-disable react/no-children-prop */
import {
  Flex,
  Stack,
  Box,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Text from './shared/Text'
import Button from './shared/Button'
import { useSearchData } from 'context/useSearchData'
import Link from 'next/link'
import { useAuth } from 'context/useAuth'
import { useRouter } from 'next/router'

const AppBar = () => {
  const { searchQuery, handleSearch } = useSearchData()
  const { logout, user } = useAuth()
  const router = useRouter()

  const navigateToSearch = () => {
    router.push('/search')
  }

  const handleKeyDown = (event: { key: string }) => {
    console.log('User pressed: ', event.key)
    if (event.key === 'Enter') {
      navigateToSearch()
    }
  }

  return (
    <Flex
      display="flex"
      justifyContent="space-between"
      bg="white"
      alignItems="center"
      py={3}
      px={16}
      boxShadow="base"
      position="sticky"
      top={0}
      left={0}
      zIndex={99}
      width="100%"
    >
      <Stack direction="row" spacing={8} alignItems="center">
        <Link href="/" passHref>
          <Flex
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            gap={2}
          >
            <Image
              boxSize="40px"
              objectFit="cover"
              src="/logo.png"
              alt="ABC Clini"
            />
            <Text text="ABC Clinic" variant="h6" fontWeight="bold" />
          </Flex>
        </Link>
        <Box onClick={() => navigateToSearch()}>
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
              value={searchQuery}
              onKeyDown={handleKeyDown}
              onChange={(e) => handleSearch(e.target.value)}
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

        <Menu>
          <MenuButton>
            <Image
              boxSize="40px"
              borderRadius="full"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt=""
            />
          </MenuButton>
          <MenuList>
            {user && user.firstname && (
              <MenuItem pointerEvents="none">{`${user?.firstname} ${user?.lastname}`}</MenuItem>
            )}
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  )
}

export default AppBar
