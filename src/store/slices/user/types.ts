import type { ID } from 'types/utils'

export interface UserState {
  id: ID
  email: string
  emailVerifyAt: Date | null
  firstName: string
  lastName: string
  position: string
  avatar: string | null
}
