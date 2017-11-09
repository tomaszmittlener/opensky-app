import * as dashboard from '../constants/actionTypes/dashboard'
import { createAction } from 'redux-actions'
import { getAirTraffic } from '../services/getAirTraffic'
import { setFlightsByCities } from '../halpers/flightsByCitiesHelper'

export const allAirTraffic = createAction(dashboard.ALL_GET)
export const closestFlights = createAction(dashboard.CLOSEST_FLIGHTS_SET)
export const toggleDialog = createAction(dashboard.TOGGLE_DIALOG_SHOW)
export const pagination = createAction(dashboard.PAGINATION_SET)

export function getAllAirTraffic() {
  return dispatch => {
    dispatch(allAirTraffic(getAirTraffic()))
  }
}

export function toggleDialogShow(city) {
  const currentCity = typeof city === 'string' ? city : ''
  return (dispatch, getState) => {
    dispatch(toggleDialog(currentCity))
  }
}

export function setPagination(number) {
  return (dispatch, getState) => {
    dispatch(pagination(number))
  }
}

export function getClosestFlights(cityData) {
  return (dispatch, getState) => {
    const state = getState()
    const flights = setFlightsByCities(cityData, state.dashboard.allFlights)
    const data = { city: cityData.city, flights }

    dispatch(closestFlights(data))
  }
}
