import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as AirTrafficActions from '../actions/airTraffic'
import CitiesTable from '../components/CitiesTable.react'
import { citiesList } from '../constants/citiesList'
import Dialog from '../components/Dialog.react'

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.airTraffic.loaded) {
      this.props.getAllAirTraffic()
    }
  }

  render() {
    const { getClosestFlights, airTraffic, toggleDialogShow } = this.props
    const { dialogState: { isOpen, currentCity }, flightsDistance } = airTraffic

    return (
      <div>
        <CitiesTable
          citiesList={citiesList}
          getClosestFlights={getClosestFlights}
          toggleDialogShow={toggleDialogShow}
        />
        <Dialog
          toggleDialogShow={toggleDialogShow}
          showDialog={airTraffic.dialogState.isOpen}
          flightsList={flightsDistance[airTraffic.dialogState.currentCity]}
        />
      </div>
    )
  }
}

Dashboard.propTypes = {
  airTraffic: PropTypes.object.isRequired,
  getAllAirTraffic: PropTypes.func.isRequired,
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
