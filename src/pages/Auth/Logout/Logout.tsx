import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { RoutePath } from 'types/router'
import { useDispatch } from 'react-redux'
import { UserAction } from 'store/slices/user'

export const Logout = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(UserAction.reset())
  }, [])

  return <Navigate to={RoutePath.HOME} />
}
