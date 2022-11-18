import * as React from 'react'
import * as Styled from './styled'
import Container from 'components/common/Container'

export const Footer = () => {
  return (
    <Styled.Footer>
      <Container>
        <Styled.Copyright>
          Softboard 2022. All rights reserved.
        </Styled.Copyright>
      </Container>
    </Styled.Footer>
  )
}
