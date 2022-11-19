import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ToastContainer } from 'react-toastify'
import Store from 'store'
import Styles from 'styles'
import Router from 'router'

export const App = () => {
  return (
    <React.Fragment>
      <Styles />
      <ToastContainer position="top-center" />
      <StoreProvider store={Store}>
        <PersistGate loading={null} persistor={persistStore(Store)}>
          <RouterProvider router={Router} />
        </PersistGate>
      </StoreProvider>
    </React.Fragment>
  )
}
