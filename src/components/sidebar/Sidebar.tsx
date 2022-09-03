import {
  Box,
  Divider,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

import sidebarItems from './sidebar-config'
import SidebarItem from './sidebar-item'

const Sidebar = () => (
  <Box
    bg={useColorModeValue('gray.50', 'gray.800')}
    w="2xs"
    h="full"
    mx={0}
  >
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
    </Flex>
  </Box>
)

export default Sidebar
