import * as States from './states'

export interface RootState {
  user: States.UserState
  board: States.BoardState
}
