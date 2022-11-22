import styled from 'styled-components'
import { variables } from 'styles'

export const Card = styled.div`
  display: grid;
  padding: 16px;

  border-radius: 6px;
  border-bottom: 1px solid ${variables.gray9};
  background-color: ${variables.gray6};
`

export const Name = styled.span`
  padding-right: 27px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`
