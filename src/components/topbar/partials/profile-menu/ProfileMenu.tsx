import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  HStack,
  Icon,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  Menu,
  Box,
  Divider,
} from '@chakra-ui/react'
import {
  ChevronDown, HelpCircle, LogOut, User,
} from 'react-feather'

import { profile } from 'components/topbar/topbar-config'
import { Link } from 'react-router-dom'

const ProfileMenu = () => {
  const ltdColor = useColorModeValue('gray.50', 'gray.900')
  const dtlColor = useColorModeValue('gray.900', 'gray.50')

  return (
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
          <Icon as={ChevronDown} color={dtlColor} />
        </HStack>
      </MenuButton>
      <MenuList bg={ltdColor} alignItems="center">
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
        <MenuItem gap={2} my={2} fontSize="sm" as={Link} to="/profile">
          <User size={16} />
          Account Settings
        </MenuItem>
        <MenuItem gap={2} my={2} fontSize="sm">
          <HelpCircle size={16} />
          Help Center
        </MenuItem>
        <Box m={4}>
          <Divider />
        </Box>
        <MenuItem gap={2} my={2} fontSize="sm" color="gray.500">
          <LogOut size={16} />
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
