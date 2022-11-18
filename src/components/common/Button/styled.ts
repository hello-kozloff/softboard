import styled, { css } from 'styled-components'
import { ButtonProps, ButtonScale, ButtonVariant } from './types'
import { variables } from 'styles'
import { transparentize } from 'polished'

export const Button = styled.button<ButtonProps>`
  padding: 0;
  display: inline-grid;
  font-family: inherit;

  transition: 0.25s ease;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 16px;
  cursor: pointer;
  outline: none;

  ${(props) => {
    switch (props.variant) {
      case ButtonVariant.Primary:
        return css`
          color: ${variables.white};
          background-color: ${variables.blue5};

          &:hover,
          &:focus-visible {
            background-color: ${variables.blue6};
          }

          &:active {
            background-color: ${variables.blue7};
          }

          &:focus-visible {
            box-shadow: 0 0 0 3px ${transparentize(0.5, variables.blue9)};
          }
        `
      case ButtonVariant.Secondary:
        return css`
          color: ${variables.blue5};

          &:hover,
          &:focus-visible {
            background-color: ${variables.gray7};
          }

          &:active {
            background-color: ${variables.gray6};
          }
        `
    }
  }};

  ${(props) => {
    switch (props.scale) {
      case ButtonScale.Medium:
        return css``
      case ButtonScale.ExtraLarge:
        return css`
          padding: 16px;

          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
        `
    }
  }};
`
