import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { StoreProvider } from 'store'
import Styles from 'styles'
import Router from 'router'

export const App = () => {
  return (
    <React.Fragment>
      <Styles />
      <ToastContainer theme="dark" position="top-center" />
      <StoreProvider>
        <RouterProvider router={Router} />
      </StoreProvider>
    </React.Fragment>
  )
}
