import * as React from 'react'
import * as Styled from './styled'
import { LayoutProps } from './types'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = ({ header, footer }: LayoutProps) => {
  return (
    <Styled.Layout>
      {header || <Header />}
      <Main />
      {footer || <Footer />}
    </Styled.Layout>
  )
}

Layout.Header = Header
Layout.Footer = Footer

export { Layout }
