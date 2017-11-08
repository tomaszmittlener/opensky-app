import * as airTraffic from '../constants/airTraffic'

const initialState = {
  allFlights: [],
  allCoordinates: [],
  loading: false,
  loaded: false,
  error: '',
  flightsDistance: {},
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
    case airTraffic.COORDINATES_ALL_SET:
      const allCoordinates = action.payload
      return { ...state, allCoordinates }
    case airTraffic.CLOSEST_FLIGHTS_SET:
      const { flights, city } = action.payload
      const flightsDistance = { [city]: flights }
      return { ...state, flightsDistance: { ...state.flightsDistance, ...flightsDistance } }
    default:
      return state
  }
}
