import { combineReducers } from 'redux'
import counter from './counter'
import auth from './auth'
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  counter,
  router: routerReducer,
  auth
})

export default rootReducer
