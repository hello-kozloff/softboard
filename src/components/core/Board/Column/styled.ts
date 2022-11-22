import styled, { css } from 'styled-components'
import { variables } from 'styles'
import { DraggableStateSnapshot } from 'react-beautiful-dnd'

export const Column = styled.div`
  width: 100%;
  max-width: 304px;
  margin-right: 16px;
`

export const Header = styled.div`
  display: grid;
`

export const Name = styled.span`
  width: max-content;
  border-radius: 8px;
  background-color: ${variables.gray8};
  box-sizing: border-box;
  padding: 10px;

  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`

export const Droppable = styled.div<DraggableStateSnapshot>`
  padding: 4px 8px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 12px;
  height: 100%;

  background-color: ${variables.gray8};
  border: 1px solid transparent;

  ${(props) =>
    props.isDragging &&
    css`
      border-color: ${variables.gray9};
      box-shadow: 0 4px 16px ${variables.gray9};
    `};
`

export const Draggable = styled.div`
  padding: 4px 0;
  outline: none;
`
