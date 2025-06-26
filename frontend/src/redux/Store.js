import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import shopproductSlice from './shopproductSlice'
import blogSlice from './blogSlice'

export const store = configureStore({
  reducer: {homeproducts:productSlice,
    products:shopproductSlice,
    blogs:blogSlice
  },
})