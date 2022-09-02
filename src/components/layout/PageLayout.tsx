import {
  Box,
  Container,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import Sidebar from 'components/sidebar'
import Topbar from 'components/topbar'
import { ReactNode } from 'react'

enum TYPES {
  VERTICAL = 'vertical',
  FULL = 'full',
  HORIZONTAL = 'horizontal',
}

interface IPageLayoutProps {
  type: `${TYPES}`,
  children: ReactNode
}

const PageLayout: React.FC<IPageLayoutProps> = (props) => {
  const { type, children } = props
  const bg = useColorModeValue('gray.100', 'gray.900')
  return (
    <Flex w="full" direction="row" bg={bg}>
      {type === 'vertical' && <Sidebar />}
      <Container maxW="full" p={0}>
        {type !== 'full' && <Topbar />}
        <Box p={4} maxW="container.xl">
          {children}
        </Box>
      </Container>
    </Flex>
  )
}

export default PageLayout
