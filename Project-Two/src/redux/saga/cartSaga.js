import { put, takeEvery } from "redux-saga/effects";
import { MERGED_SAGA_CALL, TEMP_CART_CALL } from "../../constant";
function* getTempCartCall() {
  const x = "TEMP CART CALL";
  yield put({ type: MERGED_SAGA_CALL, data: x });
}
function* cartSaga() {
  yield takeEvery(TEMP_CART_CALL, getTempCartCall);
}
export default cartSaga;
