/**
 * @author Vinc Tuyen
 * Saga index: connects action type and saga
 */

 import { takeEvery, all } from 'redux-saga/effects'

 /* ------------- Types ------------- */
 
 import { CountTypes } from '../reducers/demo'
 
 /* ------------- Sagas ------------- */
 import CountSagas from './module/demo'
 
 /* ------------- Connect Types To Sagas ------------- */
 export default function*  root() {
   yield all ([
     takeEvery(CountTypes.COUNT_REQUEST, CountSagas.increase),
   ])
 }