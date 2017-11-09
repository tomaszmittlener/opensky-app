import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../actions/auth'
import Col from 'react-bootstrap/lib/Col'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import { LoginForm } from 'components'
import styled from 'styled-components'

const LoginContainer = styled.div`
  width: 300px;
  .login-title {
    text-align: center;
    padding: 10px 0;
  }
`

class Login extends Component {
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
      <LoginContainer>
        <h2 className="login-title">Sign in to SkyApp</h2>
        <LoginForm
          onLoginChange={this.onLoginChange}
          onPasswordChange={this.onPasswordChange}
          onLoginClick={this.onLoginClick}
        />
      </LoginContainer>
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
