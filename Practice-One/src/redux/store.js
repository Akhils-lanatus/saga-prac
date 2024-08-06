import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, productReducer } from "../redux/reducers";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});
