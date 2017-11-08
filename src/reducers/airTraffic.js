import * as airTraffic from '../constants/airTraffic'

const initialState = {
  all: [],
  loading: false,
  loaded: false,
  error: ''
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case airTraffic.ALL_GET_START:
      return { ...state, loading: true, loaded: false }
    case airTraffic.ALL_GET_SUCCESS:
      const all = action.payload
      return {...state, all, loaded: true, loading: false}
    case airTraffic.ALL_GET_ERROR:
      const errorMsg = action.payload.message
      return {...state, errorMsg, loaded: false, loading: false}
    default:
      return state
  }
}
