import * as React from 'react'
import ProtectedRoute from 'components/containers/ProtectedRoute'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

export const router = createBrowserRouter(
  routes.map((route) => {
    const Page = route.element
    const RouteValidator = route.protected ? ProtectedRoute : React.Fragment

    return {
      path: route.path,
      element: (
        <RouteValidator>
          <Page />
        </RouteValidator>
      ),
    }
  }),
)
