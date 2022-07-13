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
  Avatar,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Text from './shared/Text'
import Button from './shared/Button'
import { useSearchData } from 'context/useSearchData'
import Link from 'next/link'
import { useAuth } from 'context/useAuth'

const AppBar = () => {
  const { searchQuery, handleSearch, handleSearchQueryChanged } =
    useSearchData()
  const { logout, user } = useAuth()

  const handleKeyDown = (event: { key: string }) => {
    console.log('User pressed: ', event.key)
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      py={3}
      px={[4, 8, 12, 16]}
      boxShadow="base"
      position="sticky"
      top={0}
      left={0}
      zIndex={99}
      width="100%"
      gap={[4, 8, 12, 16]}
    >
      <Link href="/" passHref>
        <Stack
          direction="row"
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
          <Box display={['none', 'none', 'none', 'block']}>
            <Text text="ABC Clinic" variant="h6" fontWeight="bold" />
          </Box>
        </Stack>
      </Link>

      <InputGroup
        size="md"
        borderColor="gray.200"
        width={['fit-content', '50vw']}
        _focus={{
          borderColor: 'none',
          outline: 'none',
        }}
      >
        <Input
          placeholder="Search by patient name or email address"
          value={searchQuery}
          onKeyDown={handleKeyDown}
          onChange={(e) => handleSearchQueryChanged(e.target.value)}
          _focus={{
            borderColor: 'none',
            outline: 'none',
          }}
        />
        <InputRightAddon
          children={<FiSearch size={25} />}
          onClick={() => handleSearch()}
        />
      </InputGroup>

      <Flex direction="row" gap={16} alignItems="center">
        <Box display={['none', 'none', 'none', 'block']}>
          <Button label="Prepare Claim Docs" />
        </Box>
        <Menu>
          <MenuButton>
            <Avatar
              name={`${user?.firstname} ${user?.lastname}`}
              src="https://bit.ly/dan-abramov"
              size={['sm', 'md']}
            />
          </MenuButton>
          <MenuList>
            {user && user.firstname && (
              <MenuItem pointerEvents="none">{`${user?.firstname} ${user?.lastname}`}</MenuItem>
            )}
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Stack>
  )
}

export default AppBar
