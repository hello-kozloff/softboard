import styled from 'styled-components'
import { variables } from 'styles'
import { transparentize } from 'polished'

export const Wrapper = styled.div`
  position: relative;
  display: inline-grid;
`

export const Input = styled.input`
  box-sizing: border-box;
  padding: 12px 16px;

  color: ${variables.white};
  font-family: inherit;
  font-size: 14px;
  line-height: 22px;

  border-radius: 12px;
  border: 1px solid transparent;
  background-color: ${variables.gray9};
  outline: none;

  &,
  &::placeholder {
    transition: 0.25s ease;
  }

  &::placeholder {
    color: ${variables.gray4};
  }

  &:focus {
    border-color: ${variables.blue5};
    box-shadow: 0 0 0 3px ${transparentize(0.6, variables.blue5)};

    &::placeholder {
      opacity: 0;
    }
  }
`
