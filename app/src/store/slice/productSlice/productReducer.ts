import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../typesOrInterface/interface";

import { getProducts, getTopProducts } from "./utils";
import { GetProductsProps } from "./utils/getProducts";

export { getProducts, getTopProducts } from "./utils";

interface ProductInitState {
  products: {
    desserts: IProduct[];
    pizza: IProduct[];
    drinks: IProduct[];
    side_dishes: IProduct[];
  };
  topProducts: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: ProductInitState = {
  products: {
    desserts: [],
    pizza: [],
    drinks: [],
    side_dishes: [],
  },
  topProducts: [],
  status: "idle",
  error: undefined,
};

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const res = action.payload as GetProductsProps;
        if (res !== undefined) {
          state.products[res.type] = action.payload.data;
        }
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getTopProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTopProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topProducts = action.payload;
      })
      .addCase(getTopProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productReducer.reducer;
export const productActions = productReducer.actions;
export type RootState = ReturnType<typeof productReducer.reducer>;
