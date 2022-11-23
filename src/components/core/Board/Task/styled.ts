import styled, { css } from 'styled-components'
import { variables } from 'styles'
import { ColumnProps } from '../Column'

export const Card = styled.div<Pick<ColumnProps, 'snapshot'>>`
  display: grid;
  padding: 16px;

  border-radius: 6px;
  border-bottom: 1px solid ${variables.gray9};
  background-color: ${variables.gray6};
  user-select: none;

  &:hover {
    background-color: ${variables.gray5};
  }

  ${(props) =>
    !props.snapshot.isDropAnimating &&
    props.snapshot.isDragging &&
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
