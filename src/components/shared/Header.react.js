import React from 'react'
import pure from 'recompose/pure'
import styled, { keyframes } from 'styled-components'

const TopBar = styled.div` 
  background-color: #222; 
  height: 100px; 
  padding: 20px; 
  color: #fff; 
 
  .header-title {
  text-align: center
`

function Header() {
  return (
    <TopBar>
      <h2 className="header-title">Welcome to SkyApp</h2>
    </TopBar>
  )
}

export default pure(Header)
