import { put, takeEvery } from "redux-saga/effects";
import { MERGED_SAGA_CALL, TEMP_PRODUCT_CALL } from "../../constant";
function* getTempProductCall() {
  const x = "TEMP PRODUCT CALL";
  yield put({ type: MERGED_SAGA_CALL, data: x });
}
function* productSaga() {
  yield takeEvery(TEMP_PRODUCT_CALL, getTempProductCall);
}
export default productSaga;
