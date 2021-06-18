import { put } from "redux-saga/effects";
import { setLoadingReducer } from "../../features/share/loading";

export function* setLoading(payload) {
  try {
    yield put(setLoadingReducer(payload.data));
  } catch (e) {}
}
