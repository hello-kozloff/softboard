import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const useUser = () => {
  const user = useSelector((state: RootState) => state.user)

  if (!user) {
    throw new Error('User must be logged in! Check your logic!')
  }

  return user
}
