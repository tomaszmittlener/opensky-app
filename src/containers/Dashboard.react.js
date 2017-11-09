import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as dashboardActions from '../actions/dashboard'
import * as authActions from '../actions/auth'
import { CitiesTable, Dialog, Loader, Header } from 'components'
import { citiesList } from '../constants/citiesList'
import styled from 'styled-components'

const DashboardContainer = styled.div`
  .table-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .table-title {
      text-align: center;
      padding: 10px 0;
    }
    .logout-button {
    }
  }
`

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.dashboard.loaded) {
      this.props.getAllAirTraffic()
    }
  }

  onLogoutClick = () => {
    this.props.loginUser(false)
  }

  render() {
    const { getClosestFlights, dashboard, toggleDialogShow, setPagination } = this.props
    const { flightsListState, flightsListState: { currentCity }, flightsByCities } = dashboard
    const isLoading = dashboard.loading && !dashboard.loaded
    return (
      <DashboardContainer>
        <Header onLogoutClick={this.onLogoutClick} />
        <div className="table-container">
          <h4 className="table-title">Chose city to display nearest flights</h4>
          {isLoading ? (
            <Loader />
          ) : (
            <CitiesTable
              citiesList={citiesList}
              getClosestFlights={getClosestFlights}
              toggleDialogShow={toggleDialogShow}
            />
          )}
        </div>
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
  return bindActionCreators({ ...dashboardActions, ...authActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
