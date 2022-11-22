import styled from 'styled-components'
import { variables } from 'styles'

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

export const Droppable = styled.div`
  padding: 4px 8px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${variables.gray8};
  margin-top: 12px;
  height: 100%;
`

export const Draggable = styled.div`
  padding: 4px 0;
`
