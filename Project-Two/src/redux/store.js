import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cartSaga from "./saga/cartSaga";
import productSaga from "./saga/productSaga";
import { cartReducer, productReducer } from "./reducers";
import { all } from "redux-saga/effects";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware: () => [sagaMiddleware],
});

function* rootSaga() {
  yield all([cartSaga(), productSaga()]);
}

sagaMiddleware.run(rootSaga);
export default store;
