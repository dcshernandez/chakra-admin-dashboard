import {
  BarChart2,
  CreditCard,
  FileText,
  PieChart,
  TrendingUp,
} from 'react-feather'

const sidebarItems = [
  {
    name: 'Dashboard',
    path: '/',
    icon: PieChart,
  },
  {
    name: 'My Wallet',
    path: '/my-wallet',
    icon: CreditCard,
  },
  {
    name: 'Transactions',
    path: '/transactions',
    icon: FileText,
  },
  {
    name: 'Investments',
    path: '/investments',
    icon: TrendingUp,
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: BarChart2,
  },
]

export default sidebarItems
