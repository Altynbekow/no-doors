import { createSlice } from "@reduxjs/toolkit";

const cartLike = createSlice({
    name: 'like',
    initialState: {
        item: []
    },
    reducers: {
        addToLike: (state, action) => {
            // console.log('hjhjh')
            const item = action.payload;
            state.item = [...state.item, item];
        }
    }
});

export const { addToLike } = cartLike.actions;
export const likeReducer = cartLike.reducer;
