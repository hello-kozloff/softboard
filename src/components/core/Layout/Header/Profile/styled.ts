import styled from 'styled-components'
import { StyledDropdown } from 'components/common/Dropdown'

export const Profile = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  align-items: center;

  ${StyledDropdown} {
    top: 100%;
    right: 0;
  }
`

export const Username = styled.span`
  white-space: nowrap;
`

export const Avatar = styled.img`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  object-fit: cover;
`
