import * as React from 'react'
import Layout, { HeaderVariant } from 'components/core/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { UserAction } from 'store/slices/user'

export const SignUp = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!user) {
      dispatch(
        UserAction.store({
          id: '0',
          email: 'hello.kozloff@gmail.com',
          emailVerifyAt: null,
          firstName: 'Stew',
          lastName: 'Jobs',
          avatar: null,
        }),
      )
    }
  }, [user])
  return (
    <Layout header={<Layout.Header variant={HeaderVariant.Transparent} />}>
      <h1>Welcome to sign up page</h1>
    </Layout>
  )
}
