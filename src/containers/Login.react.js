import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../actions/auth'
import Col from 'react-bootstrap/lib/Col'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import LoginForm from '../components/LoginForm.react'

class Login extends React.Component {
  onLoginChange = e => {
    this.props.setLoginOnInput(e.target.value)
  }

  onPasswordChange = e => {
    this.props.setPasswordOnInput(e.target.value)
  }

  onLoginClick = e => {
    e.preventDefault()
    this.props.loginAuthenticate()
    this.props.history.push('/')
  }

  render() {
    return (
      <Col xs={4} xsOffset={4}>
        <PageHeader>Sign in to SkyApp</PageHeader>
        <LoginForm
          onLoginChange={this.onLoginChange}
          onPasswordChange={this.onPasswordChange}
          onLoginClick={this.onLoginClick}
        />
      </Col>
    )
  }
}

Login.PropTypes = {
  setLoginOnInput: PropTypes.func.isRequired,
  setPasswordOnInput: PropTypes.func.isRequired,
  loginAuthenticate: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  auth: createSelector(state => state.auth, authState => authState),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
