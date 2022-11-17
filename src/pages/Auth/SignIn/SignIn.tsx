import * as React from 'react'
import Layout, { HeaderVariant } from 'components/core/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { UserAction } from 'store/slices/user'
import { RootState } from 'store'

export const SignIn = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!user) {
      dispatch(
        UserAction.signIn({
          id: '',
          email: '',
          emailVerifyAt: null,
          firstName: '',
          lastName: '',
          avatar: null,
        }),
      )
    }
  }, [user])

  return (
    <Layout header={<Layout.Header variant={HeaderVariant.Transparent} />}>
      <h1>Welcome to SignIn</h1>
    </Layout>
  )
}
