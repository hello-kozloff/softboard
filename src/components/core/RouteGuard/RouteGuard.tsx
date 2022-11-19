import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { RoutePath } from 'types/router'
import { RouteGuardProps } from './types'
import useLogged from 'hooks/useLogged'

export const RouteGuard = ({ guard }: RouteGuardProps) => {
  const isLogged = useLogged()

  if (guard?.auth === true) {
    if (!isLogged) {
      return <Navigate to={RoutePath.AUTH_SIGN_IN} replace />
    }
  }

  if (guard?.auth === false) {
    if (isLogged) {
      return <Navigate to={RoutePath.HOME} replace />
    }
  }

  return <Outlet />
}
