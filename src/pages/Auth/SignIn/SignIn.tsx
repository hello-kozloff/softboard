import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserAction } from 'store/slices/user'
import { RootState } from '../../../store'

export const SignIn = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  console.log(user)

  const sign = () => {
    dispatch(UserAction.signIn({
      id: 'c234tcetherjnrth',
      email: 'hello.kozloff@gmail.com',
      emailVerifyAt: null,
      firstName: 'Nikita',
      lastName: 'Kozloff',
      avatar: null,
    }))
  }

  return (
    <div>
      <button type='button' onClick={() => sign()}>Sign In
      </button>
    </div>
  )
}
