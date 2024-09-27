import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    cartCount: 0,
}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.cartItems.push(action.payload);
            state.cartCount = state.cartItems.length;

        },
        removeFromCart(state, action) {
            // Filter out the item with the given ID
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            state.cartCount = state.cartItems.length; // Update the cart count
        },
        

    }
})

export const {addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;