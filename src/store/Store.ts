import * as States from './states'
import { RootState } from './types'

export const Store: RootState = {
  user: new States.UserState(),
  board: new States.BoardState(),
}

