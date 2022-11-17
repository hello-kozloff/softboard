import * as React from 'react'
import { ContextPayload } from './types'

export const LayoutContext = React.createContext<ContextPayload | undefined>(
  undefined,
)

export const useLayoutContext = () => {
  const context = React.useContext(LayoutContext)

  if (context === undefined) {
    throw new Error('useLayoutContext must be inside layout!')
  }

  return context
}
