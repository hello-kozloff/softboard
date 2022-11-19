import styled from 'styled-components'
import { variables } from 'styles'

export const Form = styled.form`
  display: inline-grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 384px);
  padding: 48px;

  border-radius: 24px;
  border: 1px solid ${variables.gray6};
  background-color: ${variables.gray8};
`

export const Title = styled.h1`
  color: ${variables.white};
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
`

export const Subtitle = styled.p`
  margin-top: 12px;

  color: ${variables.gray2};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  span {
    padding: 4px 8px;
    background-color: ${variables.gray7};
    border-radius: 6px;
  }
`

export const Content = styled.div`
  margin: 22px 0;
  display: inline-grid;
  grid-row-gap: 8px;
`

export const Row = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: flex-start;
  grid-column-gap: 16px;
`

export const Footer = styled.div`
  display: grid;
  grid-row-gap: 8px;
`

export const Message = styled.p`
  margin-top: 8px;
  color: ${variables.gray2};
  font-size: 14px;
  line-height: 22px;
`
