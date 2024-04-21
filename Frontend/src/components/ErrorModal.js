import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useTodoListStore } from '../store/TodoListStore'

const ErrorModal = ({ show, errorMessage }) => {
  const clearErrorMessage = useTodoListStore((state) => state.clearErrorMessage)

  // Strings
  const strings = {
    title: 'Error',
    close: 'Close'
  }

  const handleClose = () => {
    clearErrorMessage()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{strings.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errorMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          {strings.close}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ErrorModal
