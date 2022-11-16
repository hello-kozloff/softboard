import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import Styles from 'styles'
import Router from 'router'

export const App = () => {
  return (
    <React.Fragment>
      <Styles />
      <RouterProvider router={Router} />
    </React.Fragment>
  )
}
