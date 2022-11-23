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
    BoardState.init(id)
  }, [id])

  if (!BoardState.board && BoardState.loading) {
    return <span>Loading board...</span>
  }

  const onDragEnd = ({
    type,
    draggableId,
    source,
    destination,
  }: DropResult) => {
    if (!destination) return

    if (type === 'board') {
      BoardState.reorderColumns(source.index, destination.index)
    }

    if (type === 'column') {
      BoardState.moveTask(
        draggableId,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
      )
    }
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
})
