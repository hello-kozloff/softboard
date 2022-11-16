import * as React from 'react'
import * as Styled from './styled'
import { useLayoutContext } from '../LayoutContext'

export const Main = () => {
  const { children } = useLayoutContext()
  return (
    <Styled.Main role="main" className="layout__main">
      {children}
    </Styled.Main>
  )
}
