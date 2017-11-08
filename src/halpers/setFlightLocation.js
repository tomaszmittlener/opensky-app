import { map } from 'lodash'
export function getAllFlightsCoordinates(allFlights) {
  return map(allFlights, flight => {
    return {
      flight: flight[0],
      longitude: flight[5],
      latitude: flight[6],
    }
  })
}
