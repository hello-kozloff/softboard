import { makeAutoObservable } from 'mobx'
import { UserObject } from 'types/store'

export class UserState {
  public user: UserObject | null = {
    id: '1',
    email: 'hello-kozloff@gmail.com',
    emailVerifyAt: null,
    firstName: 'Stew',
    lastName: 'Jobs',
    position: 'Frontend Developer',
    avatar: null,
  }

  constructor() {
    makeAutoObservable(this)
  }

  public singIn = async (user: UserObject) => {
    return new Promise((resolve) => {
      resolve((this.user = user))
    })
  }

  public logout = () => {
    this.user = null
  }
}
