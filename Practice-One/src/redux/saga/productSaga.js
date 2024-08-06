import { put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS, SET_PRODUCTS } from "../../constant";
function* getProducts() {
  const res = yield fetch("http://localhost:3000/products");
  const data = yield res.json();
  yield put({ type: SET_PRODUCTS, data });
}
function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
}
export default productSaga;
