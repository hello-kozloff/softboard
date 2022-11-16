import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

export const router = createBrowserRouter(
  routes.map((Route) => ({
    path: Route.path,
    element: <Route.component />,
  })),
)
