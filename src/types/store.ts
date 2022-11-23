import * as Stores from 'supabase/stores'
import { ID } from './utils'

export interface RootState {
  board: Stores.BoardStore
}

export interface UserState {
  id: ID
  email: string
  firstName: string
  lastName: string
  position: string
  avatar: string | null
}

export interface ProjectState {
  id: ID
  title: string
  subtitle: string | null
  author: UserState['id']
  created: Date
  updated: Date
  participants: UserState['id'][]
  boards: BoardState['id'][]
}

export interface BoardState {
  id: ID
  name: string
  author: UserState['id']
  created: Date
  updated: Date
  participants: UserState['id'][]
  project: ProjectState['id']
  columns: ColumnState['id'][]
}

export interface ColumnState {
  id: ID
  name: string
  author: UserState['id']
  created: Date
  updated: Date
  board: BoardState['id']
  tasks: TaskState['id'][]
}

export interface TaskState {
  id: ID
  name: string
  content: JSON | null
  author: UserState['id']
  created: Date
  updated: Date
  participants: UserState['id'][]
  project: ProjectState['id']
  column: ColumnState['id']
  tags: TagState['id'][]
}

export interface TagState {
  id: ID
  text: string
  color: string
  background: string
  project: ProjectState['id']
}
