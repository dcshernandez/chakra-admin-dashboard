import {
  Box,
  Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, useColorModeValue,
} from '@chakra-ui/react'
import ReactApexChart from 'react-apexcharts'
import { options, series } from './chart-mock'

type TStatItemProps = {
  label?: string
  statNumber?: string
  type?: 'increase' | 'decrease'
  percentage?: string
}

const StatItem: React.FC<TStatItemProps> = (props) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const {
    label, statNumber, type, percentage,
  } = props

  return (
    <Box
      bg={bgColor}
      h={32}
      w="calc(100% / 3)"
      borderRadius="lg"
      position="relative"
    >
      <Stat p={4}>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{statNumber}</StatNumber>
        <StatHelpText mt={2} display="flex" alignItems="center" flexDirection="row">
          <StatArrow type={type} />
          <Text
            fontWeight="bold"
            color={type === 'increase' ? 'green.500' : 'red.500'}
          >
            {percentage}
          </Text>
        </StatHelpText>
      </Stat>
      <ReactApexChart
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
        type="area"
        options={options}
        series={series}
        height="80"
        width="70%"
      />
    </Box>
  )
}
export default StatItem
