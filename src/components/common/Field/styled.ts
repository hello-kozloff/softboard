import styled, { css } from 'styled-components'
import { variables } from 'styles'
import { Input } from 'components/common/Input/styled'

export const Field = styled.label<Record<string, unknown>>`
  display: grid;
  grid-row-gap: 6px;

  ${(props) =>
    props.error
      ? css`
          ${Input} {
            border-color: ${variables.red3};

            &:focus {
              border-color: ${variables.blue5};
            }
          }
        `
      : null};
`

export const Label = styled.span`
  color: ${variables.gray2};
  font-size: 14px;
  line-height: 24px;
  text-align: left;
`

export const Error = styled(Label)`
  color: ${variables.red3};
  font-size: 12px;
  line-height: 16px;
`
