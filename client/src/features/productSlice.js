import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    productList:[],
    getProducts:false
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        AddProducts:(state,action)=>{
            state.productList = action.payload.productsData;  
            state.getProducts =action.payload.getProducts; 
        }
    }
})


export const {AddProducts} = productSlice.actions; 

export default productSlice.reducer;