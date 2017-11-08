import * as auth from '../constants/auth'
import { createAction } from 'redux-actions'

export const login = createAction(auth.LOGIN_SET)
export const password = createAction(auth.PASSWORD_SET)
export const authenticate = createAction(auth.AUTHENTICATE)


export function setLoginOnInput(value) {
  return (dispatch) => {
    dispatch(login(value))
  }
}

export function setPasswordOnInput(value) {
  return (dispatch) => {
    dispatch(password(value))
  }
}
export function loginAuthenticate() {
  return (dispatch, getState) => {
    const { auth } = getState()
    let login
    if (
      auth.login === 'demo' &&
      auth.password === 'demo'
    ){
      login =  true
    } else {
      login = false
    }
    dispatch(authenticate(login))
  }
}
