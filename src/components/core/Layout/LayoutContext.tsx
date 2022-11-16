import * as React from 'react'
import { LayoutProps } from './types'

export const LayoutContext = React.createContext<LayoutProps | undefined>(
  undefined,
)

export const useLayoutContext = () => {
  const context = React.useContext(LayoutContext)

  if (context === undefined) {
    throw new Error('useLayoutContext must be inside layout!')
  }

  return context
}
