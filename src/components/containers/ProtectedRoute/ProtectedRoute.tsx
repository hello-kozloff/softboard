import * as React from 'react'
import * as routerPaths from 'constants/router'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const user = useSelector((state: RootState) => state.user)

  console.log(user)

  if (!user) {
    return <Navigate to={routerPaths.AUTH_SIGN_IN} replace />
  }

  return <>{children}</>
}
