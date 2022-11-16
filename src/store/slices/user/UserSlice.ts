import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UserState } from './types'

const initialState = null as null | UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserState>) => (
      state = action.payload
    ),
  },
})

export const actions = userSlice.actions
export const reducer = userSlice.reducer
