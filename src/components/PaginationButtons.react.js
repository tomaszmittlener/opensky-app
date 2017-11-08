import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'

class PaginationButtons extends React.Component {
  onPaginationClick(number) {
    const { setPagination } = this.props
    setPagination(number)
  }

  render() {
    return (
      <ButtonGroup>
        <Button onClick={() => this.onPaginationClick(10)}>10</Button>
        <Button onClick={() => this.onPaginationClick(50)}>50</Button>
        <DropdownButton title="Distance" id="bg-nested-dropdown">
          <MenuItem eventKey="1" onClick={() => this.onPaginationClick(100)}>
            100
          </MenuItem>
          <MenuItem eventKey="2" onClick={() => this.onPaginationClick(1000)}>
            1000
          </MenuItem>
        </DropdownButton>
      </ButtonGroup>
    )
  }
}
PaginationButtons.propTypes = {
  setPagination: PropTypes.func.isRequired,
}

export default PaginationButtons
