import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Profile = styled.button`
  background-color: transparent;
  color: inherit;
  font: inherit;

  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;

  cursor: pointer;
  user-select: none;
  border-width: 0;
  padding: 0;
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

export const Chevron = styled(motion.div)`
  display: inline-grid;
`
