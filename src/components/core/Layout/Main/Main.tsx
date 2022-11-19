import * as React from 'react'
import * as Styled from './styled'
import Container from 'components/common/Container'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <Styled.Main role="main">
      <Container>
        <Outlet />
      </Container>
    </Styled.Main>
  )
}
