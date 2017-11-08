import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import * as AuthActions from '../actions/auth'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Button from 'react-bootstrap/lib/Button';


class Login extends React.Component {

  onLoginChange = (e) => {
    this.props.setLoginOnInput(e.target.value)
  }

  onPasswordChange = (e) => {
    this.props.setPasswordOnInput(e.target.value)
  }

  onLoginClick = (e) => {
    e.preventDefault()
    this.props.loginAuthenticate()
    this.props.history.push('/')
  }

  render() {
    return (
      <form>
        <FormGroup>
          <InputGroup>
            <ControlLabel
            >Login
            </ControlLabel>
            <FormControl
              type="text"
              onChange={this.onLoginChange}
            />
          </InputGroup>
          <InputGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              onChange={this.onPasswordChange}
            />
          </InputGroup>
        </FormGroup>
        <Button
          type="submit"
          onClick={this.onLoginClick}
        >Login
        </Button>
      </form>
    )
  }
}

Login.PropTypes = {
  setLoginOnInput: PropTypes.func.isRequired,
  setPasswordOnInput: PropTypes.func.isRequired,
  loginAuthenticate: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  auth: createSelector(
    (state) => state.auth,
    (authState) => authState
  ),

})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
