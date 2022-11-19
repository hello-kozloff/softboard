import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { variables } from 'styles'

export const Link = styled(NavLink)`
  padding: 4px 8px 4px 16px;

  color: ${variables.gray1};
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: ${variables.white};
    background-color: ${variables.blue5};
    text-decoration: none;
  }
`
