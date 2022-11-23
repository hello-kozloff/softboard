import * as React from 'react'
import * as Styled from './styled'
import type { BoardProps } from './types'
import { BoardObject } from 'types/store'
import BoardContext from './BoardContext'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'
import Column from './Column'

export const Board = ({ id }: BoardProps) => {
  const [board, setBoard] = React.useState<BoardObject | null>(null)

  if (board === null) {
    return <span>Loading board...</span>
  }

  const onDragEnd = (result: DropResult) => {
    console.log(result)
  }

  return (
    <BoardContext.Provider value={board}>
      <Styled.Board>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={id} direction="horizontal" type="board">
            {(provided) => (
              <Styled.Droppable
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {board.columns.map((columnId, index) => (
                  <Draggable
                    key={columnId}
                    draggableId={columnId}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <Column
                        id={columnId}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Styled.Droppable>
            )}
          </Droppable>
        </DragDropContext>
      </Styled.Board>
    </BoardContext.Provider>
  )
}
