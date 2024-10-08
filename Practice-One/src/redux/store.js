import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, productReducer } from "../redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/productSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
