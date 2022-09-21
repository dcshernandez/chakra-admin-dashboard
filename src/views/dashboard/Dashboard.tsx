import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'

import CreditCard from 'components/credit-card'
import Panel from 'components/panel'

import getCurrency from 'helpers/getCurrency'

import StatItem from './partials/stats/StatItem'

const Dashboard = () => {
  const bg = useColorModeValue('gray.50', 'gray.800')

  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      mr={2}
      gap={4}
    >
      <Box w="full">
        <Flex direction={['column', 'row']} gap={4}>
          <StatItem
            label="Total Balance"
            statNumber={getCurrency(19750)}
            percentage="11.94%"
            type="increase"
          />
          <StatItem
            label="Total Expenses"
            statNumber={getCurrency(11375)}
            percentage="19.91%"
            type="decrease"
          />
          <StatItem
            label="Total Savings"
            statNumber={getCurrency(20176)}
            type="increase"
            percentage="2.5%"
          />
        </Flex>
        <Box
          h="sm"
          bg={bg}
          my={4}
          borderRadius="lg"
        >
          <Panel header="Outlay">
            {/* coming soon */}
          </Panel>
        </Box>
        <Flex direction={['column', 'row']} gap={4}>
          <Box w="60%">
            <Panel header="Income">
              {/* coming soon */}
            </Panel>
          </Box>
          <Box w="40%">
            <Panel header="Latest Transactions">
              {/* coming soon */}
            </Panel>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Panel header={<Heading size="md">My Card</Heading>}>
          <CreditCard />
        </Panel>
      </Box>
    </Flex>
  )
}

export default Dashboard
