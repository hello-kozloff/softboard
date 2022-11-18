import * as React from 'react'
import * as Styled from './styled'
import type { InputProps } from './types'

export const Input = (props: InputProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Input {...props} />
    </Styled.Wrapper>
  )
}
