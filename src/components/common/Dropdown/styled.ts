import styled from 'styled-components'
import { variables } from 'styles'

export const Target = styled.div`
  cursor: pointer;
`

export const Dropdown = styled.div`
  min-width: 180px;
  display: inline-grid;

  border-radius: 6px;
  border: 1px solid ${variables.gray6};
  background-color: ${variables.gray8};
`

export const Group = styled.div`
  padding: 8px 0;
  display: inline-grid;

  &:not(:last-child) {
    color: ${variables.white};
    border-bottom: 1px solid ${variables.gray6};
  }
`
