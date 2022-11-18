import styled, { css } from 'styled-components'
import { Container } from 'components/common/Container/styled'
import { HeaderProps, HeaderVariant } from './types'

export const Header = styled.header<Pick<HeaderProps, 'variant'>>`
  box-sizing: border-box;
  
  padding: 8px 16px;
  min-height: 60px;

  ${(props) => {
    switch (props.variant) {
      case HeaderVariant.Primary:
        return css`
          background-color: #161b22;
        `
    }
  }};

  ${Container} {
    display: flex;
    align-items: center;
  }
`
