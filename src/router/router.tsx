import * as React from 'react'
import RouteGuard from 'components/core/RouteGuard'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

export const router = createBrowserRouter(
  routes.map((route) => {
    const Route = route.page

    return {
      path: route.path,
      element: (
        <RouteGuard {...route.extra}>
          <Route />
        </RouteGuard>
      ),
    }
  }),
)
