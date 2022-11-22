import * as React from 'react'
import * as Styled from './styled'
import type { BoardProps } from './types'
import { BoardState } from 'store/slices/board/types'
import getBoardById from 'supabase/actions/getBoardById'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'
import Column from './Column'

export const Board = ({ id }: BoardProps) => {
  const [board, setBoard] = React.useState<BoardState | null>(null)

  React.useEffect(() => {
    getBoardById(id).then(({ data }) => data && setBoard(data))
  }, [id])

  if (board === null) {
    return <span>Loading board...</span>
  }

  const onDragEnd = (result: DropResult) => {
    console.log(result)
  }

  return (
    <Styled.Board>
      <Styled.Name>{board.name}</Styled.Name>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={id} type="board">
          {(provided) => (
            <Styled.Droppable
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {board.columns.map((columnId, index) => (
                <Draggable key={columnId} draggableId={columnId} index={index}>
                  {(provided) => (
                    <Styled.Draggable
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Column id={columnId} />
                    </Styled.Draggable>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Styled.Droppable>
          )}
        </Droppable>
      </DragDropContext>
    </Styled.Board>
  )
}
