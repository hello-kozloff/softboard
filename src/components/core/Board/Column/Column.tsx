import * as React from 'react'
import * as Styled from './styled'
import type { ColumnProps } from './types'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { observer } from 'mobx-react'
import { useStore } from 'store'
import Card from '../Card'

export const Column = observer(
  ({ id, index, provided, snapshot }: ColumnProps) => {
    const { board: BoardState } = useStore()
    const column = BoardState.columns[index]

    if (!column) {
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
              {...snapshot}
            >
              {column.tasks.map((taskId, index) => (
                <Draggable key={taskId} draggableId={taskId} index={index}>
                  {(provided, snapshot) => (
                    <Styled.Draggable
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card id={taskId} {...snapshot} />
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
  },
)
