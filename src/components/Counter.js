import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';


const Intro = styled.p`font-size: large;`

function Counter({ increment, incrementIfOdd, decrement, counter }) {
  return (
    <section>
      <Intro>
        To get started, edit <code>src/routes/index.js </code>
        and save to reload.
      </Intro>
      <p>
        Clicked: {counter} times <button onClick={increment}>+</button> <button onClick={decrement}>-</button>{' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </section>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}

export default pure(Counter)
