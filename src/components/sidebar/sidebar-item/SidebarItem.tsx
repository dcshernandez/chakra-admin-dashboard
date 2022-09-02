import {
  Box,
  useColorModeValue,
  Icon as ThemeIcon,
} from '@chakra-ui/react'
import { Icon } from 'react-feather'
import { NavLink } from 'react-router-dom'

interface ISidebarItemProps {
  label: string,
  path: string,
  icon: Icon,
}

const SidebarItem: React.FC<ISidebarItemProps> = ({ label, path, icon }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    p={3}
    pl={4}
    my={4}
    as={NavLink}
    to={path}
    _activeLink={{
      bg: useColorModeValue('gray.100', 'gray.900'),
      fontWeight: 'semibold',
      color: useColorModeValue('gray.900', 'gray.100'),
      marginLeft: '1rem',
      borderLeftRadius: 'lg',
      borderLeft: 'solid',
      borderColor: useColorModeValue('purple.500', 'purple.500'),
      borderLeftWidth: 4,
    }}
  >
    <Box
      display="flex"
      gap={2}
      alignContent="center"
    >
      <ThemeIcon mt="1" as={icon} />
      {' '}
      {label}
    </Box>
  </Box>
)

export default SidebarItem
