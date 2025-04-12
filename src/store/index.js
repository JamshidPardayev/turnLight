import { configureStore } from '@reduxjs/toolkit'
import lightReducer from './lightReducer'

export const store = configureStore({
  reducer: {
    light: lightReducer,
  },
})