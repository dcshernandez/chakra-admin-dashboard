import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from 'utility/AuthContext'

const PublicRoutes = () => {
  const { user: { token } } = useAuth()
  return token === null || token === '' ? <Outlet /> : <Navigate to="/" replace />
}
export default PublicRoutes
