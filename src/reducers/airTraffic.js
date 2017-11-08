import * as airTraffic from '../constants/airTraffic'

const initialState = {
  allFlights: [],
  loading: false,
  loaded: false,
  error: '',
  flightsDistance: {},
  dialogState: {
    isOpen: false,
    currentCity: '',
    distance: 50,
  },
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case airTraffic.ALL_GET_START:
      return { ...state, loading: true, loaded: false }
    case airTraffic.ALL_GET_SUCCESS:
      const allFlights = action.payload.states
      return { ...state, allFlights, loaded: true, loading: false }
    case airTraffic.ALL_GET_ERROR:
      const errorMsg = action.payload.message
      return { ...state, errorMsg, loaded: false, loading: false }

    case airTraffic.CLOSEST_FLIGHTS_SET:
      const { flights, city } = action.payload
      const flightsDistance = { [city]: flights }
      return { ...state, flightsDistance: { ...state.flightsDistance, ...flightsDistance } }

    case airTraffic.TOGGLE_DIALOG_SHOW:
      const currentCity = action.payload ? action.payload : ''
      const dialogState = {
        ...state.dialogState,
        isOpen: !state.dialogState.isOpen,
        currentCity: currentCity,
        distance: 50,
      }
      return { ...state, dialogState }

    case airTraffic.PAGINATION_SET:
      const distance = action.payload
      return { ...state, dialogState: { ...state.dialogState, distance } }

    default:
      return state
  }
}
