import { ID } from 'types/utils'
import { BoardState } from '../board'
import { UserState } from '../user'

export interface TagState {
  id: ID
  color: string
  text: string
  boardId: BoardState['id']
  authorId: UserState['id']
  createdAt: Date
  updatedAt: Date
}
