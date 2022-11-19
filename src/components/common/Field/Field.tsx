import * as React from 'react'
import * as Styled from './styled'
import type { FieldProps } from './types'

export const Field = ({ label, children, error }: FieldProps) => {
  return (
    <Styled.Field error={error}>
      {label && <Styled.Label>{label}</Styled.Label>}
      {children}
      {error && <Styled.Error>{String(error)}</Styled.Error>}
    </Styled.Field>
  )
}
