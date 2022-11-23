import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { RoutePath } from 'types/router'
import useUser from 'hooks/useUser'

export const Logout = () => {
  const UserState = useUser()

  React.useEffect(() => {
    UserState.logout()
  }, [])

  return <Navigate to={RoutePath.HOME} />
}
