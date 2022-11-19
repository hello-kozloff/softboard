import * as React from 'react'
import * as Styled from '../styled'
import { AuthForm } from 'components/forms/Auth'

export const SignUp = () => {
  return (
    <Styled.Container>
      <AuthForm.SignUp />
    </Styled.Container>
  )
}
