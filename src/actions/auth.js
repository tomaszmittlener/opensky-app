import * as auth from '../constants/actionTypes/auth'
import { createAction } from 'redux-actions'

export const setLogin = createAction(auth.LOGIN_SET)
export const password = createAction(auth.PASSWORD_SET)
export const authenticate = createAction(auth.AUTHENTICATE)
export const login = createAction(auth.LOGIN)

export function setLoginOnInput(value) {
  return dispatch => {
    dispatch(setLogin(value))
  }
}

export function setPasswordOnInput(value) {
  return dispatch => {
    dispatch(password(value))
  }
}
export function loginAuthenticate() {
  return (dispatch, getState) => {
    const { auth } = getState()
    let login
    if (auth.login === 'demo' && auth.password === 'demo') {
      login = true
    } else {
      login = false
    }
    dispatch(loginUser(login))
  }
}

export function loginUser(isLoggedIn) {
  return dispatch => {
    sessionStorage.setItem('isLoggedIn', isLoggedIn)
    dispatch(authenticate(isLoggedIn))
  }
}
