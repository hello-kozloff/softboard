import { ID } from 'types/utils'
import { TaskState } from 'store/slices/task'

export interface ColumnState {
  id: ID
  name: string
  tasks: TaskState['id'][]
}

export interface BoardState {
  id: ID
  name: string
  subtitle?: string
  columns: ColumnState['id'][]
}
