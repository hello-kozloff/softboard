import styled from 'styled-components'
import { Link } from '../Navigation/Item/styled'
import { variables } from 'styles'

export const Connect = styled.div`
  padding: 8px 0;
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
`

export const SignUp = styled(Link)`
  color: ${variables.gray0};
  white-space: nowrap;

  &:hover {
    color: ${variables.gray2};
    background: transparent;
  }
`

export const SignIn = styled(SignUp)`
  padding: 2px 8px;
  border: 1px solid ${variables.gray0};
  border-radius: 6px;

  &:hover {
    border-color: ${variables.gray2};
    background: ${variables.gray8};
  }
`
