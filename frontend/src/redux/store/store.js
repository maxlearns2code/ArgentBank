import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '/src/redux/features/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})