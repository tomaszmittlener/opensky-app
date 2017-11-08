const defaultName = 'openskyapp'
const defaultPassword = 'openskyapp'

function json(response) {
  return response.json();
}

export function getAirTraffic(userName = defaultName, password = defaultPassword) {
  return fetch(`https://opensky-network.org/api/states/alld`)
    .then(json)
}
