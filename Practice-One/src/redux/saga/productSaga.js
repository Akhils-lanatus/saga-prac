import { put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS, SEARCH_PRODUCTS, SET_PRODUCTS } from "../../constant";
function* getProducts() {
  const res = yield fetch("http://localhost:3000/products");
  const data = yield res.json();
  yield put({ type: SET_PRODUCTS, data });
}

function* searchProduct({ query }) {
  const response = yield fetch(`http://localhost:3000/products?q=${query}`);
  const data = yield response.json();
  console.log(data);

  yield put({ type: SET_PRODUCTS, data });
}

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
  yield takeEvery(SEARCH_PRODUCTS, searchProduct);
}
export default productSaga;
