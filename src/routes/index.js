import React from 'react'
import { CounterContainer } from 'containers'
import { Login }  from 'containers'
import { Dashboard } from 'containers'
import { PrivateRoute } from 'containers'
import { Header } from 'components'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const Routes = () => {
  return (
    <ConnectedRouter history={history} >
      <div>
      <Route exact path="/login" component={Login}/>
      <PrivateRoute exact path="/" component={Dashboard} />
      </div>
    </ConnectedRouter>
  )
};

export default Routes
