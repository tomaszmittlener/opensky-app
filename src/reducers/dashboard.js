import * as dashboard from '../constants/actionTypes/dashboard'

const initialState = {
  allFlights: [],
  loading: false,
  loaded: false,
  error: '',
  flightsByCities: {},
  flightsListState: {
    isOpen: false,
    currentCity: '',
    distance: 50,
  },
}

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case dashboard.ALL_GET_START:
      return { ...state, loading: true, loaded: false }
    case dashboard.ALL_GET_SUCCESS:
      const allFlights = action.payload.states
      return { ...state, allFlights, loaded: true, loading: false }
    case dashboard.ALL_GET_ERROR:
      const errorMsg = action.payload.message
      return { ...state, errorMsg, loaded: false, loading: false }

    case dashboard.CLOSEST_FLIGHTS_SET:
      const { flights, city } = action.payload
      const flightsByCities = { [city]: flights }
      return { ...state, flightsByCities: { ...state.flightsByCities, ...flightsByCities } }

    case dashboard.TOGGLE_DIALOG_SHOW:
      const currentCity = action.payload ? action.payload : ''
      const flightsListState = {
        ...state.flightsListState,
        isOpen: !state.flightsListState.isOpen,
        currentCity: currentCity,
        distance: 50,
      }
      return { ...state, flightsListState }

    case dashboard.DISPLAY_DISTANCE_SET:
      const distance = action.payload
      return { ...state, flightsListState: { ...state.flightsListState, distance } }

    default:
      return state
  }
}
