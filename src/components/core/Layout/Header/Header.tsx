import * as React from 'react'
import * as Styled from './styled'
import { HeaderProps, HeaderVariant } from './types'

export const Header = ({ variant = HeaderVariant.Primary }: HeaderProps) => {
  return (
    <Styled.Header variant={variant}>
      <span>Header content</span>
    </Styled.Header>
  )
}
