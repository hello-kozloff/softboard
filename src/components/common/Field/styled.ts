import styled from 'styled-components'
import { variables } from 'styles'

export const Field = styled.label`
  display: grid;
  grid-row-gap: 6px;
`

export const Label = styled.span`
  color: ${variables.gray2};
  font-size: 14px;
  line-height: 24px;
  text-align: left;
`

export const Error = styled(Label)`
  color: ${variables.red3};
`
