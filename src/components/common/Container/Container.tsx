import * as React from 'react'
import * as Styled from './styled'
import type { ContainerProps } from './types'

export const Container = (props: ContainerProps) => {
  return <Styled.Container {...props} />
}
