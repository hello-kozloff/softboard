import * as React from 'react'
import * as Styled from '../styled'
import Layout, { HeaderVariant } from 'components/core/Layout'
import { AuthForm } from 'components/forms/Auth'

export const SignUp = () => {
  return (
    <Layout header={<Layout.Header variant={HeaderVariant.Transparent} />}>
      <Styled.Container>
        <AuthForm.SignUp />
      </Styled.Container>
    </Layout>
  )
}
