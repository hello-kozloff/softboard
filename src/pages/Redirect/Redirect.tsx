import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { RoutePath } from 'types/router'

export const Redirect = () => {
  return <Navigate to={RoutePath.PROJECTS} replace />
}
