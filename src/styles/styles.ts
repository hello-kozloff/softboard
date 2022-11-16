import 'reset-css/reset.css'
import { createGlobalStyle } from 'styled-components'
import { variables } from './variables'

export const styles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    color: ${variables.gray0};
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Geneva, "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", arial, Tahoma, verdana, sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: normal;

    background: ${variables.gray9};
  }
`
