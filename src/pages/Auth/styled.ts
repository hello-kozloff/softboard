import styled from 'styled-components'
import { media } from 'styles'

export const Container = styled.div`
  height: 100%;
  padding: 32px 16px;
  box-sizing: border-box;
  text-align: center;

  @media (${media.Table}) {
    padding: 0;
  }
`
