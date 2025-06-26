import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
let baseUrl = "http://localhost:5000/api/products"

const initialState = {
    products: [],
}

export const getProducts = createAsyncThunk("get/products",async()=>{
    let {data} = await axios(baseUrl)
    return data
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
     state.products = action.payload
    })
}


})


export const {  } = productSlice.actions

export default productSlice.reducer