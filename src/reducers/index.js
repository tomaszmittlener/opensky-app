import { combineReducers } from 'redux'
import auth from './auth'
import { routerReducer } from 'react-router-redux'
import dashboard from './dashboard'

const rootReducer = combineReducers({
  router: routerReducer,
  auth,
  dashboard,
})

export default rootReducer
