import * as React from 'react'
import * as routerPaths from 'constants/router'
import { Navigate } from 'react-router-dom'

export const Redirect = () => {
  return <Navigate to={routerPaths.DASHBOARD_PATH} replace />
}
