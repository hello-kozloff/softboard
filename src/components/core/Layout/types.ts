import * as React from 'react'

export interface ContextPayload {
  headerState: [JSX.Element, React.Dispatch<React.SetStateAction<JSX.Element>>]
  footerState: [JSX.Element, React.Dispatch<React.SetStateAction<JSX.Element>>]
}

export interface LayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
}
