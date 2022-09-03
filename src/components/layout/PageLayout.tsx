import {
  Grid,
  GridItem,
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
  const vertical = `"nav header"
  "nav main"
  "nav footer"`
  const full = `"main main"
  "main main"
  "footer footer"`
  const horizontal = `"header header"
  "main main"
  "footer footer"`
  const templateArea = {
    vertical,
    full,
    horizontal,
  }
  return (
    <Grid
      templateAreas={templateArea[type]}
      gridTemplateRows="5rem 1fr 30px"
      gridTemplateColumns="16rem 1fr"
      h="100vh"
      gap={4}
      bg={bg}
    >
      {type !== 'full' && (
        <GridItem area="header">
          <Topbar />
        </GridItem>
      )}
      {
        type === 'vertical' && (
          <GridItem area="nav">
            <Sidebar />
          </GridItem>
        )
      }
      <GridItem p={2} area="main">
        {children}
      </GridItem>
      <GridItem area="footer">
        Footer
      </GridItem>
    </Grid>
    // <Flex w="full" direction="row" bg={bg}>
    //   {type === 'vertical' && <Sidebar />}
    //   <Container maxW="full" p={0}>
    //     {type !== 'full' && <Topbar />}
    //     <Box p={4} maxW="container.xl">
    //       {children}
    //     </Box>
    //   </Container>
    // </Flex>
  )
}

export default PageLayout
