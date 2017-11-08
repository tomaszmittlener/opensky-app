import * as airTraffic from '../constants/airTraffic'
import { createAction } from 'redux-actions'
import { getAirTraffic } from '../services/getAirTraffic'
import { getAllFlightsCoordinates } from '../halpers/setFlightLocation'
import { getFlights } from '../halpers/measureDistanceHelper'
export const allAirTraffic = createAction(airTraffic.ALL_GET)
export const allCoordinates = createAction(airTraffic.COORDINATES_ALL_SET)
export const closestFlights = createAction(airTraffic.CLOSEST_FLIGHTS_SET)
export const toggleDialog = createAction(airTraffic.TOGGLE_DIALOG_SHOW)

export function getAllAirTraffic() {
  return dispatch => {
    dispatch(allAirTraffic(getAirTraffic())).then(response => {
      dispatch(getCoordinates(response.value.states))
    })
  }
}
export function getCoordinates(allTraffic) {
  return (dispatch, getState) => {
    dispatch(allCoordinates(getAllFlightsCoordinates(allTraffic)))
  }
}

export function toggleDialogShow(city) {
  const currentCity = typeof city === 'string' ? city : ''
  return (dispatch, getState) => {
    dispatch(toggleDialog(currentCity))
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
