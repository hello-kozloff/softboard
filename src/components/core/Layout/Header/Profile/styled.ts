import styled from 'styled-components'

export const Profile = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  user-select: none;
`

export const Username = styled.span`
  white-space: nowrap;
  margin-right: 2px;
`

export const Avatar = styled.img`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  object-fit: cover;
`
