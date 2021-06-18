import { takeEvery } from "redux-saga/effects";
import { sagaActions } from "./typeSagas";
import { login } from "./auth/login";
import { setLoading } from "./share/loading";
import { setNotify, removeNotify } from "./share/notify";

export default function* rootSaga() {
  yield takeEvery(sagaActions.LOGIN, login);
  yield takeEvery(sagaActions.SET_LOADING, setLoading);
  yield takeEvery(sagaActions.SET_NOTIFY, setNotify);
  yield takeEvery(sagaActions.REMOVE_NOTIFY, removeNotify);

}
