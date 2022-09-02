// import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  // Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  IconButton,
  HStack,
  Text,
  AvatarBadge,
} from '@chakra-ui/react'
import {
  BellIcon, ChevronDownIcon, MoonIcon, SunIcon,
} from '@chakra-ui/icons'
import { profile } from './topbar-config'

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      h="20"
      borderBottomLeftRadius="lg"
      bg={useColorModeValue('gray.50', 'gray.800')}
      px={4}
      ml={4}
    >
      <Flex h="full" alignItems="center" justifyContent="space-between">
        <Box>
          {`Hello, ${profile.firstName}`}
        </Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <IconButton size="sm" bg="transparent" aria-label="theme-toggle" onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
            <IconButton size="sm" bg="transparent" aria-label="notification">
              <BellIcon />
            </IconButton>
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <HStack>
                  <Avatar
                    size="sm"
                    src={profile.imgUrl}
                  >
                    <AvatarBadge borderWidth="1" bg="green.300" boxSize="1em" />
                  </Avatar>
                  <ChevronDownIcon />
                </HStack>
              </MenuButton>
              <MenuList bg={useColorModeValue('gray.50', 'gray.900')} alignItems="center">
                <Text ml={2} fontSize="xs">Signed in as:</Text>
                <Center>
                  <Avatar
                    size="xl"
                    src={profile.imgUrl}
                  >
                    <AvatarBadge bg="green.300" boxSize="0.8em" />
                  </Avatar>
                </Center>
                <Center my={1} mx={4} fontSize="sm">
                  <p>{profile.username}</p>
                </Center>
                <MenuDivider />
                <MenuItem my={2}>Your Servers</MenuItem>
                <MenuItem my={2}>Account Settings</MenuItem>
                <MenuItem my={2}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Topbar
