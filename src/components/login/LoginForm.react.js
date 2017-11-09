import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import Col from 'react-bootstrap/lib/Col'

const LoginForm = ({ onLoginChange, onPasswordChange, onLoginClick }) => (
  <Form horizontal>
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
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={12}>
        <Button type="submit" onClick={onLoginClick}>
          Login
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

LoginForm.propTypes = {
  onLoginChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onLoginClick: PropTypes.func,
}

export default LoginForm
