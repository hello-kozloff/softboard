import * as React from 'react'
import * as Styled from './styled'
import type { BoardProps } from './types'
import BoardContext from './BoardContext'
import { observer } from 'mobx-react'
import { useStore } from 'store'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'
import Column from './Column'

export const Board = observer(({ id }: BoardProps) => {
  const { board: BoardState } = useStore()

  React.useEffect(() => {
    BoardState.fetch(id).then(() =>
      BoardState.getColumns().then(() => BoardState.getTasks()),
    )
  }, [id])

  if (!BoardState.board && BoardState.loading) {
    return <span>Loading board...</span>
  }

  const onDragEnd = (result: DropResult) => {
    console.log(result)
  }

  return (
    <BoardContext.Provider value={BoardState.board}>
      <Styled.Board>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={id} direction="horizontal" type="board">
            {(provided) => (
              <Styled.Droppable
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {BoardState.board?.columns.map((columnId, index) => (
                  <Draggable
                    key={columnId}
                    draggableId={columnId}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <Column
                        index={index}
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
})
