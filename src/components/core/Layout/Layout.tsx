import * as React from 'react'
import * as Styled from './styled'
import { LayoutContext } from './LayoutContext'
import { LayoutProps } from './types'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export const Layout = (props: LayoutProps) => {
  return (
    <LayoutContext.Provider value={props}>
      <Styled.Layout className="layout">
        <Header />
        <Main />
        <Footer />
      </Styled.Layout>
    </LayoutContext.Provider>
  )
}
