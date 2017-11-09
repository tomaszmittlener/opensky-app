import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import Col from 'react-bootstrap/lib/Col'

import styled from 'styled-components'
const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;

  .login-form {
    width: 300px;
  }
  .loginButton {
    margin: 0 0 15px 0;
  }
`

const LoginForm = ({ onLoginChange, onPasswordChange, onLoginClick }) => (
  <LoginFormContainer>
    <Form horizontal className="login-form">
      <FormGroup>
        <Col xs={12}>
          <ControlLabel>Login</ControlLabel>
          <FormControl type="text" onChange={onLoginChange} />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={12}>
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" onChange={onPasswordChange} />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={12}>
          <Button type="submit" onClick={onLoginClick} className="loginButton">
            Login
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </LoginFormContainer>
)

LoginForm.propTypes = {
  onLoginChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onLoginClick: PropTypes.func,
}

export default LoginForm
