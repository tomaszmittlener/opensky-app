import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as dashboardActions from '../actions/dashboard'
import { CitiesTable, Dialog, Loader } from 'components'
import { citiesList } from '../constants/citiesList'

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.dashboard.loaded) {
      this.props.getAllAirTraffic()
    }
  }

  render() {
    const { getClosestFlights, dashboard, toggleDialogShow, setPagination } = this.props
    const { flightsListState, flightsListState: { currentCity }, flightsByCities } = dashboard
    const isLoadoing = dashboard.loading && !dashboard.loaded
    return (
      <div>
        {isLoadoing ? (
          <Loader />
        ) : (
          <CitiesTable
            citiesList={citiesList}
            getClosestFlights={getClosestFlights}
            toggleDialogShow={toggleDialogShow}
          />
        )}
        <Dialog
          setPagination={setPagination}
          toggleDialogShow={toggleDialogShow}
          flightsListState={flightsListState}
          flightsList={flightsByCities[currentCity]}
        />
      </div>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object.isRequired,
  getAllAirTraffic: PropTypes.func.isRequired,
  setPagination: PropTypes.func.isRequired,
  getClosestFlights: PropTypes.func.isRequired,
  toggleDialogShow: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  dashboard: createSelector(state => state.dashboard, dashboardState => dashboardState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(dashboardActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
