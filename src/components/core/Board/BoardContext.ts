import * as React from 'react'
import { BoardObject } from 'types/store'

const BoardContext = React.createContext<BoardObject | null>(null)

export const useBoardContext = () => {
  const context = React.useContext(BoardContext)

  if (context === null) {
    throw new Error('useBoardContext should be used inside board')
  }

  return context
}

export default BoardContext
