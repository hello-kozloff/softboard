import { ColumnObject } from 'types/store'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

export type ColumnProps = Pick<ColumnObject, 'id'> & {
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
  index: number
}
