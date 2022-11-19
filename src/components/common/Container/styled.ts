import styled from 'styled-components'
import { sizes } from 'styles'

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: calc(${sizes.Desktop} + (16px * 2));
  padding: 0 16px;
  margin: 0 auto;
`
