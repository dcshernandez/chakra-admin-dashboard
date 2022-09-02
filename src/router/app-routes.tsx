import { lazy } from 'react'

const SignIn = lazy(() => import('views/sign-in'))
const Dashboard = lazy(() => import('views/dashboard'))
const Profile = lazy(() => import('views/profile'))

export const privateRoutes = [
  // navbar items
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/transactions',
    element: <h1>Transactions</h1>,
  },
  {
    path: '/bills',
    element: <h1>Bills</h1>,
  },
  {
    path: '/reports',
    element: <h1>Reports</h1>,
  },
]

export const publicRoutes = [
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]
