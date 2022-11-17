import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { variables } from 'styles'

export const Link = styled(NavLink)<Record<string, unknown>>`
  padding: 8px;

  color: ${(props) => (props.active ? variables.gray0 : variables.gray2)};
  font-size: 16px;
  line-height: 28px;
  white-space: nowrap;
  text-decoration: none;

  transition: 0.25s ease;
`
