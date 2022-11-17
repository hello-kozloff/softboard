import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { RoutePath } from 'types/router'
import { RouteGuardProps } from './types'
import useLogged from 'hooks/useLogged'

export const RouteGuard = ({ children, guard }: RouteGuardProps) => {
  const isLogged = useLogged()

  if (guard?.auth === true) {
    if (!isLogged) {
      return <Navigate to={RoutePath.AUTH_SIGN_IN} replace />
    }
  }

  if (guard?.auth === false) {
    if (isLogged) {
      return <Navigate to={RoutePath.DASHBOARD_PATH} replace />
    }
  }

  return <>{children}</>
}
