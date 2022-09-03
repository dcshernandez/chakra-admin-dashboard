import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
} from '@chakra-ui/react'
import {
  Bell, Moon, Sun,
} from 'react-feather'
import ProfileMenu from './partials/profile-menu'
import { profile } from './topbar-config'

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const ltdAccent = useColorModeValue('gray.50', 'gray.800')

  return (
    <Box
      as="nav"
      h="20"
      borderBottomLeftRadius="lg"
      bg={ltdAccent}
      w="full"
    >
      <Flex px={4} h="full" alignItems="center" justifyContent="space-between">
        <Box>
          {`Hello, ${profile.firstName}`}
        </Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <IconButton size="sm" bg="transparent" aria-label="theme-toggle" onClick={toggleColorMode}>
              {colorMode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </IconButton>
            <IconButton size="sm" bg="transparent" aria-label="notification">
              <Bell size={16} />
            </IconButton>
            <ProfileMenu />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Topbar
