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
  MenuButton,
  Avatar,
  Divider,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Text from './shared/Text'
import Button from './shared/Button'
import { useSearchData } from 'context/useSearchData'
import Link from 'next/link'
import { useAuth } from 'context/useAuth'

const Navbar = () => {
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
      boxShadow="base"
      position="fixed"
      top={0}
      left={0}
      zIndex={99}
      width="100%"
      gap={[4, 8, 12, 16]}
      spacing={6}
      px={[4, 8, 16, 32]}
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

      <InputGroup size="md" width={['fit-content', '50vw']}>
        <Input
          placeholder="Search by patient name or email address"
          value={searchQuery}
          onKeyDown={handleKeyDown}
          onChange={(e) => handleSearchQueryChanged(e.target.value)}
          outline="none"
          _focus={{
            zIndex: 2,
            borderColor: 'none',
            outline: 'none',
          }}
          _active={{
            outline: 'none',
          }}
        />
        <InputRightAddon
          children={<FiSearch size={25} />}
          onClick={() => handleSearch()}
          css={{
            background: 'black',
            border: '5px solid black',
            color: 'white',
            'input:focus + &': { zIndex: 0 },
          }}
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
              <>
                <Box px={6} py={3}>
                  <Text
                    alignText="center"
                    text={`${user?.firstname} ${user?.lastname}`}
                    variant="h6"
                  />
                  <Text alignText="center" text={user?.email} variant="h6" />
                </Box>
                <Divider />
              </>
            )}
            {/* <Box px={3} py={3}>
              <MenuItem>Profile</MenuItem>
            </Box>
            <Divider /> */}
            <Box p={3} display="flex" flexDirection="column" gap={4}>
              <Button label="Prepare Claim Docs" display={['block', 'none']} />
              <Button onClick={() => logout()} label="logout" />
            </Box>
          </MenuList>
        </Menu>
      </Flex>
    </Stack>
  )
}

export default Navbar
