import { put } from "redux-saga/effects";
import { addNotify, deleteNotify } from "../../features/share/notify";

export function* setNotify(payload) {
  try {
    
    yield put(addNotify(payload.data));
  } catch (e) {} 
}

export function* removeNotify(payload) {
  try {
    yield put(deleteNotify(payload));
  } catch (e) {}
}
