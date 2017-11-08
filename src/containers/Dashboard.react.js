import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as AirTrafficActions from '../actions/airTraffic'
import CitiesTable from '../components/CitiesTable.react'
import { citiesList } from '../constants/citiesList'
import Dialog from '../components/Dialog.react'
import Loader from '../components/Loader.react'

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.airTraffic.loaded) {
      this.props.getAllAirTraffic()
    }
  }

  render() {
    const { getClosestFlights, airTraffic, toggleDialogShow, setPagination } = this.props
    const { dialogState, dialogState: { currentCity }, flightsDistance } = airTraffic
    const isLoadoing = airTraffic.loading && !airTraffic.loaded
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
          dialogState={dialogState}
          flightsList={flightsDistance[currentCity]}
        />
      </div>
    )
  }
}

Dashboard.propTypes = {
  airTraffic: PropTypes.object.isRequired,
  getAllAirTraffic: PropTypes.func.isRequired,
  setPagination: PropTypes.func.isRequired,
  getClosestFlights: PropTypes.func.isRequired,
  toggleDialogShow: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  airTraffic: createSelector(state => state.airTraffic, airTrafficState => airTrafficState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AirTrafficActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
