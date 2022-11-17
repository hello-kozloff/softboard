import styled, { css } from 'styled-components'
import { HeaderProps, HeaderVariant } from './types'

export const Header = styled.header<Pick<HeaderProps, 'variant'>>`
  display: flex;
  align-items: center;

  min-height: 60px;
  padding: 8px 32px;
  box-sizing: border-box;

  ${(props) => {
    switch (props.variant) {
      case HeaderVariant.Primary:
        return css`
          background-color: #161b22;
        `
    }
  }};
`
