import * as React from 'react'
import * as Styled from './styled'
import type { ColumnProps } from './types'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import getColumnById from 'supabase/actions/getColumnById'
import { ColumnState } from 'store/slices/board/types'
import Card from '../Card'

export const Column = ({ id, ...provided }: ColumnProps) => {
  const [column, setColumn] = React.useState<ColumnState | null>(null)

  React.useEffect(() => {
    getColumnById(id).then(({ data }) => data && setColumn(data))
  }, [id])

  if (column === null) {
    return <span>Loading column...</span>
  }

  return (
    <Styled.Column ref={provided.innerRef} {...provided.draggableProps}>
      <Styled.Header>
        <Styled.Name {...provided.dragHandleProps}>{column.name}</Styled.Name>
      </Styled.Header>
      <Droppable droppableId={id} type="column">
        {(provided) => (
          <Styled.Droppable
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {column.tasks.map((taskId, index) => (
              <Draggable key={taskId} draggableId={taskId} index={index}>
                {(provided) => (
                  <Styled.Draggable
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card id={taskId} />
                  </Styled.Draggable>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Styled.Droppable>
        )}
      </Droppable>
    </Styled.Column>
  )
}
