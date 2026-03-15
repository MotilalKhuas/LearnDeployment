import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { increaseCount } from "../../counter/counterRedux"

const initialState = {
    items : [],
    isLoading : false
}


//============ METHOD-1(dispatching another action from fetchProducts) ============
//=================================================================================
/*const fetchProducts = createAsyncThunk(
    "productSlic/fetchProducts", 
    async (args, thunkApi)=>{
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        thunkApi.dispatch(initProducts(products))
    }    
)
const productSlice = createSlice({
    name : "productSlice",
    initialState,
    reducers : {
        initProducts(state, action){
            console.log(action);
            state.items = action.payload
        }
    }
});*/


//============ METHOD-2(by using extraReducers) ============
//=================================================================================
const fetchProducts = createAsyncThunk(
    "productSlice/fetchProducts",
    async (args, thunkApi)=>{
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        console.log(thunkApi.dispatch(increaseCount())); //dispatching the actions of counter store
        return products;
    }
)

const productSlice = createSlice({
    name : "productSlice",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.items = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;
        })
    }
})

const {initProducts} = productSlice.actions

export {fetchProducts, initProducts};
export default productSlice.reducer;