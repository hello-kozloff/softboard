import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { ColumnObject } from 'types/store'

export interface ColumnProps {
  id: ColumnObject['id']
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}
