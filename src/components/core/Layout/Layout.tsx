import * as React from 'react'
import * as Styled from './styled'
import { LayoutContext } from './LayoutContext'
import { LayoutProps } from './types'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = ({ header, footer, ...context }: LayoutProps) => {
  return (
    <LayoutContext.Provider value={context}>
      <Styled.Layout>
        {header || <Header />}
        <Main />
        {footer || <Footer />}
      </Styled.Layout>
    </LayoutContext.Provider>
  )
}

Layout.Header = Header
Layout.Footer = Footer

export { Layout }
