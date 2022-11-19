import { UserValues } from 'components/forms/Auth'

export type Values = Pick<UserValues, 'firstName' | 'lastName' | 'position'>
