import styled from 'styled-components'
import { Container } from 'components/common/Container/styled'
import { variables } from 'styles'

export const Footer = styled.footer`
  padding: 32px 16px;

  &,
  ${Container} {
    display: flex;
    align-items: center;
  }
`

export const Copyright = styled.p`
  width: 100%;
  display: block;
  color: ${variables.gray4};
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`
