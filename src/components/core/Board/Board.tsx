import * as React from 'react'
import * as Styled from './styled'
import type { BoardProps } from './types'
import { BoardState } from 'store/slices/board/types'
import getBoardById from 'supabase/actions/getBoardById'
import Column from './Column'

export const Board = ({ id }: BoardProps) => {
  const [board, setBoard] = React.useState<BoardState | null>(null)

  React.useEffect(() => {
    getBoardById(id).then(({ data }) => data && setBoard(data))
  }, [id])

  if (board === null) {
    return <span>Loading board...</span>
  }

  return (
    <Styled.Board>
      <Styled.Name>{board.name}</Styled.Name>
      {board.columns.map((columnId) => (
        <Column key={columnId} id={columnId} />
      ))}
    </Styled.Board>
  )
}
