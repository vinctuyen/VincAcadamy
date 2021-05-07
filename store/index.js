/**
 * @author Vinc Tuyen
 * This file combines all reducers and create redux store
 */

 import { combineReducers } from 'redux'
 import configureStore from './configStore'
 import rootSagas from './sagas'
 
 export default () => {
   const rootReducer = combineReducers({
     count: require('./reducers/demo').reducer,
   })
   return configureStore(rootReducer, rootSagas)
 }