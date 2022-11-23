import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

export interface ColumnProps {
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
  index: number
}
