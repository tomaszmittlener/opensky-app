import { combineReducers } from 'redux'
import counter from './counter'
import auth from './auth'
import { routerReducer } from 'react-router-redux'
import dashboard from './dashboard'

const rootReducer = combineReducers({
  counter,
  router: routerReducer,
  auth,
  dashboard,
})

export default rootReducer
