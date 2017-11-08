import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from 'reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const middlewares = [routerMiddleware(), ReduxThunk]
const enhancer = [applyMiddleware(...middlewares)]

export default function configureStore(initialState = {}) {
  return createStore(connectRouter(history)(rootReducer), initialState, ...enhancer)
}
