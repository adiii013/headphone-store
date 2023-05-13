import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/userSlice";
import ProductSlice from "./features/productSlice";
import CartSlice from "./features/cartSlice";
export const store = configureStore({
    reducer:{
        user:UserSlice,
        products:ProductSlice,
        cart:CartSlice
    }
})