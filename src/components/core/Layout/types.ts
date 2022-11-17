import { ReactNode } from 'react'

export interface ContextPayload {
  children: ReactNode
}

export interface LayoutProps extends ContextPayload {
  header?: JSX.Element
  footer?: JSX.Element
}
