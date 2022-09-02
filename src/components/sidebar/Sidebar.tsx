import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Divider,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { useAuth } from 'utility/AuthContext'

import sidebarItems from './sidebar-config'
import SidebarItem from './sidebar-item'

const Sidebar = () => {
  const { signOut } = useAuth()

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} w="xs" h="100vh" mx={0}>
      <Flex justifyContent="space-between" direction="column" h="full">
        <Box>
          <Box fontWeight="bold" fontSize="xl" p={8}>
            Logo
          </Box>
          <Box px={6}>
            <Divider />
          </Box>
          <Box as="nav">
            {
              sidebarItems.map((item) => (
                <SidebarItem
                  key={item.name}
                  icon={item.icon}
                  path={item.path}
                  label={item.name}
                />
              ))
            }
          </Box>
          <Box px={6}>
            <Divider />
          </Box>
        </Box>
        <Box>
          <Box
            as="button"
            borderRadius={0}
            display="flex"
            w="full"
            justifyContent="space-between"
            p={4}
            onClick={signOut}
          >
            Logout
            <ChevronRightIcon />
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Sidebar
