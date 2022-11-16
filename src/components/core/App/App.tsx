import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import Store from 'store'
import Styles from 'styles'
import Router from 'router'

export const App = () => {
  return (
    <React.Fragment>
      <Styles />
      <StoreProvider store={Store}>
        <RouterProvider router={Router} />
      </StoreProvider>
    </React.Fragment>
  )
}
