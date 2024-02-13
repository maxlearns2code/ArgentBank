import { configureStore } from '@reduxjs/toolkit'
import authReducer from '/src/redux/features/authSlice'

export default configureStore({
  devTools: true,
  reducer: {
    auth: authReducer,
  },
})