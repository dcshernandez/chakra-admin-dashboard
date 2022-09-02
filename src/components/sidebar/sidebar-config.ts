import {
  BarChart2,
  CreditCard,
  FileText,
  PieChart,
} from 'react-feather'

const sidebarItems = [
  {
    name: 'Dashboard',
    path: '/',
    icon: PieChart,
  },
  {
    name: 'Transactions',
    path: '/transactions',
    icon: CreditCard,
  },
  {
    name: 'Bills',
    path: '/bills',
    icon: FileText,
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: BarChart2,
  },
]

export default sidebarItems
