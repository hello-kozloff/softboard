import * as React from 'react'
import Layout, { HeaderVariant } from 'components/core/Layout'

export const SignUp = () => {
  return (
    <Layout header={<Layout.Header variant={HeaderVariant.Transparent} />}>
      <h1>Welcome to sign up page</h1>
    </Layout>
  )
}
