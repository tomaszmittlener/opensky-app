import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import { FlightsTable, DistanceRangeChoose } from '../'

class Dialog extends React.Component {
  render() {
    const {
      flightsListState: { isOpen, distance, currentCity },
      toggleDialogShow,
      flightsList,
      setDistance,
    } = this.props
    return (
      <Modal show={isOpen} onHide={toggleDialogShow}>
        <Modal.Header closeButton>
          <Modal.Title>
            Flights in {distance}km range from {currentCity}
          </Modal.Title>
        </Modal.Header>
        <DistanceRangeChoose setDistance={setDistance} />
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
  setDistance: PropTypes.func.isRequired,
  toggleDialogShow: PropTypes.func.isRequired,
  flightsList: PropTypes.array,
  flightsListState: PropTypes.object,
}

export default Dialog
