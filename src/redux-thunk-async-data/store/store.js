import countReducer from "../counter/counterRedux";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        counter : countReducer,
        product : productReducer
    }
})

export default store;