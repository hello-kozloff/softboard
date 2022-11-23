import { TaskObject } from 'types/store'
import { DraggableStateSnapshot } from 'react-beautiful-dnd'

export type CardProps = Pick<TaskObject, 'id'> & DraggableStateSnapshot
