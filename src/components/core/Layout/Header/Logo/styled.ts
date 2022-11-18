import styled from 'styled-components'
import { variables } from 'styles'
import { Link } from 'react-router-dom'

export const Logo = styled(Link)`
  margin-right: 32px;
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 16px;

  color: ${variables.white};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.1px;
  text-decoration: none;

  span {
    display: inline-grid;
    color: ${variables.blue5};
    transition: 0.25s ease;
  }

  &:hover {
    text-decoration: none;

    span {
      transform: rotateZ(45deg);
    }
  }
`
