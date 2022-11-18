import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UserState } from './types'

const initialState = null as null | UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    store: (state, action: PayloadAction<UserState>) => {
      return (state = action.payload)
    },
    reset: () => initialState,
  },
})

export const actions = userSlice.actions
export const reducer = userSlice.reducer
