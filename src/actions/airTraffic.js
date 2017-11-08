import * as airTraffic from '../constants/airTraffic'
import { createAction } from 'redux-actions'
import { getAirTraffic } from '../services/getAirTraffic'
import { getFlights } from '../halpers/measureDistanceHelper'

export const allAirTraffic = createAction(airTraffic.ALL_GET)
export const closestFlights = createAction(airTraffic.CLOSEST_FLIGHTS_SET)
export const toggleDialog = createAction(airTraffic.TOGGLE_DIALOG_SHOW)
export const pagination = createAction(airTraffic.PAGINATION_SET)

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
    const flights = getFlights(cityData, state.airTraffic.allFlights)
    const data = { city: cityData.city, flights }

    dispatch(closestFlights(data))
  }
}
