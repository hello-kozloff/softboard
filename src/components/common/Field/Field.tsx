import * as React from 'react'
import * as Styled from './styled'
import type { FieldProps } from './types'

export const Field = ({ label, children, error }: FieldProps) => {
  return (
    <Styled.Field>
      {label && <Styled.Label>{label}</Styled.Label>}
      {children}
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Field>
  )
}
