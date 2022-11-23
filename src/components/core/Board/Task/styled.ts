import styled, { css } from 'styled-components'
import { variables } from 'styles'
import { DraggableStateSnapshot } from 'react-beautiful-dnd'

export const Card = styled.div<DraggableStateSnapshot>`
  display: grid;
  padding: 16px;

  border-radius: 6px;
  border-bottom: 1px solid ${variables.gray9};
  background-color: ${variables.gray6};
  transition: 0.25s ease-out;
  user-select: none;

  &:hover {
    background-color: ${variables.gray5};
  }

  ${(props) =>
    props.isDragging &&
    css`
      background-color: ${variables.gray5};
      box-shadow: 0 4px 16px ${variables.gray9};
    `};
`

export const Name = styled.span`
  padding-right: 27px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-shadow: 0 1px ${variables.gray9};
`
