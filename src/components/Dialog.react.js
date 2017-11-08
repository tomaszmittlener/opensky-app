import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import FlightsTable from '../components/FlightsTable.react'
import PaginationButtons from '../components/PaginationButtons.react'

class Dialog extends React.Component {
  render() {
    const { dialogState: { isOpen, distance, currentCity }, toggleDialogShow, flightsList, setPagination } = this.props
    return (
      <Modal show={isOpen} onHide={toggleDialogShow}>
        <Modal.Header closeButton>
          <Modal.Title>
            Flights in {distance}km range from {currentCity}
          </Modal.Title>
        </Modal.Header>
        <PaginationButtons setPagination={setPagination} />
        <Modal.Body>
          <FlightsTable flightsList={flightsList} distance={distance} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleDialogShow}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
Dialog.propTypes = {
  setPagination: PropTypes.func.isRequired,
  toggleDialogShow: PropTypes.func.isRequired,
  flightsList: PropTypes.array,
  dialogState: PropTypes.object,
}

export default Dialog
