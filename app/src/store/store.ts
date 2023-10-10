import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./products/products.api";
import { cardReducer } from "./slice/card";
import { drawerReducer } from "./slice/drawerSlide";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer, 
        card: cardReducer,
        drawer: drawerReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(productApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>