import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_REQUEST,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  SET_PRODUCTS,
} from "../../constant";

const getSearchedProducts = async (url) => {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}...${response.statusText}`);
  }
  return await response.json();
};

function* getProducts() {
  const res = yield fetch("http://localhost:3000/products");
  const data = yield res.json();
  yield put({ type: SET_PRODUCTS, data });
}

function* searchProduct({ query }) {
  try {
    yield put({ type: FETCH_PRODUCT_REQUEST });
    const response = yield call(
      getSearchedProducts,
      `http://localhost:3000/products?q=${query}`
    );
    yield put({ type: SET_PRODUCTS, data: response });
  } catch (error) {
    yield put({ type: FETCH_PRODUCT_ERROR, data: error.message });
  }
}

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
  yield takeEvery(SEARCH_PRODUCTS, searchProduct);
}
export default productSaga;
