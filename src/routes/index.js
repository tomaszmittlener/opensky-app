import React from 'react'
import { Login } from 'containers'
import { Dashboard } from 'containers'
import PrivateRoute from './PrivateRoute.react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes
