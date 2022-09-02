import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from 'utility/AuthContext'
import PageLayout from 'components/layout/PageLayout'

const PrivateRoutes = () => {
  const { user: { token } } = useAuth()
  return token !== null ? (
    <PageLayout type="vertical">
      <Outlet />
    </PageLayout>
  ) : <Navigate to="/sign-in" replace />
}
export default PrivateRoutes
