 import { configureStore } from '@reduxjs/toolkit';
import {popularReducer} from "./slices/popularProducts.js";

const store = configureStore({
    reducer: {
        popular: popularReducer
    }
});

export default store;