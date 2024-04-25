 import { configureStore } from '@reduxjs/toolkit';
import {popularReducer} from "./slices/popularProducts.js";
 import {cartReducer} from "./slices/cartSlice.js";
 import {likeReducer} from "./slices/likeSlices.js";

const store = configureStore({
    reducer: {
        popular: popularReducer,
        cart: cartReducer,
        like: likeReducer,
    }
});

export default store;