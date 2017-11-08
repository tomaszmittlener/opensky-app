import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { Route, Redirect } from 'react-router-dom'

class PrivatePath extends React.Component {

  render() {
    return (
      <Route
        exact={this.props.exact}
        path={this.props.path}
        render={() => (
          this.props.auth.isLoggedIn ? (
            React.createElement(this.props.component)
          ) : (
            <Redirect to={{
              pathname: '/login',
              state: {from: this.props.location}
            }}/>
          )
        )}
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
  auth: createSelector(
    (state) => state.auth,
    (authState) => authState
  ),
})

export default connect(mapStateToProps)(PrivatePath)
