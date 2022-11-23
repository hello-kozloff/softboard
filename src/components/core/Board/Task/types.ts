import { TaskObject } from 'types/store'
import { DraggableStateSnapshot } from 'react-beautiful-dnd'

export type TaskProps = Pick<TaskObject, 'id'> & {
  snapshot: DraggableStateSnapshot
}
