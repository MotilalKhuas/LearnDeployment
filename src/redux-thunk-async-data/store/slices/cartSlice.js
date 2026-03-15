import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cartSlice",
    initialState : {
        items : []
    },
    reducers : {
        addToCart(state, action){
            const productId = action.payload.id;
            const cartItems = state.items;
            const existingCartItem = cartItems.find(item=>item.id==productId);
            if(existingCartItem){
                existingCartItem.quantity+=1;
            }
            else{
                const product = {...action.payload, quantity : 1};
                cartItems.push(product);
            }
        },
        incrementQuantity(state, action){
            const productId = action.payload.id;
            const existingCartItem = state.items.find(item=>item.id == productId);
            existingCartItem.quantity+=1;
        },
        decrementQuantity(state, action){
            const productId = action.payload.id;
            const existingCartItem = state.items.find(item=>item.id == productId);
            existingCartItem.quantity-=1;
            state.items = state.items.filter(item=>item.quantity > 0);
        }
    }
});

export const {addToCart, incrementQuantity, decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;