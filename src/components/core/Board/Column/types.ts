import { ColumnState } from 'store/slices/board/types'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

export type ColumnProps = Pick<ColumnState, 'id'> & {
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}
