import styled from 'styled-components'
import { TagState } from 'store/slices/tag'
import { variables } from 'styles'

export const Tag = styled.span<Pick<TagState, 'color'>>`
  display: inline-grid;
  box-sizing: border-box;
  margin-right: 8px;
  padding: 4px 8px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-shadow: 0 1px ${variables.gray9};

  border-radius: 6px;
  background-color: ${(props) => props.color};
`
