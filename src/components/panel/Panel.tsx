import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

type TPanelProps = {
  header?: ReactNode
  children: ReactNode
}

const Panel: React.FC<TPanelProps> = (props) => {
  const { header, children } = props
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  return (
    <Flex p={4} bg={bgColor} borderRadius="xl" direction="column">
      {
        header && <Box p={2}>{header}</Box>
      }
      <Box>{children}</Box>
    </Flex>
  )
}

export default Panel
