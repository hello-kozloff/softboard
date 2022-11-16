import * as React from 'react'
import ProtectedRoute from 'components/containers/ProtectedRoute'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

export const router = createBrowserRouter(
  routes.map((Route) => {
    const RouteValidator = Route.protected ? ProtectedRoute : React.Fragment

    return {
      path: Route.path,
      element: (
        <RouteValidator>
          <Route.element />
        </RouteValidator>
      ),
    }
  }),
)
