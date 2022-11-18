import * as React from 'react'
import * as Styled from './styled'
import { ButtonProps, ButtonScale, ButtonVariant } from './types'

export const Button = ({
  variant = ButtonVariant.Primary,
  scale = ButtonScale.Medium,
  ...props
}: ButtonProps) => {
  return <Styled.Button {...props} variant={variant} scale={scale} />
}
