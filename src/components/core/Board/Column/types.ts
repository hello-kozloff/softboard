import { ColumnState } from 'store/slices/board/types'
import { DraggableProvided } from 'react-beautiful-dnd'

export type ColumnProps = Pick<ColumnState, 'id'> & DraggableProvided
