import * as React from 'react'
import { RootState } from './types'
import { Store } from './Store'

const StoreContext = React.createContext<RootState | null>(null)

export const StoreProvider = ({ children }: React.PropsWithChildren) => {
  return <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const context = React.useContext(StoreContext)

  if (context === null) {
    throw new Error('useStore should be used inside store')
  }

  return context
}

export default StoreContext
