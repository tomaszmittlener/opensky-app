import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import styled from 'styled-components'

const ButtonsGroupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px 0 0;
`

class DistanceRangeChoose extends React.Component {
  onSetDistanceClick(number) {
    const { setDistance } = this.props
    setDistance(number)
  }

  render() {
    return (
      <ButtonsGroupContainer>
        <ButtonGroup>
          <Button onClick={() => this.onSetDistanceClick(10)}>10</Button>
          <Button onClick={() => this.onSetDistanceClick(50)}>50</Button>
          <DropdownButton title="Distance" id="bg-nested-dropdown">
            <MenuItem eventKey="1" onClick={() => this.onSetDistanceClick(100)}>
              100
            </MenuItem>
            <MenuItem eventKey="2" onClick={() => this.onSetDistanceClick(1000)}>
              1000
            </MenuItem>
          </DropdownButton>
        </ButtonGroup>
      </ButtonsGroupContainer>
    )
  }
}
DistanceRangeChoose.propTypes = {
  setDistance: PropTypes.func.isRequired,
}

export default DistanceRangeChoose
