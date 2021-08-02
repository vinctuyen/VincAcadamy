import { put } from "redux-saga/effects";
import {
  searchReducer,
  updateCategoriesReducer,
} from "../../features/home/search";
import { addNotify } from "../../features/share/notify";

import { sagaActions } from "../typeSagas";
import { getQuestion } from "../../../api/questions";

export function* search(payload) {
  try {
    let result = yield getQuestion(payload.data);
    if (result.status && result.status != 200) {
      yield put(addNotify(result));
    } else {
      yield put(searchReducer(result));
    }
  } catch (e) {
    yield put(addNotify(e));
  }
}

export function* updateCategories(payload) {
  try {
    yield put(updateCategoriesReducer(payload.data));
  } catch (e) {
    yield put(addNotify(e));
  }
}
