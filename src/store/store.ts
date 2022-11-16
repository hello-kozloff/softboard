import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './slices/user'

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
})
