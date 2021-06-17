import { takeEvery } from "redux-saga/effects";
import { sagaActions } from "./typeSagas";
import { login } from "./auth/login";

export default function* rootSaga() {
  yield takeEvery(sagaActions.LOGIN, login);
}
