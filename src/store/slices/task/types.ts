import { ID } from 'types/utils'
import { TagState } from '../tag'

export interface TaskState {
  id: ID
  name: string
  tags: TagState['id'][]
}
