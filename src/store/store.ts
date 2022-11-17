import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import UserReducer from './slices/user'

const persistConfig = {
  key: 'root',
  storage,
}

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      user: UserReducer,
    }),
  ),
})
