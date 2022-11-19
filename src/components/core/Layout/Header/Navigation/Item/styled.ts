import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { variables } from 'styles'

export const Link = styled(NavLink)<Record<string, unknown>>`
  padding: 4px 16px;

  color: ${(props) => (props.active ? variables.gray0 : variables.gray2)};
  font-size: 16px;
  line-height: 28px;
  white-space: nowrap;
  text-decoration: none;

  border-radius: 30px;
  background-color: ${(props) => (props.active ? variables.gray6 : null)};
  transition: 0.25s ease;

  &:hover {
    background-color: ${(props) => (!props.active ? variables.gray7 : null)};
    text-decoration: none;
  }

  &:active {
    background-color: ${variables.gray6};
  }
`
