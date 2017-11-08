import * as airTraffic from '../constants/airTraffic'
import { createAction } from 'redux-actions'
import { getAirTraffic } from '../services/getAirTraffic'

export const allAirTraffic = createAction(airTraffic.ALL_GET)


export function getAllAirTraffic() {
  return (dispatch) => {
      dispatch(allAirTraffic(getAirTraffic()))
  }
}

