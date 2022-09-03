import {
  Flex, Heading,
} from '@chakra-ui/react'

import CreditCard from 'components/credit-card'
import Panel from 'components/panel'

const Dashboard = () => (
  <Flex direction="row">
    <Panel header={<Heading size="md">My Card</Heading>}>
      <CreditCard />
    </Panel>

  </Flex>
)

export default Dashboard
