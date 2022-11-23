import { useStore } from 'store'

export const useLogged = () => {
  const { user: UserStore } = useStore()
  return UserStore.user !== null
}
