import * as auth from '../constants/actionTypes/auth'

const initialState = {
  login: '',
  password: '',
  isLoggedIn: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case auth.LOGIN_SET:
      const login = action.payload
      return { ...state, login }
    case auth.PASSWORD_SET:
      const password = action.payload
      return { ...state, password }
    case auth.AUTHENTICATE:
      const isLoggedIn = action.payload
      return { ...state, isLoggedIn }
    default:
      return state
  }
}
