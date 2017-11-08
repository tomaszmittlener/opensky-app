import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'

import { map } from 'lodash'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import FlightsTable from '../components/FlightsTable.react'

class Dialog extends React.Component {
  render() {
    const { showDialog, toggleDialogShow, flightsList } = this.props
    return (
      <Modal show={showDialog} onHide={toggleDialogShow}>
        <Modal.Header closeButton>
          <Modal.Title>Flights in 100km range</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlightsTable flightsList={flightsList} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleDialogShow}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
Dialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  toggleDialogShow: PropTypes.func.isRequired,
  flightsList: PropTypes.array,
}

export default Dialog
