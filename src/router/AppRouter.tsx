import { Route, Routes } from 'react-router-dom'

import PrivateRoutes from 'utility/PrivateRoutes'
import PublicRoutes from 'utility/PublicRoutes'

import NotFound from 'components/not-found'
import { Suspense } from 'react'
import { privateRoutes, publicRoutes } from './app-routes'

const AppRouter = () => (
  <Routes>
    <Route element={<PublicRoutes />}>
      {
        publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={(
              <Suspense fallback={<div>...</div>}>
                {route.element}
              </Suspense>
            )}
          />

        ))
      }
    </Route>
    <Route element={<PrivateRoutes />}>
      {
        privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={(
              <Suspense fallback={<div>...</div>}>
                {route.element}
              </Suspense>
            )}
          />
        ))
      }
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRouter
