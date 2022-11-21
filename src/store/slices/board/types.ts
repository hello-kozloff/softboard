import { ID } from 'types/utils'
import { TaskState } from 'store/slices/task'

export interface ColumnState {
  id: ID
  name: string
  tasks: TaskState[]
}

export interface BoardState {
  id: ID
  title: string
  subtitle?: string
  columns: ColumnState[]
}
