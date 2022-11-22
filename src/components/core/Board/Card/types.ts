import { TaskState } from 'store/slices/task'
import { DraggableStateSnapshot } from 'react-beautiful-dnd'

export type CardProps = Pick<TaskState, 'id'> & DraggableStateSnapshot
