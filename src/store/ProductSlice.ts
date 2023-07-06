import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductState } from "../types/ProductState.types";

const initialState: ProductState = {
  products: [],
  selectedProduct: {} as Product,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productID = action.payload;
      const productFind = state.products.find(
        (product) => product._id === productID
      );
      //@ts-ignore
      state.selectedProduct = productFind;
    },
    setProducts: (state, action) => {
      const products = action.payload;
      state.products = products;
    },
  },
});
