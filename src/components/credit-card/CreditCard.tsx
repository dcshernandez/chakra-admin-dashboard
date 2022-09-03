import {
  Box, Flex, Icon, Text,
} from '@chakra-ui/react'

import { Grid } from 'react-feather'

import getCurrency from 'helpers/getCurrency'
import VisaIcon from './partials/VisaIcon'

const CreditCard = () => {
  const date = new Date()
  return (
    <Box
      w="350px"
      h="220px"
      m="auto"
      py={4}
      px={6}
      color="white"
      bgGradient="linear(to-br, purple.500, red.500)"
      borderRadius="15px"
      boxShadow="md"
    >
      <Flex direction="column" gap={1}>
        <Flex direction="row" justifyContent="space-between">
          <Box mt={4}>
            <Text align="left" fontSize="xs">Current Balance</Text>
            <Text align="left" fontWeight="bold" fontSize="3xl">
              {getCurrency(20234)}
            </Text>
          </Box>
          <Box>
            <VisaIcon h={16} w={16} />
          </Box>
        </Flex>
        <Flex mt={6} direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Text align="left" fontSize="lg">0123 4567 8900</Text>
            <Text align="left" fontSize="xs">
              {`${date.getMonth()}/${date.getFullYear()}`}
            </Text>
          </Box>
          <Box>
            <Icon mt={4} mb={2} as={Grid} w={8} h={8} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default CreditCard
