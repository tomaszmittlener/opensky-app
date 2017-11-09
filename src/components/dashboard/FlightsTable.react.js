import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import { map } from 'lodash'
import Table from 'react-bootstrap/lib/Table'

class FlightsTable extends React.Component {
  render() {
    const { flightsList, distance } = this.props
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Call Sign</th>
            <th>ICAO</th>
            <th>Origin</th>
            <th>Distance</th>
            <th>Velocity</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {map(flightsList, (flight, index) => {
            return (
              flight.distance < distance && (
                <tr key={`flight-${index}`}>
                  <td>{flight.callSign}</td>
                  <td>{flight.icao}</td>
                  <td>{flight.countryOrigin}</td>
                  <td>{flight.distance}km</td>
                  <td>{flight.velocity}km/h</td>
                  <td>{flight.status}</td>
                  <td>
                    <a href={flight.location}>See on map</a>
                  </td>
                </tr>
              )
            )
          })}
        </tbody>
      </Table>
    )
  }
}
FlightsTable.propTypes = {
  flightsList: PropTypes.array,
  distance: PropTypes.number,
}

export default FlightsTable
