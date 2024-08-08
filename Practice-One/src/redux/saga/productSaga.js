import { call, put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS, SEARCH_PRODUCTS, SET_PRODUCTS } from "../../constant";

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
    const response = yield call(
      getSearchedProducts,
      `http://localhost:3000/products?q=${query}`
    );
    yield put({ type: SET_PRODUCTS, data: response });
  } catch (error) {
    //yield put call
    console.log(error.message);
  }

  // const data = yield response.json();
  // yield put({ type: SET_PRODUCTS, data });
}

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
  yield takeEvery(SEARCH_PRODUCTS, searchProduct);
}
export default productSaga;
