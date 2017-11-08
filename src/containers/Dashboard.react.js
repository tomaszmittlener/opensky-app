import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as AirTrafficActions from '../actions/airTraffic'
import CitiesTable from '../components/CitiesTable.react'
import { citiesList } from '../constants/citiesList'

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.airTraffic.loaded) {
      this.props.getAllAirTraffic()
    }
  }

  render() {
    return <CitiesTable citiesList={citiesList} getClosestFlights={this.props.getClosestFlights} />
  }
}

Dashboard.propTypes = {
  airTraffic: PropTypes.object.isRequired,
  getAllAirTraffic: PropTypes.func.isRequired,
  getClosestFlights: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  airTraffic: createSelector(state => state.airTraffic, airTrafficState => airTrafficState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AirTrafficActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
