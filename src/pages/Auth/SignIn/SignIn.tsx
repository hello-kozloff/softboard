import * as React from 'react'
import Layout, { HeaderVariant } from 'components/core/Layout'

export const SignIn = () => {
  return (
    <Layout header={<Layout.Header variant={HeaderVariant.Transparent} />}>
      <h1>Welcome to SignIn</h1>
    </Layout>
  )
}
