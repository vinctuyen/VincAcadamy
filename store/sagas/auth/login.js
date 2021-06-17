import { put } from "redux-saga/effects";
import { loginReducer } from "../../features/auth/login";
import { sagaActions } from "../typeSagas";
import { loginApi } from "../../../api/auth";

export function* login(payload) {
  try {
    let result = yield loginApi(payload.data);
    yield put(loginReducer(result));
  } catch (e) {
    yield put({ type: sagaActions.LOGIN_FAILED });
  }
}
