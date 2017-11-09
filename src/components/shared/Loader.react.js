import React from 'react'
import pure from 'recompose/pure'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
`

const Loading = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid black;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${rotate360} 2s linear infinite;
`

function Loader() {
  return <Loading className="loader" />
}

export default pure(Loader)
