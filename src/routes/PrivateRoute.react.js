import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { Route, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../actions/auth'

class PrivatePath extends React.Component {
  render() {
    return this.props.auth.isLoggedIn ? (
      <Route exact={this.props.exact} path={this.props.path} component={this.props.component} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: this.props.router.location.pathname },
        }}
      />
    )
  }
}

PrivatePath.PropTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  exact: PropTypes.bool,
  location: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

const mapStateToProps = createStructuredSelector({
  auth: createSelector(state => state.auth, authState => authState),
  router: createSelector(state => state.router, authState => authState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivatePath)
