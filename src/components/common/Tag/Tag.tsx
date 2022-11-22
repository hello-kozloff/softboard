import * as React from 'react'
import * as Styled from './styled'
import type { TagProps } from './types'

export const Tag = ({ color, text }: TagProps) => {
  return <Styled.Tag color={color}>{text}</Styled.Tag>
}
