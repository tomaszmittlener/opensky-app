import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as AirTrafficActions from '../actions/airTraffic'

class Dashboard extends React.Component {

  componentDidMount() {
    if (!this.props.airTraffic.loaded) {
      this.props.getAllAirTraffic()
    }
  }

  render() {
    return (
      <div>Dashboard</div>
    )
  }
}
Dashboard.propTypes = {
  airTraffic: PropTypes.bool.isRequired,
  getAllAirTraffic: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  airTraffic: createSelector(
    (state) => state.airTraffic,
    (authState) => authState
  ),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AirTrafficActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
