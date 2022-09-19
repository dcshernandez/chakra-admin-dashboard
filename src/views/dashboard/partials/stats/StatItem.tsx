import {
  Box,
  Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, useColorModeValue,
} from '@chakra-ui/react'

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
    <Box bg={bgColor} p={4} borderRadius="lg">
      <Stat>
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
    </Box>
  )
}
export default StatItem
