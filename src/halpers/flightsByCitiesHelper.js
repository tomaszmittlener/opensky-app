import { map, sortBy } from 'lodash'

export function setFlightsByCities(cityData, allFlights) {
  const list = map(allFlights, flight => {
    return {
      icao: flight[0],
      callSign: flight[1],
      countryOrigin: flight[2],
      onGround: flight[8],
      velocity: roundNumber(convertToKmH(flight[9])),
      verticalRate: flight[11],
      longitude: flight[5],
      latitude: flight[6],
      status: setStatus(flight[8], flight[11]),
      location: setLocation(flight[5], flight[6]),
      distance: roundNumber(setDistanceBetweenCoordinates(flight[6], flight[5], cityData.latitude, cityData.longitude)),
    }
  })
  return sortBy(list, item => item.distance)
}

function setStatus(isOnGround, verticalRate) {
  let status
  if (isOnGround) {
    status = 'landed'
  } else if (verticalRate) {
    status = verticalRate > 0 ? 'rising' : 'landing'
  }
  return status
}

function setLocation(longitude, latitude) {
  return `http://www.google.com/maps/place/${latitude},${longitude}`
}

function roundNumber(number) {
  return Math.round(number)
}
function convertToKmH(velocity) {
  return velocity * 3.6
}

function setDistanceBetweenCoordinates(lat1, lon1, lat2, lon2) {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1) // deg2rad below
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return d
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}
