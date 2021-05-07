/**
 * @author Vinc Tuyen
 * TodoSagas
 */

 import { put } from "redux-saga/effects";

 import CountActions from "../../reducers/demo";
 
 const CountSagas = {
   *increase(count) {
     yield put(CountActions.countSuccess(count.count + 1))
   }
 };
 
 export default CountSagas;