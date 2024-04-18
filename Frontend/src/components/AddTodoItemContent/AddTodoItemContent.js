import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import React, { useState } from 'react'
import { useTodoListStore } from '../../store/TodoListStore'
import './AddTodoItemContent.css'

const AddTodoItemContent = () => {
  const [description, setDescription] = useState('')
  const [isEmpty, setIsEmpty] = useState(false) // State to control if the description field is empty
  const [isSubmitted, setIsSubmitted] = useState(false) // State to control if the form has been submitted
  const createTodoItem = useTodoListStore(state => state.createTodoItem)

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
    setIsEmpty(event.target.value === '') // Update isEmpty state
  }

  const handleAdd = () => {
    if (!description) {
      setIsEmpty(true) // If the field is empty, set isEmpty to true
      setIsSubmitted(true) // Set isSubmitted to true when trying to add an empty item
      return
    }
    createTodoItem({ description })
    setDescription('')
    setIsEmpty(false) // Reset isEmpty state after adding an item
    setIsSubmitted(false) // Reset isSubmitted state after adding an item
  }

  const handleClear = () => {
    setDescription('')
    setIsEmpty(false) // Reset isEmpty state after clearing the field
    setIsSubmitted(false) // Reset isSubmitted state after clearing the field
  }

  return (
    <Container>
      <h1>Add Item</h1>
      <Form.Group as={Row} className={`${isEmpty && isSubmitted ? 'empty' : ''}`} controlId='formAddTodoItem'>
        <Form.Label column sm='2'>
          Description
        </Form.Label>
        <Col md='6'>
          <Form.Control
            type='text'
            placeholder={isEmpty && isSubmitted ? 'Please enter something...' : 'Enter description...'}
            value={description}
            onChange={handleDescriptionChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3 offset-md-2 mt-3' controlId='formAddTodoItem'>
        <Stack direction='horizontal' gap={2} className='mt-20'>
          <Button variant='primary' onClick={handleAdd}>
            Add New Item
          </Button>
          <Button variant='secondary' onClick={handleClear}>
            Clear
          </Button>
        </Stack>
      </Form.Group>
    </Container>
  )
}

export default AddTodoItemContent
