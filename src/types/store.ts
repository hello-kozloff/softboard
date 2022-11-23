import { ID } from './utils'

export interface UserObject {
  id: ID
  email: string
  emailVerifyAt: Date | null
  firstName: string
  lastName: string
  position: string
  avatar: string | null
}

export interface ProjectObject {
  id: ID
  title: string
  subtitle: string | null
  author: UserObject['id']
  created: Date
  updated: Date
  participants: UserObject['id'][]
  boards: BoardObject['id'][]
}

export interface BoardObject {
  id: ID
  name: string
  author: UserObject['id']
  created: Date
  updated: Date
  participants: UserObject['id'][]
  project: ProjectObject['id']
  columns: ColumnObject['id'][]
}

export interface ColumnObject {
  id: ID
  name: string
  author: UserObject['id']
  created: Date
  updated: Date
  board: BoardObject['id']
  tasks: TaskObject['id'][]
}

export interface TaskObject {
  id: ID
  name: string
  content: JSON | null
  author: UserObject['id']
  created: Date
  updated: Date
  participants: UserObject['id'][]
  project: ProjectObject['id']
  column: ColumnObject['id']
  tags: TagObject['id'][]
}

export interface TagObject {
  id: ID
  text: string
  color: string
  background: string
  project: ProjectObject['id']
}
