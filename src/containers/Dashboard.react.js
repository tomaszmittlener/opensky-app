import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as dashboardActions from '../actions/dashboard'
import { CitiesTable, Dialog, Loader, Header } from 'components'
import { citiesList } from '../constants/citiesList'
import styled from 'styled-components'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Col from 'react-bootstrap/lib/Col'

const DashboardContainer = styled.div`
  .table-title {
    text-align: center
    padding: 10px 0
  }
`

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.dashboard.loaded) {
      this.props.getAllAirTraffic()
    }
  }

  render() {
    const { getClosestFlights, dashboard, toggleDialogShow, setPagination } = this.props
    const { flightsListState, flightsListState: { currentCity }, flightsByCities } = dashboard
    const isLoading = dashboard.loading && !dashboard.loaded
    return (
      <DashboardContainer>
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="tableContainer">
            <h3 className="table-title">Chose city to display nearest flights</h3>
            <CitiesTable
              citiesList={citiesList}
              getClosestFlights={getClosestFlights}
              toggleDialogShow={toggleDialogShow}
            />
          </div>
        )}
        <Dialog
          setPagination={setPagination}
          toggleDialogShow={toggleDialogShow}
          flightsListState={flightsListState}
          flightsList={flightsByCities[currentCity]}
        />
      </DashboardContainer>
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
