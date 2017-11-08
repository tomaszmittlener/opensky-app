const defaultName = 'openskyapp'
const defaultPassword = 'openskyapp'

function json(response) {
  return response.json()
}

export function getAirTraffic(userName = defaultName, password = defaultPassword) {
  return fetch(`https://opensky-network.org/api/states/all/?username=${userName}&password=${password}`).then(json)
}
