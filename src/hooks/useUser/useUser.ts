import { useStore } from 'store'

export const useUser = () => {
  const { user } = useStore()

  if (!user) {
    throw new Error('User must be logged in! Check your logic!')
  }

  return user
}
