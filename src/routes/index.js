import React, { Component } from 'react'
import { Login } from 'containers'
import { Dashboard } from 'containers'
import PrivateRoute from './PrivateRoute.react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../actions/auth'
import { createStructuredSelector, createSelector } from 'reselect'

const history = createBrowserHistory()

export class Routes extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (sessionStorage.getItem('isLoggedIn')) {
      this.props.loginUser(true)
    }
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
        </div>
      </ConnectedRouter>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}
const mapStateToProps = createStructuredSelector({
  auth: createSelector(state => state.auth, authState => authState),
  router: createSelector(state => state.router, authState => authState),
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
