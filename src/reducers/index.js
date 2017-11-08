import { combineReducers } from 'redux'
import counter from './counter'
import auth from './auth'
import { routerReducer } from 'react-router-redux'
import airTraffic from './airTraffic'


const rootReducer = combineReducers({
  counter,
  router: routerReducer,
  auth,
  airTraffic
})

export default rootReducer
