import { UserObject } from 'types/store'

export type UserValues = {
  password: string
} & Pick<UserObject, 'email' | 'firstName' | 'lastName' | 'position'>

