import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartList.findIndex(item => item._id === action.payload._id);

            if (itemIndex >= 0) {
                state.cartList[itemIndex].quantity += 1;
            } else {
                const temp = { ...action.payload, quantity: 1 }
                state.cartList = [...state.cartList, temp]
            }
            /*  state.cartList.push(action.payload); */
        },
        removeFromCart: (state, action) => {
            state.cartList = state.cartList.filter(item => item._id !== action.payload);
        },

        singleItemRemove: (state, action) => {
            const itemIndex = state.cartList.findIndex(item => item._id === action.payload._id);

            if (state.cartList[itemIndex].quantity >= 1) {
                state.cartList[itemIndex].quantity -= 1;
            }
        }
    }
})

export const { addToCart, removeFromCart, singleItemRemove } = cartSlice.actions;

export default cartSlice.reducer;