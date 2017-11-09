import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import { map } from 'lodash'
import Table from 'react-bootstrap/lib/Table'
import styled from 'styled-components'

const CitiesTablaeContainer = styled.div`
  width: 300px;
  .cities-table-row {
    cursor: pointer;
  }
`

class CitiesTable extends React.Component {
  onCityClick = cityData => {
    const { getClosestFlights, toggleDialogShow } = this.props
    getClosestFlights(cityData)
    toggleDialogShow(cityData.city)
  }

  render() {
    const { citiesList } = this.props
    return (
      <CitiesTablaeContainer>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {map(citiesList, (city, index) => {
              const cityData = {
                city: city.city,
                longitude: city.longitude,
                latitude: city.latitude,
              }
              return (
                <tr key={`city-${index}`} onClick={() => this.onCityClick(cityData)} className="cities-table-row">
                  <td>{city.city}</td>
                  <td>{city.country}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CitiesTablaeContainer>
    )
  }
}
CitiesTable.propTypes = {
  citiesList: PropTypes.array.isRequired,
  getClosestFlights: PropTypes.func.isRequired,
  toggleDialogShow: PropTypes.func.isRequired,
}

export default CitiesTable
