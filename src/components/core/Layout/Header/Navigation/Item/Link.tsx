import * as React from 'react'
import * as Styled from './styled'
import { useHref, useMatch } from 'react-router-dom'
import type { LinkProps } from './types'

export const Link = (props: LinkProps) => {
  const href = useHref(props.to)
  const isMatch = useMatch(href)

  return <Styled.Link {...props} active={!!isMatch} />
}
