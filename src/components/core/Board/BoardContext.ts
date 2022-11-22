import * as React from 'react'
import { ContextPayload } from './types'

const BoardContext = React.createContext<ContextPayload | null>(null)

export const useBoardContext = () => {
  const context = React.useContext(BoardContext)

  if (context === null) {
    throw new Error('useBoardContext should be used inside board')
  }

  return context
}

export default BoardContext
