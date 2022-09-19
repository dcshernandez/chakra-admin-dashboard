import {
  Box,
  Flex, Grid, Heading,
} from '@chakra-ui/react'

import CreditCard from 'components/credit-card'
import Panel from 'components/panel'

import getCurrency from 'helpers/getCurrency'

import StatItem from './partials/stats/StatItem'

const Dashboard = () => (
  <Flex
    direction={{
      base: 'column',
      md: 'row',
    }}
    gap={4}
  >
    <Box w="full">
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridAutoRows="1fr 1fr 1fr"
        gap={4}
      >
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
        <Box gridColumnStart="1" gridColumnEnd="4" gridRow="2 / 4">
          <Panel header="Outlay">
            {/* coming soon */}
          </Panel>
        </Box>
        <Box gridColumnStart="1" gridColumnEnd="3" gridRow="3 / 4">
          <Panel header="Income">
            {/* coming soon */}
          </Panel>
        </Box>
        <Box gridColumnStart="3" gridColumnEnd="4" gridRow="3 / 4">
          <Panel header="Latest Transactions">
            {/* coming soon */}
          </Panel>
        </Box>
      </Grid>
    </Box>
    <Box>
      <Panel header={<Heading size="md">My Card</Heading>}>
        <CreditCard />
      </Panel>
    </Box>
  </Flex>
)

export default Dashboard
