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
          avatar:
            'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
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
