import * as React from 'react'
import { ContextPayload } from './types'

export const SignUpContext = React.createContext<ContextPayload | undefined>(
  undefined,
)

export const useSignUpContext = () => {
  const context = React.useContext(SignUpContext)
 
  if (context === undefined) {
    throw new Error('useSignUpContext should be used inside stages')
  }

  return context
}
