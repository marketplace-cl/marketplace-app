import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
import { Product, ProductState } from "../types/ProductState.types";

const initialState: ProductState = {
  products: products,
  selectedProduct: {} as Product,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productID = action.payload;
      state.selectedProduct = state.products.find(
        (product) => product.id === productID
      );
    },
  },
});
