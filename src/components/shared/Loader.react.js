import React from 'react'
import pure from 'recompose/pure'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
   
`

const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate360} 2s linear infinite;
`

function Loader() {
  return <Loading className="loader" />
}

export default pure(Loader)
