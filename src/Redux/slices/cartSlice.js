import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log('hjhjh')
            const item = action.payload;
            state.items = [...state.items, item];


        }
    }
})

export const { addToCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer