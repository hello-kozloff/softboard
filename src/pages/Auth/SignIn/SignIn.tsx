import * as React from 'react'
import * as Styled from '../styled'
import { AuthForm } from 'components/forms/Auth'

export const SignIn = () => {
  return (
    <Styled.Container>
      <AuthForm.SignIn />
    </Styled.Container>
  )
}
