import { UserState } from 'store/slices/user'

export type UserValues = {
  password: string
} & Pick<UserState, 'email' | 'firstName' | 'lastName' | 'position'>
