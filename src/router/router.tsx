import * as React from 'react'
import Layout from 'components/core/Layout'
import RouteGuard from 'components/core/RouteGuard'
import { routes } from './routes'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routes.map((route) => {
        const Page = route.page
        return (
          <Route key={route.path} element={<Layout {...route.extra?.layout} />}>
            <Route
              key={route.path}
              element={<RouteGuard guard={route.extra?.guard} />}
            >
              <Route path={route.path} element={<Page />} />
            </Route>
          </Route>
        )
      })}
    </>,
  ),
)
