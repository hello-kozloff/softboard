import * as React from 'react'
import * as Styled from './styled'
import type { LinkProps } from './types'

export const Link = (props: LinkProps) => {
  return <Styled.Link {...props} />
}
