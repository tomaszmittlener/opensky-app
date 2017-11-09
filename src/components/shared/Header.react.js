import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import Button from 'react-bootstrap/lib/Button'

const TopBar = styled.div`
  background-color: #222;
  height: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .header-title {
    text-align: center;
  }

  .logout-button {
    position: absolute;
    right: 10px;
  }
`

const LoginForm = ({ onLogoutClick }) => (
  <TopBar>
    <h2 className="header-title">Welcome to SkyApp</h2>
    <Button className="logout-button" onClick={onLogoutClick}>
      Log out
    </Button>
  </TopBar>
)

LoginForm.propTypes = {
  onLogoutClick: PropTypes.func,
}

export default LoginForm
