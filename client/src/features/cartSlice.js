import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartProductId:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        SetCart:(state,action)=>{
            state.cartProductId = action.payload;
        },
        AddToCart:(state,action)=>{
            const product= action.payload;
            console.log(product);
            if (state.cartProductId.find(p => p.productid === product.productid)) {
                console.log('Product already exists');
              } else {
                state.cartProductId.push({
                    productid:product.productid
                })
              }
        }
    }
})


export const {AddToCart,SetCart} = cartSlice.actions; 

export default cartSlice.reducer;