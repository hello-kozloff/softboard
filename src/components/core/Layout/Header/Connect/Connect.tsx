import * as React from 'react'
import * as Styled from './styled'
import { RoutePath } from 'types/router'

export const Connect = () => {
  return (
    <Styled.Connect>
      <Styled.SignUp to={RoutePath.AUTH_SIGN_UP}>Sign Up</Styled.SignUp>
      <Styled.SignIn to={RoutePath.AUTH_SIGN_IN}>Sign In</Styled.SignIn>
    </Styled.Connect>
  )
}
