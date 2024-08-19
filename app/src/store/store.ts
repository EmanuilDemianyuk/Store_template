import { configureStore } from "@reduxjs/toolkit";
// import { productApi } from "./api/products.api";
import { cardReducer } from "./slice/card";
import { drawerReducer } from "./slice/drawerSlide";
import { usersApi } from "./api/users.api";
import productReducer from "./slice/productSlice/productReducer";

export const store = configureStore({
  reducer: {
    // [productApi.reducerPath]: productApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    product: productReducer,
    card: cardReducer,
    drawer: drawerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      // productApi.middleware,
      usersApi.middleware
    ),
});

export type TypeRootState = ReturnType<typeof store.getState>;
