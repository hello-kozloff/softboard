import * as React from 'react'
import * as Styled from './styled'
import { useLayoutContext } from '../LayoutContext'
import Container from 'components/common/Container'

export const Main = () => {
  const { children } = useLayoutContext()
  return (
    <Styled.Main role="main">
      <Container>{children}</Container>
    </Styled.Main>
  )
}
